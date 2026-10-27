import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const course = [
  {
    title: "Les fondations : marché, niche et offre",
    summary: "Comprendre pourquoi les commerces ont besoin de vous, choisir une niche rentable et construire une offre claire à prix assumé.",
    tier: "essentiel",
    lessons: [
      {
        slug: "le-marche",
        title: "Le marché : pourquoi les commerces locaux ont besoin de vous",
        duration: 9,
        free: true,
        content: `## Le constat
Ouvrez Google Maps et cherchez « coiffeur » ou « plombier » dans votre ville. Comptez combien de fiches ont un bouton **Site Web**. En général, c'est moins d'une sur deux. Et parmi les sites existants, beaucoup sont lents, illisibles sur mobile ou n'affichent même pas les horaires.

Pendant ce temps, leurs clients cherchent sur leur téléphone : « barbier ouvert maintenant », « garage près de moi ». Un commerce sans site clair perd des appels chaque semaine, sans même s'en rendre compte.

## Pourquoi c'est le bon moment
- **L'IA a fait chuter le coût de fabrication.** Un site qui demandait une semaine à une agence se fait en une journée.
- **Les agences sont trop chères** pour un petit commerce (2 000 à 5 000 €). Les plateformes « faites-le vous-même » demandent un temps que le gérant n'a pas.
- **Vous vous placez au milieu :** un site professionnel, livré vite, à un prix accessible, sans effort pour le commerçant.

## Ce que vous vendez vraiment
Vous ne vendez pas « un site ». Vous vendez **plus d'appels, plus de réservations et une image sérieuse**. Gardez cette phrase en tête : elle change votre façon de prospecter et de fixer vos prix.

> Action : ouvrez Google Maps et notez 10 commerces de votre ville sans site web, ou avec un site visiblement daté. Gardez cette liste, elle servira dès la leçon 3.`,
      },
      {
        slug: "choisir-sa-niche",
        title: "Choisir votre niche en 20 minutes",
        duration: 12,
        free: true,
        content: `## Pourquoi se spécialiser
« Je fais des sites pour tout le monde » ne convainc personne. « Je fais des sites pour les salons de coiffure » rassure immédiatement un coiffeur : vous connaissez son métier, ses prestations, ses clients. Vous réutilisez aussi le même modèle d'un client à l'autre, donc vous livrez plus vite.

## Les 3 critères d'une bonne niche
1. **Ils ont de l'argent** : le commerce tourne, il a des avis récents et des clients.
2. **Un client leur rapporte beaucoup** : un nouveau client vaut 50 € pour un coiffeur, 300 € pour un garage, 2 000 € pour un artisan rénovation. Plus la valeur est élevée, plus votre prix est facile à justifier.
3. **Ils sont nombreux et faciles à joindre** : au moins 100 dans votre zone ou en ligne.

## Les niches qui marchent bien pour débuter
- Coiffeurs, barbiers, instituts de beauté
- Restaurants indépendants, cafés, traiteurs
- Artisans : plombiers, électriciens, menuisiers, peintres
- Garages, carrosseries, lavage auto
- Cabinets : kinés, dentistes, ostéopathes, avocats
- Coachs sportifs, auto-écoles, écoles de langue

> Action : choisissez UNE niche avec le tableau des 3 critères (notez chaque critère de 1 à 5). Vous pourrez en changer dans 2 mois, mais pas avant.`,
      },
      {
        slug: "offre-productisee",
        title: "Construire une offre productisée irrésistible",
        duration: 15,
        content: `## Productiser, c'est quoi ?
Une offre productisée a un **contenu fixe, un délai fixe et un prix fixe**. Le client sait exactement ce qu'il achète. Vous, vous ne négociez plus chaque devis et vous livrez toujours de la même façon.

## La structure à 3 niveaux
- **Essentiel** : site d'une page (présentation, prestations et prix, horaires, carte, boutons Appeler et WhatsApp). Livré en 5 jours.
- **Pro** : site de 4 à 5 pages, galerie photos, avis clients, formulaire de contact, fiche Google optimisée. Le niveau que vous voulez vendre.
- **Premium** : Pro + prise de rendez-vous en ligne ou menu, traduction en une langue, séance photo.

Le niveau Premium sert surtout à rendre le Pro raisonnable. Beaucoup de clients choisiront le milieu.

## Votre promesse en une phrase
Modèle : **« J'aide les [niche] de [zone] à recevoir plus de [résultat] grâce à un site professionnel livré en [délai]. »**

Exemple : « J'aide les barbiers de Lyon à remplir leur agenda grâce à un site professionnel livré en 5 jours. »

> Action : rédigez votre phrase de promesse et le contenu exact de vos 3 niveaux.`,
      },
      {
        slug: "fixer-ses-prix",
        title: "Fixer vos prix sans vous brader",
        duration: 12,
        content: `## Le piège du débutant
Vendre un site à 150 € pour « se lancer » est la pire décision : vous attirez les clients les plus exigeants, vous travaillez à perte et il vous faudrait 25 clients par mois pour vivre. Un prix bas n'inspire pas non plus confiance.

## La grille de départ recommandée
- Essentiel : **390 à 490 €**
- Pro : **690 à 890 €**
- Premium : **1 200 à 1 500 €**
- Maintenance mensuelle : **29 à 49 €** (hébergement, sauvegardes, 30 minutes de modifications par mois)

Adaptez au pouvoir d'achat local : au Maroc, divisez environ par deux pour les petits commerces de quartier, mais gardez les prix européens pour les cabinets, les cliniques et les clients en France ou en Belgique.

## Justifier le prix par le retour sur investissement
Faites le calcul devant le client : « Combien vous rapporte un nouveau client ? 300 € ? Il suffit de 3 nouveaux clients grâce au site pour qu'il soit remboursé. Ensuite, c'est du bénéfice pendant des années. »

> Action : fixez vos 3 prix et votre prix de maintenance. Écrivez le calcul de retour sur investissement adapté à votre niche.`,
      },
    ],
  },
  {
    title: "Créer un site professionnel en une journée avec l'IA",
    summary: "La boîte à outils, la structure qui convertit, les prompts pour rédiger et la mise en ligne avec un nom de domaine.",
    tier: "essentiel",
    lessons: [
      {
        slug: "premiere-demo-ia",
        title: "Votre première démo de site avec l'IA, ce soir",
        duration: 18,
        free: true,
        content: `## L'objectif
Créer en moins d'une heure une démo de site pour l'un des commerces de votre liste. Pas besoin qu'il soit parfait : il doit être **assez beau pour que le gérant se dise « c'est mon commerce »**.

## Étape 1 : récupérer les informations
Sur la fiche Google Maps du commerce, notez : nom, adresse, téléphone, horaires, 3 à 5 photos, 3 avis positifs et les prestations visibles.

## Étape 2 : générer le site
Ouvrez un générateur de sites par IA (Lovable, Bolt, v0, ou Cursor si vous êtes à l'aise) et collez ce prompt en l'adaptant :

> « Crée un site vitrine d'une page, moderne et adapté au mobile, pour [NOM], un [MÉTIER] situé à [VILLE]. Sections : en-tête avec slogan et bouton Appeler, présentation courte, prestations avec prix, avis clients, horaires, carte Google Maps, pied de page. Bouton WhatsApp flottant. Couleurs : [COULEUR]. Ton chaleureux et professionnel. Voici les informations : [COLLEZ LES INFOS]. »

## Étape 3 : relire et ajuster
Vérifiez les horaires, le téléphone et l'orthographe. Remplacez les images génériques par les photos du commerce. Publiez avec le bouton de publication de l'outil : vous obtenez un lien à partager.

> Action : publiez votre première démo et envoyez le lien à un proche pour avoir son avis. Dans la formation complète, vous apprendrez à transformer cette démo en vente.`,
      },
      {
        slug: "boite-a-outils",
        title: "La boîte à outils gratuite",
        duration: 10,
        content: `## Ce dont vous avez besoin
- **Génération du site** : Lovable, Bolt ou v0 pour démarrer très vite ; Cursor si vous voulez un contrôle total et des coûts nuls à grande échelle.
- **Rédaction** : ChatGPT, Claude ou Gemini pour les textes, les slogans et les descriptions de prestations.
- **Images** : les photos du commerçant d'abord. Sinon Unsplash, et Canva pour le logo ou les retouches.
- **Hébergement** : Vercel ou Netlify (gratuits pour des sites vitrines).
- **Nom de domaine** : OVH, Namecheap ou Cloudflare, environ 10 € par an, refacturé au client.
- **Organisation** : un tableau Notion ou Google Sheets pour suivre prospects, devis et livraisons.

## La règle d'or
N'apprenez pas dix outils. Maîtrisez **un** générateur et **un** hébergeur. Votre avantage, c'est la vitesse, pas la technique.

> Action : créez vos comptes sur un générateur, un assistant IA et un hébergeur. Refaites la démo de la leçon précédente en chronométrant : visez moins de 45 minutes.`,
      },
      {
        slug: "structure-qui-convertit",
        title: "La structure d'un site qui convertit",
        duration: 14,
        content: `## Un site vitrine a un seul but
Faire **appeler, écrire ou venir** le visiteur. Tout le reste est secondaire.

## Les 8 blocs indispensables, dans cet ordre
1. **En-tête** : nom, promesse en une ligne, bouton Appeler bien visible.
2. **Preuves** : note Google et nombre d'avis (« 4,8 sur 5, 230 avis »).
3. **Prestations et prix** : les clients veulent savoir combien ça coûte.
4. **Photos réelles** du lieu, de l'équipe, des réalisations.
5. **Avis clients** : 3 avis courts avec prénom.
6. **Horaires et adresse** avec carte.
7. **Questions fréquentes** : parking, paiement par carte, rendez-vous ou non.
8. **Appel à l'action final** + bouton WhatsApp flottant sur mobile.

## Les erreurs qui font fuir
- Un texte d'accueil de 10 lignes sur « notre passion depuis 1998 »
- Un téléphone non cliquable sur mobile
- Des photos de banque d'images à la place des vraies
- Un site lent à cause d'images trop lourdes (compressez avec Squoosh)

> Action : reprenez votre démo et vérifiez les 8 blocs un par un.`,
      },
      {
        slug: "rediger-avec-ia",
        title: "Rédiger les textes avec l'IA",
        duration: 12,
        content: `## Le principe
L'IA écrit vite, mais elle écrit plat si vous lui donnez peu d'informations. Donnez-lui du **concret** : les avis clients, les prestations, le quartier, la spécialité du gérant.

## Prompt « slogan »
> « Propose 10 slogans de 8 mots maximum pour [NOM], [MÉTIER] à [VILLE]. Points forts d'après les avis : [COLLEZ 5 AVIS]. Style : simple, chaleureux, sans superlatifs vides. »

## Prompt « présentation »
> « Écris une présentation de 60 mots pour la page d'accueil de [NOM]. Parle au client à la 2e personne. Mets en avant [3 POINTS FORTS]. Termine par une invitation à appeler ou à réserver. »

## Prompt « prestations »
> « Pour chacune de ces prestations, écris une description d'une phrase qui donne envie, sans jargon : [LISTE AVEC PRIX]. »

## Prompt « référencement local »
> « Rédige le titre SEO (60 caractères) et la méta-description (155 caractères) de la page d'accueil de [NOM], [MÉTIER] à [VILLE] [QUARTIER]. Inclus le métier et la ville. »

> Action : réécrivez tous les textes de votre démo avec ces 4 prompts et comparez avant / après.`,
      },
      {
        slug: "mise-en-ligne",
        title: "Mettre en ligne : domaine, hébergement et Google",
        duration: 15,
        content: `## La check-list de mise en ligne
1. Achetez le nom de domaine **au nom du client** ou sur votre compte en le refacturant (précisez-le dans le devis).
2. Connectez le domaine à l'hébergeur (Vercel ou Netlify) et vérifiez le HTTPS.
3. Testez sur mobile : boutons Appeler et WhatsApp, carte, formulaire.
4. Testez la vitesse avec PageSpeed Insights : visez plus de 85 sur mobile.
5. Ajoutez le site sur la **fiche Google Business Profile** du commerce.
6. Déclarez le site dans Google Search Console et envoyez le sitemap.
7. Faites une capture du site sur mobile : elle ira dans votre portfolio.

## La fiche Google : votre arme secrète
Pour un commerce local, la fiche Google compte souvent plus que le site. Complétez-la à 100 % : catégories, horaires, photos, prestations, lien du site, réponses aux avis. C'est aussi une excellente **vente additionnelle** (50 à 150 €).

> Action : mettez votre démo en ligne sur un sous-domaine gratuit et passez la check-list complète.`,
      },
    ],
  },
  {
    title: "Trouver vos clients",
    summary: "Construire une liste de prospects, la méthode de la démo personnalisée, les scripts prêts à l'emploi et le système de relance.",
    tier: "essentiel",
    lessons: [
      {
        slug: "liste-de-prospects",
        title: "Construire une liste de 100 prospects en 1 heure",
        duration: 12,
        content: `## Où chercher
- **Google Maps** : « [niche] + [ville] ». Filtrez les fiches sans site ou avec un site daté.
- **Instagram et Facebook** : beaucoup de commerces n'ont qu'une page sociale.
- **Annuaires** : Pages Jaunes, Planity, TheFork, Doctolib selon la niche.
- **Votre rue** : les commerces que vous croisez chaque jour.

## Les colonnes de votre tableau
Nom · métier · ville · téléphone / WhatsApp · Instagram · note Google · nombre d'avis · site actuel (aucun / daté / correct) · statut · date de relance.

## Les prospects en or
Une **bonne note, beaucoup d'avis et pas de site** : le commerce marche bien, il a les moyens, et il perd des clients chaque jour. Commencez par eux.

> Action : remplissez votre tableau avec 100 prospects. Triez-les : les « prospects en or » en premier.`,
      },
      {
        slug: "methode-demo",
        title: "La méthode de la démo personnalisée",
        duration: 14,
        content: `## Pourquoi c'est la méthode la plus efficace
Un message « Bonjour, je fais des sites internet » est ignoré. Un message « J'ai préparé le site de votre salon, regardez » est ouvert presque à chaque fois. Le commerçant voit **son** nom, **ses** photos, **ses** avis. Il n'a plus à imaginer le résultat.

## Le processus
1. Choisissez 10 prospects en or.
2. Créez une démo pour chacun avec votre modèle de niche : **20 minutes maximum** par démo.
3. Envoyez le lien avec le script de la leçon suivante.
4. Relancez à J+2 et J+5.

## Combien de démos ?
Avec un taux de réponse de 20 à 30 % et 1 vente pour 4 à 5 réponses, comptez **15 à 25 démos par vente** au début. C'est pour ça que votre modèle de niche doit être prêt : la 10e démo doit vous prendre 15 minutes.

## La version terrain
Si vous pouvez vous déplacer, montrez la démo sur votre téléphone directement au gérant, en dehors des heures de pointe. C'est le taux de conversion le plus élevé.

> Action : créez 10 démos cette semaine.`,
      },
      {
        slug: "scripts-prospection",
        title: "Scripts : WhatsApp, e-mail et visite",
        duration: 15,
        content: `## Script WhatsApp (le plus efficace)
> « Bonjour [Prénom], je m'appelle [Vous]. J'ai vu les super avis de [Nom du commerce] sur Google (4,8 sur 5, bravo). J'ai remarqué que vous n'aviez pas de site, alors j'ai préparé une version de démonstration pour vous : [lien]. Elle est gratuite et sans engagement. Qu'en pensez-vous ? »

## Script e-mail
**Objet :** J'ai créé le site de [Nom du commerce]

> « Bonjour [Prénom], en cherchant un [métier] à [ville], je suis tombé sur [Nom] et ses très bons avis. Vos clients qui cherchent sur Google ne trouvent pourtant pas de site. J'ai préparé une démonstration : [lien]. Si elle vous plaît, je peux la mettre en ligne en 5 jours avec votre nom de domaine. Bonne journée, [Vous] – [téléphone] »

## Script visite
> « Bonjour, je suis [Vous], je crée des sites pour les commerces du quartier. J'ai préparé celui de votre salon, je peux vous le montrer en 30 secondes ? »

Puis montrez, taisez-vous et laissez réagir.

## Les règles
- Toujours personnaliser la première ligne.
- Un seul lien, une seule question.
- Jamais de prix dans le premier message.

> Action : envoyez vos 10 démos avec ces scripts aujourd'hui.`,
      },
      {
        slug: "systeme-relance",
        title: "Le système de relance",
        duration: 8,
        content: `## La vérité sur les relances
La majorité des ventes se font **après une relance**. Le commerçant a vu votre message, l'a trouvé intéressant, puis un client est entré. Ce n'est pas un refus.

## Le rythme
- **J+2** : « Bonjour [Prénom], avez-vous pu regarder la démo de votre site ? »
- **J+5** : un message vocal de 20 secondes, plus humain, qui reprend un détail de la démo.
- **J+12** : « Je garde votre démo en ligne jusqu'à vendredi, ensuite je la supprime. Dites-moi si vous voulez qu'on en parle. »
- Ensuite, statut « froid » et nouvelle tentative dans 2 mois.

## Le rituel quotidien (30 minutes)
1. Ouvrir le tableau, filtrer « relance aujourd'hui ».
2. Envoyer les relances.
3. Mettre à jour les statuts et les prochaines dates.

> Action : ajoutez une colonne « prochaine relance » à votre tableau et bloquez 30 minutes par jour dans votre agenda.`,
      },
    ],
  },
  {
    title: "Vendre sans forcer",
    summary: "L'appel de découverte, la présentation du prix, les réponses aux objections et la sécurisation de l'acompte.",
    tier: "essentiel",
    lessons: [
      {
        slug: "appel-decouverte",
        title: "L'appel de découverte en 5 questions",
        duration: 14,
        content: `## L'objectif de l'appel
Comprendre le besoin du commerçant **avant** de parler de prix. Le client qui s'est entendu dire ce qu'il veut achète beaucoup plus facilement.

## Les 5 questions
1. « Comment vos nouveaux clients vous trouvent-ils aujourd'hui ? »
2. « Combien de nouveaux clients aimeriez-vous en plus chaque mois ? »
3. « Combien vous rapporte un client en moyenne, sur une année ? »
4. « Qu'est-ce qui vous a empêché d'avoir un site jusqu'ici ? »
5. « Si on le met en ligne la semaine prochaine, qu'est-ce qui serait le plus important pour vous ? »

## Ensuite, reformulez
« Si je résume : vous voulez [objectif], aujourd'hui [problème], et ce qui compte pour vous c'est [priorité]. C'est bien ça ? »

Puis présentez **une seule** recommandation : « Pour vous, je recommande l'offre Pro, parce que… »

> Action : faites un appel de découverte « à blanc » avec un proche commerçant et enregistrez-vous pour vous réécouter.`,
      },
      {
        slug: "prix-et-objections",
        title: "Présenter le prix et traiter les objections",
        duration: 16,
        content: `## Annoncer le prix
Dites-le calmement, puis **taisez-vous** : « L'offre Pro, c'est 790 €, et 39 € par mois pour l'hébergement et les modifications. » Le premier qui parle après l'annonce du prix est souvent celui qui cède.

## Les objections et les réponses
### « C'est trop cher »
« Je comprends. Combien vous rapporte un nouveau client ? [réponse] Donc il suffit de [X] clients pour que le site soit remboursé. Et je peux vous proposer le paiement en 2 fois. »

### « Je dois réfléchir »
« Bien sûr. Qu'est-ce qui vous fait hésiter : le prix, le contenu, ou le moment ? » La vraie objection apparaît souvent à ce moment-là.

### « J'ai déjà Facebook / Instagram »
« C'est très bien pour vos clients actuels. Le site, c'est pour ceux qui ne vous connaissent pas encore et qui cherchent sur Google. »

### « Mon neveu va me le faire »
« Très bien. Si jamais ça prend plus de temps que prévu, ma démo reste disponible. »

## Le plan B : l'offre d'entrée
Si le budget bloque vraiment, proposez l'Essentiel plutôt que de baisser le prix du Pro. **On enlève du contenu, jamais de la valeur.**

> Action : écrivez vos réponses aux 4 objections avec vos mots et apprenez-les.`,
      },
      {
        slug: "devis-acompte-contrat",
        title: "Devis, acompte et contrat",
        duration: 10,
        content: `## Le devis
Il doit tenir sur une page : vos coordonnées et votre numéro d'entreprise, celles du client, le contenu précis de l'offre, le délai, le prix, la maintenance mensuelle, les conditions de paiement et la durée de validité (15 jours).

## L'acompte : non négociable
Demandez **50 % à la commande** et 50 % à la mise en ligne. Un client qui a payé un acompte envoie ses photos et ses textes rapidement. Sans acompte, les projets traînent des semaines.

## Le contrat simplifié
Ajoutez au devis 5 clauses :
1. Le client fournit les contenus sous 7 jours.
2. Deux séries de modifications sont incluses.
3. Le site est mis en ligne après paiement du solde.
4. La maintenance est mensuelle, sans engagement, résiliable avec un mois de préavis.
5. Le nom de domaine appartient au client.

> Action : créez votre modèle de devis avec ces éléments (Google Docs ou un outil de facturation gratuit).`,
      },
    ],
  },
  {
    title: "Livrer et fidéliser",
    summary: "Livrer en 5 jours sans stress, collecter avis et recommandations, et poser les bases administratives.",
    tier: "essentiel",
    lessons: [
      {
        slug: "livraison-5-jours",
        title: "Le processus de livraison en 5 jours",
        duration: 12,
        content: `## Le planning type
- **Jour 1** : acompte reçu, envoi du questionnaire (logo, photos, prestations, prix, horaires, accès aux réseaux).
- **Jour 2** : création du site à partir de la démo et des contenus.
- **Jour 3** : envoi de la version 1 avec une vidéo de présentation de 2 minutes (Loom).
- **Jour 4** : modifications.
- **Jour 5** : paiement du solde, mise en ligne, fiche Google, remise d'un guide d'une page.

## Le questionnaire client
Créez un formulaire (Google Forms ou Tally) avec toutes les questions. Vous gagnez des heures d'échanges.

## Les bonnes habitudes
- Un seul canal de communication (WhatsApp Business).
- Toujours annoncer la prochaine étape et sa date.
- Livrer **un jour plus tôt** que prévu quand c'est possible : c'est ce dont le client parlera.

> Action : créez votre questionnaire client et votre planning de livraison type.`,
      },
      {
        slug: "avis-et-recommandations",
        title: "Collecter avis et recommandations",
        duration: 8,
        content: `## Le bon moment
Juste après la mise en ligne, quand le client est content. Pas trois semaines plus tard.

## Le message
> « [Prénom], votre site est en ligne, merci pour votre confiance ! Est-ce que vous pourriez me laisser un petit avis Google ? Ça m'aide énormément : [lien]. Et si vous connaissez un commerçant qui aurait besoin d'un site, je lui offre la fiche Google de sa part. »

## Le programme de recommandation
Offrez **un mois de maintenance** au client pour chaque commerçant recommandé qui signe. Les commerçants se connaissent tous : c'est votre canal d'acquisition le moins cher.

## Votre portfolio
Chaque site livré devient une étude de cas : capture avant / après, avis du client, et si possible un chiffre (« 12 appels de plus le premier mois »).

> Action : préparez votre message de demande d'avis et votre offre de recommandation.`,
      },
      {
        slug: "statut-et-organisation",
        title: "Statut, facturation et organisation",
        duration: 12,
        content: `## Le statut
- **France** : micro-entreprise (déclaration en ligne gratuite, cotisations d'environ 21 à 25 % du chiffre d'affaires pour les prestations de services).
- **Maroc** : statut d'auto-entrepreneur (inscription en ligne, impôt de 1 % du chiffre d'affaires pour les services jusqu'au plafond prévu).
- **Belgique, Suisse** : statut d'indépendant, renseignez-vous auprès d'un guichet d'entreprise.

Ces règles évoluent : vérifiez toujours sur le site officiel de votre pays ou avec un comptable.

## La facturation
Un outil gratuit suffit au début. Numérotez vos factures dans l'ordre, sans trou. Pour la maintenance, utilisez une facturation récurrente automatique.

## Votre semaine type
- **Lundi** : prospection et démos (3 h)
- **Mardi à jeudi** : livraisons le matin, prospection l'après-midi
- **Vendredi** : relances, tableau de bord, préparation de la semaine suivante

> Action : faites les démarches pour votre statut cette semaine, même avant votre premier client.`,
      },
    ],
  },
  {
    title: "Atteindre 3 000 € par mois",
    summary: "Le tableau de bord hebdomadaire, les ventes additionnelles et le plan d'action sur 90 jours.",
    tier: "essentiel",
    lessons: [
      {
        slug: "tableau-de-bord",
        title: "Votre tableau de bord hebdomadaire",
        duration: 10,
        content: `## Les 5 chiffres à suivre chaque vendredi
1. Démos envoyées
2. Réponses reçues
3. Appels de découverte
4. Ventes et chiffre encaissé
5. Clients en maintenance (revenu mensuel récurrent)

## Comment lire ces chiffres
- **Peu de réponses** : vos messages ou votre ciblage sont à revoir.
- **Des réponses mais peu d'appels** : vous ne proposez pas assez clairement un appel.
- **Des appels mais peu de ventes** : travaillez la découverte et les objections.
- **Tout va bien mais le revenu stagne** : augmentez le volume ou le panier moyen.

## La règle du volume
Au début, visez **20 démos par semaine**. C'est le seul chiffre que vous contrôlez totalement. Les ventes suivent.

> Action : créez votre tableau de suivi hebdomadaire et remplissez-le chaque vendredi.`,
      },
      {
        slug: "ventes-additionnelles",
        title: "Les ventes additionnelles",
        duration: 10,
        content: `## Augmenter le panier sans prospecter plus
- **Fiche Google Business Profile optimisée** : 50 à 150 €
- **Logo et identité simple** : 90 à 250 €
- **Séance photo sur place** : 120 à 300 €
- **Prise de rendez-vous en ligne** : 150 € + abonnement
- **Traduction** en une langue : 100 à 200 €
- **QR codes imprimés** pour la vitrine et les tables : 30 à 60 €
- **Gestion des avis** ou publications mensuelles sur Google : 49 à 99 € par mois

## Comment les proposer
Pas de catalogue. Proposez **une seule option**, au bon moment : la fiche Google à la mise en ligne, la séance photo quand le client n'a pas de photos, la traduction pour les commerces touristiques.

> Action : choisissez 3 ventes additionnelles adaptées à votre niche et fixez leurs prix.`,
      },
      {
        slug: "plan-90-jours",
        title: "Le plan 90 jours",
        duration: 12,
        content: `## Mois 1 : les premières ventes
- Niche, offre, prix et modèle de démo prêts la première semaine
- 20 démos par semaine, relances quotidiennes
- Objectif : **2 à 3 clients**, même à prix d'entrée

## Mois 2 : la régularité
- Portfolio avec vos premiers sites et avis
- Demande systématique de recommandations
- Objectif : **4 clients**, 6 à 8 contrats de maintenance au total

## Mois 3 : le levier
- Montez vos prix de 15 à 20 % (vous avez maintenant des preuves)
- Ajoutez une vente additionnelle systématique
- Testez un second canal (Instagram, partenariat avec un comptable ou une association de commerçants)
- Objectif : **3 000 € sur le mois**, maintenance comprise

## Le calcul à garder en tête
4 sites × 600 € + 20 maintenances × 39 € = **3 180 € par mois**. Chaque client en maintenance augmente votre socle de revenu, mois après mois.

> Action : écrivez vos objectifs chiffrés pour chacun des 3 prochains mois et affichez-les près de votre bureau.`,
      },
    ],
  },
  {
    title: "Bonus Pro : vendre la maintenance mensuelle",
    summary: "Transformer chaque site vendu en revenu récurrent, et automatiser la facturation.",
    tier: "pro",
    lessons: [
      {
        slug: "offre-maintenance",
        title: "Une offre de maintenance qui se vend toute seule",
        duration: 12,
        content: `## Pourquoi c'est le cœur du modèle
Un site vendu une fois, c'est un revenu ponctuel. Un site vendu avec maintenance, c'est **un revenu chaque mois, sans prospection**. 30 clients à 39 € font 1 170 € par mois avant même d'avoir vendu un nouveau site.

## Ce que contient la maintenance
- Hébergement, nom de domaine et certificat de sécurité
- Sauvegardes et mises à jour
- 30 minutes de modifications par mois (prix, horaires, photos, promotions)
- Un rapport mensuel simple : visites, appels, clics sur l'itinéraire

## Comment la vendre
Ne la présentez pas comme une option. Elle fait **partie de l'offre** : « 790 € pour la création, puis 39 € par mois pour l'hébergement et les modifications. » Proposez 2 mois offerts en cas de paiement annuel.

## Le rapport mensuel : votre assurance contre les résiliations
Un client qui voit chaque mois « 47 appels depuis votre site » ne résilie pas.

> Action : rédigez la description de votre offre de maintenance et un modèle de rapport mensuel.`,
      },
      {
        slug: "automatiser-facturation",
        title: "Automatiser la facturation récurrente",
        duration: 8,
        content: `## Les options
- **Prélèvement ou carte** via un outil de paiement récurrent (Stripe, GoCardless, PayPal abonnements) quand c'est disponible dans votre pays.
- **Virement permanent** : le client met en place un ordre de virement mensuel depuis sa banque.
- **Paiement annuel** : plus simple pour tout le monde, avec 2 mois offerts.

## Le rituel du 1er du mois
1. Vérifier les paiements reçus.
2. Envoyer les rapports mensuels.
3. Relancer les impayés avec bienveillance : « Petit rappel pour la maintenance de ce mois ».

## La règle en cas d'impayé
Après 2 relances et 15 jours, prévenez que le site sera mis en pause. Écrivez cette règle dans le contrat dès le départ.

> Action : choisissez votre méthode de facturation récurrente et préparez vos messages de relance.`,
      },
    ],
  },
];

async function main() {
  const reset = process.argv.includes("--reset");
  if (reset) {
    await db.module.deleteMany();
  } else if ((await db.module.count()) > 0) {
    console.log("Le contenu existe déjà : rien à faire (utilisez --reset pour le remplacer).");
    return;
  }

  for (const [i, m] of course.entries()) {
    await db.module.create({
      data: {
        position: i + 1,
        title: m.title,
        summary: m.summary,
        tier: m.tier,
        lessons: {
          create: m.lessons.map((l, j) => ({
            position: j + 1,
            slug: l.slug,
            title: l.title,
            duration: l.duration,
            content: l.content,
            freePreview: Boolean(l.free),
          })),
        },
      },
    });
  }
  const lessons = course.reduce((n, m) => n + m.lessons.length, 0);
  console.log(`Formation créée : ${course.length} modules, ${lessons} leçons.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
