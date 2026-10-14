# Reviews API

API REST Python autonome (FastAPI + SQLite) pour gérer les avis clients.  
Projet indépendant du site Next.js Arganis Nomad.

## Prérequis

- Python 3.11+
- `pip`

## Installation

```bash
cd reviews-api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

Éditez `.env` et changez `ADMIN_TOKEN`.

## Démarrage

```bash
uvicorn app.main:app --reload --port 8000
```

- API : http://127.0.0.1:8000  
- Docs OpenAPI : http://127.0.0.1:8000/docs  

## Variables d'environnement

| Variable | Défaut | Description |
|----------|--------|-------------|
| `DATABASE_URL` | `sqlite:///./reviews.db` | URL SQLAlchemy |
| `ADMIN_TOKEN` | `change-me-admin-token` | Token pour les routes `/admin/*` |
| `CORS_ORIGINS` | `*` | Origines CORS (`*` ou liste séparée par des virgules) |

## Endpoints

### Public

| Méthode | Chemin | Description |
|---------|--------|-------------|
| `GET` | `/health` | Santé du service |
| `GET` | `/reviews` | Liste des avis `approved` |
| `GET` | `/reviews/stats` | Moyenne + compteur (avis approuvés) |
| `GET` | `/reviews/{id}` | Détail d'un avis approuvé |
| `POST` | `/reviews` | Soumettre un avis (`status=pending`) |

Filtres liste / stats : `product_type`, `product_id`, et pour la liste aussi `rating`, `limit`, `offset`.

### Admin

Header requis : `X-Admin-Token: <ADMIN_TOKEN>`

| Méthode | Chemin | Description |
|---------|--------|-------------|
| `GET` | `/admin/reviews` | Liste tous les avis (filtre `status`) |
| `PATCH` | `/admin/reviews/{id}` | Modifier / modérer (`status`) |
| `DELETE` | `/admin/reviews/{id}` | Supprimer |

## Exemples curl

```bash
# Santé
curl -s http://127.0.0.1:8000/health

# Soumettre un avis
curl -s -X POST http://127.0.0.1:8000/reviews \
  -H 'Content-Type: application/json' \
  -d '{
    "author_name": "Claire Aufrechter",
    "author_email": "claire@example.com",
    "rating": 5,
    "title": "Excellent séjour",
    "comment": "Voyage magnifique, organisation au top du début à la fin.",
    "product_type": "circuit",
    "product_id": "circuit-sahara-atlas-3j",
    "locale": "fr"
  }'

# Approuver (admin)
curl -s -X PATCH http://127.0.0.1:8000/admin/reviews/<REVIEW_ID> \
  -H 'Content-Type: application/json' \
  -H 'X-Admin-Token: change-me-admin-token' \
  -d '{"status": "approved"}'

# Liste publique
curl -s 'http://127.0.0.1:8000/reviews?product_type=circuit'

# Stats
curl -s 'http://127.0.0.1:8000/reviews/stats?product_type=circuit'
```

## Tests

```bash
cd reviews-api
source .venv/bin/activate
pytest -q
```
