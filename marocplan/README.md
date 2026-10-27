# MarocPlan

Site indépendant qui vend des **itinéraires de voyage au Maroc sur mesure, livrés en 24 h** et payés d'avance :

| Formule | Prix | Contenu |
| --- | --- | --- |
| Essentiel | 19 € | Itinéraire jour par jour, trajets, incontournables |
| Complet | 39 € | + riads, restaurants, budget détaillé, appel WhatsApp 20 min |
| Premium | 79 € | + aide aux réservations, 2 révisions, assistance pendant le voyage |

Pas de base de données ni de backend : le client remplit le formulaire, paie via **PayPal.me** (ou un lien de paiement **Stripe**), puis vous envoie ses réponses par **WhatsApp** ou **email** en un clic. Le site est bilingue (français sur `/`, anglais sur `/en`).

Ce projet est **séparé d'AtlasTours / Arganis Nomad** : il a son propre `package.json`, ses dépendances et se déploie comme un projet Vercel distinct (dossier racine `marocplan`).

## Lancer en local

```bash
cd marocplan
npm install
cp .env.example .env.local   # puis remplissez vos valeurs
npm run dev                  # http://localhost:3020
```

Vérifications : `npm run typecheck` et `npm run build`.

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (ex : `https://marocplan.vercel.app`) |
| `NEXT_PUBLIC_PAYPAL_ME` | Votre identifiant PayPal.me (sans `https://paypal.me/`) |
| `NEXT_PUBLIC_STRIPE_ESSENTIEL` / `_COMPLET` / `_PREMIUM` | Facultatif : liens de paiement Stripe, prioritaires sur PayPal |
| `NEXT_PUBLIC_WHATSAPP` | Numéro au format international sans `+` ni espaces (ex : `212612345678`) |
| `NEXT_PUBLIC_EMAIL` | Adresse qui reçoit les demandes |

Sans PayPal ni Stripe configuré, le site affiche « paiement bientôt disponible » et le client vous envoie quand même sa demande : vous lui répondez avec un lien de paiement.

## Créer votre lien PayPal.me (10 minutes)

1. Créez un compte PayPal **Business** (gratuit) sur paypal.com, ou utilisez votre compte existant.
2. Allez sur [paypal.me](https://www.paypal.me) et choisissez votre identifiant (ex : `marocplan`).
3. Mettez cet identifiant dans `NEXT_PUBLIC_PAYPAL_ME`. Le site génère automatiquement `https://www.paypal.me/marocplan/39EUR` pour chaque formule.
4. Faites un test avec un petit montant depuis un autre compte pour vérifier la réception.

Alternative : créez trois **Payment Links** sur Stripe (19 €, 39 €, 79 €) et collez-les dans les variables `NEXT_PUBLIC_STRIPE_*`.

## Mettre en ligne aujourd'hui sur Vercel

1. Poussez ce dépôt sur GitHub (c'est déjà fait si vous lisez ceci sur GitHub).
2. Sur [vercel.com/new](https://vercel.com/new), importez le dépôt et choisissez **Root Directory : `marocplan`**. C'est un projet Vercel séparé du site AtlasTours.
3. Ajoutez les variables d'environnement ci-dessus, puis **Deploy**.
4. Votre site est en ligne sur `https://<projet>.vercel.app`. Un domaine `.com` (≈ 10 €/an) peut être ajouté plus tard dans *Settings → Domains*.
5. Remplacez les informations entre crochets dans `app/mentions-legales/page.tsx` par vos vraies coordonnées.

## Plan pour gagner dès demain

Soyons honnêtes : le site seul ne fera pas de ventes. Ce sont les **visiteurs que vous amenez** qui paient. Voici un plan réaliste.

**Jour 1 : mise en ligne et premiers messages**

- Déployez le site, testez un paiement PayPal et l'envoi WhatsApp.
- Préparez **un modèle d'itinéraire** (Google Docs ou Canva) : une page par jour avec étapes, temps de route, adresses, prix et conseils. Vous réutiliserez 70 % du contenu pour chaque client, ce qui permet de livrer en 1 à 2 h.
- Écrivez à vos contacts AtlasTours / Arganis Nomad (anciens clients, agences partenaires, riads) : « Je lance un service d'itinéraires sur mesure, pouvez-vous le partager ? ».

**Jours 1 à 7 : aller là où sont les voyageurs**

- **Groupes Facebook** « Voyage au Maroc », « Road trip Maroc », « Marrakech conseils » : répondez gratuitement et utilement aux questions, puis proposez le lien quand quelqu'un cherche un itinéraire. Respectez les règles de chaque groupe (pas de spam).
- **Reddit** r/Morocco et r/travel : beaucoup de posts « Itinerary help, 10 days in Morocco ». Donnez une vraie réponse ; mentionnez le service dans votre profil ou quand c'est autorisé.
- **Instagram / TikTok** : des vidéos courtes « 3 erreurs à éviter à Marrakech », « Combien coûte 7 jours au Maroc » avec le lien en bio. Votre expérience du terrain est votre meilleur argument.
- Publiez l'**exemple de 7 jours** du site comme preuve de qualité.

**Objectifs réalistes**

- Premières ventes possibles **en quelques jours** si vous publiez chaque jour ; rien n'est garanti.
- Exemple : 3 formules Complet par jour = 3 × 39 € ≈ **117 € par jour**. Même une vente par jour (≈ 1 000 € par mois) couvre largement les coûts (quasi nuls : Vercel gratuit, frais PayPal ≈ 3 %).
- Demandez à chaque client satisfait un avis ou une capture d'écran : ce sont vos meilleures publicités.

**Revenus complémentaires (upsell)**

- Recommandez dans chaque itinéraire des excursions, chauffeurs privés, nuits dans le désert ou riads partenaires (dont AtlasTours / Arganis Nomad) et négociez une **commission de 10 à 20 %**. Un client à 39 € peut ainsi rapporter 100 € ou plus.
- La formule Premium (aide aux réservations) est l'occasion naturelle de proposer ces partenaires.
