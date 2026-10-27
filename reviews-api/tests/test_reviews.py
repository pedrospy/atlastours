from __future__ import annotations

from fastapi.testclient import TestClient


def _sample_payload(**overrides: object) -> dict[str, object]:
    payload: dict[str, object] = {
        "author_name": "Claire Aufrechter",
        "author_email": "claire@example.com",
        "rating": 5,
        "title": "Excellent séjour",
        "comment": "Voyage magnifique, organisation au top du début à la fin.",
        "product_type": "circuit",
        "product_id": "circuit-sahara-atlas-3j",
        "locale": "fr",
    }
    payload.update(overrides)
    return payload


def test_health(client: TestClient) -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_create_review_is_pending_and_hidden_from_public(client: TestClient) -> None:
    create = client.post("/reviews", json=_sample_payload())
    assert create.status_code == 201
    body = create.json()
    assert body["status"] == "pending"
    review_id = body["id"]

    public_list = client.get("/reviews")
    assert public_list.status_code == 200
    assert public_list.json() == []

    public_get = client.get(f"/reviews/{review_id}")
    assert public_get.status_code == 404


def test_admin_approve_then_public_visible(
    client: TestClient, admin_headers: dict[str, str]
) -> None:
    create = client.post("/reviews", json=_sample_payload())
    review_id = create.json()["id"]

    unauthorized = client.patch(
        f"/admin/reviews/{review_id}",
        json={"status": "approved"},
    )
    assert unauthorized.status_code == 401

    approve = client.patch(
        f"/admin/reviews/{review_id}",
        json={"status": "approved"},
        headers=admin_headers,
    )
    assert approve.status_code == 200
    assert approve.json()["status"] == "approved"

    public_list = client.get("/reviews")
    assert public_list.status_code == 200
    assert len(public_list.json()) == 1
    assert public_list.json()[0]["id"] == review_id

    stats = client.get("/reviews/stats", params={"product_type": "circuit"})
    assert stats.status_code == 200
    assert stats.json()["count"] == 1
    assert stats.json()["average_rating"] == 5.0


def test_admin_list_filter_and_delete(
    client: TestClient, admin_headers: dict[str, str]
) -> None:
    first = client.post("/reviews", json=_sample_payload(author_name="Alice")).json()
    second = client.post(
        "/reviews",
        json=_sample_payload(author_name="Bob", rating=3, product_type="general"),
    ).json()

    client.patch(
        f"/admin/reviews/{first['id']}",
        json={"status": "approved"},
        headers=admin_headers,
    )

    pending = client.get(
        "/admin/reviews",
        params={"status": "pending"},
        headers=admin_headers,
    )
    assert pending.status_code == 200
    assert len(pending.json()) == 1
    assert pending.json()[0]["id"] == second["id"]

    delete = client.delete(f"/admin/reviews/{second['id']}", headers=admin_headers)
    assert delete.status_code == 204

    remaining = client.get("/admin/reviews", headers=admin_headers)
    assert remaining.status_code == 200
    assert len(remaining.json()) == 1
    assert remaining.json()[0]["id"] == first["id"]


def test_validation_rejects_invalid_rating(client: TestClient) -> None:
    response = client.post("/reviews", json=_sample_payload(rating=6))
    assert response.status_code == 422
