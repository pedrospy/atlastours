# Vitrina — sites internet pour commerces, livrés en 48 h

Vitrina est un **service productisé** : vous vendez des sites vitrines professionnels aux commerces de proximité (restaurants, cafés, coiffeurs/barbiers, salons de beauté, artisans, garages, cabinets médicaux, coachs, boutiques), payés d'avance, livrés en 48 h.

Le levier : les sites sont **générés automatiquement** à partir de données structurées (nom, activité, ville, horaires, prix…) avec des modèles adaptés à chaque métier. Vous créez la démo d'un commerce **en 1 minute sur votre téléphone**, vous la montrez au gérant, il voit *son* site, vous encaissez.

> Projet indépendant, sans lien avec le site AtlasTours présent dans ce dépôt (dossier séparé, `package.json`, base de données et déploiement propres).

## Mettre en ligne en 15 minutes, sans ligne de commande

1. **Vercel** → **Add New** → **Project** → choisissez ce dépôt. À **Root Directory**, cliquez **Edit** et choisissez **`vitrina`**. Ne cliquez pas encore sur Deploy.
2. Dans **Environment Variables**, ajoutez au minimum :
   - `ADMIN_PASSWORD` : le mot de passe de votre admin (c'est vous qui le choisissez) ;
   - `OWNER_NAME` : votre prénom ; `OWNER_WHATSAPP` : votre numéro au format `212612345678` ;
   - `BANK_NAME`, `BANK_HOLDER`, `BANK_RIB` : pour le paiement par virement.
3. Cliquez **Deploy**. Le premier déploiement peut échouer faute de base de données : c'est normal.
4. Dans le projet, onglet **Storage** → **Create Database** → **Neon** (gratuit) → **Connect**. Vercel ajoute `DATABASE_URL` tout seul.
5. **Deployments** → « … » sur le dernier déploiement → **Redeploy**. Les tables et les 3 sites d'exemple sont créés automatiquement à chaque déploiement.
6. Ouvrez `https://votre-projet.vercel.app/admin` et tapez votre `ADMIN_PASSWORD`.

Si un réglage manque, la page de connexion et le tableau de bord vous disent lequel. Après toute modification d'une variable, refaites **Redeploy**.

## Votre journée type (dès demain)

Le tableau de bord vous donne chaque matin votre **mission du jour** :
- **Objectif du mois** (3 000 € par défaut, variable `MONTHLY_GOAL`) et le nombre de sites qu'il manque pour l'atteindre ;
- **20 démos par jour** : chaque démo se crée en 1 minute dans *Prospection* et s'envoie sur WhatsApp en un clic ;
- **À relancer aujourd'hui** : les commerçants sans nouvelles depuis 2 jours, avec un message de relance WhatsApp déjà rédigé. Cliquez « Fait » après l'envoi.

Matin : 20 démos envoyées depuis Google Maps. Après-midi : 15 visites dans une même rue avec la démo sur votre téléphone. Fin de journée : les relances. Le plan détaillé de la première semaine est plus bas.

## Fonctionnalités

| Page | Rôle |
| --- | --- |
| `/` | Site marketing : promesse, fonctionnement, exemples en ligne, 3 offres, FAQ |
| `/commander` | Commande en 4 étapes → crée la commande + le site client (brouillon) |
| `/commande/[id]` | Récapitulatif, lien vers l'aperçu, paiement Stripe **ou** virement / espèces / WhatsApp |
| `/s/[slug]` | Site client généré (3 modèles : *Saveur* restauration, *Éclat* beauté/santé/coach, *Atelier* artisans/garages/boutiques) |
| `/admin` | Chiffre d'affaires encaissé, MRR estimé, commandes (nouveau, payé, publié, annulé), marquer payé, publier/dépublier |
| `/admin/sites/[id]` | Édition complète du contenu d'un site (textes, contact, horaires, prix, photos, avis, couleur, adresse web) |
| `/admin/prospects` | **Outil de prospection** : démo en 1 minute + QR code + message WhatsApp prêt à envoyer + suivi (contacté, intéressé, gagné, perdu) |
| `/mentions-legales` | Mentions légales et CGV |
| `/robots.txt`, `/sitemap.xml` | Les démos non publiées sont en `noindex` et exclues ; seuls les sites publiés sont dans le sitemap |

Les sites non payés affichent un bandeau discret « Aperçu – site de démonstration Vitrina » dont le bouton ouvre votre WhatsApp avec le lien de la démo. Une fois publiés, le bandeau disparaît et le site devient indexable (balises SEO + données structurées `LocalBusiness`).

## Stack

Next.js 15 (App Router, server actions) · TypeScript · Tailwind CSS 3 · Prisma + PostgreSQL · Stripe (optionnel) · `jose` (session admin signée, cookie httpOnly) · `qrcode` (QR codes SVG).

## Installation locale

```bash
cd vitrina
cp .env.example .env            # puis complétez les valeurs
npm install
npx prisma db push              # crée les tables
npm run db:seed                 # 3 sites d'exemple publiés (Café Nour, Salon Yasmine, Garage Atlas Auto)
npm run dev                     # http://localhost:3040
```

Base locale rapide (PostgreSQL 16) :

```bash
sudo -u postgres psql -c "CREATE USER vitrina WITH PASSWORD 'vitrina' CREATEDB;" -c "CREATE DATABASE vitrina OWNER vitrina;"
```

Contrôles : `npm run typecheck` et `npm run build`.

## Variables d'environnement

| Variable | Obligatoire | Description |
| --- | --- | --- |
| `DATABASE_URL` | oui | URL PostgreSQL (Neon, Supabase, local) |
| `NEXT_PUBLIC_APP_URL` | non sur Vercel | URL publique, sans `/` final (liens de démo, QR codes, sitemap). Sur Vercel, l'adresse du projet est utilisée par défaut : renseignez-la quand vous branchez votre propre domaine |
| `ADMIN_PASSWORD` | oui | Mot de passe de `/admin` |
| `AUTH_SECRET` | non | ≥ 32 caractères aléatoires ; sans lui, la session est signée à partir d'`ADMIN_PASSWORD` |
| `MONTHLY_GOAL` | non | Objectif mensuel en euros affiché dans le tableau de bord (défaut 3000) |
| `OWNER_NAME`, `OWNER_WHATSAPP`, `OWNER_EMAIL` | conseillé | Votre prénom (signé dans les messages), votre WhatsApp au format `2126XXXXXXXX` |
| `BANK_NAME`, `BANK_HOLDER`, `BANK_RIB` | conseillé | Coordonnées affichées pour le paiement par virement |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | non | Active le paiement par carte |
| `STRIPE_PRICE_ESSENTIEL`, `STRIPE_PRICE_PRO`, `STRIPE_PRICE_PREMIUM` | non | ID des prix « paiement unique » de chaque offre |
| `STRIPE_PRICE_HEBERGEMENT_*` | non | Prix récurrents mensuels ; s'ils existent, Checkout passe en mode abonnement (création + mensualité) |

Sans Stripe, la page de commande affiche les instructions de virement / espèces et un bouton WhatsApp vers vous. Vous marquez ensuite la commande « payée » dans l'admin.

## Déploiement (Vercel + Neon)

1. Suivez « Mettre en ligne en 15 minutes » en haut de ce fichier. Sur Vercel, le script `vercel-build` crée les tables (`prisma db push`) et ajoute les 3 sites d'exemple s'ils n'existent pas, sans jamais écraser vos modifications.
2. Hors Vercel, ou avec une base Neon créée à la main : `DATABASE_URL="…" npx prisma db push` puis `DATABASE_URL="…" npm run db:seed`.
3. `db push` refuse les changements de schéma qui perdraient des données : le déploiement échoue au lieu de supprimer quoi que ce soit.
4. **Domaine** : achetez un domaine (ex. `vitrina.ma` ou `monsiteexpress.com`), branchez-le dans Vercel et renseignez `NEXT_PUBLIC_APP_URL`.
5. **Stripe (optionnel)** : créez 3 produits à prix unique (290 €, 590 €, 990 €), éventuellement 3 prix mensuels (19, 29, 49 €), renseignez les ID. Ajoutez un webhook vers `https://votre-domaine/api/stripe/webhook` avec les événements `checkout.session.completed` et `checkout.session.async_payment_succeeded`.

> Stripe n'ouvre pas de compte marchand à une entreprise marocaine. Si vous n'avez pas de structure dans un pays pris en charge, restez sur virement / espèces / Wafacash — c'est de toute façon ce que préfèrent la plupart des commerçants au Maroc.

## Les offres

| Offre | Création | Hébergement + maintenance |
| --- | --- | --- |
| Essentiel | 290 € (≈ 2 900 MAD) | 19 €/mois |
| Pro | 590 € (≈ 5 900 MAD) | 29 €/mois |
| Premium | 990 € (≈ 9 900 MAD) | 49 €/mois |

**Ventes additionnelles** : fiche Google Business Profile créée et optimisée (50 €), logo (90 €), séance photo sur place (à partir de 120 €), nom de domaine supplémentaire, traduction en arabe/anglais, QR code imprimé pour la vitrine et les tables.

## Plan pour gagner dès demain

L'outil fait gagner du temps sur la livraison ; **les ventes viennent du volume de prospection**. Voici un plan concret pour la première semaine.

**Ce soir (jour 0)**
- Mettez Vitrina en ligne (même sur une URL temporaire), changez `ADMIN_PASSWORD`, renseignez `OWNER_WHATSAPP` et votre RIB.
- Passez votre WhatsApp en WhatsApp Business (photo pro, description « Sites internet pour commerces – en ligne en 48 h »).
- Créez 3 démos dans votre quartier pour vous entraîner : vous devez savoir le faire en moins d'une minute.

**Jour 1 — Liste et premiers envois**
- Sur Google Maps, cherchez « coiffeur + votre ville », « restaurant », « garage », « plombier »… Notez **50 commerces sans bouton « Site Web »** mais avec un téléphone et de bons avis (ils ont des clients, donc de quoi payer).
- Créez 20 démos avec `/admin/prospects` et envoyez le message WhatsApp pré-écrit (bouton vert).
- L'après-midi : **visitez 15 commerces** dans une même rue. Créez la démo devant le gérant, montrez-lui son site sur votre téléphone ou faites-lui scanner le QR code.

**Jour 2 — Volume + relances**
- 20 nouvelles démos + messages, 15 visites.
- Relancez les non-réponses de la veille avec un message vocal court (en darija si besoin) : « Salam, je vous ai envoyé le site de votre salon hier, vous avez pu regarder ? »
- Pour conclure : **50 % d'acompte** à la commande, le reste à la mise en ligne. Créez la commande depuis la fiche prospect (« Le commerçant accepte ? »), marquez-la payée.

**Jour 3 — Livrer vite**
- Prenez de vraies photos sur place avec votre téléphone, hébergez-les (Google Drive public, Cloudinary, ImgBB) et collez les liens dans l'édition du site. Corrigez prix et horaires, publiez.
- Envoyez le lien depuis la fiche commande (« Envoyer le lien du site »). Proposez la fiche Google Business (50 €) : c'est la vente additionnelle la plus facile.

**Jour 4 — Effet de levier**
- Demandez à vos premiers clients un avis et 2 contacts de commerçants voisins.
- Regardez quelle activité répond le mieux (souvent coiffeurs/barbiers et petits restaurants) et concentrez-vous dessus.
- 15 visites + 20 messages.

**Jour 5 — Nouveaux canaux**
- Publiez vos réalisations dans les groupes Facebook locaux et sur Marketplace, contactez une association de commerçants ou un centre commercial.
- Relances J+3 de tous les « intéressés ».

**Jour 6 — Bilan**
- Comptez : contacts, intéressés, ventes, chiffre encaissé (tableau de bord). Ajustez le message, le prix d'appel ou la cible.

**Jour 7 — Préparer la semaine 2**
- Listez 100 nouveaux commerces. Livrez les sites en attente.

### Ordres de grandeur réalistes

**50 contacts → environ 10 intéressés → 2 à 3 ventes** par semaine au début, davantage quand vous aurez des exemples locaux à montrer et des recommandations.

| Scénario | Sites vendus / mois | Panier moyen | Création | Abonnements | Ventes additionnelles | Total mensuel |
| --- | --- | --- | --- | --- | --- | --- |
| Démarrage (mois 1) | 4 | 350 € | 1 400 € | 4 × 20 € = 80 € | 150 € | **≈ 1 630 €** |
| Objectif bas (mois 2–3) | 6 | 400 € | 2 400 € | 12 × 22 € = 264 € | 200 € | **≈ 2 860 €** |
| Objectif haut (mois 4–6) | 10 | 450 € | 4 500 € | 30 × 24 € = 720 € | 300 € | **≈ 5 520 €** |

Les abonnements s'accumulent : chaque site vendu ajoute 19 à 49 € par mois de revenu récurrent, ce qui stabilise le chiffre d'affaires.

**Honnêtement** : ces chiffres ne sont pas garantis. Ils supposent environ 50 contacts et 40 à 60 visites par semaine, un suivi sérieux des relances, et des prix tenus. Au Maroc, beaucoup de petits commerces négocieront vers l'offre Essentiel : visez aussi les cabinets (médecins, dentistes, avocats), les garages et les salons haut de gamme, et pensez aux clients francophones à distance (France, Belgique) qui paient volontiers les prix en euros. Déclarez votre activité (statut auto-entrepreneur au Maroc) pour pouvoir facturer.

## Limites connues

- Les photos se renseignent par lien (pas d'envoi de fichiers) ; utilisez un hébergeur d'images.
- La carte utilise l'intégration Google Maps sans clé, à partir de l'adresse saisie.
- L'abonnement mensuel n'est facturé automatiquement que si les prix Stripe récurrents sont configurés ; sinon, encaissez-le manuellement.
