from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.database import get_db
from app.deps import require_admin
from app.models import ProductType, Review, ReviewStatus
from app.schemas import ReviewCreate, ReviewOut, ReviewStats, ReviewUpdate

router = APIRouter()
admin_router = APIRouter(prefix="/admin", dependencies=[Depends(require_admin)])


def _get_review_or_404(db: Session, review_id: str) -> Review:
    review = db.get(Review, review_id)
    if review is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Review not found")
    return review


@router.get("/reviews", response_model=list[ReviewOut])
def list_approved_reviews(
    product_type: ProductType | None = None,
    product_id: str | None = None,
    rating: int | None = Query(default=None, ge=1, le=5),
    limit: int = Query(default=20, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
    db: Session = Depends(get_db),
) -> list[Review]:
    stmt = select(Review).where(Review.status == ReviewStatus.approved)
    if product_type is not None:
        stmt = stmt.where(Review.product_type == product_type)
    if product_id is not None:
        stmt = stmt.where(Review.product_id == product_id)
    if rating is not None:
        stmt = stmt.where(Review.rating == rating)
    stmt = stmt.order_by(Review.created_at.desc()).limit(limit).offset(offset)
    return list(db.scalars(stmt))


@router.get("/reviews/stats", response_model=ReviewStats)
def get_review_stats(
    product_type: ProductType | None = None,
    product_id: str | None = None,
    db: Session = Depends(get_db),
) -> ReviewStats:
    stmt = select(func.count(Review.id), func.avg(Review.rating)).where(
        Review.status == ReviewStatus.approved
    )
    if product_type is not None:
        stmt = stmt.where(Review.product_type == product_type)
    if product_id is not None:
        stmt = stmt.where(Review.product_id == product_id)

    count, average = db.execute(stmt).one()
    return ReviewStats(
        count=int(count or 0),
        average_rating=round(float(average or 0.0), 2),
        product_type=product_type,
        product_id=product_id,
    )


@router.get("/reviews/{review_id}", response_model=ReviewOut)
def get_approved_review(review_id: str, db: Session = Depends(get_db)) -> Review:
    review = _get_review_or_404(db, review_id)
    if review.status != ReviewStatus.approved:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Review not found")
    return review


@router.post("/reviews", response_model=ReviewOut, status_code=status.HTTP_201_CREATED)
def create_review(payload: ReviewCreate, db: Session = Depends(get_db)) -> Review:
    review = Review(
        author_name=payload.author_name,
        author_email=str(payload.author_email) if payload.author_email else None,
        rating=payload.rating,
        title=payload.title,
        comment=payload.comment,
        product_type=payload.product_type,
        product_id=payload.product_id,
        locale=payload.locale,
        status=ReviewStatus.pending,
    )
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@admin_router.get("/reviews", response_model=list[ReviewOut])
def admin_list_reviews(
    status_filter: ReviewStatus | None = Query(default=None, alias="status"),
    product_type: ProductType | None = None,
    product_id: str | None = None,
    limit: int = Query(default=20, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
    db: Session = Depends(get_db),
) -> list[Review]:
    stmt = select(Review)
    if status_filter is not None:
        stmt = stmt.where(Review.status == status_filter)
    if product_type is not None:
        stmt = stmt.where(Review.product_type == product_type)
    if product_id is not None:
        stmt = stmt.where(Review.product_id == product_id)
    stmt = stmt.order_by(Review.created_at.desc()).limit(limit).offset(offset)
    return list(db.scalars(stmt))


@admin_router.patch("/reviews/{review_id}", response_model=ReviewOut)
def admin_update_review(
    review_id: str,
    payload: ReviewUpdate,
    db: Session = Depends(get_db),
) -> Review:
    review = _get_review_or_404(db, review_id)
    data = payload.model_dump(exclude_unset=True)
    if "author_email" in data and data["author_email"] is not None:
        data["author_email"] = str(data["author_email"])

    for field, value in data.items():
        setattr(review, field, value)

    review.updated_at = datetime.now(timezone.utc)
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@admin_router.delete("/reviews/{review_id}", status_code=status.HTTP_204_NO_CONTENT)
def admin_delete_review(review_id: str, db: Session = Depends(get_db)) -> None:
    review = _get_review_or_404(db, review_id)
    db.delete(review)
    db.commit()
