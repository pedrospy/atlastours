import type { ExperienceDetailsByLocale } from "@/lib/experiences/types";
import type { CircuitId } from "./types";

export const circuitDetails: ExperienceDetailsByLocale<CircuitId> = {
  fr: {
    "circuit-sahara-atlas-3j": {
      metaTitle:
        "Circuit 3 jours Marrakech, Sahara & Atlas | Red Nomad",
      metaDescription:
        "Circuit privé 3 jours depuis Marrakech : Haut Atlas, Aït Benhaddou, Merzouga, bivouac de luxe aux dunes et retour. Guide francophone, petits groupes.",
      subtitle: "Marrakech, désert et Atlas en 3 jours",
      difficulty: "Modéré",
      duration: "3 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Trois jours pour vivre l'essentiel du Sud marocain : traversée du Haut Atlas et du col du Tizi n'Tichka, kasbah UNESCO d'Aït Benhaddou, route des gorges jusqu'à Merzouga, nuit magique en bivouac de luxe sur les dunes de l'Erg Chebbi et retour à Marrakech. Un condensé parfait entre montagne, désert et patrimoine berbère.",
      highlights: [
        "Traversée du Haut Atlas — col du Tizi n'Tichka (2260 m)",
        "Kasbah d'Aït Benhaddou — site UNESCO et décor de cinéma",
        "Gorges du Todra et palmeraies du Sud",
        "Balade à dos de dromadaire au coucher du soleil",
        "Nuit en bivouac de luxe sur les dunes de Merzouga",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech — Atlas — Aït Benhaddou — Gorges",
          description:
            "Route panoramique vers le Sud à travers le Haut Atlas et les kasbahs.",
          steps: [
            "07h00 — Départ de Marrakech, traversée du col du Tizi n'Tichka",
            "Visite d'Aït Benhaddou, kasbah classée UNESCO",
            "Ouarzazate et route des gorges du Todra",
            "Nuit en kasbah ou hôtel dans la région de Merzouga",
          ],
        },
        {
          dayLabel: "J2",
          title: "Merzouga — Dromadaire — Bivouac de luxe",
          description:
            "Journée consacrée au Sahara et à la nuit sous les étoiles.",
          steps: [
            "Matinée libre ou visite du village de Khamlia",
            "16h30 — Balade à dos de dromadaire vers les dunes de l'Erg Chebbi",
            "Coucher de soleil sur les dunes dorées",
            "Nuit en bivouac de luxe : dîner berbère et musique au coin du feu",
          ],
        },
        {
          dayLabel: "J3",
          title: "Lever de soleil — Atlas — Retour Marrakech",
          description:
            "Réveil sur les dunes et route de retour via l'Atlas.",
          steps: [
            "06h00 — Lever de soleil sur les dunes (option)",
            "Petit-déjeuner au camp, retour en 4x4",
            "Route de retour via Rissani, gorges et villages de l'Atlas",
            "~20h00 — Arrivée à Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé 4x4 ou minibus climatisé (3 jours)",
        "Chauffeur-guide francophone berbère",
        "1 nuit en bivouac de luxe avec dîner et petit-déjeuner",
        "Balade à dos de dromadaire (≈1h30 aller-retour)",
      ],
      notIncluded: [
        "Hébergement hors bivouac (kasbah ou hôtel J1)",
        "Déjeuners et dîner du J1",
        "Boissons et dépenses personnelles",
        "Entrées monuments (~70 MAD Aït Benhaddou)",
        "Pourboires guide et personnel (usage local)",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "95 €/pers." },
        { travelers: "3–4 voyageurs", price: "85–90 €/pers." },
        { travelers: "5–7 voyageurs", price: "75–85 €/pers." },
        { travelers: "8–14 voyageurs", price: "68–78 €/pers." },
        { travelers: "15–17 voyageurs", price: "65 €/pers." },
      ],
      faqs: [
        {
          question: "Est-ce beaucoup de route pour 3 jours ?",
          answer:
            "Oui, comptez 8–9 h de route le J1 et J3. Nous faisons des pauses régulières à Aït Benhaddou et dans les gorges. Pour un circuit plus complet avec Fès et Chefchaouen, optez le circuit Marrakech–Chefchaouen 3 jours.",
        },
        {
          question: "Quel niveau de confort pour la nuit au désert ?",
          answer:
            "Bivouac de luxe avec tentes privées, literie confortable, douches et repas traditionnels. Une expérience authentique sans renoncer au confort.",
        },
        {
          question: "Le circuit convient-il aux familles ?",
          answer:
            "Oui, les véhicules sont spacieux et les étapes adaptables. La balade à dromadaire est accessible dès 5–6 ans avec assistance.",
        },
        {
          question: "Quelle est la meilleure saison ?",
          answer:
            "Mars à mai et septembre à novembre sont idéaux. L'été est possible avec des départs matinaux ; l'hiver reste agréable au désert.",
        },
        {
          question: "Comment réserver ?",
          answer:
            "Contactez-nous via WhatsApp ou email avec vos dates et le nombre de voyageurs. Acompte de 30 % à la confirmation, solde à l'arrivée.",
        },
      ],
    },
    "sahara-dades-4j": {
      metaTitle:
        "Sahara, Gorges du Dadès & Merzouga — 4 jours | Red Nomad",
      metaDescription:
        "Circuit 4 jours depuis Marrakech : Aït Benhaddou UNESCO, Gorges du Dadès et du Todra, Erg Chebbi à Merzouga, vallée du Drâa et oasis de Fint. Guide francophone.",
      subtitle: "Désert, gorges et kasbahs du Sud",
      difficulty: "Modéré",
      duration: "4 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Itinéraire en 4 jours : montée vers les Gorges du Dadès en passant par la kasbah d'Aït Benhaddou (UNESCO) ; découverte des Gorges du Todra à Tinghir puis le désert de Merzouga ; retour vers le nord par la vallée du Drâa et Agdez jusqu'à l'oasis de Fint et Ouarzazate ; dernière étape : retour à Marrakech par le Haut Atlas.",
      highlights: [
        "Aït Benhaddou (UNESCO)",
        "Gorges du Dadès & Todra (Tinghir)",
        "Erg Chebbi — Merzouga",
        "Vallée du Drâa & Agdez",
        "Oasis de Fint",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech → Gorges du Dadès (via Aït Benhaddou)",
          description:
            "Ascension de l'Atlas et immersion dans les kasbahs du Sud.",
          steps: [
            "07h00 — Départ de Marrakech, col du Tizi n'Tichka",
            "Visite de la kasbah d'Aït Benhaddou, site classé UNESCO",
            "Vallée des Roses et Gorges du Dadès",
            "Promenade dans les gorges — dîner et nuit en kasbah au pied du Dadès",
          ],
        },
        {
          dayLabel: "J2",
          title: "Gorges du Dadès → Tinghir (Todra) → Merzouga",
          description:
            "Des falaises de 300 m aux dunes dorées de l'Erg Chebbi.",
          steps: [
            "Route matinale vers Tinghir et les Gorges du Todra",
            "Traversée du paysage désertique vers Merzouga",
            "Balade à dos de chameau au coucher du soleil",
            "Dîner berbère et nuit en camp de charme sous les étoiles",
          ],
        },
        {
          dayLabel: "J3",
          title: "Merzouga → Agdez → Ouarzazate — Oasis de Fint",
          description:
            "Retour vers le nord par la palmeraie du Drâa et l'oasis secrète de Fint.",
          steps: [
            "Option lever de soleil sur les dunes",
            "Route par la vallée du Drâa et Agdez",
            "Arrivée à Ouarzazate — découverte de l'oasis de Fint",
            "Dîner et nuit à Ouarzazate ou en kasbah à l'oasis de Fint",
          ],
        },
        {
          dayLabel: "J4",
          title: "Ouarzazate / Fint → Marrakech",
          description:
            "Dernière étape à travers le Haut Atlas jusqu'à Marrakech.",
          steps: [
            "Petit-déjeuner à l'hébergement",
            "Traversée du Haut Atlas par le col du Tichka",
            "Arrêt photo possible à Aït Benhaddou selon l'horaire",
            "Arrivée à Marrakech en fin d'après-midi",
          ],
        },
      ],
      included: [
        "Transport au choix : 4×4, van de luxe ou minibus (selon groupe)",
        "3 nuits (riad + camp + riad/kasbah)",
        "Petits-déjeuners quotidiens",
        "Dîner au camp berbère",
        "Balade en dromadaire",
        "Guide-chauffeur professionnel francophone",
      ],
      notIncluded: [
        "Vols internationaux",
        "Déjeuners",
        "Dîners (sauf au camp du désert)",
        "Entrées musées et monuments",
        "Pourboires guide et personnel",
        "Assurance voyage",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "750 €/pers." },
        { travelers: "3–4 voyageurs", price: "750 €/pers." },
        { travelers: "5–8 voyageurs", price: "570 €/pers." },
        { travelers: "9–10 voyageurs", price: "531 €/pers." },
        { travelers: "11–17 voyageurs", price: "469 €/pers." },
      ],
      faqs: [
        {
          question: "Peut-on annuler ce circuit sans frais ?",
          answer:
            "Oui, annulation gratuite jusqu'à 48 heures avant le départ. Au-delà, des frais peuvent s'appliquer selon les prestations engagées.",
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix ?",
          answer:
            "Le transport privé climatisé, 3 nuits d'hébergement, les petits-déjeuners, le dîner au camp, la balade en dromadaire et un guide francophone. Déjeuners, dîners hors camp et entrées sont en sus.",
        },
        {
          question: "Quel type de véhicule est utilisé ?",
          answer:
            "4×4, van de luxe ou minibus selon la taille de votre groupe. Tous climatisés et entretenus pour le confort sur les longues routes du Sud.",
        },
        {
          question: "Le lever de soleil sur les dunes est-il inclus ?",
          answer:
            "Oui, option gratuite le J3 matin avant le départ de Merzouga. Réveil tôt recommandé pour profiter des couleurs sur l'Erg Chebbi.",
        },
        {
          question: "Quelle est la meilleure saison ?",
          answer:
            "Mars à mai et septembre à novembre offrent les températures les plus douces. Le circuit est opérable toute l'année.",
        },
        {
          question: "Comment se paie le circuit ?",
          answer:
            "Acompte de 30 % à la réservation, solde avant le départ. Paiement par virement bancaire ou espèces. Devis détaillé sur demande.",
        },
      ],
    },
    "grand-tour-3j": {
      metaTitle:
        "Circuit 3 jours Marrakech — Chefchaouen | Red Nomad",
      metaDescription:
        "Circuit 3 jours de Marrakech à Chefchaouen : Casablanca, Rabat, Fès la ville la plus traditionnelle du Maroc et les ruelles bleues de Chefchaouen. Guide francophone.",
      subtitle: "De Marrakech à la ville bleue",
      difficulty: "Modéré",
      duration: "3 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Rejoignez un circuit de 3 jours de Marrakech à Chefchaouen. Découvrez Fès, la ville la plus traditionnelle du Maroc, et les ruelles étroites de la ville bleue Chefchaouen. Escales dans les villes de Rabat et Casablanca le long de la côte atlantique, entre médinas impériales, architecture moderne et paysages du Rif.",
      highlights: [
        "Casablanca — mosquée Hassan II et corniche atlantique",
        "Rabat — Kasbah des Oudayas et capitale administrative",
        "Fès el-Bali — la ville la plus traditionnelle du Maroc",
        "Tanneries, medersas et souks aux ruelles étroites",
        "Chefchaouen — la perle bleue du Rif et ses ruelles photogéniques",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech — Casablanca — Rabat",
          description:
            "Route vers la côte atlantique et les grandes villes du Nord.",
          steps: [
            "08h00 — Départ de Marrakech",
            "Casablanca : mosquée Hassan II (visite extérieure ou intérieure en option), corniche",
            "Rabat : Kasbah des Oudayas, Tour Hassan et médina",
            "Nuit en riad ou hôtel à Rabat",
          ],
        },
        {
          dayLabel: "J2",
          title: "Rabat — Fès — la ville la plus traditionnelle",
          description:
            "Immersion dans la médina la plus authentique du Maghreb.",
          steps: [
            "Route matinale vers Fès",
            "Visite de Fès el-Bali : tanneries Chouara, médersas et souks",
            "Découverte des ruelles étroites et de l'artisanat ancestral",
            "Nuit en riad dans la médina de Fès",
          ],
        },
        {
          dayLabel: "J3",
          title: "Fès — Chefchaouen — la ville bleue",
          description:
            "Traversée du Rif jusqu'à la perle bleue de Chefchaouen.",
          steps: [
            "08h00 — Départ de Fès vers le nord",
            "Route panoramique à travers les montagnes du Rif",
            "Chefchaouen : médina bleue, ruelles étroites, place Outa el-Hammam",
            "Ras El Ma et fin du circuit à Chefchaouen",
          ],
        },
      ],
      included: [
        "Transport privé climatisé pendant 3 jours",
        "Guide-chauffeur francophone expérimenté",
        "Petit-déjeuners quotidiens",
        "Prise en charge à votre riad ou hôtel à Marrakech",
      ],
      notIncluded: [
        "Hébergements (riads à Rabat, Fès et Chefchaouen)",
        "Déjeuners et dîners",
        "Entrées monuments et sites historiques",
        "Boissons, activités optionnelles et dépenses personnelles",
        "Retour vers Marrakech (transfert sur demande)",
        "Pourboires guide et personnel d'hébergement",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "550 €/pers." },
        { travelers: "3–4 voyageurs", price: "450 €/pers." },
        { travelers: "5–8 voyageurs", price: "320 €/pers." },
        { travelers: "9–10 voyageurs", price: "290 €/pers." },
        { travelers: "11–17 voyageurs", price: "290 €/pers." },
      ],
      faqs: [
        {
          question: "Le circuit se termine-t-il à Chefchaouen ?",
          answer:
            "Oui, le programme se conclut à Chefchaouen le J3. Nous pouvons organiser un transfert retour vers Marrakech, Fès ou Tanger sur demande.",
        },
        {
          question: "Peut-on commencer à Casablanca ?",
          answer:
            "Oui, nous adaptons le point de départ et les transferts aéroport selon vos vols et votre hébergement.",
        },
        {
          question: "Faut-il beaucoup marcher à Fès et Chefchaouen ?",
          answer:
            "Les médinas se visitent à pied (2–4 h par ville), souvent dans des ruelles étroites. Le reste du trajet se fait en véhicule privé.",
        },
        {
          question: "Quels types d'hébergement sont prévus ?",
          answer:
            "Riads de charme à Rabat, Fès et Chefchaouen. L'hébergement est facturé à part, selon votre budget.",
        },
        {
          question: "Quelle est la meilleure saison ?",
          answer:
            "Le printemps et l'automne sont idéaux. Chefchaouen est agréable en été grâce à l'altitude du Rif.",
        },
        {
          question: "Comment se paie le circuit ?",
          answer:
            "Acompte de 30 % à la réservation, solde avant ou à l'arrivée. Paiement par virement ou espèces. Devis détaillé sur demande.",
        },
      ],
    },
    "imperial-cities-8j": {
      metaTitle:
        "Villes Impériales Maroc 8 jours — Fès, Meknès, Marrakech | Red Nomad",
      metaDescription:
        "Circuit 8 jours à travers les villes impériales du Maroc : Casablanca, Rabat, Volubilis, Meknès, Fès UNESCO et Chefchaouen la bleue. Guide francophone, petits groupes.",
      subtitle: "Du littoral atlantique à la ville bleue",
      difficulty: "Modéré",
      duration: "8 jours",
      groupSize: "1–17 personnes",
      departure: "Casablanca",
      languages: "Français, English",
      about:
        "Un circuit de 8 jours à travers les plus belles villes du Maroc : la modernité de Casablanca, l'élégance royale de Rabat, les souks millénaires de Fès et la ville bleue de Chefchaouen dans le Rif. Entre sites UNESCO, ruines romaines de Volubilis et médersas de Fès, découvrez le Maroc historique en petit groupe avec guide local.",
      highlights: [
        "Mosquée Hassan II de Casablanca",
        "Médina de Rabat (UNESCO)",
        "Médina de Fès (UNESCO)",
        "Chefchaouen la bleue",
        "Volubilis — ruines romaines UNESCO",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Arrivée à Casablanca",
          description: "Accueil à l'aéroport et première immersion dans la métropole atlantique.",
          steps: [
            "Accueil à l'aéroport Mohammed V",
            "Visite de la Mosquée Hassan II (extérieur ou intérieur avec guide en option)",
            "Installation à l'hôtel — soirée libre sur la corniche",
          ],
        },
        {
          dayLabel: "J2",
          title: "Casablanca → Rabat",
          description: "Découverte de la capitale administrative du Royaume.",
          steps: [
            "Route vers Rabat",
            "Kasbah des Oudayas, Tour Hassan et Mausolée Mohammed V",
            "Balade dans la médina de Rabat",
            "Nuit à Rabat",
          ],
        },
        {
          dayLabel: "J3",
          title: "Rabat → Volubilis → Meknès → Fès",
          description: "Antiquité romaine et cité impériale avant d'atteindre Fès.",
          steps: [
            "Visite des ruines romaines de Volubilis (UNESCO)",
            "Meknès et la porte Bab Mansour",
            "Route vers Fès — arrivée en soirée",
            "Nuit en riad à Fès",
          ],
        },
        {
          dayLabel: "J4",
          title: "Fès — Journée complète",
          description: "Immersion dans la médina la plus ancienne du monde arabe.",
          steps: [
            "Visite guidée de Fès el-Bali : Université al-Qarawiyyin",
            "Médersa Bou Inania et tanneries Chouara",
            "Souks, artisanat et fondouks historiques",
            "Nuit en riad à Fès",
          ],
        },
        {
          dayLabel: "J5",
          title: "Fès → Chefchaouen",
          description: "Traversée du Rif jusqu'à la perle bleue.",
          steps: [
            "Route matinale vers les montagnes du Rif",
            "Arrivée à Chefchaouen en début d'après-midi",
            "Découverte libre des ruelles bleues et de la place Outa el-Hammam",
            "Nuit en riad à Chefchaouen",
          ],
        },
        {
          dayLabel: "J6",
          title: "Chefchaouen — Journée libre",
          description: "Temps libre pour explorer la médina à votre rythme.",
          steps: [
            "Matinée libre dans la médina bleue",
            "Randonnée optionnelle vers la cascade Ras el-Ma",
            "Après-midi shopping artisanat et cafés en terrasse",
            "Nuit en riad à Chefchaouen",
          ],
        },
        {
          dayLabel: "J7",
          title: "Chefchaouen → Casablanca",
          description: "Retour vers la côte atlantique.",
          steps: [
            "Départ matinal vers Casablanca",
            "Arrêts possibles à Asilah ou Larache",
            "Arrivée à Casablanca en fin d'après-midi",
            "Nuit à Casablanca",
          ],
        },
        {
          dayLabel: "J8",
          title: "Casablanca — Départ",
          description: "Fin de circuit et transfert aéroport.",
          steps: [
            "Petit-déjeuner à l'hôtel",
            "Transfert aéroport selon horaires de vol",
            "Fin du circuit",
          ],
        },
      ],
      included: [
        "Transport climatisé pendant 8 jours",
        "7 nuits en hôtel ou riad (selon programme)",
        "Petits-déjeuners quotidiens",
        "Visites guidées des médinas de Fès et Rabat",
        "Guide-chauffeur francophone expérimenté",
      ],
      notIncluded: [
        "Vols internationaux",
        "Déjeuners et dîners",
        "Entrées musées et monuments (~5–10 €/site)",
        "Pourboires guide et personnel d'hébergement",
        "Assurance voyage",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "1 714 €/pers." },
        { travelers: "3–4 voyageurs", price: "1 174 €/pers." },
        { travelers: "5–8 voyageurs", price: "914 €/pers." },
        { travelers: "9–10 voyageurs", price: "871 €/pers." },
        { travelers: "11–17 voyageurs", price: "785 €/pers." },
      ],
      faqs: [
        {
          question: "Peut-on annuler ce circuit sans frais ?",
          answer:
            "Oui, annulation gratuite jusqu'à 48 heures avant le départ. Au-delà, des frais peuvent s'appliquer selon les prestations engagées.",
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix ?",
          answer:
            "Le transport privé climatisé, 7 nuits d'hébergement, les petits-déjeuners, les visites guidées des médinas prévues au programme et un guide francophone. Repas du midi et du soir, vols et entrées sont en sus.",
        },
        {
          question: "Combien de personnes maximum dans le groupe ?",
          answer:
            "De 1 à 17 personnes. Privatisation possible pour votre famille ou vos amis — demandez un devis personnalisé.",
        },
        {
          question: "Que dois-je apporter ?",
          answer:
            "Vêtements adaptés à la saison, chaussures confortables pour marcher dans les médinas, casquette, crème solaire et une veste légère pour les soirées à Chefchaouen.",
        },
        {
          question: "Quelle est la meilleure saison ?",
          answer:
            "Mars à mai et septembre à novembre offrent les températures les plus douces. Le circuit est opérable toute l'année.",
        },
        {
          question: "Comment se paie le circuit ?",
          answer:
            "Acompte de 30 % à la réservation, solde avant le départ. Paiement par virement bancaire ou espèces. Devis détaillé sur demande.",
        },
      ],
    },
    "southern-coast-8j": {
      metaTitle:
        "Taroudante & Essaouira — 8 jours sud marocain & côte atlantique | Red Nomad",
      metaDescription:
        "Circuit 8 jours au sud du Maroc : Taroudante, Tafraoute, Taghazout et Essaouira. Anti-Atlas, forêt d'arganiers UNESCO et côte atlantique. Départ Marrakech.",
      subtitle: "Souss, Anti-Atlas & Atlantique",
      difficulty: "Modéré",
      duration: "8 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Un circuit unique de 8 jours qui explore le Souss et l'Anti-Atlas, loin des sentiers battus. Taroudante la rose, les roches peintes de Tafraoute, le village surf de Taghazout et la cité des alizés d'Essaouira. Entre montagnes roses, falaises atlantiques et médina UNESCO, découvrez une facette authentique et préservée du Maroc.",
      highlights: [
        "Taroudante — la petite Marrakech",
        "Gorges de Aït Baha",
        "Tafraoute et roches peintes de Jean Vérame",
        "Taghazout — village surf sur l'Atlantique",
        "Essaouira — cité des alizés UNESCO",
        "Forêt d'arganiers (UNESCO)",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech → Taroudante",
          description: "Traversée de l'Atlas vers la perle du Souss.",
          steps: [
            "08h00 — Départ de Marrakech",
            "Route via le col du Tizi n'Test (2 092 m) ou itinéraire alternatif selon saison",
            "Arrêt dans les gorges de Aït Baha",
            "Arrivée à Taroudante, la « Petite Marrakech » — soirée libre",
            "Dîner et nuit en riad à Taroudante",
          ],
        },
        {
          dayLabel: "J2",
          title: "Taroudante → Tafraoute",
          description: "Immersion dans l'Anti-Atlas et ses paysages roses.",
          steps: [
            "Petit-déjeuner au riad",
            "Route à travers l'Anti-Atlas",
            "Arrivée à Tafraoute, village niché entre rochers roses",
            "Temps libre pour explorer le village",
            "Nuit à Tafraoute",
          ],
        },
        {
          dayLabel: "J3",
          title: "Tafraoute — Journée libre",
          description: "Découverte à votre rythme de l'Anti-Atlas.",
          steps: [
            "Visite des roches peintes de Jean Vérame",
            "Promenade dans la vallée des Ammeln et villages berbères",
            "Déjeuner libre au village",
            "Après-midi libre — randonnée ou repos",
            "Nuit à Tafraoute",
          ],
        },
        {
          dayLabel: "J4",
          title: "Tafraoute → Tiznit → Mirleft",
          description: "De la montagne à la côte atlantique sauvage.",
          steps: [
            "Route vers Tiznit, ville des bijoutiers en argent",
            "Visite de la médina et des souks d'argent",
            "Route côtière vers Mirleft, falaises spectaculaires",
            "Coucher de soleil sur l'Atlantique",
            "Nuit à Mirleft",
          ],
        },
        {
          dayLabel: "J5",
          title: "Mirleft → Massa → Taghazout",
          description: "Réserve naturelle et capitale du surf marocain.",
          steps: [
            "Route côtière via la réserve de Souss-Massa (observation d'oiseaux)",
            "Traversée de la forêt d'arganiers UNESCO",
            "Arrivée à Taghazout, village de surfeurs",
            "Installation au camp ou riad",
            "Nuit à Taghazout",
          ],
        },
        {
          dayLabel: "J6",
          title: "Taghazout — Plages & surf",
          description: "Journée libre face à l'océan Atlantique.",
          steps: [
            "Matinée libre — plage et détente",
            "Cours de surf possible (Hash Point, Anchor Point)",
            "Marché local et cafés en terrasse",
            "Coucher de soleil sur l'Atlantique",
            "Nuit à Taghazout",
          ],
        },
        {
          dayLabel: "J7",
          title: "Taghazout → Essaouira",
          description: "Route côtière vers la cité des alizés.",
          steps: [
            "Route vers Essaouira via la côte atlantique",
            "Visite du port de pêche et des remparts UNESCO",
            "Galeries d'art et médina",
            "Guide local pour la découverte d'Essaouira",
            "Nuit en riad à Essaouira",
          ],
        },
        {
          dayLabel: "J8",
          title: "Essaouira → Marrakech — Départ",
          description: "Dernière matinée et retour à Marrakech.",
          steps: [
            "Matinée libre à Essaouira",
            "Route de retour vers Marrakech (~2h30)",
            "Arrivée à Marrakech en fin d'après-midi",
            "Fin du circuit",
          ],
        },
      ],
      included: [
        "Transport climatisé pendant 8 jours",
        "7 nuits en riads et hôtels (selon programme)",
        "Petits-déjeuners quotidiens",
        "Guides locaux à Tafraoute et Essaouira",
        "Guide-chauffeur francophone expérimenté",
      ],
      notIncluded: [
        "Vols internationaux",
        "Déjeuners et dîners",
        "Cours de surf, kitesurf et activités nautiques",
        "Entrées sites et musées",
        "Pourboires guide et personnel d'hébergement",
        "Assurance voyage",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "1 692 €/pers." },
        { travelers: "3–4 voyageurs", price: "1 130 €/pers." },
        { travelers: "5–8 voyageurs", price: "900 €/pers." },
        { travelers: "9–10 voyageurs", price: "850 €/pers." },
        { travelers: "11–17 voyageurs", price: "742 €/pers." },
      ],
      faqs: [
        {
          question: "Peut-on annuler ce circuit sans frais ?",
          answer:
            "Oui, annulation gratuite jusqu'à 48 heures avant le départ. Au-delà, des frais peuvent s'appliquer selon les prestations engagées.",
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix ?",
          answer:
            "Le transport privé climatisé, 7 nuits d'hébergement, les petits-déjeuners, les guides locaux à Tafraoute et Essaouira et un guide-chauffeur francophone. Repas, vols, surf et entrées sont en sus.",
        },
        {
          question: "Faut-il savoir surfer à Taghazout ?",
          answer:
            "Non, le surf est optionnel. Des cours pour débutants sont disponibles sur place (non inclus). La plage reste accessible à tous.",
        },
        {
          question: "Le col du Tizi n'Test est-il toujours emprunté ?",
          answer:
            "Selon la saison et la météo, nous emprunons le Tizi n'Test ou un itinéraire alternatif plus bas. Votre guide adapte la route pour votre sécurité et votre confort.",
        },
        {
          question: "Quelle est la meilleure saison ?",
          answer:
            "Mars à mai et septembre à novembre sont idéaux. L'été convient à la côte (brise marine). L'hiver reste doux au sud et sur la côte atlantique.",
        },
        {
          question: "Comment se paie le circuit ?",
          answer:
            "Acompte de 30 % à la réservation, solde avant le départ. Paiement par virement bancaire ou espèces. Devis détaillé sur demande.",
        },
      ],
    },
    "megdaz-3j": {
      metaTitle:
        "Vallée de Megdaz 3 jours — Trek berbère authentique | Red Nomad",
      metaDescription:
        "Circuit 3 jours dans la vallée de Megdaz : trek entre villages berbères, nuit chez l'habitant, terrasses agricoles et montagnes de l'Atlas. Expérience authentique depuis Marrakech.",
      subtitle: "L'Atlas secret des Berbères",
      difficulty: "Modéré",
      duration: "3 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "La vallée de Megdaz, l'un des coins les plus préservés du Haut Atlas, se découvre à pied entre terrasses en pierre, villages accrochés à la montagne et accueil chaleureux chez l'habitant. Trois jours loin du tourisme de masse pour vivre la vie berbère au rythme des sentiers, des champs et du thé à la menthe.",
      highlights: [
        "Trek dans un village berbère préservé de l'Atlas",
        "Nuit chez l'habitant — hospitalité authentique",
        "Marche le long des terrasses agricoles en pierre",
        "Paysages du Haut Atlas oriental — sommets et vallées",
        "Rencontre avec artisans et agriculteurs locaux",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech — Azilal — Megdaz",
          description:
            "Route vers le Haut Atlas et première immersion dans la vallée.",
          steps: [
            "08h00 — Départ de Marrakech via le col de Tichka ou Beni Mellal",
            "Azilal et cascades d'Ouzoud (arrêt photo optionnel)",
            "Arrivée à Megdaz, accueil thé à la menthe chez l'habitant",
            "Promenade douce dans le village et découverte des terrasses",
          ],
        },
        {
          dayLabel: "J2",
          title: "Trek vallée de Megdaz",
          description:
            "Journée de marche entre villages, jardins et points de vue.",
          steps: [
            "Petit-déjeuner berbère avec la famille d'accueil",
            "Trek 4–5 h entre terrasses, canaux d'irrigation et villages",
            "Déjeuner pique-nique ou chez l'habitant en route",
            "Après-midi libre : rencontres, artisanat ou repos",
            "Dîner traditionnel et nuit chez l'habitant",
          ],
        },
        {
          dayLabel: "J3",
          title: "Megdaz — Marrakech",
          description:
            "Dernière marche matinale et retour vers Marrakech.",
          steps: [
            "Matinée — Marche légère ou visite d'une coopérative locale",
            "Déjeuner au village avant le départ",
            "Route de retour vers Marrakech via l'Atlas",
            "~18h00 — Arrivée à Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé aller-retour depuis Marrakech",
        "Guide local berbère francophone",
        "Trek avec accompagnateur local le J2",
        "Tous les repas traditionnels pendant le séjour à Megdaz",
      ],
      notIncluded: [
        "Hébergement chez l'habitant (2 nuits)",
        "Boissons et snacks hors repas",
        "Équipement de randonnée personnel",
        "Assurance voyage",
        "Pourboires pour la famille d'accueil (optionnel)",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "515 €/pers." },
        { travelers: "3–4 voyageurs", price: "420 €/pers." },
        { travelers: "5–8 voyageurs", price: "300 €/pers." },
        { travelers: "9–10 voyageurs", price: "270 €/pers." },
        { travelers: "11–17 voyageurs", price: "270 €/pers." },
      ],
      faqs: [
        {
          question: "Quel niveau de marche est nécessaire ?",
          answer:
            "Marche modérée 4–5 h avec dénivelé léger. Sentiers parfois escarpés — chaussures de randonnée recommandées.",
        },
        {
          question: "Comment sont les nuits chez l'habitant ?",
          answer:
            "Chambres simples et propres chez une famille berbère. Sanitaires partagés. Expérience authentique, pas un hôtel.",
        },
        {
          question: "Y a-t-il de l'eau chaude ?",
          answer:
            "Eau chaude limitée en montagne. Nous recommandez d'apporter serviette microfibre et gel douche.",
        },
        {
          question: "Peut-on faire ce trek en hiver ?",
          answer:
            "Oui avec équipement adapté ( novembre–mars ). Neige possible en altitude — prévoyez vêtements chauds.",
        },
        {
          question: "Le circuit convient-il aux végétariens ?",
          answer:
            "Oui, prévenez-nous à l'avance. Les repas berbères s'adaptent facilement (légumes, couscous, tajines).",
        },
      ],
    },
  },
  en: {
    "circuit-sahara-atlas-3j": {
      metaTitle:
        "3-Day Marrakech, Sahara & Atlas Circuit | Red Nomad",
      metaDescription:
        "Private 3-day circuit from Marrakech: High Atlas, Aït Benhaddou, Merzouga, luxury desert camp and return. French-speaking guide, small groups.",
      subtitle: "Marrakech, desert and Atlas in 3 days",
      difficulty: "Moderate",
      duration: "3 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Three days to experience the essentials of southern Morocco: crossing the High Atlas and Tizi n'Tichka pass, UNESCO kasbah of Aït Benhaddou, gorges road to Merzouga, magical night in a luxury camp on Erg Chebbi dunes and return to Marrakech. A perfect condensed journey between mountains, desert and Berber heritage.",
      highlights: [
        "High Atlas crossing — Tizi n'Tichka pass (2260 m)",
        "Aït Benhaddou kasbah — UNESCO site and film location",
        "Todra Gorges and southern palm groves",
        "Camel ride at sunset",
        "Luxury bivouac night on Merzouga dunes",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Atlas — Aït Benhaddou — Gorges",
          description:
            "Scenic road south through the High Atlas and kasbahs.",
          steps: [
            "07:00 — Departure from Marrakech, Tizi n'Tichka pass crossing",
            "Visit Aït Benhaddou, UNESCO-listed kasbah",
            "Ouarzazate and Todra Gorges road",
            "Night in kasbah or hotel near Merzouga",
          ],
        },
        {
          dayLabel: "D2",
          title: "Merzouga — Camel ride — Luxury camp",
          description:
            "A day dedicated to the Sahara and a night under the stars.",
          steps: [
            "Free morning or visit to Khamlia village",
            "16:30 — Camel ride to Erg Chebbi dunes",
            "Sunset over the golden dunes",
            "Luxury camp night: Berber dinner and music by the fire",
          ],
        },
        {
          dayLabel: "D3",
          title: "Sunrise — Atlas — Return to Marrakech",
          description:
            "Wake up on the dunes and return via the Atlas.",
          steps: [
            "06:00 — Sunrise on the dunes (optional)",
            "Breakfast at camp, 4x4 return",
            "Return via Rissani, gorges and Atlas villages",
            "~20:00 — Arrival in Marrakech",
          ],
        },
      ],
      included: [
        "Private 4x4 or air-conditioned minibus (3 days)",
        "French-speaking Berber driver-guide",
        "1 night in luxury desert camp with dinner and breakfast",
        "Camel ride (~1h30 round trip)",
      ],
      notIncluded: [
        "Accommodation outside camp (kasbah or hotel D1)",
        "Lunches and D1 dinner",
        "Drinks and personal expenses",
        "Monument entrances (~70 MAD Aït Benhaddou)",
        "Tips for guide and staff (local custom)",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€95/person" },
        { travelers: "3–4 travelers", price: "€85–90/person" },
        { travelers: "5–7 travelers", price: "€75–85/person" },
        { travelers: "8–14 travelers", price: "€68–78/person" },
        { travelers: "15–17 travelers", price: "€65/person" },
      ],
      faqs: [
        {
          question: "Is there a lot of driving for 3 days?",
          answer:
            "Yes, expect 8–9 hours of driving on D1 and D3. We take regular breaks at Aït Benhaddou and the gorges. For a more complete tour with Fes and Chefchaouen, choose the 3-day Marrakech–Chefchaouen tour.",
        },
        {
          question: "What comfort level for the desert night?",
          answer:
            "Luxury bivouac with private tents, comfortable bedding, showers and traditional meals. Authentic without sacrificing comfort.",
        },
        {
          question: "Is this circuit suitable for families?",
          answer:
            "Yes, vehicles are spacious and stages are adaptable. The camel ride is accessible from age 5–6 with assistance.",
        },
        {
          question: "What is the best season?",
          answer:
            "March to May and September to November are ideal. Summer is possible with early departures; winter remains pleasant in the desert.",
        },
        {
          question: "How do I book?",
          answer:
            "Contact us via WhatsApp or email with your dates and number of travelers. 30% deposit on confirmation, balance on arrival.",
        },
      ],
    },
    "sahara-dades-4j": {
      metaTitle:
        "Sahara, Dades Gorges & Merzouga — 4 Days | Red Nomad",
      metaDescription:
        "4-day tour from Marrakech: UNESCO Aït Benhaddou, Dades and Todra gorges, Erg Chebbi at Merzouga, Drâa Valley and Fint oasis. French-speaking guide.",
      subtitle: "Desert, gorges and southern kasbahs",
      difficulty: "Moderate",
      duration: "4 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "A 4-day itinerary: climb to the Dades Gorges via UNESCO Aït Benhaddou; discover Todra Gorges at Tinghir then the Merzouga desert; return north through the Drâa Valley and Agdez to Fint oasis and Ouarzazate; final leg back to Marrakech through the High Atlas.",
      highlights: [
        "Aït Benhaddou (UNESCO)",
        "Dades & Todra Gorges (Tinghir)",
        "Erg Chebbi — Merzouga",
        "Drâa Valley & Agdez",
        "Fint Oasis",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech → Dades Gorges (via Aït Benhaddou)",
          description:
            "Atlas crossing and immersion in southern kasbahs.",
          steps: [
            "7:00 AM — Departure from Marrakech, Tizi n'Tichka pass",
            "Visit UNESCO Aït Benhaddou kasbah",
            "Valley of Roses and Dades Gorges",
            "Walk in the gorges — dinner and night in kasbah at the foot of Dades",
          ],
        },
        {
          dayLabel: "D2",
          title: "Dades Gorges → Tinghir (Todra) → Merzouga",
          description:
            "From 300 m cliffs to the golden dunes of Erg Chebbi.",
          steps: [
            "Morning drive to Tinghir and Todra Gorges",
            "Cross desert landscape to Merzouga",
            "Camel ride at sunset",
            "Berber dinner and night in luxury desert camp under the stars",
          ],
        },
        {
          dayLabel: "D3",
          title: "Merzouga → Agdez → Ouarzazate — Fint Oasis",
          description:
            "Return north via Drâa palm grove and secret Fint oasis.",
          steps: [
            "Optional sunrise on the dunes",
            "Drive through Drâa Valley and Agdez",
            "Arrive in Ouarzazate — discover Fint oasis",
            "Dinner and night in Ouarzazate or kasbah at Fint oasis",
          ],
        },
        {
          dayLabel: "D4",
          title: "Ouarzazate / Fint → Marrakech",
          description:
            "Final leg through the High Atlas back to Marrakech.",
          steps: [
            "Breakfast at accommodation",
            "Cross High Atlas via Tichka pass",
            "Possible photo stop at Aït Benhaddou depending on schedule",
            "Arrive in Marrakech late afternoon",
          ],
        },
      ],
      included: [
        "Transport of choice: 4×4, luxury van or minibus (depending on group)",
        "3 nights (riad + camp + riad/kasbah)",
        "Daily breakfasts",
        "Dinner at Berber camp",
        "Camel ride",
        "Professional French-speaking driver-guide",
      ],
      notIncluded: [
        "International flights",
        "Lunches",
        "Dinners (except at desert camp)",
        "Museum and monument entries",
        "Tips for guide and staff",
        "Travel insurance",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€750/person" },
        { travelers: "3–4 travelers", price: "€750/person" },
        { travelers: "5–8 travelers", price: "€570/person" },
        { travelers: "9–10 travelers", price: "€531/person" },
        { travelers: "11–17 travelers", price: "€469/person" },
      ],
      faqs: [
        {
          question: "Can I cancel this tour for free?",
          answer:
            "Yes, free cancellation up to 48 hours before departure. After that, fees may apply depending on services booked.",
        },
        {
          question: "What is included in the price?",
          answer:
            "Private air-conditioned transport, 3 nights accommodation, breakfasts, dinner at camp, camel ride and French-speaking guide. Lunches, dinners outside camp and entries are extra.",
        },
        {
          question: "What type of vehicle is used?",
          answer:
            "4×4, luxury van or minibus depending on group size. All air-conditioned and maintained for comfort on long southern routes.",
        },
        {
          question: "Is sunrise on the dunes included?",
          answer:
            "Yes, free optional activity on D3 morning before leaving Merzouga. Early wake-up recommended to enjoy Erg Chebbi colors.",
        },
        {
          question: "What is the best season?",
          answer:
            "March to May and September to November offer the mildest temperatures. The tour runs year-round.",
        },
        {
          question: "How is payment handled?",
          answer:
            "30% deposit on booking, balance before departure. Bank transfer or cash. Detailed quote on request.",
        },
      ],
    },
    "grand-tour-3j": {
      metaTitle:
        "3-Day Marrakech — Chefchaouen Tour | Red Nomad",
      metaDescription:
        "Join a 3-day tour from Marrakech to Chefchaouen. Discover Fez, the most traditional city in Morocco, Rabat, Casablanca and the narrow streets of the blue city.",
      subtitle: "From Marrakech to the blue city",
      difficulty: "Moderate",
      duration: "3 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Join a 3-day tour from Marrakech to Chefchaouen. Discover Fez, the most traditional city in Morocco, and the narrow streets of the blue city Chefchaouen. Stop by the cities of Rabat and Casablanca along the Atlantic coast — a journey through imperial medinas, modern architecture and the Rif mountains.",
      highlights: [
        "Casablanca — Hassan II Mosque and Atlantic corniche",
        "Rabat — Kasbah of the Oudayas and administrative capital",
        "Fes el-Bali — the most traditional city in Morocco",
        "Tanneries, medersas and narrow souk streets",
        "Chefchaouen — the blue pearl of the Rif and its photogenic alleys",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Casablanca — Rabat",
          description:
            "Drive to the Atlantic coast and Morocco's northern capitals.",
          steps: [
            "8:00 AM — Departure from Marrakech",
            "Casablanca: Hassan II Mosque (exterior or optional interior visit), corniche",
            "Rabat: Kasbah of the Oudayas, Hassan Tower and medina",
            "Night in a riad or hotel in Rabat",
          ],
        },
        {
          dayLabel: "D2",
          title: "Rabat — Fes — the most traditional city",
          description:
            "Deep immersion in the Maghreb's most authentic medina.",
          steps: [
            "Morning drive to Fes",
            "Visit Fes el-Bali: Chouara tanneries, medersas and souks",
            "Explore narrow streets and centuries-old crafts",
            "Night in a riad in Fes medina",
          ],
        },
        {
          dayLabel: "D3",
          title: "Fes — Chefchaouen — the blue city",
          description:
            "Cross the Rif mountains to the blue pearl of Chefchaouen.",
          steps: [
            "8:00 AM — Departure from Fes heading north",
            "Scenic drive through the Rif mountains",
            "Chefchaouen: blue medina, narrow streets, Outa el-Hammam square",
            "Ras El Ma waterfall and end of tour in Chefchaouen",
          ],
        },
      ],
      included: [
        "Private air-conditioned transport for 3 days",
        "Experienced French-speaking driver-guide",
        "Daily breakfasts",
        "Pickup at your riad or hotel in Marrakech",
      ],
      notIncluded: [
        "Accommodation (riads in Rabat, Fes and Chefchaouen)",
        "Lunches and dinners",
        "Monument and historical site entrances",
        "Drinks, optional activities and personal expenses",
        "Return transfer to Marrakech (available on request)",
        "Tips for guide and hotel staff",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€550/person" },
        { travelers: "3–4 travelers", price: "€450/person" },
        { travelers: "5–8 travelers", price: "€320/person" },
        { travelers: "9–10 travelers", price: "€290/person" },
        { travelers: "11–17 travelers", price: "€290/person" },
      ],
      faqs: [
        {
          question: "Does the tour end in Chefchaouen?",
          answer:
            "Yes, the program ends in Chefchaouen on D3. We can arrange a return transfer to Marrakech, Fes or Tangier on request.",
        },
        {
          question: "Can we start in Casablanca?",
          answer:
            "Yes, we adapt the starting point and airport transfers according to your flights and hotel.",
        },
        {
          question: "Is there a lot of walking in Fes and Chefchaouen?",
          answer:
            "Medinas are explored on foot (2–4 h per city), often through narrow alleys. The rest is by private vehicle.",
        },
        {
          question: "What type of accommodation is available?",
          answer:
            "Charming riads in Rabat, Fes and Chefchaouen. Accommodation is quoted separately according to your budget.",
        },
        {
          question: "What is the best season?",
          answer:
            "Spring and autumn are ideal. Chefchaouen stays pleasant in summer thanks to the Rif altitude.",
        },
        {
          question: "How is payment handled?",
          answer:
            "30% deposit on booking, balance before or on arrival. Bank transfer or cash. Detailed quote on request.",
        },
      ],
    },
    "imperial-cities-8j": {
      metaTitle:
        "Imperial Cities Morocco 8 Days — Fez, Meknes, Marrakech | Red Nomad",
      metaDescription:
        "8-day tour through Morocco's imperial cities: Casablanca, Rabat, Volubilis, Meknes, UNESCO Fez and blue Chefchaouen. French-speaking guide, small groups.",
      subtitle: "From the Atlantic coast to the blue city",
      difficulty: "Moderate",
      duration: "8 days",
      groupSize: "1–17 people",
      departure: "Casablanca",
      languages: "French, English",
      about:
        "An 8-day journey through Morocco's finest cities: modern Casablanca, royal Rabat, the ancient souks of Fez and blue Chefchaouen in the Rif mountains. UNESCO sites, Roman ruins at Volubilis and Fez medersas — discover historic Morocco in a small group with a local guide.",
      highlights: [
        "Hassan II Mosque in Casablanca",
        "Rabat medina (UNESCO)",
        "Fez medina (UNESCO)",
        "Blue Chefchaouen",
        "Volubilis — UNESCO Roman ruins",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Arrival in Casablanca",
          description: "Airport welcome and first taste of the Atlantic metropolis.",
          steps: [
            "Meet at Mohammed V Airport",
            "Hassan II Mosque visit (exterior or optional interior with guide)",
            "Hotel check-in — free evening on the corniche",
          ],
        },
        {
          dayLabel: "D2",
          title: "Casablanca → Rabat",
          description: "Discover the Kingdom's administrative capital.",
          steps: [
            "Drive to Rabat",
            "Kasbah of the Oudayas, Hassan Tower and Mohammed V Mausoleum",
            "Walk through Rabat medina",
            "Night in Rabat",
          ],
        },
        {
          dayLabel: "D3",
          title: "Rabat → Volubilis → Meknes → Fez",
          description: "Roman antiquity and imperial city before reaching Fez.",
          steps: [
            "Visit Volubilis Roman ruins (UNESCO)",
            "Meknes and Bab Mansour gate",
            "Drive to Fez — evening arrival",
            "Night in a riad in Fez",
          ],
        },
        {
          dayLabel: "D4",
          title: "Fez — Full day",
          description: "Deep dive into the world's oldest Arab medina.",
          steps: [
            "Guided tour of Fes el-Bali: al-Qarawiyyin University",
            "Bou Inania Medersa and Chouara tanneries",
            "Souks, crafts and historic fondouks",
            "Night in a riad in Fez",
          ],
        },
        {
          dayLabel: "D5",
          title: "Fez → Chefchaouen",
          description: "Cross the Rif to the blue pearl.",
          steps: [
            "Morning drive through the Rif mountains",
            "Arrive in Chefchaouen early afternoon",
            "Free exploration of blue alleys and Outa el-Hammam square",
            "Night in a riad in Chefchaouen",
          ],
        },
        {
          dayLabel: "D6",
          title: "Chefchaouen — Free day",
          description: "Free time to explore the medina at your own pace.",
          steps: [
            "Free morning in the blue medina",
            "Optional hike to Ras el-Ma waterfall",
            "Afternoon artisan shopping and terrace cafés",
            "Night in a riad in Chefchaouen",
          ],
        },
        {
          dayLabel: "D7",
          title: "Chefchaouen → Casablanca",
          description: "Return to the Atlantic coast.",
          steps: [
            "Morning departure to Casablanca",
            "Possible stops in Asilah or Larache",
            "Arrive in Casablanca late afternoon",
            "Night in Casablanca",
          ],
        },
        {
          dayLabel: "D8",
          title: "Casablanca — Departure",
          description: "End of tour and airport transfer.",
          steps: [
            "Breakfast at the hotel",
            "Airport transfer according to flight schedule",
            "End of tour",
          ],
        },
      ],
      included: [
        "Air-conditioned transport for 8 days",
        "7 nights in hotel or riad (as per itinerary)",
        "Daily breakfasts",
        "Guided medina tours in Fez and Rabat",
        "Experienced French-speaking driver-guide",
      ],
      notIncluded: [
        "International flights",
        "Lunches and dinners",
        "Museum and monument entries (~€5–10/site)",
        "Tips for guide and hotel staff",
        "Travel insurance",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€1,714/person" },
        { travelers: "3–4 travelers", price: "€1,174/person" },
        { travelers: "5–8 travelers", price: "€914/person" },
        { travelers: "9–10 travelers", price: "€871/person" },
        { travelers: "11–17 travelers", price: "€785/person" },
      ],
      faqs: [
        {
          question: "Can I cancel this tour for free?",
          answer:
            "Yes, free cancellation up to 48 hours before departure. After that, fees may apply depending on services booked.",
        },
        {
          question: "What is included in the price?",
          answer:
            "Private air-conditioned transport, 7 nights accommodation, breakfasts, guided medina tours as per the itinerary and a French-speaking guide. Lunches, dinners, flights and entry fees are extra.",
        },
        {
          question: "What is the maximum group size?",
          answer:
            "1 to 17 people. Private tours for your family or friends are available — request a custom quote.",
        },
        {
          question: "What should I bring?",
          answer:
            "Season-appropriate clothing, comfortable walking shoes for the medinas, hat, sunscreen and a light jacket for evenings in Chefchaouen.",
        },
        {
          question: "What is the best season?",
          answer:
            "March to May and September to November offer the mildest temperatures. The tour runs year-round.",
        },
        {
          question: "How is payment handled?",
          answer:
            "30% deposit on booking, balance before departure. Bank transfer or cash. Detailed quote on request.",
        },
      ],
    },
    "southern-coast-8j": {
      metaTitle:
        "Taroudante & Essaouira — 8-Day Southern Morocco & Atlantic Coast | Red Nomad",
      metaDescription:
        "8-day tour in southern Morocco: Taroudante, Tafraoute, Taghazout and Essaouira. Anti-Atlas, UNESCO argan forest and Atlantic coast. Departure from Marrakech.",
      subtitle: "Souss, Anti-Atlas & Atlantic",
      difficulty: "Moderate",
      duration: "8 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "A unique 8-day tour exploring the Souss and Anti-Atlas, off the beaten track. Rose-hued Taroudante, Jean Vérame's painted rocks in Tafraoute, surf village Taghazout and wind-swept UNESCO Essaouira. Between pink mountains, wild Atlantic cliffs and a bohemian medina, discover an authentic, lesser-known Morocco.",
      highlights: [
        "Taroudante — little Marrakech",
        "Aït Baha gorges",
        "Tafraoute and Jean Vérame painted rocks",
        "Taghazout — Atlantic surf village",
        "Essaouira — UNESCO wind city",
        "Argan forest (UNESCO)",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech → Taroudante",
          description: "Cross the Atlas to the pearl of the Souss.",
          steps: [
            "8:00 AM — Departure from Marrakech",
            "Drive via Tizi n'Test pass (2,092 m) or alternative route depending on season",
            "Stop in Aït Baha gorges",
            "Arrive in Taroudante, the 'Little Marrakech' — free evening",
            "Dinner and night in a riad in Taroudante",
          ],
        },
        {
          dayLabel: "D2",
          title: "Taroudante → Tafraoute",
          description: "Deep into the Anti-Atlas and its pink landscapes.",
          steps: [
            "Breakfast at the riad",
            "Drive through the Anti-Atlas",
            "Arrive in Tafraoute, village nestled among pink rocks",
            "Free time to explore the village",
            "Night in Tafraoute",
          ],
        },
        {
          dayLabel: "D3",
          title: "Tafraoute — Free day",
          description: "Discover the Anti-Atlas at your own pace.",
          steps: [
            "Visit Jean Vérame painted rocks",
            "Walk in the Ammeln Valley and surrounding Berber villages",
            "Free lunch in the village",
            "Free afternoon — hike or rest",
            "Night in Tafraoute",
          ],
        },
        {
          dayLabel: "D4",
          title: "Tafraoute → Tiznit → Mirleft",
          description: "From the mountains to the wild Atlantic coast.",
          steps: [
            "Drive to Tiznit, city of silver jewellers",
            "Visit the medina and silver souks",
            "Coastal road to Mirleft, spectacular cliffs",
            "Sunset over the Atlantic",
            "Night in Mirleft",
          ],
        },
        {
          dayLabel: "D5",
          title: "Mirleft → Massa → Taghazout",
          description: "Nature reserve and Morocco's surf capital.",
          steps: [
            "Coastal drive via Souss-Massa reserve (birdwatching)",
            "Through the UNESCO argan forest",
            "Arrive in Taghazout, surfers' village",
            "Check-in at camp or riad",
            "Night in Taghazout",
          ],
        },
        {
          dayLabel: "D6",
          title: "Taghazout — Beaches & surf",
          description: "Free day facing the Atlantic Ocean.",
          steps: [
            "Free morning — beach and relaxation",
            "Optional surf lessons (Hash Point, Anchor Point)",
            "Local market and terrace cafés",
            "Sunset over the Atlantic",
            "Night in Taghazout",
          ],
        },
        {
          dayLabel: "D7",
          title: "Taghazout → Essaouira",
          description: "Coastal road to the city of trade winds.",
          steps: [
            "Drive to Essaouira along the Atlantic coast",
            "Visit fishing port and UNESCO ramparts",
            "Art galleries and medina",
            "Local guide for Essaouira discovery",
            "Night in a riad in Essaouira",
          ],
        },
        {
          dayLabel: "D8",
          title: "Essaouira → Marrakech — Departure",
          description: "Last morning and return to Marrakech.",
          steps: [
            "Free morning in Essaouira",
            "Return drive to Marrakech (~2.5 h)",
            "Arrive in Marrakech late afternoon",
            "End of tour",
          ],
        },
      ],
      included: [
        "Air-conditioned transport for 8 days",
        "7 nights in riads and hotels (as per itinerary)",
        "Daily breakfasts",
        "Local guides in Tafraoute and Essaouira",
        "Experienced French-speaking driver-guide",
      ],
      notIncluded: [
        "International flights",
        "Lunches and dinners",
        "Surf, kitesurf and water sports",
        "Site and museum entries",
        "Tips for guide and hotel staff",
        "Travel insurance",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€1,692/person" },
        { travelers: "3–4 travelers", price: "€1,130/person" },
        { travelers: "5–8 travelers", price: "€900/person" },
        { travelers: "9–10 travelers", price: "€850/person" },
        { travelers: "11–17 travelers", price: "€742/person" },
      ],
      faqs: [
        {
          question: "Can I cancel this tour for free?",
          answer:
            "Yes, free cancellation up to 48 hours before departure. After that, fees may apply depending on services booked.",
        },
        {
          question: "What is included in the price?",
          answer:
            "Private air-conditioned transport, 7 nights accommodation, breakfasts, local guides in Tafraoute and Essaouira and a French-speaking driver-guide. Meals, flights, surf and entries are extra.",
        },
        {
          question: "Do I need to know how to surf in Taghazout?",
          answer:
            "No, surfing is optional. Beginner lessons are available on site (not included). The beach is open to everyone.",
        },
        {
          question: "Is Tizi n'Test pass always used?",
          answer:
            "Depending on season and weather, we take Tizi n'Test or a lower alternative route. Your guide adapts the road for your safety and comfort.",
        },
        {
          question: "What is the best season?",
          answer:
            "March to May and September to November are ideal. Summer suits the coast (sea breeze). Winter stays mild in the south and on the Atlantic coast.",
        },
        {
          question: "How is payment handled?",
          answer:
            "30% deposit on booking, balance before departure. Bank transfer or cash. Detailed quote on request.",
        },
      ],
    },
    "megdaz-3j": {
      metaTitle:
        "Megdaz Valley 3 Days — Authentic Berber Trek | Red Nomad",
      metaDescription:
        "3-day circuit in the Megdaz Valley: trek between Berber villages, homestay night, agricultural terraces and Atlas mountains. Authentic experience from Marrakech.",
      subtitle: "The secret Atlas of the Berbers",
      difficulty: "Moderate",
      duration: "3 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "The Megdaz Valley, one of the most preserved corners of the High Atlas, is discovered on foot among stone terraces, mountain-hugging villages and warm homestay hospitality. Three days away from mass tourism to live Berber life at the pace of trails, fields and mint tea.",
      highlights: [
        "Trek in a preserved Berber village in the Atlas",
        "Homestay night — authentic hospitality",
        "Walk along stone agricultural terraces",
        "Eastern High Atlas scenery — peaks and valleys",
        "Meet local artisans and farmers",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Azilal — Megdaz",
          description:
            "Road to the High Atlas and first immersion in the valley.",
          steps: [
            "08:00 — Departure from Marrakech via Tichka pass or Beni Mellal",
            "Azilal and Ouzoud waterfalls (optional photo stop)",
            "Arrival in Megdaz, mint tea welcome at homestay",
            "Easy walk in the village and terrace discovery",
          ],
        },
        {
          dayLabel: "D2",
          title: "Megdaz Valley trek",
          description:
            "A day of walking between villages, gardens and viewpoints.",
          steps: [
            "Berber breakfast with host family",
            "4–5 h trek among terraces, irrigation channels and villages",
            "Picnic lunch or homestay meal en route",
            "Free afternoon: encounters, crafts or rest",
            "Traditional dinner and homestay night",
          ],
        },
        {
          dayLabel: "D3",
          title: "Megdaz — Marrakech",
          description:
            "Final morning walk and return to Marrakech.",
          steps: [
            "Morning — Easy walk or visit to a local cooperative",
            "Lunch in the village before departure",
            "Return road to Marrakech via the Atlas",
            "~18:00 — Arrival in Marrakech",
          ],
        },
      ],
      included: [
        "Private round-trip transport from Marrakech",
        "French-speaking local Berber guide",
        "Trek with local guide on D2",
        "All traditional meals during the Megdaz stay",
      ],
      notIncluded: [
        "Homestay accommodation (2 nights)",
        "Drinks and snacks outside meals",
        "Personal hiking equipment",
        "Travel insurance",
        "Tips for host family (optional)",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€515/person" },
        { travelers: "3–4 travelers", price: "€420/person" },
        { travelers: "5–8 travelers", price: "€300/person" },
        { travelers: "9–10 travelers", price: "€270/person" },
        { travelers: "11–17 travelers", price: "€270/person" },
      ],
      faqs: [
        {
          question: "What fitness level is required?",
          answer:
            "Moderate 4–5 h walk with light elevation. Trails can be steep — hiking shoes recommended.",
        },
        {
          question: "What are homestay nights like?",
          answer:
            "Simple, clean rooms with a Berber family. Shared bathroom. Authentic experience, not a hotel.",
        },
        {
          question: "Is there hot water?",
          answer:
            "Limited hot water in the mountains. We recommend bringing a microfiber towel and shower gel.",
        },
        {
          question: "Can this trek be done in winter?",
          answer:
            "Yes with proper gear (November–March). Snow possible at altitude — bring warm clothing.",
        },
        {
          question: "Is the circuit suitable for vegetarians?",
          answer:
            "Yes, let us know in advance. Berber meals adapt easily (vegetables, couscous, tagines).",
        },
      ],
    },
  },
  es: {
    "circuit-sahara-atlas-3j": {
      metaTitle:
        "Circuito 3 días Marrakech, Sahara y Atlas | Red Nomad",
      metaDescription:
        "Circuito privado de 3 días desde Marrakech: Alto Atlas, Aït Benhaddou, Merzouga, bivouac de lujo y regreso. Guía francófono, grupos pequeños.",
      subtitle: "Marrakech, desierto y Atlas en 3 días",
      difficulty: "Moderado",
      duration: "3 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Tres días para vivir lo esencial del sur marroquí: cruce del Alto Atlas y paso Tizi n'Tichka, kasbah UNESCO de Aït Benhaddou, ruta de gargantas hasta Merzouga, noche mágica en bivouac de lujo en las dunas del Erg Chebbi y regreso a Marrakech.",
      highlights: [
        "Travesía del Alto Atlas — paso Tizi n'Tichka (2260 m)",
        "Kasbah de Aït Benhaddou — patrimonio UNESCO",
        "Gargantas del Todra y palmerales del Sur",
        "Paseo en dromedario al atardecer",
        "Noche en bivouac de lujo en Merzouga",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Atlas — Aït Benhaddou — Gargantas",
          description: "Ruta panorámica hacia el Sur por el Alto Atlas.",
          steps: [
            "07:00 — Salida de Marrakech, cruce del paso Tizi n'Tichka",
            "Visita de Aït Benhaddou, kasbah UNESCO",
            "Ouarzazate y ruta de las gargantas del Todra",
            "Noche en kasbah u hotel cerca de Merzouga",
          ],
        },
        {
          dayLabel: "D2",
          title: "Merzouga — Dromedario — Bivouac de lujo",
          description: "Día dedicado al Sahara y la noche bajo las estrellas.",
          steps: [
            "Mañana libre o visita al pueblo de Khamlia",
            "16:30 — Paseo en dromedario hacia las dunas del Erg Chebbi",
            "Atardecer sobre las dunas doradas",
            "Noche en bivouac de lujo: cena bereber y música junto al fuego",
          ],
        },
        {
          dayLabel: "D3",
          title: "Amanecer — Atlas — Regreso a Marrakech",
          description: "Despertar en las dunas y regreso por el Atlas.",
          steps: [
            "06:00 — Amanecer en las dunas (opcional)",
            "Desayuno en el campamento, regreso en 4x4",
            "Ruta de regreso por Rissani, gargantas y Atlas",
            "~20:00 — Llegada a Marrakech",
          ],
        },
      ],
      included: [
        "Transporte privado 4x4 o minibús climatizado (3 días)",
        "Conductor-guía bereber francófono",
        "1 noche en bivouac de lujo con cena y desayuno",
        "Paseo en dromedario (~1h30 ida y vuelta)",
      ],
      notIncluded: [
        "Alojamiento fuera del bivouac (kasbah u hotel D1)",
        "Almuerzos y cena del D1",
        "Bebidas y gastos personales",
        "Entradas (~70 MAD Aït Benhaddou)",
        "Propinas (costumbre local)",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "95 €/pers." },
        { travelers: "3–4 viajeros", price: "85–90 €/pers." },
        { travelers: "5–7 viajeros", price: "75–85 €/pers." },
        { travelers: "8–14 viajeros", price: "68–78 €/pers." },
        { travelers: "15–17 viajeros", price: "65 €/pers." },
      ],
      faqs: [
        {
          question: "¿Hay mucha carretera para 3 días?",
          answer:
            "Sí, cuente 8–9 h de conducción el D1 y D3. Hacemos pausas en Aït Benhaddou y las gargantas. Para un circuito más completo con Fez y Chefchaouen, elija el circuito Marrakech–Chefchaouen de 3 días.",
        },
        {
          question: "¿Qué nivel de confort en el desierto?",
          answer:
            "Bivouac de lujo con tiendas privadas, ropa de cama cómoda, duchas y comidas tradicionales.",
        },
        {
          question: "¿Es apto para familias?",
          answer:
            "Sí, vehículos espaciosos y etapas adaptables. El paseo en dromedario es accesible desde 5–6 años.",
        },
        {
          question: "¿Cuál es la mejor temporada?",
          answer:
            "Marzo a mayo y septiembre a noviembre son ideales. Verano posible con salidas matinales.",
        },
        {
          question: "¿Cómo reservar?",
          answer:
            "Contáctenos por WhatsApp o email. Anticipo del 30 %, saldo a la llegada.",
        },
      ],
    },
    "sahara-dades-4j": {
      metaTitle:
        "Sahara, Gargantas del Dadès y Merzouga — 4 días | Red Nomad",
      metaDescription:
        "Circuito de 4 días desde Marrakech: Aït Benhaddou UNESCO, gargantas del Dadès y Todra, Erg Chebbi en Merzouga, valle del Drâa y oasis de Fint.",
      subtitle: "Desierto, gargantas y kasbahs del Sur",
      difficulty: "Moderado",
      duration: "4 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, inglés",
      about:
        "Itinerario de 4 días: subida a las Gargantas del Dadès pasando por la kasbah de Aït Benhaddou (UNESCO); descubrimiento de las Gargantas del Todra en Tinghir y el desierto de Merzouga; regreso al norte por el valle del Drâa y Agdez hasta el oasis de Fint y Ouarzazate; última etapa: regreso a Marrakech por el Alto Atlas.",
      highlights: [
        "Aït Benhaddou (UNESCO)",
        "Gargantas del Dadès y Todra (Tinghir)",
        "Erg Chebbi — Merzouga",
        "Valle del Drâa y Agdez",
        "Oasis de Fint",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech → Gargantas del Dadès (vía Aït Benhaddou)",
          description:
            "Ascenso del Atlas e inmersión en las kasbahs del Sur.",
          steps: [
            "07:00 — Salida de Marrakech, paso del Tizi n'Tichka",
            "Visita de la kasbah de Aït Benhaddou, patrimonio UNESCO",
            "Valle de las Rosas y Gargantas del Dadès",
            "Paseo por las gargantas — cena y noche en kasbah al pie del Dadès",
          ],
        },
        {
          dayLabel: "D2",
          title: "Gargantas del Dadès → Tinghir (Todra) → Merzouga",
          description:
            "De acantilados de 300 m a las dunas doradas del Erg Chebbi.",
          steps: [
            "Ruta matinal hacia Tinghir y las Gargantas del Todra",
            "Travesía del paisaje desértico hacia Merzouga",
            "Paseo en camello al atardecer",
            "Cena bereber y noche en campamento de lujo bajo las estrellas",
          ],
        },
        {
          dayLabel: "D3",
          title: "Merzouga → Agdez → Ouarzazate — Oasis de Fint",
          description:
            "Regreso al norte por la palmera del Drâa y el oasis secreto de Fint.",
          steps: [
            "Opción amanecer en las dunas",
            "Ruta por el valle del Drâa y Agdez",
            "Llegada a Ouarzazate — descubrimiento del oasis de Fint",
            "Cena y noche en Ouarzazate o kasbah en el oasis de Fint",
          ],
        },
        {
          dayLabel: "D4",
          title: "Ouarzazate / Fint → Marrakech",
          description:
            "Última etapa a través del Alto Atlas de regreso a Marrakech.",
          steps: [
            "Desayuno en el alojamiento",
            "Travesía del Alto Atlas por el paso del Tichka",
            "Posible parada fotográfica en Aït Benhaddou según horario",
            "Llegada a Marrakech a última hora de la tarde",
          ],
        },
      ],
      included: [
        "Transporte a elegir: 4×4, furgoneta de lujo o minibús (según grupo)",
        "3 noches (riad + campamento + riad/kasbah)",
        "Desayunos diarios",
        "Cena en campamento bereber",
        "Paseo en camello",
        "Guía-conductor profesional de habla francesa",
      ],
      notIncluded: [
        "Vuelos internacionales",
        "Almuerzos",
        "Cenas (excepto en el campamento del desierto)",
        "Entradas a museos y monumentos",
        "Propinas para guía y personal",
        "Seguro de viaje",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "750 €/pers." },
        { travelers: "3–4 viajeros", price: "750 €/pers." },
        { travelers: "5–8 viajeros", price: "570 €/pers." },
        { travelers: "9–10 viajeros", price: "531 €/pers." },
        { travelers: "11–17 viajeros", price: "469 €/pers." },
      ],
      faqs: [
        {
          question: "¿Se puede cancelar sin coste?",
          answer:
            "Sí, cancelación gratuita hasta 48 horas antes de la salida. Después, pueden aplicarse tasas según los servicios reservados.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer:
            "Transporte privado climatizado, 3 noches de alojamiento, desayunos, cena en el campamento, paseo en camello y guía de habla francesa. Almuerzos, cenas fuera del campamento y entradas no incluidos.",
        },
        {
          question: "¿Qué tipo de vehículo se utiliza?",
          answer:
            "4×4, furgoneta de lujo o minibús según el tamaño del grupo. Todos climatizados y mantenidos para el confort en las largas rutas del Sur.",
        },
        {
          question: "¿Está incluido el amanecer en las dunas?",
          answer:
            "Sí, actividad opcional gratuita la mañana del D3 antes de salir de Merzouga. Se recomienda madrugar para disfrutar de los colores del Erg Chebbi.",
        },
        {
          question: "¿Cuál es la mejor temporada?",
          answer:
            "Marzo a mayo y septiembre a noviembre ofrecen las temperaturas más suaves. El circuito opera todo el año.",
        },
        {
          question: "¿Cómo se realiza el pago?",
          answer:
            "Anticipo del 30 % en la reserva, saldo antes de la salida. Transferencia bancaria o efectivo. Presupuesto detallado bajo petición.",
        },
      ],
    },
    "grand-tour-3j": {
      metaTitle:
        "Circuito 3 días Marrakech — Chefchaouen | Red Nomad",
      metaDescription:
        "Circuito de 3 días de Marrakech a Chefchaouen: Casablanca, Rabat, Fez la ciudad más tradicional y las callejuelas azules de Chefchaouen. Guía francófono.",
      subtitle: "De Marrakech a la ciudad azul",
      difficulty: "Moderado",
      duration: "3 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Únase a un circuito de 3 días de Marrakech a Chefchaouen. Descubra Fez, la ciudad más tradicional de Marruecos, y las callejuelas estrechas de la ciudad azul Chefchaouen. Paradas en las ciudades de Rabat y Casablanca a lo largo de la costa atlántica.",
      highlights: [
        "Casablanca — mezquita Hassan II y corniche atlántica",
        "Rabat — Kasbah de los Oudayas y capital administrativa",
        "Fez el-Bali — la ciudad más tradicional de Marruecos",
        "Curtidores, medersas y zocos en callejuelas estrechas",
        "Chefchaouen — la perla azul del Rif y sus callejuelas fotogénicas",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Casablanca — Rabat",
          description:
            "Ruta hacia la costa atlántica y las grandes ciudades del Norte.",
          steps: [
            "08h00 — Salida de Marrakech",
            "Casablanca: mezquita Hassan II (exterior o visita interior opcional), corniche",
            "Rabat: Kasbah de los Oudayas, Torre Hassan y medina",
            "Noche en riad u hotel en Rabat",
          ],
        },
        {
          dayLabel: "D2",
          title: "Rabat — Fez — la ciudad más tradicional",
          description:
            "Inmersión en la medina más auténtica del Magreb.",
          steps: [
            "Ruta matutina hacia Fez",
            "Visita de Fez el-Bali: curtidores Chouara, medersas y zocos",
            "Descubrimiento de callejuelas estrechas y artesanía ancestral",
            "Noche en riad en la medina de Fez",
          ],
        },
        {
          dayLabel: "D3",
          title: "Fez — Chefchaouen — la ciudad azul",
          description:
            "Travesía del Rif hasta la perla azul de Chefchaouen.",
          steps: [
            "08h00 — Salida de Fez hacia el norte",
            "Ruta panorámica por las montañas del Rif",
            "Chefchaouen: medina azul, callejuelas estrechas, plaza Outa el-Hammam",
            "Ras El Ma y fin del circuito en Chefchaouen",
          ],
        },
      ],
      included: [
        "Transporte privado climatizado durante 3 días",
        "Guía-conductor francófono experimentado",
        "Desayunos diarios",
        "Recogida en su riad u hotel en Marrakech",
      ],
      notIncluded: [
        "Alojamientos (riads en Rabat, Fez y Chefchaouen)",
        "Almuerzos y cenas",
        "Entradas a monumentos y sitios históricos",
        "Bebidas, actividades opcionales y gastos personales",
        "Regreso a Marrakech (traslado bajo solicitud)",
        "Propinas para guía y personal del alojamiento",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "550 €/pers." },
        { travelers: "3–4 viajeros", price: "450 €/pers." },
        { travelers: "5–8 viajeros", price: "320 €/pers." },
        { travelers: "9–10 viajeros", price: "290 €/pers." },
        { travelers: "11–17 viajeros", price: "290 €/pers." },
      ],
      faqs: [
        {
          question: "¿El circuito termina en Chefchaouen?",
          answer:
            "Sí, el programa concluye en Chefchaouen el D3. Podemos organizar traslado de regreso a Marrakech, Fez o Tánger bajo solicitud.",
        },
        {
          question: "¿Podemos empezar en Casablanca?",
          answer:
            "Sí, adaptamos el punto de partida y traslados al aeropuerto según sus vuelos y alojamiento.",
        },
        {
          question: "¿Hay que caminar mucho en Fez y Chefchaouen?",
          answer:
            "Las medinas se visitan a pie (2–4 h por ciudad), a menudo por callejuelas estrechas. El resto es en vehículo privado.",
        },
        {
          question: "¿Qué tipo de alojamiento está previsto?",
          answer:
            "Riads con encanto en Rabat, Fez y Chefchaouen. El alojamiento se cotiza aparte según su presupuesto.",
        },
        {
          question: "¿Cuál es la mejor temporada?",
          answer:
            "Primavera y otoño son ideales. Chefchaouen es agradable en verano gracias a la altitud del Rif.",
        },
        {
          question: "¿Cómo se paga el circuito?",
          answer:
            "Anticipo del 30 % en la reserva, saldo antes o a la llegada. Transferencia bancaria o efectivo. Presupuesto detallado bajo solicitud.",
        },
      ],
    },
    "imperial-cities-8j": {
      metaTitle:
        "Ciudades Imperiales Marruecos 8 días — Fez, Meknes, Marrakech | Red Nomad",
      metaDescription:
        "Circuito de 8 días por las ciudades imperiales de Marruecos: Casablanca, Rabat, Volubilis, Meknes, Fez UNESCO y Chefchaouen la azul. Guía francófono, grupos reducidos.",
      subtitle: "De la costa atlántica a la ciudad azul",
      difficulty: "Moderado",
      duration: "8 días",
      groupSize: "1–17 personas",
      departure: "Casablanca",
      languages: "Francés, inglés",
      about:
        "Un circuito de 8 días por las ciudades más bellas de Marruecos: la modernidad de Casablanca, la elegancia real de Rabat, los zocos milenarios de Fez y la ciudad azul de Chefchaouen en el Rif. Entre sitios UNESCO, ruinas romanas de Volubilis y medersas de Fez, descubra el Marruecos histórico en grupo reducido con guía local.",
      highlights: [
        "Mezquita Hassan II de Casablanca",
        "Medina de Rabat (UNESCO)",
        "Medina de Fez (UNESCO)",
        "Chefchaouen la azul",
        "Volubilis — ruinas romanas UNESCO",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Llegada a Casablanca",
          description: "Recepción en el aeropuerto y primera inmersión en la metrópolis atlántica.",
          steps: [
            "Recepción en el aeropuerto Mohammed V",
            "Visita de la Mezquita Hassan II (exterior o interior con guía opcional)",
            "Instalación en el hotel — tarde libre en la cornisa",
          ],
        },
        {
          dayLabel: "D2",
          title: "Casablanca → Rabat",
          description: "Descubrimiento de la capital administrativa del Reino.",
          steps: [
            "Ruta hacia Rabat",
            "Kasbah de los Oudayas, Torre Hassan y Mausoleo de Mohammed V",
            "Paseo por la medina de Rabat",
            "Noche en Rabat",
          ],
        },
        {
          dayLabel: "D3",
          title: "Rabat → Volubilis → Meknes → Fez",
          description: "Antigüedad romana y ciudad imperial antes de llegar a Fez.",
          steps: [
            "Visita de las ruinas romanas de Volubilis (UNESCO)",
            "Meknes y la puerta Bab Mansour",
            "Ruta hacia Fez — llegada por la tarde",
            "Noche en riad en Fez",
          ],
        },
        {
          dayLabel: "D4",
          title: "Fez — Día completo",
          description: "Inmersión en la medina más antigua del mundo árabe.",
          steps: [
            "Visita guiada de Fez el-Bali: Universidad al-Qarawiyyin",
            "Medersa Bou Inania y curtidurías Chouara",
            "Zocos, artesanía y fondouks históricos",
            "Noche en riad en Fez",
          ],
        },
        {
          dayLabel: "D5",
          title: "Fez → Chefchaouen",
          description: "Travesía del Rif hasta la perla azul.",
          steps: [
            "Ruta matutina por las montañas del Rif",
            "Llegada a Chefchaouen a primera hora de la tarde",
            "Descubrimiento libre de las callejuelas azules y la plaza Outa el-Hammam",
            "Noche en riad en Chefchaouen",
          ],
        },
        {
          dayLabel: "D6",
          title: "Chefchaouen — Día libre",
          description: "Tiempo libre para explorar la medina a su ritmo.",
          steps: [
            "Mañana libre en la medina azul",
            "Senderismo opcional hacia la cascada Ras el-Ma",
            "Tarde de compras artesanales y cafés en terraza",
            "Noche en riad en Chefchaouen",
          ],
        },
        {
          dayLabel: "D7",
          title: "Chefchaouen → Casablanca",
          description: "Regreso a la costa atlántica.",
          steps: [
            "Salida matutina hacia Casablanca",
            "Paradas posibles en Asilah o Larache",
            "Llegada a Casablanca al final de la tarde",
            "Noche en Casablanca",
          ],
        },
        {
          dayLabel: "D8",
          title: "Casablanca — Salida",
          description: "Fin del circuito y traslado al aeropuerto.",
          steps: [
            "Desayuno en el hotel",
            "Traslado al aeropuerto según horarios de vuelo",
            "Fin del circuito",
          ],
        },
      ],
      included: [
        "Transporte climatizado durante 8 días",
        "7 noches en hotel o riad (según programa)",
        "Desayunos diarios",
        "Visitas guiadas de las medinas de Fez y Rabat",
        "Guía-conductor francófono experimentado",
      ],
      notIncluded: [
        "Vuelos internacionales",
        "Almuerzos y cenas",
        "Entradas a museos y monumentos (~5–10 €/sitio)",
        "Propinas para guía y personal del alojamiento",
        "Seguro de viaje",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "1 714 €/pers." },
        { travelers: "3–4 viajeros", price: "1 174 €/pers." },
        { travelers: "5–8 viajeros", price: "914 €/pers." },
        { travelers: "9–10 viajeros", price: "871 €/pers." },
        { travelers: "11–17 viajeros", price: "785 €/pers." },
      ],
      faqs: [
        {
          question: "¿Se puede cancelar este circuito sin coste?",
          answer:
            "Sí, cancelación gratuita hasta 48 horas antes de la salida. Después, pueden aplicarse tasas según los servicios contratados.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer:
            "Transporte privado climatizado, 7 noches de alojamiento, desayunos, visitas guiadas de medinas previstas en el programa y guía francófono. Comidas, vuelos y entradas no están incluidos.",
        },
        {
          question: "¿Cuántas personas como máximo en el grupo?",
          answer:
            "De 1 a 17 personas. Privatización posible para su familia o amigos — solicite un presupuesto personalizado.",
        },
        {
          question: "¿Qué debo llevar?",
          answer:
            "Ropa adaptada a la temporada, calzado cómodo para caminar por las medinas, gorra, protector solar y chaqueta ligera para las noches en Chefchaouen.",
        },
        {
          question: "¿Cuál es la mejor temporada?",
          answer:
            "Marzo a mayo y septiembre a noviembre ofrecen las temperaturas más suaves. El circuito opera todo el año.",
        },
        {
          question: "¿Cómo se paga el circuito?",
          answer:
            "Anticipo del 30 % en la reserva, saldo antes de la salida. Transferencia bancaria o efectivo. Presupuesto detallado bajo solicitud.",
        },
      ],
    },
    "southern-coast-8j": {
      metaTitle:
        "Taroudante y Essaouira — 8 días sur marroquí y costa atlántica | Red Nomad",
      metaDescription:
        "Circuito de 8 días en el sur de Marruecos: Taroudante, Tafraoute, Taghazout y Essaouira. Anti-Atlas, bosque de argán UNESCO y costa atlántica. Salida desde Marrakech.",
      subtitle: "Souss, Anti-Atlas y Atlántico",
      difficulty: "Moderado",
      duration: "8 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, inglés",
      about:
        "Un circuito único de 8 días que explora el Souss y el Anti-Atlas, lejos de las rutas turísticas. Taroudante la rosa, las rocas pintadas de Tafraoute, el pueblo surf de Taghazout y la ciudad de los alisios de Essaouira. Entre montañas rosas, acantilados atlánticos y medina UNESCO, descubra una faceta auténtica del Marruecos.",
      highlights: [
        "Taroudante — la pequeña Marrakech",
        "Gargantas de Aït Baha",
        "Tafraoute y rocas pintadas de Jean Vérame",
        "Taghazout — pueblo surf en el Atlántico",
        "Essaouira — ciudad de los alisios UNESCO",
        "Bosque de argán (UNESCO)",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech → Taroudante",
          description: "Travesía del Atlas hacia la perla del Souss.",
          steps: [
            "08h00 — Salida desde Marrakech",
            "Ruta por el puerto de Tizi n'Test (2 092 m) o itinerario alternativo según temporada",
            "Parada en las gargantas de Aït Baha",
            "Llegada a Taroudante, la «pequeña Marrakech» — tarde libre",
            "Cena y noche en riad en Taroudante",
          ],
        },
        {
          dayLabel: "D2",
          title: "Taroudante → Tafraoute",
          description: "Inmersión en el Anti-Atlas y sus paisajes rosados.",
          steps: [
            "Desayuno en el riad",
            "Ruta a través del Anti-Atlas",
            "Llegada a Tafraoute, pueblo entre rocas rosas",
            "Tiempo libre para explorar el pueblo",
            "Noche en Tafraoute",
          ],
        },
        {
          dayLabel: "D3",
          title: "Tafraoute — Día libre",
          description: "Descubrimiento del Anti-Atlas a su ritmo.",
          steps: [
            "Visita de las rocas pintadas de Jean Vérame",
            "Paseo por el valle de Ammeln y pueblos bereberes",
            "Almuerzo libre en el pueblo",
            "Tarde libre — senderismo o descanso",
            "Noche en Tafraoute",
          ],
        },
        {
          dayLabel: "D4",
          title: "Tafraoute → Tiznit → Mirleft",
          description: "De la montaña a la costa atlántica salvaje.",
          steps: [
            "Ruta hacia Tiznit, ciudad de joyeros de plata",
            "Visita de la medina y zocos de plata",
            "Carretera costera hacia Mirleft, acantilados espectaculares",
            "Puesta de sol sobre el Atlántico",
            "Noche en Mirleft",
          ],
        },
        {
          dayLabel: "D5",
          title: "Mirleft → Massa → Taghazout",
          description: "Reserva natural y capital del surf marroquí.",
          steps: [
            "Ruta costera por la reserva de Souss-Massa (observación de aves)",
            "Atravesando el bosque de argán UNESCO",
            "Llegada a Taghazout, pueblo de surfistas",
            "Instalación en camp o riad",
            "Noche en Taghazout",
          ],
        },
        {
          dayLabel: "D6",
          title: "Taghazout — Playas y surf",
          description: "Día libre frente al océano Atlántico.",
          steps: [
            "Mañana libre — playa y relax",
            "Clases de surf posibles (Hash Point, Anchor Point)",
            "Mercado local y cafés en terraza",
            "Puesta de sol sobre el Atlántico",
            "Noche en Taghazout",
          ],
        },
        {
          dayLabel: "D7",
          title: "Taghazout → Essaouira",
          description: "Ruta costera hacia la ciudad de los alisios.",
          steps: [
            "Ruta hacia Essaouira por la costa atlántica",
            "Visita del puerto de pesca y murallas UNESCO",
            "Galerías de arte y medina",
            "Guía local para descubrir Essaouira",
            "Noche en riad en Essaouira",
          ],
        },
        {
          dayLabel: "D8",
          title: "Essaouira → Marrakech — Salida",
          description: "Última mañana y regreso a Marrakech.",
          steps: [
            "Mañana libre en Essaouira",
            "Ruta de regreso a Marrakech (~2h30)",
            "Llegada a Marrakech al final de la tarde",
            "Fin del circuito",
          ],
        },
      ],
      included: [
        "Transporte climatizado durante 8 días",
        "7 noches en riads y hoteles (según programa)",
        "Desayunos diarios",
        "Guías locales en Tafraoute y Essaouira",
        "Guía-conductor francófono experimentado",
      ],
      notIncluded: [
        "Vuelos internacionales",
        "Almuerzos y cenas",
        "Clases de surf, kitesurf y actividades náuticas",
        "Entradas a sitios y museos",
        "Propinas para guía y personal del alojamiento",
        "Seguro de viaje",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "1 692 €/pers." },
        { travelers: "3–4 viajeros", price: "1 130 €/pers." },
        { travelers: "5–8 viajeros", price: "900 €/pers." },
        { travelers: "9–10 viajeros", price: "850 €/pers." },
        { travelers: "11–17 viajeros", price: "742 €/pers." },
      ],
      faqs: [
        {
          question: "¿Se puede cancelar este circuito sin coste?",
          answer:
            "Sí, cancelación gratuita hasta 48 horas antes de la salida. Después, pueden aplicarse tasas según los servicios contratados.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer:
            "Transporte privado climatizado, 7 noches de alojamiento, desayunos, guías locales en Tafraoute y Essaouira y guía-conductor francófono. Comidas, vuelos, surf y entradas no están incluidos.",
        },
        {
          question: "¿Hay que saber surf en Taghazout?",
          answer:
            "No, el surf es opcional. Hay clases para principiantes en el lugar (no incluidas). La playa es accesible para todos.",
        },
        {
          question: "¿Siempre se usa el puerto de Tizi n'Test?",
          answer:
            "Según la temporada y el tiempo, tomamos Tizi n'Test o una ruta alternativa más baja. Su guía adapta el itinerario por seguridad y comodidad.",
        },
        {
          question: "¿Cuál es la mejor temporada?",
          answer:
            "Marzo a mayo y septiembre a noviembre son ideales. El verano conviene a la costa (brisa marina). El invierno es suave en el sur y la costa atlántica.",
        },
        {
          question: "¿Cómo se paga el circuito?",
          answer:
            "Anticipo del 30 % en la reserva, saldo antes de la salida. Transferencia bancaria o efectivo. Presupuesto detallado bajo solicitud.",
        },
      ],
    },
    "megdaz-3j": {
      metaTitle:
        "Valle de Megdaz 3 días — Trek bereber auténtico | Red Nomad",
      metaDescription:
        "Circuito de 3 días en el valle de Megdaz: trek entre pueblos bereberes, noche en casa de familia, terrazas agrícolas y montañas del Atlas. Experiencia auténtica desde Marrakech.",
      subtitle: "El Atlas secreto de los bereberes",
      difficulty: "Moderado",
      duration: "3 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "El valle de Megdaz, uno de los rincones más preservados del Alto Atlas, se descubre a pie entre terrazas de piedra, pueblos colgados de la montaña y acogida cálida en casa de familia. Tres días lejos del turismo de masas para vivir la vida bereber al ritmo de los senderos, los campos y el té a la menta.",
      highlights: [
        "Trek en un pueblo bereber preservado del Atlas",
        "Noche en casa de familia — hospitalidad auténtica",
        "Caminata por terrazas agrícolas de piedra",
        "Paisajes del Alto Atlas oriental — cumbres y valles",
        "Encuentro con artesanos y agricultores locales",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Azilal — Megdaz",
          description:
            "Ruta hacia el Alto Atlas y primera inmersión en el valle.",
          steps: [
            "08:00 — Salida de Marrakech vía paso Tichka o Beni Mellal",
            "Azilal y cascadas de Ouzoud (parada fotográfica opcional)",
            "Llegada a Megdaz, bienvenida con té a la menta en casa de familia",
            "Paseo suave por el pueblo y descubrimiento de las terrazas",
          ],
        },
        {
          dayLabel: "D2",
          title: "Trek valle de Megdaz",
          description:
            "Jornada de caminata entre pueblos, jardines y miradores.",
          steps: [
            "Desayuno bereber con la familia anfitriona",
            "Trek 4–5 h entre terrazas, canales de riego y pueblos",
            "Almuerzo picnic o en casa de familia en ruta",
            "Tarde libre: encuentros, artesanía o descanso",
            "Cena tradicional y noche en casa de familia",
          ],
        },
        {
          dayLabel: "D3",
          title: "Megdaz — Marrakech",
          description:
            "Última caminata matinal y regreso a Marrakech.",
          steps: [
            "Mañana — Caminata ligera o visita a una cooperativa local",
            "Almuerzo en el pueblo antes de la salida",
            "Carretera de regreso a Marrakech vía el Atlas",
            "~18:00 — Llegada a Marrakech",
          ],
        },
      ],
      included: [
        "Transporte privado ida y vuelta desde Marrakech",
        "Guía local bereber francófono",
        "Trek con acompañante local el D2",
        "Todas las comidas tradicionales durante la estancia en Megdaz",
      ],
      notIncluded: [
        "Alojamiento en casa de familia (2 noches)",
        "Bebidas y snacks fuera de las comidas",
        "Equipo de senderismo personal",
        "Seguro de viaje",
        "Propinas para la familia anfitriona (opcional)",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "515 €/pers." },
        { travelers: "3–4 viajeros", price: "420 €/pers." },
        { travelers: "5–8 viajeros", price: "300 €/pers." },
        { travelers: "9–10 viajeros", price: "270 €/pers." },
        { travelers: "11–17 viajeros", price: "270 €/pers." },
      ],
      faqs: [
        {
          question: "¿Qué nivel de caminata se necesita?",
          answer:
            "Caminata moderada 4–5 h con desnivel ligero. Senderos a veces empinados — calzado de trekking recomendado.",
        },
        {
          question: "¿Cómo son las noches en casa de familia?",
          answer:
            "Habitaciones sencillas y limpias en familia bereber. Baño compartido. Experiencia auténtica, no un hotel.",
        },
        {
          question: "¿Hay agua caliente?",
          answer:
            "Agua caliente limitada en montaña. Recomendamos toalla de microfibra y gel de ducha.",
        },
        {
          question: "¿Se puede hacer este trek en invierno?",
          answer:
            "Sí con equipo adecuado (noviembre–marzo). Posible nieve en altitud — ropa de abrigo necesaria.",
        },
        {
          question: "¿El circuito es apto para vegetarianos?",
          answer:
            "Sí, avísenos con antelación. Las comidas bereberes se adaptan fácilmente (verduras, cuscús, tajines).",
        },
      ],
    },
  },
  de: {
    "circuit-sahara-atlas-3j": {
      metaTitle:
        "3-Tage-Tour Marrakesch, Sahara & Atlas | Red Nomad",
      metaDescription:
        "Private 3-Tage-Rundreise ab Marrakesch: Hoher Atlas, Aït Benhaddou, Merzouga, Luxus-Camp und Rückkehr. Französischsprachiger Guide, kleine Gruppen.",
      subtitle: "Marrakesch, Wüste und Atlas in 3 Tagen",
      difficulty: "Mittel",
      duration: "3 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Drei Tage für das Wesentliche im marokkanischen Süden: Hochatlas und Tizi n'Tichka-Pass, UNESCO-Kasbah Aït Benhaddou, Schluchtenroute nach Merzouga, magische Nacht im Luxus-Camp an den Erg-Chebbi-Dünen und Rückkehr nach Marrakesch.",
      highlights: [
        "Hochatlas-Überquerung — Tizi n'Tichka-Pass (2260 m)",
        "Kasbah Aït Benhaddou — UNESCO-Stätte",
        "Todra-Schluchten und Palmenhaine",
        "Kamelritt bei Sonnenuntergang",
        "Luxus-Biwak-Nacht in Merzouga",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch — Atlas — Aït Benhaddou — Schluchten",
          description: "Panoramische Fahrt in den Süden über den Hohen Atlas.",
          steps: [
            "07:00 — Abfahrt Marrakesch, Tizi n'Tichka-Pass",
            "Besuch Aït Benhaddou, UNESCO-Kasbah",
            "Ouarzazate und Todra-Schluchten",
            "Nacht in Kasbah oder Hotel nahe Merzouga",
          ],
        },
        {
          dayLabel: "T2",
          title: "Merzouga — Kamelritt — Luxus-Camp",
          description: "Tag der Wüste und Nacht unter den Sternen.",
          steps: [
            "Freier Vormittag oder Besuch Khamlia",
            "16:30 — Kamelritt zu den Erg-Chebbi-Dünen",
            "Sonnenuntergang auf den Dünen",
            "Luxus-Camp: Berber-Dinner und Musik am Feuer",
          ],
        },
        {
          dayLabel: "T3",
          title: "Sonnenaufgang — Atlas — Rückkehr Marrakesch",
          description: "Aufwachen auf den Dünen und Rückfahrt über den Atlas.",
          steps: [
            "06:00 — Sonnenaufgang auf den Dünen (optional)",
            "Frühstück im Camp, 4x4-Rückfahrt",
            "Rückroute via Rissani, Schluchten und Atlas",
            "~20:00 — Ankunft Marrakesch",
          ],
        },
      ],
      included: [
        "Privater 4x4 oder klimatisierter Minibus (3 Tage)",
        "Französischsprachiger Berber Fahrer-Guide",
        "1 Nacht im Luxus-Wüsten-Camp mit Abendessen und Frühstück",
        "Kamelritt (~1h30 hin und zurück)",
      ],
      notIncluded: [
        "Unterkunft außerhalb des Camps (Kasbah/Hotel T1)",
        "Mittagessen und Abendessen T1",
        "Getränke und persönliche Ausgaben",
        "Eintritte (~70 MAD Aït Benhaddou)",
        "Trinkgelder (lokaler Brauch)",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "95 €/Pers." },
        { travelers: "3–4 Reisende", price: "85–90 €/Pers." },
        { travelers: "5–7 Reisende", price: "75–85 €/Pers." },
        { travelers: "8–14 Reisende", price: "68–78 €/Pers." },
        { travelers: "15–17 Reisende", price: "65 €/Pers." },
      ],
      faqs: [
        {
          question: "Viel Fahrzeit für 3 Tage?",
          answer:
            "Ja, 8–9 Stunden am T1 und T3. Pausen in Aït Benhaddou und den Schluchten. Für eine vollständigere Tour mit Fès und Chefchaouen: 3-Tage-Tour Marrakesch–Chefchaouen.",
        },
        {
          question: "Komfort in der Wüste?",
          answer:
            "Luxus-Biwak mit privaten Zelten, bequemer Bettwäsche, Duschen und traditionellen Mahlzeiten.",
        },
        {
          question: "Für Familien geeignet?",
          answer:
            "Ja, geräumige Fahrzeuge und anpassbare Etappen. Kamelritt ab 5–6 Jahren möglich.",
        },
        {
          question: "Beste Reisezeit?",
          answer:
            "März bis Mai und September bis November ideal. Sommer mit frühen Abfahrten möglich.",
        },
        {
          question: "Wie buchen?",
          answer:
            "Kontakt per WhatsApp oder E-Mail. 30 % Anzahlung, Rest bei Ankunft.",
        },
      ],
    },
    "sahara-dades-4j": {
      metaTitle:
        "Sahara, Dadès-Schluchten & Merzouga — 4 Tage | Red Nomad",
      metaDescription:
        "4-Tage-Tour ab Marrakesch: UNESCO Aït Benhaddou, Dadès- und Todra-Schluchten, Erg Chebbi in Merzouga, Drâa-Tal und Fint-Oase.",
      subtitle: "Wüste, Schluchten und Kasbahs des Südens",
      difficulty: "Mittel",
      duration: "4 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, Englisch",
      about:
        "4-Tage-Route: Aufstieg zu den Dadès-Schluchten über die UNESCO-Kasbah Aït Benhaddou; Entdeckung der Todra-Schluchten bei Tinghir und der Merzouga-Wüste; Rückfahrt nach Norden durch das Drâa-Tal und Agdez bis zur Fint-Oase und Ouarzazate; letzte Etappe: Rückkehr nach Marrakesch über den Hohen Atlas.",
      highlights: [
        "Aït Benhaddou (UNESCO)",
        "Dadès- & Todra-Schluchten (Tinghir)",
        "Erg Chebbi — Merzouga",
        "Drâa-Tal & Agdez",
        "Fint-Oase",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch → Dadès-Schluchten (via Aït Benhaddou)",
          description:
            "Atlas-Überquerung und Eintauchen in die Kasbahs des Südens.",
          steps: [
            "07:00 — Abfahrt Marrakesch, Pass Tizi n'Tichka",
            "Besuch der UNESCO-Kasbah Aït Benhaddou",
            "Tal der Rosen und Dadès-Schluchten",
            "Spaziergang in den Schluchten — Abendessen und Nacht in Kasbah am Fuß des Dadès",
          ],
        },
        {
          dayLabel: "T2",
          title: "Dadès-Schluchten → Tinghir (Todra) → Merzouga",
          description:
            "Von 300 m hohen Klippen zu den goldenen Dünen des Erg Chebbi.",
          steps: [
            "Morgendliche Fahrt nach Tinghir und Todra-Schluchten",
            "Durchquerung der Wüstenlandschaft nach Merzouga",
            "Kamelritt bei Sonnenuntergang",
            "Berberisches Abendessen und Nacht im Luxus-Wüstencamp unter den Sternen",
          ],
        },
        {
          dayLabel: "T3",
          title: "Merzouga → Agdez → Ouarzazate — Fint-Oase",
          description:
            "Rückfahrt nach Norden durch die Drâa-Palmenhaine und die geheime Fint-Oase.",
          steps: [
            "Optional Sonnenaufgang auf den Dünen",
            "Fahrt durch das Drâa-Tal und Agdez",
            "Ankunft in Ouarzazate — Entdeckung der Fint-Oase",
            "Abendessen und Nacht in Ouarzazate oder Kasbah an der Fint-Oase",
          ],
        },
        {
          dayLabel: "T4",
          title: "Ouarzazate / Fint → Marrakesch",
          description:
            "Letzte Etappe durch den Hohen Atlas zurück nach Marrakesch.",
          steps: [
            "Frühstück in der Unterkunft",
            "Überquerung des Hohen Atlas über den Tichka-Pass",
            "Möglicher Fotostopp in Aït Benhaddou je nach Zeitplan",
            "Ankunft in Marrakesch am späten Nachmittag",
          ],
        },
      ],
      included: [
        "Transport nach Wahl: 4×4, Luxus-Van oder Minibus (je nach Gruppe)",
        "3 Nächte (Riad + Camp + Riad/Kasbah)",
        "Tägliche Frühstücke",
        "Abendessen im Berber-Camp",
        "Kamelritt",
        "Professioneller französischsprachiger Fahrer-Guide",
      ],
      notIncluded: [
        "Internationale Flüge",
        "Mittagessen",
        "Abendessen (außer im Wüstencamp)",
        "Museums- und Denkmaleintritte",
        "Trinkgelder für Guide und Personal",
        "Reiseversicherung",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "750 €/Pers." },
        { travelers: "3–4 Reisende", price: "750 €/Pers." },
        { travelers: "5–8 Reisende", price: "570 €/Pers." },
        { travelers: "9–10 Reisende", price: "531 €/Pers." },
        { travelers: "11–17 Reisende", price: "469 €/Pers." },
      ],
      faqs: [
        {
          question: "Kann ich kostenlos stornieren?",
          answer:
            "Ja, kostenlose Stornierung bis 48 Stunden vor Abfahrt. Danach können je nach gebuchten Leistungen Gebühren anfallen.",
        },
        {
          question: "Was ist im Preis enthalten?",
          answer:
            "Privater klimatisierter Transport, 3 Übernachtungen, Frühstücke, Abendessen im Camp, Kamelritt und französischsprachiger Guide. Mittagessen, Abendessen außerhalb des Camps und Eintritte nicht inbegriffen.",
        },
        {
          question: "Welches Fahrzeug wird eingesetzt?",
          answer:
            "4×4, Luxus-Van oder Minibus je nach Gruppengröße. Alle klimatisiert und gewartet für Komfort auf langen Südrouten.",
        },
        {
          question: "Ist der Sonnenaufgang auf den Dünen inbegriffen?",
          answer:
            "Ja, kostenlose optionale Aktivität am T3-Morgen vor der Abfahrt aus Merzouga. Frühes Aufstehen empfohlen, um die Farben des Erg Chebbi zu genießen.",
        },
        {
          question: "Welche Jahreszeit ist am besten?",
          answer:
            "März bis Mai und September bis November bieten die mildesten Temperaturen. Die Tour ist ganzjährig möglich.",
        },
        {
          question: "Wie erfolgt die Zahlung?",
          answer:
            "30 % Anzahlung bei Buchung, Rest vor Abfahrt. Banküberweisung oder bar. Detailliertes Angebot auf Anfrage.",
        },
      ],
    },
    "grand-tour-3j": {
      metaTitle:
        "3-Tage-Tour Marrakesch — Chefchaouen | Red Nomad",
      metaDescription:
        "3-Tage-Rundreise von Marrakesch nach Chefchaouen: Casablanca, Rabat, Fès die traditionellste Stadt Marokkos und die engen Gassen der blauen Stadt.",
      subtitle: "Von Marrakesch zur blauen Stadt",
      difficulty: "Mittel",
      duration: "3 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Schließen Sie sich einer 3-tägigen Tour von Marrakesch nach Chefchaouen an. Entdecken Sie Fès, die traditionellste Stadt Marokkos, und die engen Gassen der blauen Stadt Chefchaouen. Stopps in Rabat und Casablanca entlang der Atlantikküste.",
      highlights: [
        "Casablanca — Hassan-II.-Moschee und Atlantik-Corniche",
        "Rabat — Kasbah der Oudayas und Verwaltungshauptstadt",
        "Fes el-Bali — die traditionellste Stadt Marokkos",
        "Gerbereien, Medersas und enge Souk-Gassen",
        "Chefchaouen — das blaue Juwel des Rif und seine fotogenen Gassen",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch — Casablanca — Rabat",
          description:
            "Fahrt zur Atlantikküste und den großen Städten des Nordens.",
          steps: [
            "08:00 — Abfahrt in Marrakesch",
            "Casablanca: Hassan-II.-Moschee (Außenbesichtigung oder optionale Innenbesichtigung), Corniche",
            "Rabat: Kasbah der Oudayas, Hassan-Turm und Medina",
            "Nacht in einem Riad oder Hotel in Rabat",
          ],
        },
        {
          dayLabel: "T2",
          title: "Rabat — Fès — die traditionellste Stadt",
          description:
            "Eintauchen in die authentischste Medina des Maghreb.",
          steps: [
            "Morgendliche Fahrt nach Fès",
            "Besuch von Fes el-Bali: Chouara-Gerbereien, Medersas und Souks",
            "Enge Gassen und jahrhundertealtes Handwerk entdecken",
            "Nacht in einem Riad in der Medina von Fès",
          ],
        },
        {
          dayLabel: "T3",
          title: "Fès — Chefchaouen — die blaue Stadt",
          description:
            "Durchquerung des Rif bis zum blauen Juwel Chefchaouen.",
          steps: [
            "08:00 — Abfahrt von Fès Richtung Norden",
            "Panoramafahrt durch die Rif-Berge",
            "Chefchaouen: blaue Medina, enge Gassen, Platz Outa el-Hammam",
            "Ras El Ma und Ende der Tour in Chefchaouen",
          ],
        },
      ],
      included: [
        "Privater klimatisierter Transport für 3 Tage",
        "Erfahrener französischsprachiger Fahrer-Guide",
        "Tägliche Frühstücke",
        "Abholung an Ihrem Riad oder Hotel in Marrakesch",
      ],
      notIncluded: [
        "Unterkünfte (Riads in Rabat, Fès und Chefchaouen)",
        "Mittag- und Abendessen",
        "Eintritte zu Monumenten und historischen Stätten",
        "Getränke, optionale Aktivitäten und persönliche Ausgaben",
        "Rückfahrt nach Marrakesch (Transfer auf Anfrage)",
        "Trinkgelder für Guide und Hotelpersonal",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "550 €/Pers." },
        { travelers: "3–4 Reisende", price: "450 €/Pers." },
        { travelers: "5–8 Reisende", price: "320 €/Pers." },
        { travelers: "9–10 Reisende", price: "290 €/Pers." },
        { travelers: "11–17 Reisende", price: "290 €/Pers." },
      ],
      faqs: [
        {
          question: "Endet die Tour in Chefchaouen?",
          answer:
            "Ja, das Programm endet am T3 in Chefchaouen. Wir können auf Anfrage einen Rücktransfer nach Marrakesch, Fès oder Tanger organisieren.",
        },
        {
          question: "Können wir in Casablanca starten?",
          answer:
            "Ja, wir passen Startpunkt und Flughafentransfers an Ihre Flüge und Ihr Hotel an.",
        },
        {
          question: "Muss man in Fès und Chefchaouen viel laufen?",
          answer:
            "Medinas werden zu Fuß erkundet (2–4 Std. pro Stadt), oft durch enge Gassen. Der Rest erfolgt im Privatfahrzeug.",
        },
        {
          question: "Welche Unterkunftsart ist vorgesehen?",
          answer:
            "Charmante Riads in Rabat, Fès und Chefchaouen. Die Unterkunft wird separat nach Budget kalkuliert.",
        },
        {
          question: "Welche ist die beste Reisezeit?",
          answer:
            "Frühling und Herbst sind ideal. Chefchaouen ist im Sommer dank der Rif-Höhe angenehm.",
        },
        {
          question: "Wie erfolgt die Zahlung?",
          answer:
            "30 % Anzahlung bei Buchung, Rest vor oder bei Ankunft. Überweisung oder bar. Detailliertes Angebot auf Anfrage.",
        },
      ],
    },
    "imperial-cities-8j": {
      metaTitle:
        "Kaiserstädte Marokko 8 Tage — Fès, Meknès, Marrakesch | Red Nomad",
      metaDescription:
        "8-Tage-Rundreise durch Marokkos Kaiserstädte: Casablanca, Rabat, Volubilis, Meknès, UNESCO-Fès und blaues Chefchaouen. Französischsprachiger Guide, kleine Gruppen.",
      subtitle: "Von der Atlantikküste zur blauen Stadt",
      difficulty: "Mittel",
      duration: "8 Tage",
      groupSize: "1–17 Personen",
      departure: "Casablanca",
      languages: "Französisch, Englisch",
      about:
        "Eine 8-tägige Reise durch Marokkos schönste Städte: das moderne Casablanca, das königliche Rabat, die jahrhundertealten Souks von Fès und das blaue Chefchaouen im Rif-Gebirge. UNESCO-Stätten, römische Ruinen in Volubilis und Medersas in Fès — entdecken Sie das historische Marokko in einer kleinen Gruppe mit lokalem Guide.",
      highlights: [
        "Hassan-II.-Moschee in Casablanca",
        "Medina von Rabat (UNESCO)",
        "Medina von Fès (UNESCO)",
        "Blaues Chefchaouen",
        "Volubilis — UNESCO-Römische Ruinen",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Ankunft in Casablanca",
          description: "Flughafenempfang und erster Eindruck der Atlantikmetropole.",
          steps: [
            "Empfang am Flughafen Mohammed V",
            "Besuch der Hassan-II.-Moschee (Außenansicht oder optional mit Guide innen)",
            "Hotel-Check-in — freier Abend an der Corniche",
          ],
        },
        {
          dayLabel: "T2",
          title: "Casablanca → Rabat",
          description: "Entdeckung der administrativen Hauptstadt des Königreichs.",
          steps: [
            "Fahrt nach Rabat",
            "Kasbah der Oudayas, Hassan-Turm und Mohammed-V.-Mausoleum",
            "Spaziergang durch die Medina von Rabat",
            "Übernachtung in Rabat",
          ],
        },
        {
          dayLabel: "T3",
          title: "Rabat → Volubilis → Meknès → Fès",
          description: "Römische Antike und Kaiserstadt vor der Ankunft in Fès.",
          steps: [
            "Besuch der römischen Ruinen von Volubilis (UNESCO)",
            "Meknès und das Bab-Mansour-Tor",
            "Fahrt nach Fès — Ankunft am Abend",
            "Übernachtung in einem Riad in Fès",
          ],
        },
        {
          dayLabel: "T4",
          title: "Fès — Ganztägig",
          description: "Eintauchen in die älteste arabische Medina der Welt.",
          steps: [
            "Geführte Tour durch Fès el-Bali: Universität al-Qarawiyyin",
            "Medersa Bou Inania und Gerbereien Chouara",
            "Souks, Handwerk und historische Fondouks",
            "Übernachtung in einem Riad in Fès",
          ],
        },
        {
          dayLabel: "T5",
          title: "Fès → Chefchaouen",
          description: "Überquerung des Rif bis zur blauen Perle.",
          steps: [
            "Morgendliche Fahrt durch das Rif-Gebirge",
            "Ankunft in Chefchaouen am frühen Nachmittag",
            "Freie Erkundung der blauen Gassen und des Platzes Outa el-Hammam",
            "Übernachtung in einem Riad in Chefchaouen",
          ],
        },
        {
          dayLabel: "T6",
          title: "Chefchaouen — Freier Tag",
          description: "Freie Zeit, die Medina in Ihrem eigenen Tempo zu erkunden.",
          steps: [
            "Freier Vormittag in der blauen Medina",
            "Optionale Wanderung zum Wasserfall Ras el-Ma",
            "Nachmittags Kunsthandwerk-Shopping und Terrassen-Cafés",
            "Übernachtung in einem Riad in Chefchaouen",
          ],
        },
        {
          dayLabel: "T7",
          title: "Chefchaouen → Casablanca",
          description: "Rückkehr zur Atlantikküste.",
          steps: [
            "Morgendliche Abfahrt nach Casablanca",
            "Mögliche Stopps in Asilah oder Larache",
            "Ankunft in Casablanca am späten Nachmittag",
            "Übernachtung in Casablanca",
          ],
        },
        {
          dayLabel: "T8",
          title: "Casablanca — Abreise",
          description: "Ende der Rundreise und Flughafentransfer.",
          steps: [
            "Frühstück im Hotel",
            "Flughafentransfer je nach Flugplan",
            "Ende der Rundreise",
          ],
        },
      ],
      included: [
        "Klimatisierter Transport während 8 Tagen",
        "7 Übernachtungen in Hotel oder Riad (laut Programm)",
        "Tägliche Frühstücke",
        "Geführte Medina-Besichtigungen in Fès und Rabat",
        "Erfahrener französischsprachiger Fahrer-Guide",
      ],
      notIncluded: [
        "Internationale Flüge",
        "Mittag- und Abendessen",
        "Museums- und Denkmaleintritte (~5–10 €/Stätte)",
        "Trinkgelder für Guide und Hotelpersonal",
        "Reiseversicherung",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "1 714 €/Pers." },
        { travelers: "3–4 Reisende", price: "1 174 €/Pers." },
        { travelers: "5–8 Reisende", price: "914 €/Pers." },
        { travelers: "9–10 Reisende", price: "871 €/Pers." },
        { travelers: "11–17 Reisende", price: "785 €/Pers." },
      ],
      faqs: [
        {
          question: "Kann ich diese Rundreise kostenlos stornieren?",
          answer:
            "Ja, kostenlose Stornierung bis 48 Stunden vor Abfahrt. Danach können je nach gebuchten Leistungen Gebühren anfallen.",
        },
        {
          question: "Was ist im Preis enthalten?",
          answer:
            "Privater klimatisierter Transport, 7 Übernachtungen, Frühstücke, geführte Medina-Besichtigungen laut Programm und französischsprachiger Guide. Mittag- und Abendessen, Flüge und Eintritte sind nicht enthalten.",
        },
        {
          question: "Wie viele Personen maximal in der Gruppe?",
          answer:
            "1 bis 17 Personen. Privatisierung für Familie oder Freunde möglich — individuelles Angebot auf Anfrage.",
        },
        {
          question: "Was soll ich mitbringen?",
          answer:
            "Saisongerechte Kleidung, bequeme Schuhe für die Medinas, Mütze, Sonnencreme und leichte Jacke für die Abende in Chefchaouen.",
        },
        {
          question: "Was ist die beste Reisezeit?",
          answer:
            "März bis Mai und September bis November bieten die angenehmsten Temperaturen. Die Rundreise ist ganzjährig möglich.",
        },
        {
          question: "Wie erfolgt die Zahlung?",
          answer:
            "30 % Anzahlung bei Buchung, Rest vor Abfahrt. Banküberweisung oder bar. Detailliertes Angebot auf Anfrage.",
        },
      ],
    },
    "southern-coast-8j": {
      metaTitle:
        "Taroudante & Essaouira — 8 Tage Süden Marokkos & Atlantikküste | Red Nomad",
      metaDescription:
        "8-Tage-Rundreise im Süden Marokkos: Taroudante, Tafraoute, Taghazout und Essaouira. Anti-Atlas, UNESCO-Arganwald und Atlantikküste. Abfahrt ab Marrakesch.",
      subtitle: "Souss, Anti-Atlas & Atlantik",
      difficulty: "Mittel",
      duration: "8 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, Englisch",
      about:
        "Eine einzigartige 8-tägige Rundreise durch Souss und Anti-Atlas, abseits der ausgetroffenen Pfade. Das rosenfarbene Taroudante, die bemalten Felsen von Tafraoute, das Surfdorf Taghazout und das UNESCO-Städtchen Essaouira. Zwischen rosa Bergen, wilden Atlantikklippen und bohemischer Medina — entdecken Sie ein authentisches Marokko.",
      highlights: [
        "Taroudante — das kleine Marrakesch",
        "Schluchten von Aït Baha",
        "Tafraoute und bemalte Felsen von Jean Vérame",
        "Taghazout — Surfdorf am Atlantik",
        "Essaouira — UNESCO-Stadt der Passatwinde",
        "Arganwald (UNESCO)",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch → Taroudante",
          description: "Atlas-Überquerung zur Perle des Souss.",
          steps: [
            "08:00 Uhr — Abfahrt ab Marrakesch",
            "Fahrt über den Tizi-n'Test-Pass (2.092 m) oder Alternativroute je nach Saison",
            "Stopp in den Schluchten von Aït Baha",
            "Ankunft in Taroudante, dem «kleinen Marrakesch» — freier Abend",
            "Abendessen und Nacht in einem Riad in Taroudante",
          ],
        },
        {
          dayLabel: "T2",
          title: "Taroudante → Tafraoute",
          description: "Eintauchen in den Anti-Atlas und seine rosa Landschaften.",
          steps: [
            "Frühstück im Riad",
            "Fahrt durch den Anti-Atlas",
            "Ankunft in Tafraoute, Dorf zwischen rosa Felsen",
            "Freie Zeit zur Erkundung des Dorfes",
            "Übernachtung in Tafraoute",
          ],
        },
        {
          dayLabel: "T3",
          title: "Tafraoute — Freier Tag",
          description: "Anti-Atlas in Ihrem eigenen Tempo entdecken.",
          steps: [
            "Besuch der bemalten Felsen von Jean Vérame",
            "Spaziergang im Ammeln-Tal und umliegenden Berberdörfern",
            "Freies Mittagessen im Dorf",
            "Freier Nachmittag — Wanderung oder Ruhe",
            "Übernachtung in Tafraoute",
          ],
        },
        {
          dayLabel: "T4",
          title: "Tafraoute → Tiznit → Mirleft",
          description: "Vom Gebirge zur wilden Atlantikküste.",
          steps: [
            "Fahrt nach Tiznit, Stadt der Silberschmiede",
            "Besuch der Medina und Silbersouks",
            "Küstenstraße nach Mirleft, spektakuläre Klippen",
            "Sonnenuntergang über dem Atlantik",
            "Übernachtung in Mirleft",
          ],
        },
        {
          dayLabel: "T5",
          title: "Mirleft → Massa → Taghazout",
          description: "Naturschutzgebiet und Surfhauptstadt Marokkos.",
          steps: [
            "Küstenfahrt durch das Souss-Massa-Reservat (Vogelbeobachtung)",
            "Durch den UNESCO-Arganwald",
            "Ankunft in Taghazout, Surferdorf",
            "Check-in im Camp oder Riad",
            "Übernachtung in Taghazout",
          ],
        },
        {
          dayLabel: "T6",
          title: "Taghazout — Strände & Surf",
          description: "Freier Tag am Atlantischen Ozean.",
          steps: [
            "Freier Vormittag — Strand und Entspannung",
            "Optionale Surfkurse (Hash Point, Anchor Point)",
            "Lokaler Markt und Terrassen-Cafés",
            "Sonnenuntergang über dem Atlantik",
            "Übernachtung in Taghazout",
          ],
        },
        {
          dayLabel: "T7",
          title: "Taghazout → Essaouira",
          description: "Küstenstraße zur Stadt der Passatwinde.",
          steps: [
            "Fahrt nach Essaouira entlang der Atlantikküste",
            "Besuch des Fischhafens und UNESCO-Stadtmauern",
            "Kunstgalerien und Medina",
            "Lokaler Guide für Essaouira",
            "Übernachtung in einem Riad in Essaouira",
          ],
        },
        {
          dayLabel: "T8",
          title: "Essaouira → Marrakesch — Abreise",
          description: "Letzter Vormittag und Rückkehr nach Marrakesch.",
          steps: [
            "Freier Vormittag in Essaouira",
            "Rückfahrt nach Marrakesch (~2,5 Std.)",
            "Ankunft in Marrakesch am späten Nachmittag",
            "Ende der Rundreise",
          ],
        },
      ],
      included: [
        "Klimatisierter Transport während 8 Tagen",
        "7 Übernachtungen in Riads und Hotels (laut Programm)",
        "Tägliche Frühstücke",
        "Lokale Guides in Tafraoute und Essaouira",
        "Erfahrener französischsprachiger Fahrer-Guide",
      ],
      notIncluded: [
        "Internationale Flüge",
        "Mittag- und Abendessen",
        "Surf-, Kitesurf- und Wassersportaktivitäten",
        "Eintritte zu Stätten und Museen",
        "Trinkgelder für Guide und Hotelpersonal",
        "Reiseversicherung",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "1 692 €/Pers." },
        { travelers: "3–4 Reisende", price: "1 130 €/Pers." },
        { travelers: "5–8 Reisende", price: "900 €/Pers." },
        { travelers: "9–10 Reisende", price: "850 €/Pers." },
        { travelers: "11–17 Reisende", price: "742 €/Pers." },
      ],
      faqs: [
        {
          question: "Kann ich diese Rundreise kostenlos stornieren?",
          answer:
            "Ja, kostenlose Stornierung bis 48 Stunden vor Abfahrt. Danach können je nach gebuchten Leistungen Gebühren anfallen.",
        },
        {
          question: "Was ist im Preis enthalten?",
          answer:
            "Privater klimatisierter Transport, 7 Übernachtungen, Frühstücke, lokale Guides in Tafraoute und Essaouira und französischsprachiger Fahrer-Guide. Mahlzeiten, Flüge, Surf und Eintritte sind nicht enthalten.",
        },
        {
          question: "Muss ich in Taghazout surfen können?",
          answer:
            "Nein, Surfen ist optional. Anfängerkurse sind vor Ort verfügbar (nicht inklusive). Der Strand ist für alle zugänglich.",
        },
        {
          question: "Wird der Tizi-n'Test-Pass immer befahren?",
          answer:
            "Je nach Saison und Wetter nehmen wir Tizi n'Test oder eine tiefere Alternativroute. Ihr Guide passt die Strecke für Sicherheit und Komfort an.",
        },
        {
          question: "Was ist die beste Reisezeit?",
          answer:
            "März bis Mai und September bis November sind ideal. Der Sommer eignet sich für die Küste (Meeresbrise). Der Winter bleibt im Süden und an der Atlantikküste mild.",
        },
        {
          question: "Wie erfolgt die Zahlung?",
          answer:
            "30 % Anzahlung bei Buchung, Rest vor Abfahrt. Banküberweisung oder bar. Detailliertes Angebot auf Anfrage.",
        },
      ],
    },
    "megdaz-3j": {
      metaTitle:
        "Megdaz-Tal 3 Tage — Authentische Berber-Wanderung | Red Nomad",
      metaDescription:
        "3-Tage-Rundreise im Megdaz-Tal: Trek zwischen Berberdörfern, Homestay-Nacht, landwirtschaftliche Terrassen und Atlas-Berge. Authentisches Erlebnis ab Marrakesch.",
      subtitle: "Der geheime Atlas der Berber",
      difficulty: "Mittel",
      duration: "3 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Das Megdaz-Tal, eine der am besten erhaltenen Ecken des Hohen Atlas, entdeckt man zu Fuß zwischen Steinterrassen, an Bergen hängenden Dörfern und herzlicher Gastfreundschaft bei Gastfamilien. Drei Tage fern vom Massentourismus, um das Berberleben im Rhythmus der Pfade, Felder und Minztees zu erleben.",
      highlights: [
        "Trek in einem erhaltenen Berberdorf im Atlas",
        "Homestay-Nacht — authentische Gastfreundschaft",
        "Wanderung entlang steinerner Landwirtschaftsterrassen",
        "Landschaften des östlichen Hohen Atlas — Gipfel und Täler",
        "Begegnung mit lokalen Handwerkern und Bauern",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch — Azilal — Megdaz",
          description:
            "Fahrt zum Hohen Atlas und erste Eintauchen ins Tal.",
          steps: [
            "08:00 — Abfahrt Marrakesch via Tichka-Pass oder Beni Mellal",
            "Azilal und Ouzoud-Wasserfälle (optionaler Fotostopp)",
            "Ankunft Megdaz, Minztee-Empfang bei Gastfamilie",
            "Leichter Spaziergang im Dorf und Terrassen-Entdeckung",
          ],
        },
        {
          dayLabel: "T2",
          title: "Megdaz-Tal-Trek",
          description:
            "Wandertag zwischen Dörfern, Gärten und Aussichtspunkten.",
          steps: [
            "Berber-Frühstück bei der Gastfamilie",
            "4–5 Std. Trek zwischen Terrassen, Bewässerungskanälen und Dörfern",
            "Picknick-Mittagessen oder Gastfamilien-Mahlzeit unterwegs",
            "Freier Nachmittag: Begegnungen, Handwerk oder Ruhe",
            "Traditionelles Abendessen und Homestay-Nacht",
          ],
        },
        {
          dayLabel: "T3",
          title: "Megdaz — Marrakesch",
          description:
            "Letzte Morgenwanderung und Rückkehr nach Marrakesch.",
          steps: [
            "Vormittag — Leichte Wanderung oder Besuch einer lokalen Genossenschaft",
            "Mittagessen im Dorf vor der Abfahrt",
            "Rückfahrt nach Marrakesch via Atlas",
            "~18:00 — Ankunft Marrakesch",
          ],
        },
      ],
      included: [
        "Privater Hin- und Rücktransport ab Marrakesch",
        "Französischsprachiger lokaler Berber-Guide",
        "Trek mit lokalem Begleiter am T2",
        "Alle traditionellen Mahlzeiten während des Megdaz-Aufenthalts",
      ],
      notIncluded: [
        "Unterkunft bei Gastfamilie (2 Nächte)",
        "Getränke und Snacks außerhalb der Mahlzeiten",
        "Persönliche Wanderausrüstung",
        "Reiseversicherung",
        "Trinkgelder für Gastfamilie (optional)",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "515 €/Pers." },
        { travelers: "3–4 Reisende", price: "420 €/Pers." },
        { travelers: "5–8 Reisende", price: "300 €/Pers." },
        { travelers: "9–10 Reisende", price: "270 €/Pers." },
        { travelers: "11–17 Reisende", price: "270 €/Pers." },
      ],
      faqs: [
        {
          question: "Welches Fitnessniveau ist nötig?",
          answer:
            "Moderate 4–5 Std. Wanderung mit leichtem Höhenunterschied. Wege teils steil — Wanderschuhe empfohlen.",
        },
        {
          question: "Wie sind Homestay-Nächte?",
          answer:
            "Einfache, saubere Zimmer bei einer Berberfamilie. Gemeinschaftsbad. Authentisches Erlebnis, kein Hotel.",
        },
        {
          question: "Gibt es warmes Wasser?",
          answer:
            "Warmwasser in den Bergen begrenzt. Mikrofaser-Handtuch und Duschgel mitbringen.",
        },
        {
          question: "Ist der Trek im Winter möglich?",
          answer:
            "Ja mit passender Ausrüstung (November–März). Schnee in der Höhe möglich — warme Kleidung mitbringen.",
        },
        {
          question: "Geeignet für Vegetarier?",
          answer:
            "Ja, bitte im Voraus mitteilen. Berber-Mahlzeiten lassen sich leicht anpassen (Gemüse, Couscous, Tajines).",
        },
      ],
    },
  },
};
