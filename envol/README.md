# Envol — formation en ligne « Freelance web avec l'IA »

Envol est un **business de formation en ligne clé en main**. Vous vendez une formation qui apprend à créer des sites pour les commerces avec l'IA, sans coder, et à en vivre en freelance. L'objectif est de générer **2 500 à 5 000 € par mois**.

L'application contient tout le tunnel de vente : page de vente, mini-formation gratuite pour capter des prospects, commande et paiement, espace élève avec progression et certificat, et tableau de bord admin avec l'objectif de revenus.

> Projet indépendant, sans lien avec AtlasTours ni Vitrina : il a son propre dossier, son `package.json`, sa base de données et son déploiement.

## Pourquoi ce sujet de formation

- **Demande forte et durable** : beaucoup de gens cherchent un revenu indépendant en ligne, et beaucoup de commerces n'ont pas de site correct.
- **Résultat concret et mesurable** : « signer son premier client » est une promesse claire, facile à démontrer.
- **Crédibilité facile à construire** : vous pratiquez vous-même ce que vous enseignez. Chaque site vendu (par exemple avec Vitrina) devient une étude de cas pour la formation.
- **Panier moyen élevé** : la valeur perçue est directement liée à un revenu, ce qui justifie 197 à 1 490 €.

## Le modèle économique

| Offre | Prix | Contenu |
| --- | --- | --- |
| Essentiel | 197 € | 6 modules (22 leçons), scripts, prompts, modèles, certificat |
| **Pro** (offre phare) | 497 € | Essentiel + 8 coachings de groupe sur 2 mois, communauté, relecture, module bonus « maintenance mensuelle » |
| VIP | 1 490 € | Pro + 4 séances individuelles, prospection faite ensemble, WhatsApp direct 60 jours (3 places par mois) |

Un élève peut passer à l'offre supérieure plus tard en ne payant que la différence. Le calcul est fait automatiquement.

### Combien de ventes pour 2 500 à 5 000 € ?

| Scénario | Essentiel | Pro | VIP | Total mensuel |
| --- | --- | --- | --- | --- |
| Lancement (mois 1–2) | 4 | 2 | 0 | **1 782 €** |
| Objectif bas (mois 3–4) | 5 | 3 | 0 ou 1 | **2 476 € à 3 966 €** |
| Objectif haut (mois 5–6) | 6 | 5 | 1 | **5 147 €** |

Soit **10 à 12 ventes par mois** pour l'objectif haut, avec un panier moyen d'environ 430 €.

### Le tunnel qui produit ces ventes

```
Contenu gratuit (vidéos courtes, LinkedIn, YouTube)
  → page /gratuit (mini-formation de 3 leçons)          ≈ 25–35 % des visiteurs s'inscrivent
  → séquence de 7 e-mails + leçon 3 qui finit sur l'offre
  → achat                                               ≈ 2–4 % des prospects achètent
```

Pour **10 ventes par mois** à 3 %, il faut environ **330 prospects par mois**, soit environ 1 100 visiteurs sur `/gratuit`. Autrement dit, **35 à 40 visiteurs par jour**. C'est atteignable avec une publication de vidéo courte par jour et 2 à 3 posts LinkedIn par semaine, au bout de 2 à 3 mois.

Les ventes VIP et une partie des Pro se concluent en **appel de 20 minutes** : proposez-le dans les e-mails, puis enregistrez la vente dans l'admin (« Enregistrer une vente »).

> **Honnêtement** : ces chiffres sont des ordres de grandeur, pas une garantie. Le facteur n°1 est la régularité de la création de contenu. Les 2 premiers mois servent surtout à construire l'audience et vos premiers témoignages. Ne promettez jamais de revenus à vos élèves : le site affiche des exemples illustratifs et une garantie de 14 jours.

## Plan de lancement en 30 jours

**Semaine 1 : mise en ligne**
- Déployez le site (voir plus bas), renseignez vos coordonnées, votre RIB, votre PayPal.me et votre bio (`OWNER_BIO`, avec vos vrais résultats).
- Lisez les 24 leçons dans l'admin (`/admin/contenu`) et adaptez-les à votre expérience.
- Tournez les **3 leçons gratuites** en priorité, avec simplement votre écran et votre voix (Loom ou OBS). Mettez-les sur YouTube en « non répertoriée » et collez le lien dans chaque leçon.

