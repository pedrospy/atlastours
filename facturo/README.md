# Facturo

Application en ligne de **factures et devis** pour auto-entrepreneurs, freelances et TPE (Maroc, France, Afrique francophone). Projet indépendant d'AtlasTours, sans lien avec le tourisme. Le dossier est autonome : il peut être copié dans son propre dépôt GitHub.

Modèle économique « freemium » : gratuit jusqu'à 5 documents par mois, puis **Pro à 9 €/mois** (abonnement Stripe).

## Fonctionnalités

- Inscription / connexion (mot de passe chiffré, session sécurisée)
- Fichier clients (nom, adresse, ICE / SIRET / n° TVA)
- Factures et devis : lignes, TVA par ligne, totaux HT / TVA / TTC, numérotation automatique (`F-2026-0001`, `D-2026-0001`)
- Transformation d'un devis en facture en 1 clic
- Statuts : brouillon, envoyée, payée, annulée
- Téléchargement en PDF (mise en page prévue pour l'impression)
- Tableau de bord : encaissé dans l'année, en attente, en retard
- Paramètres de l'entreprise (adresse, identifiants fiscaux, RIB, devise, TVA par défaut)
- 8 devises (MAD, EUR, USD, XOF, TND, DZD, CAD, CHF)
- Abonnement Pro par Stripe (paiement, webhook, portail de gestion)
- Mention « Créé avec Facturo » sur les documents gratuits : chaque facture envoyée fait la publicité du site

## Lancer en local

Il faut Node.js 20+ et une base PostgreSQL.

```bash
cd facturo
npm install
cp .env.example .env        # renseigner DATABASE_URL et AUTH_SECRET
npx prisma db push          # crée les tables
npm run dev                 # http://localhost:3030
```

## Mettre en ligne (gratuit au départ)

1. **Base de données** : créer une base PostgreSQL gratuite sur [Neon](https://neon.tech) et copier l'URL de connexion.
2. **Hébergement** : importer le dépôt sur [Vercel](https://vercel.com), choisir `facturo` comme dossier racine, puis ajouter les variables de `.env.example` (`AUTH_SECRET` : `openssl rand -base64 32`).
3. Lancer une fois `npx prisma db push` avec l'URL Neon pour créer les tables.
4. **Paiements** : sur [Stripe](https://dashboard.stripe.com), créer un produit « Facturo Pro » à 9 €/mois et copier son identifiant `price_...` dans `STRIPE_PRICE_PRO`. Ajouter un webhook vers `https://votre-domaine/api/stripe/webhook` avec les événements `checkout.session.completed`, `customer.subscription.updated` et `customer.subscription.deleted`, puis copier son secret dans `STRIPE_WEBHOOK_SECRET`. Activer le portail client dans les réglages Stripe.
5. Brancher un nom de domaine (environ 10 €/an).

Sans les clés Stripe, l'application fonctionne entièrement ; seul le bouton « Passer à Pro » est désactivé.

## Objectif de revenus

| Abonnés Pro | Revenu mensuel |
| --- | --- |
| 100 | 900 € |
| 250 | 2 250 € |
| 500 | 4 500 € |

En général 2 à 5 % des utilisateurs gratuits passent à Pro : il faut donc viser plusieurs milliers d'inscrits. C'est un revenu qui se construit sur plusieurs mois, mais il est **récurrent** : chaque abonné paie tous les mois. Coûts : quasi nuls au départ (Vercel et Neon gratuits, Stripe prend environ 1,5 à 3 % par paiement).

## Trouver des utilisateurs

1. **Google** : les recherches « modèle facture auto-entrepreneur », « facture ICE Maroc », « devis gratuit en ligne » sont très fréquentes. Écrire une page ou un article pour chacune.
2. **Groupes Facebook et LinkedIn** d'auto-entrepreneurs, freelances, artisans, comptables (Maroc, France, Sénégal, Côte d'Ivoire…).
3. **Comptables** : leur proposer Facturo pour leurs petits clients (ils gagnent du temps).
4. **La mention « Créé avec Facturo »** sur chaque document gratuit envoyé.
5. **Vidéos courtes** TikTok / Reels : « Faire une facture conforme en 1 minute ».

## À compléter avant la mise en ligne

- Mentions légales dans `app/mentions-legales/page.tsx` (statut, adresse, identifiant fiscal, email).
- Vérifier avec un comptable les mentions obligatoires propres à votre pays (ex. en France, mention « TVA non applicable, art. 293 B du CGI » pour les micro-entrepreneurs, à mettre dans les notes).
