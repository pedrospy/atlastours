# DirectRiad

Projet indépendant d'AtlasTours / Arganis Nomad : un studio web qui vend des sites de **réservation directe** aux riads, maisons d'hôtes et agences de voyage au Maroc. Argument de vente : chaque réservation directe évite 15 à 20 % de commission Booking / Airbnb.

Ce dossier est autonome (son propre `package.json`, sa propre config). Pour le sortir dans son propre dépôt GitHub :

```bash
cp -r directriad ~/directriad && cd ~/directriad
git init && git add . && git commit -m "DirectRiad"
git remote add origin https://github.com/<vous>/directriad.git && git push -u origin main
```

## Lancer en local

```bash
cd directriad
npm install
cp .env.example .env.local   # mettre votre numéro WhatsApp et votre email
npm run dev                  # http://localhost:3010
```

Mise en ligne : importer le dépôt sur [Vercel](https://vercel.com) (gratuit), ajouter les variables de `.env.example`, puis brancher un domaine (~10 €/an).

Prix, offres et FAQ se modifient dans `lib/site.ts`.

## Objectif : 2 000 à 5 000 € par mois

| Offre | Prix de création | Abonnement |
| --- | --- | --- |
| Vitrine | 690 € | 29 € / mois |
| Réservation directe | 1 490 € | 59 € / mois |
| Croissance | 2 490 € | 149 € / mois |

Exemples de mois :

- **≈ 2 000 €** : 1 Réservation directe + 1 Vitrine (2 180 €).
- **≈ 3 700 €** : 2 Réservation directe + 1 Vitrine (3 670 €).
- **≈ 5 000 €** : 1 Croissance + 1 Réservation directe + 1 Vitrine (4 670 €) + les abonnements accumulés.

Les abonnements s'additionnent : avec 20 clients (moyenne ~60 €/mois) vous avez environ **1 200 €/mois récurrents** avant même de vendre un nouveau site. Coûts fixes faibles : domaine, Vercel gratuit ou 20 $/mois, Stripe à la commission.

## Trouver les clients (2 à 3 ventes par mois)

1. **Liste de prospects** : sur Booking et Google Maps, relever les riads de Marrakech, Fès, Essaouira, Chefchaouen qui n'ont pas de site ou un site sans réservation. Objectif : 30 nouveaux prospects par semaine.
2. **Message WhatsApp / email** court avec leur estimation chiffrée tirée du calculateur du site (« vous payez environ 20 000 €/an de commission »).
3. **Maquette offerte en 72 h** pour les prospects intéressés : c'est ce qui fait signer. Réutiliser la même base de code à chaque client.
4. **Démarchage sur place** : 10 visites de riads par semaine dans la médina avec la maquette sur le téléphone.
5. **Recommandations** : offrir 1 mois d'abonnement pour chaque client recommandé. Les agences de tourisme (dont votre réseau AtlasTours) connaissent beaucoup de riads.

Ordre de grandeur réaliste : 120 prospects contactés → 10 à 15 audits → 2 à 4 ventes par mois.

## À compléter avant la mise en ligne

- Numéro WhatsApp et email dans `.env.local`.
- Mentions légales (`app/mentions-legales/page.tsx`) : statut (auto-entrepreneur au Maroc ou micro-entreprise en France), adresse, identifiant fiscal.
- Ajouter 2 ou 3 réalisations réelles dès les premiers clients (les maquettes démo peuvent servir au début).