**Semaine 2 : audience**
- Créez un compte TikTok, Instagram et YouTube Shorts consacré au sujet. Publiez **1 vidéo par jour** de 30 à 60 secondes. Sujets qui marchent : « Je crée le site d'un barbier en 10 minutes avec l'IA », « Combien facturer un site à un commerce », « Le message WhatsApp qui m'a fait signer un client ».
- Mettez le lien `/gratuit?source=tiktok` (ou `instagram`, `youtube`, `linkedin`) en bio. L'admin affiche la source de chaque prospect.

**Semaine 3 : séquence e-mail**
- Exportez les prospects en CSV (`/admin/prospects`) vers Brevo, MailerLite ou Systeme.io (offres gratuites).
- Envoyez cette séquence sur 10 jours :
  1. J0 : bienvenue + lien vers la leçon 1
  2. J1 : votre histoire, pourquoi ce métier
  3. J2 : étude de cas d'un site vendu (capture + chiffres)
  4. J4 : les 3 erreurs des débutants (prix trop bas, pas de niche, pas de relance)
  5. J6 : présentation de l'offre Pro + garantie 14 jours
  6. J8 : FAQ et objections (« je ne sais pas coder », « je n'ai pas le temps »)
  7. J10 : dernière relance, proposition d'un appel de 20 minutes

**Semaine 4 : première promotion**
- Organisez un **live gratuit** de 45 minutes (« Je crée un site de A à Z avec l'IA en direct ») et terminez par l'offre Pro, avec un bonus réservé aux inscrits de la semaine (par exemple une séance individuelle de 30 minutes).
- Lancez la **première session de coaching** Pro et remplissez `COACHING_LINK` et `COMMUNITY_LINK` (groupe WhatsApp ou Discord).

**Ensuite, chaque semaine** : 7 vidéos courtes, 1 e-mail à votre liste, 1 live par mois, relance WhatsApp des élèves inactifs depuis `/admin/eleves`. Ajoutez les témoignages de vos élèves sur la page de vente dès que vous en avez.

## Fonctionnalités

| Page | Rôle |
| --- | --- |
| `/` | Page de vente : promesse, marché, calcul de revenus, programme (lu depuis la base), pour qui / pas pour qui, 3 offres, garantie, bio, FAQ |
| `/gratuit` | Inscription à la mini-formation (prénom + e-mail), source suivie avec `?source=` |
| `/gratuit/[leçon]` | Leçons gratuites, la dernière se termine sur les offres |
| `/commander` | Commande : choix de l'offre, création du compte élève, montée en gamme avec déduction de l'achat précédent |
| `/commande/[id]` | Paiement : carte (Stripe, si configuré), PayPal.me au bon montant, virement avec référence, envoi de la preuve sur WhatsApp |
| `/espace` | Espace élève : progression, reprise de la leçon suivante, modules verrouillés selon l'offre, liens coaching/communauté/VIP |
| `/espace/lecon/[leçon]` | Vidéo (YouTube, Vimeo, Bunny, MP4), support écrit, ressources, « Terminer et continuer » |
| `/espace/certificat` | Certificat imprimable en PDF quand tout le contenu principal est terminé |
| `/admin` | CA du mois, **jauge d'objectif 2 500 → 5 000 €** avec le nombre de ventes manquantes par offre, projection fin de mois, conversion, commandes (marquer payée, annuler, rembourser), saisie d'une vente manuelle |
| `/admin/eleves` | Progression et dernière visite de chaque élève, relances WhatsApp pré-écrites, nouveau mot de passe |
| `/admin/prospects` | Prospects de la mini-formation, sources, taux de conversion, export CSV |
| `/admin/contenu` | Éditeur de la formation : modules (titre, résumé, offre requise), leçons (vidéo, texte, ressources, gratuite ou non, publiée ou non), ordre |

Un remboursement retire automatiquement l'accès correspondant. Les mots de passe sont hachés avec scrypt et les sessions sont des JWT signés dans des cookies httpOnly.

## Stack

Next.js 15 (App Router, server actions) · TypeScript · Tailwind CSS 3 · Prisma + PostgreSQL · `jose` · Stripe (optionnel).

## Installation locale

```bash
cd envol
cp .env.example .env            # puis complétez les valeurs
npm install
npx prisma db push              # crée les tables
npm run db:seed                 # crée la formation : 7 modules, 24 leçons rédigées
npm run dev                     # http://localhost:3050
```

Base locale rapide (PostgreSQL 16) :

```bash
sudo -u postgres psql -c "CREATE USER envol WITH PASSWORD 'envol' CREATEDB;" -c "CREATE DATABASE envol OWNER envol;"
```

`npm run db:seed -- --reset` remplace tout le contenu de la formation (attention : supprime aussi la progression des élèves).

Contrôles : `npm run typecheck` et `npm run build`.

## Variables d'environnement

| Variable | Obligatoire | Description |
| --- | --- | --- |
| `DATABASE_URL` | oui | URL PostgreSQL (Neon, Supabase, local) |
| `NEXT_PUBLIC_APP_URL` | oui | URL publique, sans `/` final |
| `ADMIN_PASSWORD` | oui | Mot de passe de `/admin` |
| `AUTH_SECRET` | oui | ≥ 32 caractères aléatoires (`openssl rand -base64 32`) |
| `OWNER_NAME`, `OWNER_WHATSAPP`, `OWNER_EMAIL` | conseillé | Votre nom (certificats, messages), WhatsApp au format international sans `+` |
| `OWNER_BIO` | conseillé | Votre présentation sur la page de vente (section masquée si vide) |
| `LEGAL_ENTITY` | conseillé | Forme juridique et numéro d'entreprise pour les mentions légales |
| `MONTHLY_GOAL_MIN`, `MONTHLY_GOAL_MAX` | non | Objectif mensuel en euros (défaut 2500 et 5000) |
| `BANK_NAME`, `BANK_HOLDER`, `BANK_RIB` | conseillé | Paiement par virement |
| `PAYPAL_ME` | conseillé | Identifiant PayPal.me : génère un lien au bon montant |
| `COACHING_LINK`, `COMMUNITY_LINK`, `VIP_BOOKING_LINK` | non | Liens affichés aux élèves Pro et VIP (Zoom/Calendly, groupe WhatsApp/Discord) |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | non | Paiement par carte avec ouverture automatique de l'accès (aucun produit à créer dans Stripe) |

## Déploiement (Vercel + Neon)

1. Créez une base sur [neon.tech](https://neon.tech) (gratuit) et copiez l'URL.
2. Depuis votre machine : `DATABASE_URL="…" npx prisma db push` puis `DATABASE_URL="…" npm run db:seed`.
3. Sur Vercel, importez le dépôt avec **Root Directory = `envol`**, et ajoutez les variables d'environnement.
4. Branchez un domaine (par exemple `envol-academie.com`).
5. Stripe (optionnel) : ajoutez un webhook vers `https://votre-domaine/api/stripe/webhook` avec les événements `checkout.session.completed` et `checkout.session.async_payment_succeeded`. Le retour de paiement confirme aussi la commande directement, même si le webhook est en retard.

> **Paiement depuis le Maroc** : Stripe n'ouvre pas de compte à une entreprise marocaine. Sans structure dans un pays pris en charge, utilisez PayPal (pour les clients européens), le virement et, pour les clients marocains, Wafacash / Cash Plus. Vous marquez ensuite la commande « payée » dans l'admin. Les plateformes « marchand de référence » (Lemon Squeezy, Paddle, Gumroad) sont une autre option : vérifiez qu'elles prennent en charge les versements vers votre pays avant de vous lancer.

## Limites connues

- Pas d'envoi d'e-mails automatiques : utilisez votre outil d'e-mailing avec l'export CSV, et WhatsApp pour les mots de passe oubliés (l'admin en génère un nouveau).
- Les vidéos ne sont pas hébergées par l'application : utilisez YouTube (non répertoriée), Vimeo ou Bunny Stream. Une vidéo YouTube non répertoriée peut être partagée par un élève ; passez à Vimeo ou Bunny avec restriction de domaine si cela devient un problème.
- Les coachings se gèrent avec vos propres outils (Zoom, Google Meet, Calendly) via les liens configurés.
