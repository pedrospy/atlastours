from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field

from app.models import ProductType, ReviewStatus


class ReviewCreate(BaseModel):
    author_name: str = Field(min_length=1, max_length=120)
    author_email: Optional[EmailStr] = None
    rating: int = Field(ge=1, le=5)
    title: Optional[str] = Field(default=None, max_length=200)
    comment: str = Field(min_length=10, max_length=2000)
    product_type: ProductType = ProductType.general
    product_id: Optional[str] = Field(default=None, max_length=120)
    locale: str = Field(default="fr", min_length=2, max_length=10)


class ReviewUpdate(BaseModel):
    author_name: Optional[str] = Field(default=None, min_length=1, max_length=120)
    author_email: Optional[EmailStr] = None
    rating: Optional[int] = Field(default=None, ge=1, le=5)
    title: Optional[str] = Field(default=None, max_length=200)
    comment: Optional[str] = Field(default=None, min_length=10, max_length=2000)
    product_type: Optional[ProductType] = None
    product_id: Optional[str] = Field(default=None, max_length=120)
    status: Optional[ReviewStatus] = None
    locale: Optional[str] = Field(default=None, min_length=2, max_length=10)


class ReviewOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    author_name: str
    author_email: Optional[str] = None
    rating: int
    title: Optional[str] = None
    comment: str
    product_type: ProductType
    product_id: Optional[str] = None
    status: ReviewStatus
    locale: str
    created_at: datetime
    updated_at: datetime


class ReviewStats(BaseModel):
    count: int
    average_rating: float
    product_type: Optional[ProductType] = None
    product_id: Optional[str] = None


class HealthOut(BaseModel):
    status: str
