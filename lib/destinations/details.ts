import type { DestinationDetailsByLocale } from "./types";

export const destinationDetails: DestinationDetailsByLocale = {
  fr: {
    marrakech: {
      metaTitle: "Marrakech — Circuits & transferts | Red Nomad",
      metaDescription:
        "Marrakech : ville impériale, médina UNESCO, place Jemaa el-Fna, riads et transferts aéroport. Excursions, circuits privés et chauffeur sur mesure avec Red Nomad.",
      subtitle: "Perle du Sud",
      difficulty: "Tous niveaux",
      duration: "Sur mesure",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Marrakech est le cœur battant du tourisme marocain : médina labyrinthique classée UNESCO, riads de charme, souks colorés et la place Jemaa el-Fna qui s'anime au coucher du soleil. Red Nomad vous accueille dès l'aéroport et organise transferts, visites guidées, excursions à la journée et circuits multi-jours au départ de la ville ocre.",
      highlights: [
        "Place Jemaa el-Fna — spectacle vivant UNESCO au crépuscule",
        "Médina et souks — artisanat, épices et palais cachés",
        "Riads et jardins : Bahia, Majorelle, Yves Saint Laurent",
        "Transferts aéroport Marrakech-Menara 24 h/24",
        "Hub idéal pour Essaouira, Atlas et désert",
      ],
      itinerary: [
        {
          dayLabel: "J1–J3",
          title: "Programme type — Marrakech impériale",
          description:
            "Exemple de séjour sur place : découverte de la médina, temps libre et excursions au départ de Marrakech.",
          steps: [
            "J1 — Transfert aéroport, installation au riad, balade Jemaa el-Fna au coucher du soleil",
            "J2 — Visite guidée médina : Bahia, souks, médersa Ben Youssef",
            "J2 — Après-midi libre : hammam, Majorelle ou terrasse",
            "J3 — Excursion au choix : Essaouira, Ourika ou Agafay",
            "Transferts et timing adaptés à votre vol et à votre rythme",
          ],
        },
      ],
      included: [
        "Transferts aéroport ↔ hébergement à Marrakech",
        "Chauffeur privé bilingue (FR/EN) pour vos déplacements",
        "Excursions à la journée personnalisées au départ de Marrakech",
        "Circuits multi-jours sur mesure (Atlas, désert, côte)",
        "Guides locaux pour la médina, monuments et souks",
      ],
      notIncluded: [
        "Hébergement (riads, hôtels — réservation sur demande)",
        "Repas, boissons et dépenses personnelles",
        "Entrées palais, musées et sites (~70–150 MAD)",
        "Pourboires guides et chauffeurs (facultatif)",
      ],
      groupPricing: [
        { travelers: "Transfert aéroport (1–4 pers.)", price: "à partir de 25 €" },
        { travelers: "Visite médina guidée (½ journée)", price: "à partir de 45 €/pers." },
        { travelers: "Excursion Essaouira (1 jour)", price: "à partir de 80 €/pers." },
      ],
      faqs: [
        {
          question: "Proposez-vous le transfert depuis l'aéroport Marrakech ?",
          answer:
            "Oui, accueil personnalisé à l'aéroport Menara 24 h/24, véhicule climatisé et chauffeur bilingue jusqu'à votre riad ou hôtel.",
        },
        {
          question: "Peut-on combiner Marrakech avec le désert ou l'Atlas ?",
          answer:
            "Absolument. Marrakech est notre base principale pour des circuits de 2 à 17 jours vers Merzouga, Essaouira, vallée de l'Ourika ou le Nord.",
        },
        {
          question: "Les visites de la médina sont-elles privées ?",
          answer:
            "Oui, guide local dédié à votre groupe, rythme adapté aux familles ou aux photographes. Demandez un devis sur mesure.",
        },
        {
          question: "Quelle est la meilleure période pour Marrakech ?",
          answer:
            "Octobre–avril pour des températures agréables. Été chaud mais riads frais ; soirées animées toute l'année sur Jemaa el-Fna.",
        },
      ],
    },
    merzouga: {
      metaTitle: "Merzouga — Circuits & transferts | Red Nomad",
      metaDescription:
        "Merzouga et Erg Chebbi : dunes du Sahara, randonnée à dos de chameau, bivouac de luxe et coucher de soleil. Circuits désert privés depuis Marrakech ou Fès avec Red Nomad.",
      subtitle: "Porte du Sahara",
      difficulty: "Modéré (dunes)",
      duration: "2 à 4 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech ou Fès",
      languages: "Français, English",
      about:
        "Merzouga, au pied des dunes dorées de l'Erg Chebbi, offre l'expérience saharienne la plus emblématique du Maroc. Randonnée à dos de chameau au coucher du soleil, nuit en bivouac berbère ou camp de luxe sous les étoiles, et lever de soleil sur les dunes : Red Nomad organise votre circuit désert avec chauffeur privé et hébergements sélectionnés.",
      highlights: [
        "Erg Chebbi — dunes de sable jusqu'à 150 m",
        "Randonnée chameau au coucher et lever du soleil",
        "Nuit en bivouac traditionnel ou camp de luxe",
        "Musique gnawa à Khamlia et lac seasonnier Dayet Srji",
        "Route des kasbahs et gorges du Todra en option",
      ],
      itinerary: [
        {
          dayLabel: "J1–J3",
          title: "Programme type — Merzouga & Erg Chebbi",
          description:
            "Circuit désert classique 3 jours / 2 nuits depuis Marrakech, personnalisable.",
          steps: [
            "J1 — Route vers le Sud : Atlas, kasbahs, gorges du Todra, nuit à Tinghir ou Boumalne",
            "J2 — Vallée du Dadès, Rissani, arrivée Merzouga, randonnée chameau au coucher du soleil",
            "J2 — Nuit en bivouac sous les étoiles, musique berbère au camp",
            "J3 — Lever de soleil sur les dunes, retour par Ouarzazate ou Fès",
            "Durée et étapes ajustables (2j/1n ou 4j avec Skoura)",
          ],
        },
      ],
      included: [
        "Transport privé 4x4 ou minibus climatisé Marrakech ↔ Merzouga",
        "Chauffeur professionnel bilingue tout au long du circuit",
        "Randonnée chameau et nuit en bivouac (formule standard)",
        "Dîner et petit-déjeuner au camp désert",
        "Assistance Red Nomad 24 h/24 avant et pendant le voyage",
      ],
      notIncluded: [
        "Hébergements en ville (Erfoud, Tinghir — sur devis)",
        "Déjeuners en route et boissons",
        "Upgrade camp de luxe (supplément sur demande)",
        "Pourboires chameliers et personnel du camp",
      ],
      groupPricing: [
        { travelers: "Circuit désert 2j/1n (depuis Marrakech)", price: "à partir de 190 €/pers." },
        { travelers: "Circuit désert 3j/2n (classique)", price: "à partir de 280 €/pers." },
        { travelers: "Nuit camp luxe Erg Chebbi (seul)", price: "à partir de 120 €/pers." },
      ],
      faqs: [
        {
          question: "Combien de temps faut-il pour rejoindre Merzouga depuis Marrakech ?",
          answer:
            "Environ 9–10 h de route directe ; nous recommandons un circuit 3 jours avec étapes Atlas et gorges pour un rythme confortable.",
        },
        {
          question: "Le bivouac convient-il aux familles ?",
          answer:
            "Oui, camps équipés de sanitaires, literie et options famille. Précisez l'âge des enfants pour adapter le programme.",
        },
        {
          question: "Quelle différence entre bivouac standard et camp de luxe ?",
          answer:
            "Le standard offre tentes berbères authentiques ; le luxe ajoute suites privées, douche et restauration gastronomique. Devis sur demande.",
        },
        {
          question: "Quand visiter les dunes ?",
          answer:
            "Toute l'année. Printemps et automne idéaux ; été très chaud en journée mais magique au crépuscule.",
        },
      ],
    },
    "nord-maroc": {
      metaTitle: "Nord du Maroc — Circuits & transferts | Red Nomad",
      metaDescription:
        "Tanger, Chefchaouen la perle bleue, Asilah et la côte nord. Circuits privés, transferts et excursions sur la Méditerranée marocaine avec Red Nomad.",
      subtitle: "Méditerranée & montagnes du Rif",
      difficulty: "Facile",
      duration: "3 à 7 jours",
      groupSize: "1–17 personnes",
      departure: "Tanger, Tétouan ou Fès",
      languages: "Français, English",
      about:
        "Le Nord du Maroc révèle une facette méditerranéenne du royaume : Tanger entre deux mers, Chefchaouen aux murs bleus du Rif, Asilah et ses murailles atlantiques, cap Spartel et grottes d'Hercule. Red Nomad organise circuits combinés, transferts depuis l'aéroport ou le port de Tanger et excursions sur mesure le long de la côte nord.",
      highlights: [
        "Chefchaouen — médina bleue du Rif, photogénique et paisible",
        "Tanger — kasbah, médina et cap Spartel",
        "Asilah — art mural, remparts et plages atlantiques",
        "Tétouan — médina hispano-mauresque UNESCO",
        "Route côtière Méditerranée et détroit de Gibraltar",
      ],
      itinerary: [
        {
          dayLabel: "J1–J4",
          title: "Programme type — Nord du Maroc",
          description:
            "Circuit 4 jours Tanger, Chefchaouen et Asilah, modulable selon votre point d'entrée.",
          steps: [
            "J1 — Accueil Tanger, médina, cap Spartel et grottes d'Hercule",
            "J2 — Route vers Chefchaouen, balade médina bleue et Ras El Ma",
            "J3 — Descente vers Asilah ou Larache, remparts et art de rue",
            "J4 — Retour Tanger ou liaison Fès / Casablanca",
            "Transferts port Tanger Med ou aéroport inclus sur demande",
          ],
        },
      ],
      included: [
        "Chauffeur privé bilingue pour tout le circuit nord",
        "Transferts aéroport, port ou gare Tanger",
        "Excursions à la journée Chefchaouen, Asilah, Tétouan",
        "Circuits combinés Nord + Fès ou Rabat sur mesure",
        "Guides locaux pour médinas et sites historiques",
      ],
      notIncluded: [
        "Hébergements (riads nord — recommandations sur demande)",
        "Repas et boissons",
        "Entrées musées et sites (~20–60 MAD)",
        "Traversée ferry Espagne–Maroc ( réservation séparée )",
      ],
      groupPricing: [
        { travelers: "Excursion Chefchaouen (1j depuis Tanger)", price: "à partir de 75 €/pers." },
        { travelers: "Circuit Nord 4 jours (2 pers.)", price: "à partir de 320 €/pers." },
        { travelers: "Transfert Tanger aéroport ↔ Chefchaouen", price: "à partir de 90 €" },
      ],
      faqs: [
        {
          question: "Peut-on combiner le Nord avec Fès ou Rabat ?",
          answer:
            "Oui, circuits 5–7 jours Tanger–Chefchaouen–Fès–Volubilis très demandés. Nous optimisons la route selon votre sens de voyage.",
        },
        {
          question: "Chefchaouen est-elle accessible en excursion d'une journée ?",
          answer:
            "Depuis Tanger (2h30) ou Tétouan (1h30), oui. Pour profiter de la médina au calme, une nuit sur place est recommandée.",
        },
        {
          question: "Assurez-vous les transferts depuis le port de Tanger Med ?",
          answer:
            "Oui, accueil au ferry ou à l'aéroport Ibn Battouta, liaison directe vers Chefchaouen, Asilah ou Fès.",
        },
        {
          question: "Quelle saison pour le Nord ?",
          answer:
            "Printemps et automne parfaits ; été agréable en montagne à Chefchaouen, côte ventilée.",
        },
      ],
    },
    fes: {
      metaTitle: "Fès — Circuits & transferts | Red Nomad",
      metaDescription:
        "Fès, capitale spirituelle : médina UNESCO, tanneries Chouara, artisanat et médersas. Visites guidées, transferts et circuits privés avec Red Nomad.",
      subtitle: "Capitale spirituelle et artisanale",
      difficulty: "Modéré (médina)",
      duration: "1 à 5 jours",
      groupSize: "1–17 personnes",
      departure: "Fès",
      languages: "Français, English",
      about:
        "Fès el-Bali, plus grande zone piétonne du monde, abrite tanneries centenaires, médersas sculptées et savoir-faire artisanal transmis de génération en génération. Red Nomad propose transferts aéroport Fès-Saïss, visites guidées de la médina, excursions vers Volubilis et Meknès, et circuits vers le Nord ou le désert.",
      highlights: [
        "Médina Fès el-Bali — UNESCO, 9 000 ruelles",
        "Tanneries Chouara — spectacle ocre et artisanal unique",
        "Médersa Bou Inania et Al Quaraouiyine",
        "Fès el-Jdid et palais royal (extérieur)",
        "Artisanat : céramique, cuir, brocart et zellige",
      ],
      itinerary: [
        {
          dayLabel: "J1–J2",
          title: "Programme type — Fès impériale",
          description:
            "Deux jours pour savourer la médina et les alentours sans se presser.",
          steps: [
            "J1 — Transfert aéroport, visite guidée tanneries et souks cuir",
            "J1 — Médersa Bou Inania, quartiers des artisans",
            "J2 — Fondouk Nejjarine, tombeaux des Mérinides (panorama)",
            "J2 — Excursion optionnelle Volubilis & Meknès (1j)",
            "Guides locaux certifiés, rythme adapté à votre groupe",
          ],
        },
      ],
      included: [
        "Transferts aéroport Fès-Saïss ↔ médina",
        "Guide local expert médina et tanneries",
        "Chauffeur privé pour Volubilis, Meknès et Nord",
        "Circuits Fès → Merzouga ou Chefchaouen sur mesure",
        "Assistance réservation riads et tables recommandées",
      ],
      notIncluded: [
        "Hébergement à Fès (riads médina sur demande)",
        "Repas et boissons",
        "Entrées monuments (~20–50 MAD par site)",
        "Pourboires guides",
      ],
      groupPricing: [
        { travelers: "Visite médina & tanneries (½ journée)", price: "à partir de 50 €/pers." },
        { travelers: "Excursion Volubilis & Meknès (1j)", price: "à partir de 85 €/pers." },
        { travelers: "Transfert aéroport Fès (1–4 pers.)", price: "à partir de 30 €" },
      ],
      faqs: [
        {
          question: "La médina de Fès est-elle difficile à visiter seul ?",
          answer:
            "Le dédale de ruelles rend un guide indispensable pour les tanneries, monuments et ateliers. Nous fournissons des guides locaux expérimentés.",
        },
        {
          question: "Peut-on visiter les tanneries sans gêne olfactive ?",
          answer:
            "Des brins de menthe sont distribués aux terrasses surplombant les cuves ; visite brève et fascinante, surtout le matin.",
        },
        {
          question: "Fès convient-elle comme étape vers le désert ?",
          answer:
            "Oui, route Fès–Merzouga plus directe que depuis Marrakech (~7–8 h). Circuits 2–3 jours désert au départ de Fès.",
        },
        {
          question: "Combien de jours prévoir à Fès ?",
          answer:
            "Minimum 2 nuits pour la médina ; ajoutez 1 jour pour Volubilis et Meknès.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira — Circuits & transferts | Red Nomad",
      metaDescription:
        "Essaouira : médina atlantique, port aux mouettes, remparts UNESCO et plages venteuses. Excursion d'une journée depuis Marrakech ou séjour sur mesure avec Red Nomad.",
      subtitle: "Perle de l'Atlantique",
      difficulty: "Facile",
      duration: "1 jour à 3 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech ou Essaouira",
      languages: "Français, English",
      about:
        "Essaouira, ancienne Mogador, mêle médina fortifiée, port de pêche animé et horizon atlantique. Remparts UNESCO, ateliers de marqueterie de thuya, plages de sable fin et spots de windsurf : Red Nomad organise l'excursion d'une journée depuis Marrakech ou un séjour détente avec transferts privés.",
      highlights: [
        "Médina fortifiée — UNESCO, remparts et Skala du Port",
        "Port de pêche — barques bleues et grillades de sardines",
        "Plages atlantiques et spots windsurf / kitesurf",
        "Ateliers marqueterie de thuya et galeries d'art",
        "Excursion d'une journée depuis Marrakech (2h30)",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Programme type — Essaouira en journée",
          description:
            "Excursion classique depuis Marrakech avec arganiers et temps libre en médina.",
          steps: [
            "08h00 — Départ Marrakech, arrêt coopérative d'argan (option)",
            "10h30 — Arrivée Essaouira, remparts et Skala de la Kasbah",
            "11h30 — Médina, port et marché aux poissons",
            "13h00 — Déjeuner libre face à l'Atlantique",
            "15h00 — Temps libre plage ou shopping artisanat",
            "17h00 — Retour Marrakech (~19h30)",
          ],
        },
      ],
      included: [
        "Transport privé climatisé Marrakech ↔ Essaouira",
        "Chauffeur bilingue et prise en charge à l'hébergement",
        "Séjours multi-jours avec transferts locaux Essaouira",
        "Guides médina sur demande",
        "Flexibilité horaires pour windsurf ou coucher de soleil",
      ],
      notIncluded: [
        "Déjeuner et boissons",
        "Location matériel windsurf / kitesurf",
        "Entrée musées (~10–30 MAD)",
        "Hébergement si excursion journée uniquement",
      ],
      groupPricing: [
        { travelers: "Excursion 1 jour (depuis Marrakech)", price: "à partir de 80 €/pers." },
        { travelers: "Transfert Marrakech ↔ Essaouira (seul)", price: "à partir de 95 €" },
        { travelers: "Visite guidée médina Essaouira", price: "à partir de 40 €/pers." },
      ],
      faqs: [
        {
          question: "L'excursion Essaouira depuis Marrakech vaut-elle le détour ?",
          answer:
            "Oui, changement total d'ambiance en 2h30 : air marin, médina plus calme et cuisine de poisson excellente.",
        },
        {
          question: "Essaouira est-elle venteuse ?",
          answer:
            "Le alizé souffle régulièrement — parfait pour le surf ; prévoyez une veste légère même en été.",
        },
        {
          question: "Peut-on dormir à Essaouira plusieurs nuits ?",
          answer:
            "Absolument. Nous organisons transferts, riads en médina et excursions locales (Iles Mogador, plages).",
        },
        {
          question: "Convient aux familles avec enfants ?",
          answer:
            "Oui, médina plate, plage accessible et ambiance décontractée. Sièges enfants disponibles sur demande.",
        },
      ],
    },
    megdaz: {
      metaTitle: "Megdaz — Circuits & transferts | Red Nomad",
      metaDescription:
        "Vallée de Megdaz, Atlas marocain : villages berbères authentiques, treks et hospitalité de montagne. Circuits trek privés depuis Marrakech avec Red Nomad.",
      subtitle: "Atlas authentique",
      difficulty: "Modéré à sportif",
      duration: "2 à 5 jours",
      groupSize: "1–12 personnes",
      departure: "Marrakech ou Azilal",
      languages: "Français, English",
      about:
        "La vallée de Megdaz, perle préservée du Haut Atlas central, offre paysages vertigineux, villages en pisé accrochés aux flancs et randonnées entre gorges et sommets. Loin des sentiers bondés, Red Nomad organise treks avec guides berbères locaux, muletiers et nuits chez l'habitant ou en gîte de montagne.",
      highlights: [
        "Villages berbères authentiques — Megdaz, Tabant, Agoudi",
        "Gorges et terrasses cultivées en montagne",
        "Treks 1 à 5 jours avec muletiers et guides locaux",
        "Hospitalité traditionnelle : thé à la menthe et tajines",
        "Alternative préservée à Imlil et Toubkal",
      ],
      itinerary: [
        {
          dayLabel: "J1–J3",
          title: "Programme type — Trek vallée de Megdaz",
          description:
            "Randonnée 3 jours entre villages berbères, modulable selon votre condition.",
          steps: [
            "J1 — Route Marrakech → Azilal → Megdaz, accueil village et thé",
            "J1 — Randonnée 3–4 h vers gorges ou viewpoint",
            "J2 — Trek inter-villages, rencontres artisans et agriculteurs",
            "J2 — Nuit gîte ou chez l'habitant, dîner berbère",
            "J3 — Retour progressive vers Azilal et Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé Marrakech ↔ vallée de Megdaz",
        "Guide de montagne berbère local certifié",
        "Muletiers pour bagages sur les treks",
        "Hébergements montagne (gîtes) selon programme",
        "Repas trek : petit-déjeuner, déjeuner picnic, dîner",
      ],
      notIncluded: [
        "Équipement trek personnel (chaussures, bâtons)",
        "Assurance rapatriement ( recommandée )",
        "Nuit Marrakech avant/après trek",
        "Pourboires muletiers et villageois",
      ],
      groupPricing: [
        { travelers: "Trek 2j/1n Megdaz (2 pers.)", price: "à partir de 220 €/pers." },
        { travelers: "Trek 3j/2n vallée complète", price: "à partir de 320 €/pers." },
        { travelers: "Excursion 1j Megdaz (sans nuit)", price: "à partir de 95 €/pers." },
      ],
      faqs: [
        {
          question: "Faut-il une bonne condition physique pour Megdaz ?",
          answer:
            "Treks modérés 3–5 h/jour avec dénivelé modéré. Programmes adaptables pour families actives ou randonneurs expérimentés.",
        },
        {
          question: "Quelle différence avec Imlil / Toubkal ?",
          answer:
            "Megdaz est plus préservé et moins fréquenté ; authenticité villageoise sans foule. Idéal pour immersion culturelle.",
        },
        {
          question: "Quel équipement prévoir ?",
          answer:
            "Chaussures de randonnée, veste imperméable, sac à daypack 25–30 L, couche chaude pour les nuits fraîches en altitude.",
        },
        {
          question: "Quand randonner dans la vallée ?",
          answer:
            "Avril–juin et septembre–novembre optimaux ; hiver possible avec neige en altitude — renseignez-vous.",
        },
      ],
    },
    agadir: {
      metaTitle: "Agadir — Circuits & transferts | Red Nomad",
      metaDescription:
        "Agadir, baie ensoleillée, plages atlantiques et Taghazout surf. Transferts, excursions côte sud et circuits Marrakech–Agadir avec Red Nomad.",
      subtitle: "Côte atlantique ensoleillée",
      difficulty: "Facile",
      duration: "1 à 5 jours",
      groupSize: "1–17 personnes",
      departure: "Agadir ou Marrakech",
      languages: "Français, English",
      about:
        "Agadir et sa baie bordée de 10 km de plage offrent le Maroc en mode balnéaire : ensoleillement quasi permanent, corniche animée et proximité de Taghazout, capitale du surf marocain. Red Nomad assure transferts aéroport Al Massira, liaisons Marrakech–Agadir et excursions vers Paradise Valley, Souss-Massa ou la kasbah d'Agadir Oufella.",
      highlights: [
        "Baie d'Agadir — 300 jours de soleil par an",
        "Taghazout — surf, yoga et village bohème",
        "Kasbah Agadir Oufella — panorama sur la baie",
        "Paradise Valley — piscines naturelles et palmeraies",
        "Souss-Massa — parc national et oiseaux migrateurs",
      ],
      itinerary: [
        {
          dayLabel: "J1–J3",
          title: "Programme type — Agadir & côte sud",
          description:
            "Séjour balnéaire avec excursions nature autour d'Agadir.",
          steps: [
            "J1 — Transfert aéroport, corniche et kasbah Oufella au coucher du soleil",
            "J2 — Excursion Taghazout : surf, café de plage ou yoga",
            "J2 — Après-midi libre plage ou spa",
            "J3 — Paradise Valley ou Souss-Massa selon saison",
            "Liaison Marrakech–Agadir (3h) disponible en privé",
          ],
        },
      ],
      included: [
        "Transferts aéroport Agadir Al Massira",
        "Chauffeur privé pour Taghazout, Paradise Valley, Souss-Massa",
        "Liaison Marrakech ↔ Agadir en minibus ou 4x4",
        "Excursions sur mesure demi-journée ou journée",
        "Conseils hébergements front de mer et riads",
      ],
      notIncluded: [
        "Hébergement hôtels et resorts",
        "Cours de surf et location boards",
        "Repas et boissons",
        "Entrée parc Souss-Massa (~20 MAD)",
      ],
      groupPricing: [
        { travelers: "Transfert aéroport Agadir (1–4 pers.)", price: "à partir de 28 €" },
        { travelers: "Excursion Paradise Valley (1j)", price: "à partir de 55 €/pers." },
        { travelers: "Marrakech → Agadir (transfert privé)", price: "à partir de 120 €" },
      ],
      faqs: [
        {
          question: "Agadir convient-elle pour un séjour plage en famille ?",
          answer:
            "Oui, plages larges, eau modérée et infrastructure touristique complète. Idéal octobre–mai pour éviter la chaleur estivale.",
        },
        {
          question: "Taghazout est-il loin d'Agadir ?",
          answer:
            "20 minutes en voiture. Nous organisons navettes privées ou demi-journées surf avec instructeurs partenaires.",
        },
        {
          question: "Peut-on combiner Agadir avec le désert ou Marrakech ?",
          answer:
            "Circuits Marrakech → Agadir → Taroudant ou retour par l'Atlas ; devis personnalisé selon durée.",
        },
        {
          question: "Paradise Valley est-elle accessible toute l'année ?",
          answer:
            "Mieux printemps–automne ; après les pluies les piscines naturelles sont plus spectaculaires.",
        },
      ],
    },
    oualili: {
      metaTitle: "Oualili — Circuits & transferts | Red Nomad",
      metaDescription:
        "Oualili et Volubilis : ruines romaines UNESCO, mosaïques antiques et Meknès impériale. Excursions archéologiques privées depuis Fès avec Red Nomad.",
      subtitle: "Héritage romain du Maroc",
      difficulty: "Facile",
      duration: "1 jour à 3 jours",
      groupSize: "1–17 personnes",
      departure: "Fès ou Meknès",
      languages: "Français, English",
      about:
        "Volubilis, site romain le mieux conservé du Maghreb, et les environs d'Oualili (Walili) témoignent de 2 000 ans d'histoire au cœur du Maroc central. Mosaïques, arc de triomphe de Caracalla et vue sur la plaine du Saïss : Red Nomad organise excursions depuis Fès ou Meknès avec guide spécialisé et combinaisons avec les villes impériales.",
      highlights: [
        "Volubilis — UNESCO, mosaïques et maisons romaines",
        "Arc de triomphe et capitole antique",
        "Meknès impériale — Bab Mansour et granaries",
        "Moulay Idriss Zerhoun — ville sainte panoramique",
        "Paysages du Saïss et oliviers centenaires",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Programme type — Volubilis & Meknès",
          description:
            "Excursion d'une journée depuis Fès, trésor archéologique et ville impériale.",
          steps: [
            "09h00 — Départ Fès, route vers le Saïss",
            "10h00 — Moulay Idriss Zerhoun (vue panoramique)",
            "10h45 — Visite guidée site Volubilis (2 h)",
            "13h00 — Déjeuner Meknès ou local",
            "14h30 — Meknès : Bab Mansour, medersa, Heri es-Souani",
            "18h00 — Retour Fès",
          ],
        },
      ],
      included: [
        "Transport privé Fès ↔ Volubilis ↔ Meknès",
        "Chauffeur bilingue et guide site archéologique",
        "Circuits combinés Fès + Oualili + Chefchaouen",
        "Timing flexible pour photographes et groupes scolaires",
        "Prise en charge riad ou hôtel à Fès / Meknès",
      ],
      notIncluded: [
        "Entrée Volubilis (~70 MAD) et Meknès (~10–20 MAD/site)",
        "Déjeuner et boissons",
        "Hébergement (sauf circuit multi-jours)",
        "Pourboires guide archéologique",
      ],
      groupPricing: [
        { travelers: "Volubilis & Meknès (1j, 2 pers.)", price: "à partir de 85 €/pers." },
        { travelers: "Volubilis seul (½ journée)", price: "à partir de 55 €/pers." },
        { travelers: "Circuit Fès + Volubilis + Chefchaouen (3j)", price: "à partir de 290 €/pers." },
      ],
      faqs: [
        {
          question: "Combien de temps faut-il pour Volubilis ?",
          answer:
            "Comptez 1h30–2h sur site avec guide ; demi-journée minimum, journée complète avec Meknès recommandée.",
        },
        {
          question: "Faut-il un guide sur le site romain ?",
          answer:
            "Fortement conseillé pour comprendre mosaïques et histoire ; nos guides spécialisés rendent la visite vivante.",
        },
        {
          question: "Volubilis est-elle accessible aux personnes à mobilité réduite ?",
          answer:
            "Chemins partiellement pavés et pentes légères ; prévenez-nous pour adapter le parcours ou privilégier les zones plates.",
        },
        {
          question: "Peut-on visiter depuis Rabat ou Casablanca ?",
          answer:
            "Oui, excursion longue journée possible ; Fès ou Meknès restent les bases les plus pratiques (45 min–1h).",
        },
      ],
    },
  },
  en: {
    marrakech: {
      metaTitle: "Marrakech — Tours & transfers | Red Nomad",
      metaDescription:
        "Marrakech: imperial city, UNESCO medina, Jemaa el-Fna square, riads and airport transfers. Private excursions, tours and bespoke driver service with Red Nomad.",
      subtitle: "Pearl of the South",
      difficulty: "All levels",
      duration: "Tailor-made",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Marrakech is the beating heart of Moroccan tourism: a UNESCO labyrinthine medina, charming riads, colourful souks and Jemaa el-Fna square coming alive at sunset. Red Nomad welcomes you from the airport and arranges transfers, guided visits, day trips and multi-day tours from the ochre city.",
      highlights: [
        "Jemaa el-Fna — UNESCO living spectacle at dusk",
        "Medina and souks — crafts, spices and hidden palaces",
        "Riads and gardens: Bahia, Majorelle, Yves Saint Laurent",
        "Marrakech-Menara airport transfers 24/7",
        "Ideal hub for Essaouira, Atlas and desert",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Sample program — Imperial Marrakech",
          description:
            "Example stay on the ground: medina discovery, free time and day trips from Marrakech.",
          steps: [
            "D1 — Airport transfer, riad check-in, Jemaa el-Fna at sunset",
            "D2 — Guided medina tour: Bahia, souks, Ben Youssef medersa",
            "D2 — Free afternoon: hammam, Majorelle or rooftop terrace",
            "D3 — Day trip of your choice: Essaouira, Ourika or Agafay",
            "Transfers and timing adapted to your flight and pace",
          ],
        },
      ],
      included: [
        "Airport ↔ accommodation transfers in Marrakech",
        "Private bilingual driver (FR/EN) for your movements",
        "Customised day trips from Marrakech",
        "Tailor-made multi-day tours (Atlas, desert, coast)",
        "Local guides for medina, monuments and souks",
      ],
      notIncluded: [
        "Accommodation (riads, hotels — booking on request)",
        "Meals, drinks and personal expenses",
        "Palace, museum and site entrances (~70–150 MAD)",
        "Tips for guides and drivers (optional)",
      ],
      groupPricing: [
        { travelers: "Airport transfer (1–4 people)", price: "from €25" },
        { travelers: "Guided medina visit (half day)", price: "from €45/person" },
        { travelers: "Essaouira day trip (1 day)", price: "from €80/person" },
      ],
      faqs: [
        {
          question: "Do you offer Marrakech airport transfers?",
          answer:
            "Yes, personalised meet-and-greet at Menara airport 24/7, air-conditioned vehicle and bilingual driver to your riad or hotel.",
        },
        {
          question: "Can we combine Marrakech with the desert or Atlas?",
          answer:
            "Absolutely. Marrakech is our main base for 2–11 day tours to Merzouga, Essaouira, Ourika valley or the North.",
        },
        {
          question: "Are medina visits private?",
          answer:
            "Yes, a local guide dedicated to your group, pace adapted for families or photographers. Ask for a custom quote.",
        },
        {
          question: "Best time to visit Marrakech?",
          answer:
            "October–April for pleasant temperatures. Hot summers but cool riads; lively evenings year-round on Jemaa el-Fna.",
        },
      ],
    },
    merzouga: {
      metaTitle: "Merzouga — Tours & transfers | Red Nomad",
      metaDescription:
        "Merzouga and Erg Chebbi: Sahara dunes, camel trek, luxury camp and sunset. Private desert tours from Marrakech or Fes with Red Nomad.",
      subtitle: "Gateway to the Sahara",
      difficulty: "Moderate (dunes)",
      duration: "2 to 4 days",
      groupSize: "1–17 people",
      departure: "Marrakech or Fes",
      languages: "French, English",
      about:
        "Merzouga, at the foot of the golden Erg Chebbi dunes, offers Morocco's most iconic Saharan experience. Camel trek at sunset, night in a Berber bivouac or luxury camp under the stars, sunrise over the dunes: Red Nomad organises your desert circuit with private driver and selected accommodation.",
      highlights: [
        "Erg Chebbi — sand dunes up to 150 m",
        "Camel trek at sunset and sunrise",
        "Night in traditional bivouac or luxury camp",
        "Gnawa music in Khamlia and seasonal Dayet Srji lake",
        "Kasbah route and Todra Gorge optional",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Sample program — Merzouga & Erg Chebbi",
          description:
            "Classic 3-day / 2-night desert tour from Marrakech, fully customisable.",
          steps: [
            "D1 — Drive south: Atlas, kasbahs, Todra Gorge, night in Tinghir or Boumalne",
            "D2 — Dadès valley, Rissani, Merzouga arrival, sunset camel trek",
            "D2 — Night under the stars, Berber music at camp",
            "D3 — Sunrise on the dunes, return via Ouarzazate or Fes",
            "Duration and stops adjustable (2d/1n or 4d with Skoura)",
          ],
        },
      ],
      included: [
        "Private air-conditioned 4x4 or minibus Marrakech ↔ Merzouga",
        "Professional bilingual driver throughout the tour",
        "Camel trek and bivouac night (standard package)",
        "Dinner and breakfast at desert camp",
        "Red Nomad 24/7 assistance before and during the trip",
      ],
      notIncluded: [
        "Town accommodation (Erfoud, Tinghir — quoted separately)",
        "Road lunches and drinks",
        "Luxury camp upgrade (supplement on request)",
        "Tips for cameleers and camp staff",
      ],
      groupPricing: [
        { travelers: "Desert tour 2d/1n (from Marrakech)", price: "from €190/person" },
        { travelers: "Desert tour 3d/2n (classic)", price: "from €280/person" },
        { travelers: "Erg Chebbi luxury camp night only", price: "from €120/person" },
      ],
      faqs: [
        {
          question: "How long to reach Merzouga from Marrakech?",
          answer:
            "About 9–10 hours direct; we recommend a 3-day tour with Atlas and gorge stops for a comfortable pace.",
        },
        {
          question: "Is the bivouac suitable for families?",
          answer:
            "Yes, camps with toilets, bedding and family options. Specify children's ages to adapt the program.",
        },
        {
          question: "Standard bivouac vs luxury camp?",
          answer:
            "Standard offers authentic Berber tents; luxury adds private suites, shower and gourmet dining. Quote on request.",
        },
        {
          question: "When to visit the dunes?",
          answer:
            "Year-round. Spring and autumn ideal; very hot in summer daytime but magical at dusk.",
        },
      ],
    },
    "nord-maroc": {
      metaTitle: "Northern Morocco — Tours & transfers | Red Nomad",
      metaDescription:
        "Tangier, blue Chefchaouen, Asilah and the northern coast. Private tours, transfers and excursions on the Moroccan Mediterranean with Red Nomad.",
      subtitle: "Mediterranean & Rif mountains",
      difficulty: "Easy",
      duration: "3 to 7 days",
      groupSize: "1–17 people",
      departure: "Tangier, Tetouan or Fes",
      languages: "French, English",
      about:
        "Northern Morocco reveals the kingdom's Mediterranean side: Tangier between two seas, blue-walled Chefchaouen in the Rif, Asilah and its Atlantic ramparts, Cape Spartel and Hercules Caves. Red Nomad organises combined tours, transfers from Tangier airport or port and bespoke excursions along the northern coast.",
      highlights: [
        "Chefchaouen — blue Rif medina, photogenic and peaceful",
        "Tangier — kasbah, medina and Cape Spartel",
        "Asilah — street art, ramparts and Atlantic beaches",
        "Tetouan — UNESCO Hispano-Moorish medina",
        "Mediterranean coastal road and Strait of Gibraltar",
      ],
      itinerary: [
        {
          dayLabel: "D1–D4",
          title: "Sample program — Northern Morocco",
          description:
            "4-day Tangier, Chefchaouen and Asilah circuit, flexible by entry point.",
          steps: [
            "D1 — Tangier welcome, medina, Cape Spartel and Hercules Caves",
            "D2 — Drive to Chefchaouen, blue medina and Ras El Ma",
            "D3 — Descent to Asilah or Larache, ramparts and street art",
            "D4 — Return Tangier or link to Fes / Casablanca",
            "Tangier Med port or airport transfers on request",
          ],
        },
      ],
      included: [
        "Private bilingual driver for the full northern tour",
        "Tangier airport, port or train station transfers",
        "Day trips Chefchaouen, Asilah, Tetouan",
        "Custom combined North + Fes or Rabat tours",
        "Local guides for medinas and historic sites",
      ],
      notIncluded: [
        "Accommodation (northern riads — recommendations on request)",
        "Meals and drinks",
        "Museum and site entrances (~20–60 MAD)",
        "Spain–Morocco ferry crossing (separate booking)",
      ],
      groupPricing: [
        { travelers: "Chefchaouen day trip (from Tangier)", price: "from €75/person" },
        { travelers: "North tour 4 days (2 people)", price: "from €320/person" },
        { travelers: "Tangier airport ↔ Chefchaouen transfer", price: "from €90" },
      ],
      faqs: [
        {
          question: "Can we combine the North with Fes or Rabat?",
          answer:
            "Yes, popular 5–7 day Tangier–Chefchaouen–Fes–Volubilis tours. We optimise the route by travel direction.",
        },
        {
          question: "Is Chefchaouen doable as a day trip?",
          answer:
            "From Tangier (2.5 h) or Tetouan (1.5 h), yes. For a quieter medina, one night on site is recommended.",
        },
        {
          question: "Do you transfer from Tangier Med port?",
          answer:
            "Yes, meet at ferry or Ibn Battouta airport, direct link to Chefchaouen, Asilah or Fes.",
        },
        {
          question: "Best season for the North?",
          answer:
            "Spring and autumn perfect; pleasant summer in Chefchaouen mountains, breezy coast.",
        },
      ],
    },
    fes: {
      metaTitle: "Fes — Tours & transfers | Red Nomad",
      metaDescription:
        "Fes, spiritual capital: UNESCO medina, Chouara tanneries, crafts and medersas. Guided visits, transfers and private tours with Red Nomad.",
      subtitle: "Spiritual and craft capital",
      difficulty: "Moderate (medina)",
      duration: "1 to 5 days",
      groupSize: "1–17 people",
      departure: "Fes",
      languages: "French, English",
      about:
        "Fes el-Bali, the world's largest car-free zone, holds centuries-old tanneries, carved medersas and artisan skills passed down through generations. Red Nomad offers Fes-Saiss airport transfers, guided medina visits, excursions to Volubilis and Meknes, and tours to the North or desert.",
      highlights: [
        "Fes el-Bali medina — UNESCO, 9,000 alleys",
        "Chouara tanneries — unique ochre craft spectacle",
        "Bou Inania medersa and Al Quaraouiyine",
        "Fes el-Jdid and royal palace (exterior)",
        "Crafts: ceramics, leather, brocade and zellige",
      ],
      itinerary: [
        {
          dayLabel: "D1–D2",
          title: "Sample program — Imperial Fes",
          description:
            "Two days to savour the medina and surroundings without rushing.",
          steps: [
            "D1 — Airport transfer, guided tanneries and leather souks",
            "D1 — Bou Inania medersa, artisans' quarters",
            "D2 — Nejjarine fondouk, Merinid tombs (panorama)",
            "D2 — Optional Volubilis & Meknes day trip",
            "Certified local guides, pace adapted to your group",
          ],
        },
      ],
      included: [
        "Fes-Saiss airport ↔ medina transfers",
        "Local expert guide for medina and tanneries",
        "Private driver for Volubilis, Meknes and North",
        "Custom Fes → Merzouga or Chefchaouen tours",
        "Assistance booking recommended riads and restaurants",
      ],
      notIncluded: [
        "Accommodation in Fes (medina riads on request)",
        "Meals and drinks",
        "Monument entrances (~20–50 MAD per site)",
        "Guide tips",
      ],
      groupPricing: [
        { travelers: "Medina & tanneries visit (half day)", price: "from €50/person" },
        { travelers: "Volubilis & Meknes day trip", price: "from €85/person" },
        { travelers: "Fes airport transfer (1–4 people)", price: "from €30" },
      ],
      faqs: [
        {
          question: "Is Fes medina hard to visit alone?",
          answer:
            "The maze of alleys makes a guide essential for tanneries, monuments and workshops. We provide experienced local guides.",
        },
        {
          question: "Can you visit tanneries without the smell?",
          answer:
            "Mint sprigs are offered at terraces overlooking the vats; brief and fascinating visit, best in the morning.",
        },
        {
          question: "Is Fes a good base for the desert?",
          answer:
            "Yes, Fes–Merzouga route more direct than from Marrakech (~7–8 h). 2–3 day desert tours from Fes.",
        },
        {
          question: "How many days in Fes?",
          answer:
            "Minimum 2 nights for the medina; add 1 day for Volubilis and Meknes.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira — Tours & transfers | Red Nomad",
      metaDescription:
        "Essaouira: Atlantic medina, seagull harbour, UNESCO ramparts and windy beaches. Day trip from Marrakech or tailor-made stay with Red Nomad.",
      subtitle: "Pearl of the Atlantic",
      difficulty: "Easy",
      duration: "1 to 3 days",
      groupSize: "1–17 people",
      departure: "Marrakech or Essaouira",
      languages: "French, English",
      about:
        "Essaouira, ancient Mogador, blends a fortified medina, lively fishing port and Atlantic horizon. UNESCO ramparts, thuya marquetry workshops, sandy beaches and windsurf spots: Red Nomad organises the day trip from Marrakech or a relaxing stay with private transfers.",
      highlights: [
        "Fortified medina — UNESCO, ramparts and Skala du Port",
        "Fishing port — blue boats and sardine grills",
        "Atlantic beaches and windsurf / kitesurf spots",
        "Thuya marquetry workshops and art galleries",
        "Day trip from Marrakech (2.5 h)",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Sample program — Essaouira day trip",
          description:
            "Classic excursion from Marrakech with argan stop and free time in the medina.",
          steps: [
            "8:00 AM — Depart Marrakech, argan cooperative stop (optional)",
            "10:30 AM — Arrive Essaouira, ramparts and Kasbah Skala",
            "11:30 AM — Medina, port and fish market",
            "1:00 PM — Free lunch facing the Atlantic",
            "3:00 PM — Free time beach or craft shopping",
            "5:00 PM — Return Marrakech (~7:30 PM)",
          ],
        },
      ],
      included: [
        "Private air-conditioned transport Marrakech ↔ Essaouira",
        "Bilingual driver and pickup at accommodation",
        "Multi-day stays with local Essaouira transfers",
        "Medina guides on request",
        "Flexible timing for windsurf or sunset",
      ],
      notIncluded: [
        "Lunch and drinks",
        "Windsurf / kitesurf equipment rental",
        "Museum entrances (~10–30 MAD)",
        "Accommodation if day trip only",
      ],
      groupPricing: [
        { travelers: "Day trip (from Marrakech)", price: "from €80/person" },
        { travelers: "Marrakech ↔ Essaouira transfer only", price: "from €95" },
        { travelers: "Guided Essaouira medina visit", price: "from €40/person" },
      ],
      faqs: [
        {
          question: "Is the Essaouira day trip from Marrakech worth it?",
          answer:
            "Yes, a complete change of scenery in 2.5 h: sea air, calmer medina and excellent fish cuisine.",
        },
        {
          question: "Is Essaouira windy?",
          answer:
            "The trade wind blows regularly — perfect for surf; bring a light jacket even in summer.",
        },
        {
          question: "Can we stay several nights in Essaouira?",
          answer:
            "Absolutely. We arrange transfers, medina riads and local excursions (Mogador Islands, beaches).",
        },
        {
          question: "Suitable for families with children?",
          answer:
            "Yes, flat medina, accessible beach and relaxed vibe. Child seats available on request.",
        },
      ],
    },
    megdaz: {
      metaTitle: "Megdaz — Tours & transfers | Red Nomad",
      metaDescription:
        "Megdaz valley, Moroccan Atlas: authentic Berber villages, treks and mountain hospitality. Private trek tours from Marrakech with Red Nomad.",
      subtitle: "Authentic Atlas",
      difficulty: "Moderate to active",
      duration: "2 to 5 days",
      groupSize: "1–12 people",
      departure: "Marrakech or Azilal",
      languages: "French, English",
      about:
        "The Megdaz valley, a preserved gem of the central High Atlas, offers vertiginous landscapes, pisé villages clinging to slopes and hikes between gorges and peaks. Off the beaten track, Red Nomad organises treks with local Berber guides, muleteers and nights in homestays or mountain lodges.",
      highlights: [
        "Authentic Berber villages — Megdaz, Tabant, Agoudi",
        "Gorges and mountain cultivated terraces",
        "1–5 day treks with muleteers and local guides",
        "Traditional hospitality: mint tea and tagines",
        "Preserved alternative to Imlil and Toubkal",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Sample program — Megdaz valley trek",
          description:
            "3-day hike between Berber villages, adjustable to your fitness.",
          steps: [
            "D1 — Drive Marrakech → Azilal → Megdaz, village welcome and tea",
            "D1 — 3–4 h hike to gorges or viewpoint",
            "D2 — Inter-village trek, meet artisans and farmers",
            "D2 — Lodge or homestay night, Berber dinner",
            "D3 — Gradual return to Azilal and Marrakech",
          ],
        },
      ],
      included: [
        "Private transport Marrakech ↔ Megdaz valley",
        "Certified local Berber mountain guide",
        "Muleteers for luggage on treks",
        "Mountain accommodation (lodges) per program",
        "Trek meals: breakfast, picnic lunch, dinner",
      ],
      notIncluded: [
        "Personal trek gear (boots, poles)",
        "Repatriation insurance (recommended)",
        "Marrakech night before/after trek",
        "Tips for muleteers and villagers",
      ],
      groupPricing: [
        { travelers: "Megdaz trek 2d/1n (2 people)", price: "from €220/person" },
        { travelers: "Full valley trek 3d/2n", price: "from €320/person" },
        { travelers: "Megdaz day trip (no overnight)", price: "from €95/person" },
      ],
      faqs: [
        {
          question: "Do you need good fitness for Megdaz?",
          answer:
            "Moderate treks 3–5 h/day with moderate elevation. Programs adaptable for active families or experienced hikers.",
        },
        {
          question: "How is it different from Imlil / Toubkal?",
          answer:
            "Megdaz is more preserved and less crowded; village authenticity without the crowds. Ideal for cultural immersion.",
        },
        {
          question: "What gear to bring?",
          answer:
            "Hiking boots, waterproof jacket, 25–30 L daypack, warm layer for cool nights at altitude.",
        },
        {
          question: "When to hike the valley?",
          answer:
            "April–June and September–November optimal; winter possible with snow at altitude — ask us.",
        },
      ],
    },
    agadir: {
      metaTitle: "Agadir — Tours & transfers | Red Nomad",
      metaDescription:
        "Agadir, sunny bay, Atlantic beaches and Taghazout surf. Transfers, southern coast excursions and Marrakech–Agadir tours with Red Nomad.",
      subtitle: "Sunny Atlantic coast",
      difficulty: "Easy",
      duration: "1 to 5 days",
      groupSize: "1–17 people",
      departure: "Agadir or Marrakech",
      languages: "French, English",
      about:
        "Agadir and its 10 km bay offer Morocco in beach mode: near-permanent sunshine, lively corniche and proximity to Taghazout, Morocco's surf capital. Red Nomad provides Al Massira airport transfers, Marrakech–Agadir links and excursions to Paradise Valley, Souss-Massa or Agadir Oufella kasbah.",
      highlights: [
        "Agadir bay — 300 days of sunshine per year",
        "Taghazout — surf, yoga and bohemian village",
        "Agadir Oufella kasbah — bay panorama",
        "Paradise Valley — natural pools and palm groves",
        "Souss-Massa — national park and migratory birds",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Sample program — Agadir & southern coast",
          description:
            "Beach stay with nature excursions around Agadir.",
          steps: [
            "D1 — Airport transfer, corniche and Oufella kasbah at sunset",
            "D2 — Taghazout excursion: surf, beach café or yoga",
            "D2 — Free afternoon beach or spa",
            "D3 — Paradise Valley or Souss-Massa by season",
            "Private Marrakech–Agadir link (3 h) available",
          ],
        },
      ],
      included: [
        "Agadir Al Massira airport transfers",
        "Private driver for Taghazout, Paradise Valley, Souss-Massa",
        "Marrakech ↔ Agadir link by minibus or 4x4",
        "Custom half-day or full-day excursions",
        "Seaside hotel and riad recommendations",
      ],
      notIncluded: [
        "Hotel and resort accommodation",
        "Surf lessons and board rental",
        "Meals and drinks",
        "Souss-Massa park entrance (~20 MAD)",
      ],
      groupPricing: [
        { travelers: "Agadir airport transfer (1–4 people)", price: "from €28" },
        { travelers: "Paradise Valley day trip", price: "from €55/person" },
        { travelers: "Marrakech → Agadir private transfer", price: "from €120" },
      ],
      faqs: [
        {
          question: "Is Agadir good for a family beach holiday?",
          answer:
            "Yes, wide beaches, moderate water and full tourist infrastructure. Ideal October–May to avoid summer heat.",
        },
        {
          question: "How far is Taghazout from Agadir?",
          answer:
            "20 minutes by car. We organise private shuttles or surf half-days with partner instructors.",
        },
        {
          question: "Can we combine Agadir with desert or Marrakech?",
          answer:
            "Marrakech → Agadir → Taroudant tours or return via the Atlas; custom quote by duration.",
        },
        {
          question: "Is Paradise Valley accessible year-round?",
          answer:
            "Best spring–autumn; after rains natural pools are more spectacular.",
        },
      ],
    },
    oualili: {
      metaTitle: "Oualili — Tours & transfers | Red Nomad",
      metaDescription:
        "Oualili and Volubilis: UNESCO Roman ruins, ancient mosaics and imperial Meknes. Private archaeological excursions from Fes with Red Nomad.",
      subtitle: "Morocco's Roman heritage",
      difficulty: "Easy",
      duration: "1 to 3 days",
      groupSize: "1–17 people",
      departure: "Fes or Meknes",
      languages: "French, English",
      about:
        "Volubilis, the best-preserved Roman site in the Maghreb, and the Oualili (Walili) area bear 2,000 years of history in central Morocco. Mosaics, Caracalla's arch and Saiss plain views: Red Nomad organises excursions from Fes or Meknes with specialist guide and imperial city combinations.",
      highlights: [
        "Volubilis — UNESCO, mosaics and Roman houses",
        "Triumphal arch and ancient capitol",
        "Imperial Meknes — Bab Mansour and granaries",
        "Moulay Idriss Zerhoun — holy panoramic town",
        "Saiss plain landscapes and ancient olive groves",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Sample program — Volubilis & Meknes",
          description:
            "Day trip from Fes, archaeological treasure and imperial city.",
          steps: [
            "9:00 AM — Depart Fes, drive to the Saiss",
            "10:00 AM — Moulay Idriss Zerhoun (panoramic view)",
            "10:45 AM — Guided Volubilis site visit (2 h)",
            "1:00 PM — Lunch Meknes or local",
            "2:30 PM — Meknes: Bab Mansour, medersa, Heri es-Souani",
            "6:00 PM — Return Fes",
          ],
        },
      ],
      included: [
        "Private transport Fes ↔ Volubilis ↔ Meknes",
        "Bilingual driver and archaeological site guide",
        "Combined Fes + Oualili + Chefchaouen tours",
        "Flexible timing for photographers and school groups",
        "Pickup at riad or hotel in Fes / Meknes",
      ],
      notIncluded: [
        "Volubilis entrance (~70 MAD) and Meknes (~10–20 MAD/site)",
        "Lunch and drinks",
        "Accommodation (except multi-day tour)",
        "Archaeological guide tips",
      ],
      groupPricing: [
        { travelers: "Volubilis & Meknes (1 day, 2 people)", price: "from €85/person" },
        { travelers: "Volubilis only (half day)", price: "from €55/person" },
        { travelers: "Fes + Volubilis + Chefchaouen (3 days)", price: "from €290/person" },
      ],
      faqs: [
        {
          question: "How long for Volubilis?",
          answer:
            "Allow 1.5–2 h on site with guide; minimum half day, full day with Meknes recommended.",
        },
        {
          question: "Do you need a guide at the Roman site?",
          answer:
            "Highly recommended to understand mosaics and history; our specialist guides bring the visit to life.",
        },
        {
          question: "Is Volubilis accessible for reduced mobility?",
          answer:
            "Partially paved paths and gentle slopes; tell us to adapt the route or focus on flat areas.",
        },
        {
          question: "Can you visit from Rabat or Casablanca?",
          answer:
            "Yes, long day trip possible; Fes or Meknes remain the most practical bases (45 min–1 h).",
        },
      ],
    },
  },
  es: {
    marrakech: {
      metaTitle: "Marrakech — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Marrakech: ciudad imperial, medina UNESCO, plaza Jemaa el-Fna, riads y traslados al aeropuerto. Excursiones, circuitos privados y chófer a medida con Red Nomad.",
      subtitle: "Perla del Sur",
      difficulty: "Todos los niveles",
      duration: "A medida",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Marrakech es el corazón del turismo marroquí: medina laberíntica UNESCO, riads con encanto, zocos coloridos y la plaza Jemaa el-Fna que cobra vida al atardecer. Red Nomad le recibe en el aeropuerto y organiza traslados, visitas guiadas, excursiones de un día y circuitos de varios días desde la ciudad ocre.",
      highlights: [
        "Plaza Jemaa el-Fna — espectáculo vivo UNESCO al anochecer",
        "Medina y zocos — artesanía, especias y palacios ocultos",
        "Riads y jardines: Bahia, Majorelle, Yves Saint Laurent",
        "Traslados aeropuerto Marrakech-Menara 24 h",
        "Hub ideal para Essaouira, Atlas y desierto",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Programa tipo — Marrakech imperial",
          description:
            "Ejemplo de estancia: descubrimiento de la medina, tiempo libre y excursiones desde Marrakech.",
          steps: [
            "D1 — Traslado aeropuerto, instalación en riad, paseo Jemaa el-Fna al atardecer",
            "D2 — Visita guiada medina: Bahia, zocos, medersa Ben Youssef",
            "D2 — Tarde libre: hammam, Majorelle o terraza",
            "D3 — Excursión a elegir: Essaouira, Ourika o Agafay",
            "Traslados y horarios adaptados a su vuelo y ritmo",
          ],
        },
      ],
      included: [
        "Traslados aeropuerto ↔ alojamiento en Marrakech",
        "Chófer privado bilingüe (FR/EN) para sus desplazamientos",
        "Excursiones de un día personalizadas desde Marrakech",
        "Circuitos multi-día a medida (Atlas, desierto, costa)",
        "Guías locales para medina, monumentos y zocos",
      ],
      notIncluded: [
        "Alojamiento (riads, hoteles — reserva bajo petición)",
        "Comidas, bebidas y gastos personales",
        "Entradas palacios, museos y sitios (~70–150 MAD)",
        "Propinas guías y chóferes (opcional)",
      ],
      groupPricing: [
        { travelers: "Traslado aeropuerto (1–4 pers.)", price: "desde 25 €" },
        { travelers: "Visita medina guiada (medio día)", price: "desde 45 €/pers." },
        { travelers: "Excursión Essaouira (1 día)", price: "desde 80 €/pers." },
      ],
      faqs: [
        {
          question: "¿Ofrecen traslado desde el aeropuerto de Marrakech?",
          answer:
            "Sí, recepción personalizada en Menara 24 h, vehículo climatizado y chófer bilingüe hasta su riad u hotel.",
        },
        {
          question: "¿Se puede combinar Marrakech con desierto o Atlas?",
          answer:
            "Por supuesto. Marrakech es nuestra base principal para circuitos de 2 a 17 días hacia Merzouga, Essaouira, valle de Ourika o el Norte.",
        },
        {
          question: "¿Las visitas a la medina son privadas?",
          answer:
            "Sí, guía local dedicado a su grupo, ritmo adaptado a familias o fotógrafos. Solicite presupuesto personalizado.",
        },
        {
          question: "¿Mejor época para Marrakech?",
          answer:
            "Octubre–abril para temperaturas agradables. Verano caluroso pero riads frescos; noches animadas todo el año en Jemaa el-Fna.",
        },
      ],
    },
    merzouga: {
      metaTitle: "Merzouga — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Merzouga y Erg Chebbi: dunas del Sahara, paseo en camello, campamento de lujo y atardecer. Circuitos desierto privados desde Marrakech o Fez con Red Nomad.",
      subtitle: "Puerta del Sahara",
      difficulty: "Moderado (dunas)",
      duration: "2 a 4 días",
      groupSize: "1–17 personas",
      departure: "Marrakech o Fez",
      languages: "Francés, English",
      about:
        "Merzouga, al pie de las dunas doradas del Erg Chebbi, ofrece la experiencia sahariana más emblemática de Marruecos. Paseo en camello al atardecer, noche en bivouac bereber o campamento de lujo bajo las estrellas: Red Nomad organiza su circuito desierto con chófer privado y alojamientos seleccionados.",
      highlights: [
        "Erg Chebbi — dunas de arena hasta 150 m",
        "Paseo en camello al atardecer y amanecer",
        "Noche en bivouac tradicional o campamento de lujo",
        "Música gnawa en Khamlia y lago estacional Dayet Srji",
        "Ruta de las kasbahs y gargantas del Todra opcional",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Programa tipo — Merzouga y Erg Chebbi",
          description: "Circuito desierto clásico 3 días / 2 noches desde Marrakech, personalizable.",
          steps: [
            "D1 — Ruta al Sur: Atlas, kasbahs, gargantas del Todra, noche en Tinghir o Boumalne",
            "D2 — Valle del Dadès, Rissani, llegada Merzouga, camello al atardecer",
            "D2 — Noche bajo las estrellas, música bereber en el campamento",
            "D3 — Amanecer en las dunas, regreso por Ouarzazate o Fez",
            "Duración y etapas ajustables (2d/1n o 4d con Skoura)",
          ],
        },
      ],
      included: [
        "Transporte privado 4x4 o minibus climatizado Marrakech ↔ Merzouga",
        "Chófer profesional bilingüe durante todo el circuito",
        "Paseo en camello y noche en bivouac (fórmula estándar)",
        "Cena y desayuno en campamento desierto",
        "Asistencia Red Nomad 24 h antes y durante el viaje",
      ],
      notIncluded: [
        "Alojamientos en ciudad (Erfoud, Tinghir — presupuesto aparte)",
        "Almuerzos en ruta y bebidas",
        "Upgrade campamento de lujo (suplemento bajo petición)",
        "Propinas camelleros y personal del campamento",
      ],
      groupPricing: [
        { travelers: "Circuito desierto 2d/1n (desde Marrakech)", price: "desde 190 €/pers." },
        { travelers: "Circuito desierto 3d/2n (clásico)", price: "desde 280 €/pers." },
        { travelers: "Noche campamento lujo Erg Chebbi", price: "desde 120 €/pers." },
      ],
      faqs: [
        { question: "¿Cuánto se tarda en llegar a Merzouga desde Marrakech?", answer: "Unas 9–10 h directo; recomendamos circuito 3 días con paradas Atlas y gargantas para un ritmo cómodo." },
        { question: "¿El bivouac es apto para familias?", answer: "Sí, campamentos con sanitarios, ropa de cama y opciones familiares. Indique edades de los niños para adaptar el programa." },
        { question: "¿Diferencia entre bivouac estándar y campamento de lujo?", answer: "El estándar ofrece tiendas bereberes auténticas; el lujo añade suites privadas, ducha y gastronomía. Presupuesto bajo petición." },
        { question: "¿Cuándo visitar las dunas?", answer: "Todo el año. Primavera y otoño ideales; verano muy caluroso de día pero mágico al crepúsculo." },
      ],
    },
    "nord-maroc": {
      metaTitle: "Norte de Marruecos — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Tánger, Chefchaouen la perla azul, Asilah y la costa norte. Circuitos privados, traslados y excursiones en el Mediterráneo marroquí con Red Nomad.",
      subtitle: "Mediterráneo y montañas del Rif",
      difficulty: "Fácil",
      duration: "3 a 7 días",
      groupSize: "1–17 personas",
      departure: "Tánger, Tetuán o Fez",
      languages: "Francés, English",
      about:
        "El Norte de Marruecos revela la faceta mediterránea del reino: Tánger entre dos mares, Chefchaouen de muros azules en el Rif, Asilah y sus murallas atlánticas, cabo Espartel y grutas de Hércules. Red Nomad organiza circuitos combinados, traslados desde aeropuerto o puerto de Tánger y excursiones a medida por la costa norte.",
      highlights: [
        "Chefchaouen — medina azul del Rif, fotogénica y tranquila",
        "Tánger — kasbah, medina y cabo Espartel",
        "Asilah — arte mural, murallas y playas atlánticas",
        "Tetuán — medina hispano-morisca UNESCO",
        "Ruta costera Mediterráneo y estrecho de Gibraltar",
      ],
      itinerary: [
        {
          dayLabel: "D1–D4",
          title: "Programa tipo — Norte de Marruecos",
          description: "Circuito 4 días Tánger, Chefchaouen y Asilah, modular según punto de entrada.",
          steps: [
            "D1 — Bienvenida Tánger, medina, cabo Espartel y grutas de Hércules",
            "D2 — Ruta a Chefchaouen, paseo medina azul y Ras El Ma",
            "D3 — Descenso a Asilah o Larache, murallas y arte callejero",
            "D4 — Regreso Tánger o enlace Fez / Casablanca",
            "Traslados puerto Tanger Med o aeropuerto bajo petición",
          ],
        },
      ],
      included: [
        "Chófer privado bilingüe para todo el circuito norte",
        "Traslados aeropuerto, puerto o estación Tánger",
        "Excursiones de un día Chefchaouen, Asilah, Tetuán",
        "Circuitos combinados Norte + Fez o Rabat a medida",
        "Guías locales para medinas y sitios históricos",
      ],
      notIncluded: [
        "Alojamientos (riads norte — recomendaciones bajo petición)",
        "Comidas y bebidas",
        "Entradas museos y sitios (~20–60 MAD)",
        "Travesía ferry España–Marruecos (reserva aparte)",
      ],
      groupPricing: [
        { travelers: "Excursión Chefchaouen (1d desde Tánger)", price: "desde 75 €/pers." },
        { travelers: "Circuito Norte 4 días (2 pers.)", price: "desde 320 €/pers." },
        { travelers: "Traslado Tánger aeropuerto ↔ Chefchaouen", price: "desde 90 €" },
      ],
      faqs: [
        { question: "¿Se puede combinar el Norte con Fez o Rabat?", answer: "Sí, circuitos 5–7 días Tánger–Chefchaouen–Fez–Volubilis muy demandados. Optimizamos la ruta según sentido de viaje." },
        { question: "¿Chefchaouen en excursión de un día?", answer: "Desde Tánger (2h30) o Tetuán (1h30), sí. Para disfrutar la medina con calma, una noche recomendada." },
        { question: "¿Traslados desde el puerto Tanger Med?", answer: "Sí, recepción en ferry o aeropuerto Ibn Battouta, enlace directo a Chefchaouen, Asilah o Fez." },
        { question: "¿Mejor temporada para el Norte?", answer: "Primavera y otoño perfectos; verano agradable en montaña en Chefchaouen, costa ventilada." },
      ],
    },
    fes: {
      metaTitle: "Fez — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Fez, capital espiritual: medina UNESCO, curtidurías Chouara, artesanía y medersas. Visitas guiadas, traslados y circuitos privados con Red Nomad.",
      subtitle: "Capital espiritual y artesanal",
      difficulty: "Moderado (medina)",
      duration: "1 a 5 días",
      groupSize: "1–17 personas",
      departure: "Fez",
      languages: "Francés, English",
      about:
        "Fez el-Bali, la mayor zona peatonal del mundo, alberga curtidurías centenarias, medersas talladas y saber artesanal transmitido de generación en generación. Red Nomad ofrece traslados aeropuerto Fez-Saïss, visitas guiadas de la medina, excursiones a Volubilis y Meknes, y circuitos hacia el Norte o el desierto.",
      highlights: [
        "Medina Fez el-Bali — UNESCO, 9 000 callejuelas",
        "Curtidurías Chouara — espectáculo ocre y artesanal único",
        "Medersa Bou Inania y Al Quaraouiyine",
        "Fez el-Jdid y palacio real (exterior)",
        "Artesanía: cerámica, cuero, brocado y zellige",
      ],
      itinerary: [
        {
          dayLabel: "D1–D2",
          title: "Programa tipo — Fez imperial",
          description: "Dos días para saborear la medina y alrededores sin prisas.",
          steps: [
            "D1 — Traslado aeropuerto, visita guiada curtidurías y zocos de cuero",
            "D1 — Medersa Bou Inania, barrios de artesanos",
            "D2 — Fondouk Nejjarine, tumbas meriníes (panorama)",
            "D2 — Excursión opcional Volubilis y Meknes (1d)",
            "Guías locales certificados, ritmo adaptado a su grupo",
          ],
        },
      ],
      included: [
        "Traslados aeropuerto Fez-Saïss ↔ medina",
        "Guía local experto medina y curtidurías",
        "Chófer privado para Volubilis, Meknes y Norte",
        "Circuitos Fez → Merzouga o Chefchaouen a medida",
        "Asistencia reserva riads y restaurantes recomendados",
      ],
      notIncluded: [
        "Alojamiento en Fez (riads medina bajo petición)",
        "Comidas y bebidas",
        "Entradas monumentos (~20–50 MAD por sitio)",
        "Propinas guías",
      ],
      groupPricing: [
        { travelers: "Visita medina y curtidurías (medio día)", price: "desde 50 €/pers." },
        { travelers: "Excursión Volubilis y Meknes (1d)", price: "desde 85 €/pers." },
        { travelers: "Traslado aeropuerto Fez (1–4 pers.)", price: "desde 30 €" },
      ],
      faqs: [
        { question: "¿Es difícil visitar la medina de Fez solo?", answer: "El laberinto de callejuelas hace indispensable un guía para curtidurías, monumentos y talleres. Proporcionamos guías locales experimentados." },
        { question: "¿Se pueden visitar las curtidurías sin molestia olfativa?", answer: "Se distribuyen ramas de menta en terrazas sobre las cubas; visita breve y fascinante, mejor por la mañana." },
        { question: "¿Fez como etapa hacia el desierto?", answer: "Sí, ruta Fez–Merzouga más directa que desde Marrakech (~7–8 h). Circuitos desierto 2–3 días desde Fez." },
        { question: "¿Cuántos días en Fez?", answer: "Mínimo 2 noches para la medina; añada 1 día para Volubilis y Meknes." },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Essaouira: medina atlántica, puerto de gaviotas, murallas UNESCO y playas ventosas. Excursión de un día desde Marrakech o estancia a medida con Red Nomad.",
      subtitle: "Perla del Atlántico",
      difficulty: "Fácil",
      duration: "1 a 3 días",
      groupSize: "1–17 personas",
      departure: "Marrakech o Essaouira",
      languages: "Francés, English",
      about:
        "Essaouira, antigua Mogador, combina medina fortificada, puerto pesquero animado y horizonte atlántico. Murallas UNESCO, talleres de marquetería de thuya, playas de arena y spots de windsurf: Red Nomad organiza la excursión de un día desde Marrakech o una estancia relajante con traslados privados.",
      highlights: [
        "Medina fortificada — UNESCO, murallas y Skala del Puerto",
        "Puerto pesquero — barcas azules y parrillas de sardinas",
        "Playas atlánticas y spots windsurf / kitesurf",
        "Talleres marquetería de thuya y galerías de arte",
        "Excursión de un día desde Marrakech (2h30)",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Programa tipo — Essaouira en un día",
          description: "Excursión clásica desde Marrakech con arganeros y tiempo libre en medina.",
          steps: [
            "08h00 — Salida Marrakech, parada cooperativa argán (opcional)",
            "10h30 — Llegada Essaouira, murallas y Skala de la Kasbah",
            "11h30 — Medina, puerto y mercado de pescado",
            "13h00 — Almuerzo libre frente al Atlántico",
            "15h00 — Tiempo libre playa o compras artesanía",
            "17h00 — Regreso Marrakech (~19h30)",
          ],
        },
      ],
      included: [
        "Transporte privado climatizado Marrakech ↔ Essaouira",
        "Chófer bilingüe y recogida en alojamiento",
        "Estancias multi-día con traslados locales Essaouira",
        "Guías medina bajo petición",
        "Flexibilidad horarios para windsurf o atardecer",
      ],
      notIncluded: [
        "Almuerzo y bebidas",
        "Alquiler material windsurf / kitesurf",
        "Entrada museos (~10–30 MAD)",
        "Alojamiento si solo excursión de un día",
      ],
      groupPricing: [
        { travelers: "Excursión 1 día (desde Marrakech)", price: "desde 80 €/pers." },
        { travelers: "Traslado Marrakech ↔ Essaouira", price: "desde 95 €" },
        { travelers: "Visita guiada medina Essaouira", price: "desde 40 €/pers." },
      ],
      faqs: [
        { question: "¿Vale la excursión Essaouira desde Marrakech?", answer: "Sí, cambio total de ambiente en 2h30: aire marino, medina más tranquila y excelente cocina de pescado." },
        { question: "¿Essaouira es ventosa?", answer: "El alisio sopla con regularidad — perfecto para surf; lleve chaqueta ligera incluso en verano." },
        { question: "¿Varias noches en Essaouira?", answer: "Por supuesto. Organizamos traslados, riads en medina y excursiones locales (Islas Mogador, playas)." },
        { question: "¿Apta para familias con niños?", answer: "Sí, medina llana, playa accesible y ambiente relajado. Sillas infantiles bajo petición." },
      ],
    },
    megdaz: {
      metaTitle: "Megdaz — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Valle de Megdaz, Atlas marroquí: aldeas bereberes auténticas, treks y hospitalidad de montaña. Circuitos trek privados desde Marrakech con Red Nomad.",
      subtitle: "Atlas auténtico",
      difficulty: "Moderado a activo",
      duration: "2 a 5 días",
      groupSize: "1–12 personas",
      departure: "Marrakech o Azilal",
      languages: "Francés, English",
      about:
        "El valle de Megdaz, joya preservada del Alto Atlas central, ofrece paisajes vertiginosos, aldeas de adobe en las laderas y senderismo entre gargantas y cumbres. Lejos de rutas masificadas, Red Nomad organiza treks con guías bereberes locales, arrieros y noches en casas de familia o refugio de montaña.",
      highlights: [
        "Aldeas bereberes auténticas — Megdaz, Tabant, Agoudi",
        "Gargantas y terrazas cultivadas en montaña",
        "Treks 1 a 5 días con arrieros y guías locales",
        "Hospitalidad tradicional: té a la menta y tajines",
        "Alternativa preservada a Imlil y Toubkal",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Programa tipo — Trek valle de Megdaz",
          description: "Senderismo 3 días entre aldeas bereberes, modular según condición física.",
          steps: [
            "D1 — Ruta Marrakech → Azilal → Megdaz, bienvenida aldea y té",
            "D1 — Senderismo 3–4 h hacia gargantas o mirador",
            "D2 — Trek inter-aldeas, encuentro artesanos y agricultores",
            "D2 — Noche refugio o casa de familia, cena bereber",
            "D3 — Regreso progresivo hacia Azilal y Marrakech",
          ],
        },
      ],
      included: [
        "Transporte privado Marrakech ↔ valle de Megdaz",
        "Guía de montaña bereber local certificado",
        "Arrieros para equipaje en treks",
        "Alojamientos montaña (refugios) según programa",
        "Comidas trek: desayuno, almuerzo picnic, cena",
      ],
      notIncluded: [
        "Equipo trek personal (botas, bastones)",
        "Seguro repatriación (recomendado)",
        "Noche Marrakech antes/después trek",
        "Propinas arrieros y aldeanos",
      ],
      groupPricing: [
        { travelers: "Trek 2d/1n Megdaz (2 pers.)", price: "desde 220 €/pers." },
        { travelers: "Trek 3d/2n valle completo", price: "desde 320 €/pers." },
        { travelers: "Excursión 1d Megdaz (sin noche)", price: "desde 95 €/pers." },
      ],
      faqs: [
        { question: "¿Se necesita buena forma física para Megdaz?", answer: "Treks moderados 3–5 h/día con desnivel moderado. Programas adaptables para familias activas o senderistas experimentados." },
        { question: "¿Diferencia con Imlil / Toubkal?", answer: "Megdaz está más preservado y menos concurrido; autenticidad aldeana sin multitudes. Ideal para inmersión cultural." },
        { question: "¿Qué equipo llevar?", answer: "Botas de senderismo, chaqueta impermeable, mochila 25–30 L, capa de abrigo para noches frescas en altitud." },
        { question: "¿Cuándo hacer senderismo en el valle?", answer: "Abril–junio y septiembre–noviembre óptimos; invierno posible con nieve en altitud — consúltenos." },
      ],
    },
    agadir: {
      metaTitle: "Agadir — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Agadir, bahía soleada, playas atlánticas y surf Taghazout. Traslados, excursiones costa sur y circuitos Marrakech–Agadir con Red Nomad.",
      subtitle: "Costa atlántica soleada",
      difficulty: "Fácil",
      duration: "1 a 5 días",
      groupSize: "1–17 personas",
      departure: "Agadir o Marrakech",
      languages: "Francés, English",
      about:
        "Agadir y su bahía de 10 km ofrecen Marruecos en modo playa: sol casi permanente, paseo marítimo animado y proximidad a Taghazout, capital del surf marroquí. Red Nomad gestiona traslados aeropuerto Al Massira, enlaces Marrakech–Agadir y excursiones a Paradise Valley, Souss-Massa o kasbah Agadir Oufella.",
      highlights: [
        "Bahía de Agadir — 300 días de sol al año",
        "Taghazout — surf, yoga y pueblo bohemio",
        "Kasbah Agadir Oufella — panorama sobre la bahía",
        "Paradise Valley — pozas naturales y palmerales",
        "Souss-Massa — parque nacional y aves migratorias",
      ],
      itinerary: [
        {
          dayLabel: "D1–D3",
          title: "Programa tipo — Agadir y costa sur",
          description: "Estancia playera con excursiones naturaleza alrededor de Agadir.",
          steps: [
            "D1 — Traslado aeropuerto, paseo marítimo y kasbah Oufella al atardecer",
            "D2 — Excursión Taghazout: surf, café playa o yoga",
            "D2 — Tarde libre playa o spa",
            "D3 — Paradise Valley o Souss-Massa según temporada",
            "Enlace Marrakech–Agadir (3h) disponible en privado",
          ],
        },
      ],
      included: [
        "Traslados aeropuerto Agadir Al Massira",
        "Chófer privado para Taghazout, Paradise Valley, Souss-Massa",
        "Enlace Marrakech ↔ Agadir en minibus o 4x4",
        "Excursiones a medida medio día o día completo",
        "Consejos alojamientos frente al mar y riads",
      ],
      notIncluded: [
        "Alojamiento hoteles y resorts",
        "Clases surf y alquiler tablas",
        "Comidas y bebidas",
        "Entrada parque Souss-Massa (~20 MAD)",
      ],
      groupPricing: [
        { travelers: "Traslado aeropuerto Agadir (1–4 pers.)", price: "desde 28 €" },
        { travelers: "Excursión Paradise Valley (1d)", price: "desde 55 €/pers." },
        { travelers: "Marrakech → Agadir (traslado privado)", price: "desde 120 €" },
      ],
      faqs: [
        { question: "¿Agadir para vacaciones playa en familia?", answer: "Sí, playas amplias, agua moderada e infraestructura turística completa. Ideal octubre–mayo para evitar calor estival." },
        { question: "¿Taghazout está lejos de Agadir?", answer: "20 minutos en coche. Organizamos shuttles privados o medios días surf con instructores partners." },
        { question: "¿Combinar Agadir con desierto o Marrakech?", answer: "Circuitos Marrakech → Agadir → Taroudant o regreso por Atlas; presupuesto personalizado según duración." },
        { question: "¿Paradise Valley accesible todo el año?", answer: "Mejor primavera–otoño; tras lluvias las pozas naturales son más espectaculares." },
      ],
    },
    oualili: {
      metaTitle: "Oualili — Circuitos y traslados | Red Nomad",
      metaDescription:
        "Oualili y Volubilis: ruinas romanas UNESCO, mosaicos antiguos e imperial Meknes. Excursiones arqueológicas privadas desde Fez con Red Nomad.",
      subtitle: "Herencia romana de Marruecos",
      difficulty: "Fácil",
      duration: "1 a 3 días",
      groupSize: "1–17 personas",
      departure: "Fez o Meknes",
      languages: "Francés, English",
      about:
        "Volubilis, el mejor yacimiento romano conservado del Magreb, y los alrededores de Oualili (Walili) atestiguan 2 000 años de historia en el centro de Marruecos. Mosaicos, arco de Caracalla y vista sobre la llanura del Saïss: Red Nomad organiza excursiones desde Fez o Meknes con guía especializado y combinaciones con ciudades imperiales.",
      highlights: [
        "Volubilis — UNESCO, mosaicos y casas romanas",
        "Arco de triunfo y capitolio antiguo",
        "Meknes imperial — Bab Mansour y graneros",
        "Moulay Idriss Zerhoun — ciudad santa panorámica",
        "Paisajes del Saïss y olivos centenarios",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Programa tipo — Volubilis y Meknes",
          description: "Excursión de un día desde Fez, tesoro arqueológico y ciudad imperial.",
          steps: [
            "09h00 — Salida Fez, ruta hacia el Saïss",
            "10h00 — Moulay Idriss Zerhoun (vista panorámica)",
            "10h45 — Visita guiada yacimiento Volubilis (2 h)",
            "13h00 — Almuerzo Meknes o local",
            "14h30 — Meknes: Bab Mansour, medersa, Heri es-Souani",
            "18h00 — Regreso Fez",
          ],
        },
      ],
      included: [
        "Transporte privado Fez ↔ Volubilis ↔ Meknes",
        "Chófer bilingüe y guía yacimiento arqueológico",
        "Circuitos combinados Fez + Oualili + Chefchaouen",
        "Horarios flexibles para fotógrafos y grupos escolares",
        "Recogida riad u hotel en Fez / Meknes",
      ],
      notIncluded: [
        "Entrada Volubilis (~70 MAD) y Meknes (~10–20 MAD/sitio)",
        "Almuerzo y bebidas",
        "Alojamiento (excepto circuito multi-día)",
        "Propinas guía arqueológico",
      ],
      groupPricing: [
        { travelers: "Volubilis y Meknes (1d, 2 pers.)", price: "desde 85 €/pers." },
        { travelers: "Volubilis solo (medio día)", price: "desde 55 €/pers." },
        { travelers: "Circuito Fez + Volubilis + Chefchaouen (3d)", price: "desde 290 €/pers." },
      ],
      faqs: [
        { question: "¿Cuánto tiempo para Volubilis?", answer: "Calcule 1h30–2h en sitio con guía; mínimo medio día, día completo con Meknes recomendado." },
        { question: "¿Hace falta guía en el yacimiento romano?", answer: "Muy recomendable para entender mosaicos e historia; nuestros guías especializados dan vida a la visita." },
        { question: "¿Volubilis accesible con movilidad reducida?", answer: "Caminos parcialmente pavimentados y pendientes suaves; avísenos para adaptar recorrido o zonas planas." },
        { question: "¿Visita desde Rabat o Casablanca?", answer: "Sí, excursión larga posible; Fez o Meknes siguen siendo bases más prácticas (45 min–1h)." },
      ],
    },
  },
  de: {
    marrakech: {
      metaTitle: "Marrakesch — Touren & Transfers | Red Nomad",
      metaDescription:
        "Marrakesch: Kaiserstadt, UNESCO-Medina, Jemaa el-Fna, Riads und Flughafentransfers. Private Ausflüge, Rundreisen und Chauffeur nach Maß mit Red Nomad.",
      subtitle: "Perle des Südens",
      difficulty: "Alle Niveaus",
      duration: "Nach Maß",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Marrakesch ist das pulsierende Herz des marokkanischen Tourismus: UNESCO-Medina, charmante Riads, farbenfrohe Souks und der Platz Jemaa el-Fna bei Sonnenuntergang. Red Nomad empfängt Sie am Flughafen und organisiert Transfers, Führungen, Tagesausflüge und Mehrtagesreisen ab der ockerfarbenen Stadt.",
      highlights: [
        "Jemaa el-Fna — UNESCO-Lebendigkeit in der Dämmerung",
        "Medina und Souks — Handwerk, Gewürze und versteckte Paläste",
        "Riads und Gärten: Bahia, Majorelle, Yves Saint Laurent",
        "Flughafentransfer Marrakesch-Menara 24/7",
        "Idealer Ausgangspunkt für Essaouira, Atlas und Wüste",
      ],
      itinerary: [
        {
          dayLabel: "T1–T3",
          title: "Beispielprogramm — Kaiserliches Marrakesch",
          description: "Beispielaufenthalt: Medina-Entdeckung, Freizeit und Tagesausflüge ab Marrakesch.",
          steps: [
            "T1 — Flughafentransfer, Riad-Check-in, Jemaa el-Fna bei Sonnenuntergang",
            "T2 — Geführte Medina: Bahia, Souks, Medersa Ben Youssef",
            "T2 — Freier Nachmittag: Hammam, Majorelle oder Dachterrasse",
            "T3 — Tagesausflug nach Wahl: Essaouira, Ourika oder Agafay",
            "Transfers und Zeiten angepasst an Flug und Tempo",
          ],
        },
      ],
      included: [
        "Flughafen ↔ Unterkunft Transfers in Marrakesch",
        "Privater zweisprachiger Chauffeur (FR/EN)",
        "Personalisierte Tagesausflüge ab Marrakesch",
        "Maßgeschneiderte Mehrtagesreisen (Atlas, Wüste, Küste)",
        "Lokale Guides für Medina, Monumente und Souks",
      ],
      notIncluded: [
        "Unterkunft (Riads, Hotels — Buchung auf Anfrage)",
        "Mahlzeiten, Getränke und persönliche Ausgaben",
        "Eintritte Paläste, Museen und Stätten (~70–150 MAD)",
        "Trinkgelder für Guides und Chauffeure (optional)",
      ],
      groupPricing: [
        { travelers: "Flughafentransfer (1–4 Pers.)", price: "ab 25 €" },
        { travelers: "Geführte Medina (halber Tag)", price: "ab 45 €/Pers." },
        { travelers: "Essaouira Tagesausflug", price: "ab 80 €/Pers." },
      ],
      faqs: [
        { question: "Bieten Sie Flughafentransfer Marrakesch an?", answer: "Ja, persönliche Begrüßung am Menara-Flughafen 24/7, klimatisiertes Fahrzeug und zweisprachiger Chauffeur bis zu Ihrem Riad oder Hotel." },
        { question: "Kombination Marrakesch mit Wüste oder Atlas?", answer: "Selbstverständlich. Marrakesch ist unsere Hauptbasis für 2–11-Tage-Touren nach Merzouga, Essaouira, Ourika-Tal oder den Norden." },
        { question: "Sind Medinaführungen privat?", answer: "Ja, lokaler Guide nur für Ihre Gruppe, Tempo angepasst an Familien oder Fotografen. Individuelles Angebot anfragen." },
        { question: "Beste Reisezeit für Marrakesch?", answer: "Oktober–April für angenehme Temperaturen. Heißer Sommer, aber kühle Riads; lebhafte Abende das ganze Jahr auf Jemaa el-Fna." },
      ],
    },
    merzouga: {
      metaTitle: "Merzouga — Touren & Transfers | Red Nomad",
      metaDescription:
        "Merzouga und Erg Chebbi: Sahara-Dünen, Kamelritt, Luxuscamp und Sonnenuntergang. Private Wüstentouren ab Marrakesch oder Fès mit Red Nomad.",
      subtitle: "Tor zur Sahara",
      difficulty: "Mäßig (Dünen)",
      duration: "2 bis 4 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch oder Fès",
      languages: "Französisch, English",
      about:
        "Merzouga am Fuße der goldenen Erg-Chebbi-Dünen bietet Marokkos ikonischste Sahara-Erfahrung. Kamelritt bei Sonnenuntergang, Nacht im Berber-Biwak oder Luxuscamp unter Sternen: Red Nomad organisiert Ihre Wüstentour mit privatem Chauffeur und ausgewählten Unterkünften.",
      highlights: [
        "Erg Chebbi — Sanddünen bis 150 m",
        "Kamelritt bei Sonnenunter- und -aufgang",
        "Nacht im traditionellen Biwak oder Luxuscamp",
        "Gnawa-Musik in Khamlia und saisonaler Dayet-Srji-See",
        "Kasbah-Route und Todra-Schlucht optional",
      ],
      itinerary: [
        {
          dayLabel: "T1–T3",
          title: "Beispielprogramm — Merzouga & Erg Chebbi",
          description: "Klassische 3-Tage/2-Nächte-Wüstentour ab Marrakesch, voll anpassbar.",
          steps: [
            "T1 — Fahrt südwärts: Atlas, Kasbahs, Todra-Schlucht, Nacht in Tinghir oder Boumalne",
            "T2 — Dadès-Tal, Rissani, Merzouga-Ankunft, Kamelritt bei Sonnenuntergang",
            "T2 — Nacht unter Sternen, Berbermusik im Camp",
            "T3 — Sonnenaufgang auf den Dünen, Rückfahrt via Ouarzazate oder Fès",
            "Dauer und Stopps anpassbar (2T/1N oder 4T mit Skoura)",
          ],
        },
      ],
      included: [
        "Privater klimatisierter 4x4 oder Minibus Marrakesch ↔ Merzouga",
        "Professioneller zweisprachiger Chauffeur während der gesamten Tour",
        "Kamelritt und Biwak-Nacht (Standardpaket)",
        "Abendessen und Frühstück im Wüstencamp",
        "Red Nomad 24/7-Assistenz vor und während der Reise",
      ],
      notIncluded: [
        "Stadtunterkünfte (Erfoud, Tinghir — separat kalkuliert)",
        "Mittagessen unterwegs und Getränke",
        "Luxuscamp-Upgrade (Aufpreis auf Anfrage)",
        "Trinkgelder für Kamelführer und Camp-Personal",
      ],
      groupPricing: [
        { travelers: "Wüstentour 2T/1N (ab Marrakesch)", price: "ab 190 €/Pers." },
        { travelers: "Wüstentour 3T/2N (klassisch)", price: "ab 280 €/Pers." },
        { travelers: "Erg Chebbi Luxuscamp-Nacht", price: "ab 120 €/Pers." },
      ],
      faqs: [
        { question: "Wie lange nach Merzouga ab Marrakesch?", answer: "Etwa 9–10 Stunden direkt; wir empfehlen eine 3-Tage-Tour mit Atlas- und Schluchtstopps für angenehmes Tempo." },
        { question: "Ist das Biwak familienfreundlich?", answer: "Ja, Camps mit Sanitäranlagen, Bettwäsche und Familienoptionen. Kinderalter angeben zur Programmanpassung." },
        { question: "Standard-Biwak vs. Luxuscamp?", answer: "Standard bietet authentische Berberzelte; Luxus ergänzt private Suiten, Dusche und Gourmet. Angebot auf Anfrage." },
        { question: "Wann die Dünen besuchen?", answer: "Ganzjährig. Frühling und Herbst ideal; sehr heißer Sommer tagsüber, magisch in der Dämmerung." },
      ],
    },
    "nord-maroc": {
      metaTitle: "Nordmarokko — Touren & Transfers | Red Nomad",
      metaDescription:
        "Tanger, blaues Chefchaouen, Asilah und die Nordküste. Private Touren, Transfers und Ausflüge am marokkanischen Mittelmeer mit Red Nomad.",
      subtitle: "Mittelmeer & Rif-Berge",
      difficulty: "Leicht",
      duration: "3 bis 7 Tage",
      groupSize: "1–17 Personen",
      departure: "Tanger, Tétouan oder Fès",
      languages: "Französisch, English",
      about:
        "Nordmarokko zeigt das mediterrane Gesicht des Königreichs: Tanger zwischen zwei Meeren, blaues Chefchaouen im Rif, Asilah mit atlantischen Mauern, Kap Spartel und Herkuleshöhlen. Red Nomad organisiert kombinierte Touren, Transfers ab Flughafen oder Hafen Tanger und maßgeschneiderte Ausflüge entlang der Nordküste.",
      highlights: [
        "Chefchaouen — blaue Rif-Medina, fotogen und ruhig",
        "Tanger — Kasbah, Medina und Kap Spartel",
        "Asilah — Street Art, Mauern und Atlantikstrände",
        "Tétouan — UNESCO-hispano-maurische Medina",
        "Mittelmeerküstenstraße und Straße von Gibraltar",
      ],
      itinerary: [
        {
          dayLabel: "T1–T4",
          title: "Beispielprogramm — Nordmarokko",
          description: "4-Tage-Tour Tanger, Chefchaouen und Asilah, flexibel nach Einstiegspunkt.",
          steps: [
            "T1 — Empfang Tanger, Medina, Kap Spartel und Herkuleshöhlen",
            "T2 — Fahrt nach Chefchaouen, blaue Medina und Ras El Ma",
            "T3 — Abstieg nach Asilah oder Larache, Mauern und Street Art",
            "T4 — Rückkehr Tanger oder Verbindung Fès / Casablanca",
            "Tanger-Med-Hafen- oder Flughafentransfers auf Anfrage",
          ],
        },
      ],
      included: [
        "Privater zweisprachiger Chauffeur für die gesamte Nordtour",
        "Tanger Flughafen-, Hafen- oder Bahnhofstransfers",
        "Tagesausflüge Chefchaouen, Asilah, Tétouan",
        "Maßgeschneiderte Nord + Fès oder Rabat Kombinationen",
        "Lokale Guides für Medinas und historische Stätten",
      ],
      notIncluded: [
        "Unterkünfte (Nord-Riads — Empfehlungen auf Anfrage)",
        "Mahlzeiten und Getränke",
        "Museum- und Stätteneintritte (~20–60 MAD)",
        "Fährüberfahrt Spanien–Marokko (separate Buchung)",
      ],
      groupPricing: [
        { travelers: "Chefchaouen Tagesausflug (ab Tanger)", price: "ab 75 €/Pers." },
        { travelers: "Nordtour 4 Tage (2 Pers.)", price: "ab 320 €/Pers." },
        { travelers: "Tanger Flughafen ↔ Chefchaouen Transfer", price: "ab 90 €" },
      ],
      faqs: [
        { question: "Nord mit Fès oder Rabat kombinieren?", answer: "Ja, beliebte 5–7-Tage-Touren Tanger–Chefchaouen–Fès–Volubilis. Route nach Reiserichtung optimiert." },
        { question: "Chefchaouen als Tagesausflug?", answer: "Ab Tanger (2,5 h) oder Tétouan (1,5 h) ja. Für ruhige Medina eine Nacht vor Ort empfohlen." },
        { question: "Transfers ab Hafen Tanger Med?", answer: "Ja, Empfang an Fähre oder Ibn-Battouta-Flughafen, Direktverbindung nach Chefchaouen, Asilah oder Fès." },
        { question: "Beste Saison für den Norden?", answer: "Frühling und Herbst perfekt; angenehmer Sommer in Chefchaouen-Bergen, kühlere Küste." },
      ],
    },
    fes: {
      metaTitle: "Fès — Touren & Transfers | Red Nomad",
      metaDescription:
        "Fès, spirituelle Hauptstadt: UNESCO-Medina, Gerbereien Chouara, Handwerk und Medersen. Geführte Besuche, Transfers und private Touren mit Red Nomad.",
      subtitle: "Spirituelle und Handwerks-Hauptstadt",
      difficulty: "Mäßig (Medina)",
      duration: "1 bis 5 Tage",
      groupSize: "1–17 Personen",
      departure: "Fès",
      languages: "Französisch, English",
      about:
        "Fès el-Bali, die größte Fußgängerzone der Welt, beherbergt jahrhundertealte Gerbereien, geschnitzte Medersen und Handwerkswissen von Generation zu Generation. Red Nomad bietet Fès-Saïss-Flughafentransfers, geführte Medinabesuche, Ausflüge nach Volubilis und Meknès sowie Touren in den Norden oder zur Wüste.",
      highlights: [
        "Fès el-Bali Medina — UNESCO, 9 000 Gassen",
        "Gerbereien Chouara — einzigartiges ockerfarbenes Handwerksspektakel",
        "Medersa Bou Inania und Al Quaraouiyine",
        "Fès el-Jdid und Königspalast (Außenansicht)",
        "Handwerk: Keramik, Leder, Brokat und Zellige",
      ],
      itinerary: [
        {
          dayLabel: "T1–T2",
          title: "Beispielprogramm — Kaiserliches Fès",
          description: "Zwei Tage Medina und Umgebung ohne Hetze genießen.",
          steps: [
            "T1 — Flughafentransfer, geführte Gerbereien und Leder-Souks",
            "T1 — Medersa Bou Inania, Handwerksviertel",
            "T2 — Fondouk Nejjarine, Meriniden-Gräber (Panorama)",
            "T2 — Optionaler Volubilis- und Meknès-Tagesausflug",
            "Zertifizierte lokale Guides, Tempo an Ihre Gruppe angepasst",
          ],
        },
      ],
      included: [
        "Fès-Saïss Flughafen ↔ Medina Transfers",
        "Lokaler Experten-Guide Medina und Gerbereien",
        "Privater Chauffeur für Volubilis, Meknès und Norden",
        "Maßgeschneiderte Fès → Merzouga oder Chefchaouen Touren",
        "Assistenz bei Riad- und Restaurantreservierungen",
      ],
      notIncluded: [
        "Unterkunft in Fès (Medina-Riads auf Anfrage)",
        "Mahlzeiten und Getränke",
        "Monumenteintritte (~20–50 MAD pro Stätte)",
        "Guide-Trinkgelder",
      ],
      groupPricing: [
        { travelers: "Medina & Gerbereien (halber Tag)", price: "ab 50 €/Pers." },
        { travelers: "Volubilis & Meknès Tagesausflug", price: "ab 85 €/Pers." },
        { travelers: "Fès Flughafentransfer (1–4 Pers.)", price: "ab 30 €" },
      ],
      faqs: [
        { question: "Ist Fès-Medina allein schwer zu besuchen?", answer: "Das Gassengewirr macht einen Guide für Gerbereien, Monumente und Werkstätten unverzichtbar. Erfahrene lokale Guides inklusive." },
        { question: "Gerbereien ohne Geruchsbelästigung?", answer: "Minzezweige auf Terrassen über den Becken; kurzer, faszinierender Besuch, morgens am besten." },
        { question: "Fès als Etappe zur Wüste?", answer: "Ja, Fès–Merzouga direkter als ab Marrakesch (~7–8 h). 2–3-Tage-Wüstentouren ab Fès." },
        { question: "Wie viele Tage in Fès?", answer: "Mindestens 2 Nächte für die Medina; plus 1 Tag für Volubilis und Meknès." },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira — Touren & Transfers | Red Nomad",
      metaDescription:
        "Essaouira: atlantische Medina, Möwenhafen, UNESCO-Mauern und windige Strände. Tagesausflug ab Marrakesch oder maßgeschneiderter Aufenthalt mit Red Nomad.",
      subtitle: "Perle des Atlantiks",
      difficulty: "Leicht",
      duration: "1 bis 3 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch oder Essaouira",
      languages: "Französisch, English",
      about:
        "Essaouira, das alte Mogador, verbindet befestigte Medina, lebhaften Fischhafen und Atlantik-Horizont. UNESCO-Mauern, Thuja-Einlegearbeiten, Sandstrände und Windsurf-Spots: Red Nomad organisiert den Tagesausflug ab Marrakesch oder einen erholsamen Aufenthalt mit privaten Transfers.",
      highlights: [
        "Befestigte Medina — UNESCO, Mauern und Skala du Port",
        "Fischhafen — blaue Boote und Sardinengrills",
        "Atlantikstrände und Windsurf- / Kitesurf-Spots",
        "Thuja-Einlegearbeit-Werkstätten und Galerien",
        "Tagesausflug ab Marrakesch (2,5 h)",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Beispielprogramm — Essaouira an einem Tag",
          description: "Klassischer Ausflug ab Marrakesch mit Argan-Stopp und Freizeit in der Medina.",
          steps: [
            "08:00 — Abfahrt Marrakesch, Argan-Kooperative (optional)",
            "10:30 — Ankunft Essaouira, Mauern und Kasbah-Skala",
            "11:30 — Medina, Hafen und Fischmarkt",
            "13:00 — Freies Mittagessen am Atlantik",
            "15:00 — Freizeit Strand oder Handwerksshopping",
            "17:00 — Rückfahrt Marrakesch (~19:30)",
          ],
        },
      ],
      included: [
        "Privater klimatisierter Transport Marrakesch ↔ Essaouira",
        "Zweisprachiger Chauffeur und Abholung an Unterkunft",
        "Mehrtagesaufenthalte mit lokalen Essaouira-Transfers",
        "Medina-Guides auf Anfrage",
        "Flexible Zeiten für Windsurf oder Sonnenuntergang",
      ],
      notIncluded: [
        "Mittagessen und Getränke",
        "Windsurf- / Kitesurf-Ausrüstungsverleih",
        "Museumseintritte (~10–30 MAD)",
        "Unterkunft bei reiner Tagesausflug",
      ],
      groupPricing: [
        { travelers: "Tagesausflug (ab Marrakesch)", price: "ab 80 €/Pers." },
        { travelers: "Marrakesch ↔ Essaouira Transfer", price: "ab 95 €" },
        { travelers: "Geführte Essaouira-Medina", price: "ab 40 €/Pers." },
      ],
      faqs: [
        { question: "Lohnt sich Essaouira-Tagesausflug ab Marrakesch?", answer: "Ja, kompletter Stimmungswechsel in 2,5 h: Meeresluft, ruhigere Medina und exzellente Fischküche." },
        { question: "Ist Essaouira windig?", answer: "Passatwind weht regelmäßig — perfekt zum Surfen; leichte Jacke auch im Sommer mitnehmen." },
        { question: "Mehrere Nächte in Essaouira?", answer: "Selbstverständlich. Transfers, Medina-Riads und lokale Ausflüge (Mogador-Inseln, Strände) organisiert." },
        { question: "Geeignet für Familien mit Kindern?", answer: "Ja, flache Medina, zugänglicher Strand und entspannte Atmosphäre. Kindersitze auf Anfrage." },
      ],
    },
    megdaz: {
      metaTitle: "Megdaz — Touren & Transfers | Red Nomad",
      metaDescription:
        "Megdaz-Tal, marokkanischer Atlas: authentische Berberdörfer, Treks und Berggastfreundschaft. Private Trek-Touren ab Marrakesch mit Red Nomad.",
      subtitle: "Authentischer Atlas",
      difficulty: "Mäßig bis aktiv",
      duration: "2 bis 5 Tage",
      groupSize: "1–12 Personen",
      departure: "Marrakesch oder Azilal",
      languages: "Französisch, English",
      about:
        "Das Megdaz-Tal, ein bewahrtes Juwel des zentralen Hohen Atlas, bietet schwindelerregende Landschaften, Lehm-Dörfer an Hängen und Wanderungen zwischen Schluchten und Gipfeln. Abseits der Massen organisiert Red Nomad Treks mit lokalen Berber-Guides, Maultiertreibern und Nächten bei Gastgebern oder Berghütten.",
      highlights: [
        "Authentische Berberdörfer — Megdaz, Tabant, Agoudi",
        "Schluchten und bewirtschaftete Bergterrassen",
        "1–5-Tage-Treks mit Maultiertreibern und lokalen Guides",
        "Traditionelle Gastfreundschaft: Minztee und Tajines",
        "Bewahrtes Alternative zu Imlil und Toubkal",
      ],
      itinerary: [
        {
          dayLabel: "T1–T3",
          title: "Beispielprogramm — Megdaz-Tal-Trek",
          description: "3-Tage-Wanderung zwischen Berberdörfern, an Fitness anpassbar.",
          steps: [
            "T1 — Fahrt Marrakesch → Azilal → Megdaz, Dorfempfang und Tee",
            "T1 — 3–4 h Wanderung zu Schluchten oder Aussichtspunkt",
            "T2 — Inter-Dorf-Trek, Handwerker und Bauern treffen",
            "T2 — Hütten- oder Gastfamilien-Nacht, Berber-Abendessen",
            "T3 — Schrittweise Rückkehr nach Azilal und Marrakesch",
          ],
        },
      ],
      included: [
        "Privater Transport Marrakesch ↔ Megdaz-Tal",
        "Zertifizierter lokaler Berber-Bergführer",
        "Maultiertreiber für Gepäck auf Treks",
        "Bergunterkünfte (Hütten) gemäß Programm",
        "Trek-Mahlzeiten: Frühstück, Picknick-Mittagessen, Abendessen",
      ],
      notIncluded: [
        "Persönliche Trek-Ausrüstung (Stiefel, Stöcke)",
        "Rückführungsversicherung (empfohlen)",
        "Marrakesch-Nacht vor/nach Trek",
        "Trinkgelder für Maultiertreiber und Dorfbewohner",
      ],
      groupPricing: [
        { travelers: "Megdaz Trek 2T/1N (2 Pers.)", price: "ab 220 €/Pers." },
        { travelers: "Volles Tal-Trek 3T/2N", price: "ab 320 €/Pers." },
        { travelers: "Megdaz Tagesausflug (ohne Nacht)", price: "ab 95 €/Pers." },
      ],
      faqs: [
        { question: "Braucht man gute Kondition für Megdaz?", answer: "Mäßige Treks 3–5 h/Tag mit moderatem Höhenunterschied. Programme für aktive Familien oder erfahrene Wanderer anpassbar." },
        { question: "Unterschied zu Imlil / Toubkal?", answer: "Megdaz ist unberührter und weniger überlaufen; Dorfauthentizität ohne Menschenmassen. Ideal für kulturelle Immersion." },
        { question: "Welche Ausrüstung mitbringen?", answer: "Wanderstiefel, Regenjacke, 25–30 L Tagesrucksack, warme Schicht für kühle Nächte in der Höhe." },
        { question: "Wann im Tal wandern?", answer: "April–Juni und September–November optimal; Winter mit Schnee in der Höhe möglich — fragen Sie uns." },
      ],
    },
    agadir: {
      metaTitle: "Agadir — Touren & Transfers | Red Nomad",
      metaDescription:
        "Agadir, sonnige Bucht, Atlantikstrände und Taghazout-Surf. Transfers, Südküsten-Ausflüge und Marrakesch–Agadir-Touren mit Red Nomad.",
      subtitle: "Sonnige Atlantikküste",
      difficulty: "Leicht",
      duration: "1 bis 5 Tage",
      groupSize: "1–17 Personen",
      departure: "Agadir oder Marrakesch",
      languages: "Französisch, English",
      about:
        "Agadir und seine 10 km Bucht bieten Marokko im Strandmodus: fast permanente Sonne, lebhafte Promenade und Nähe zu Taghazout, Marokkos Surfhauptstadt. Red Nomad übernimmt Al-Massira-Flughafentransfers, Marrakesch–Agadir-Verbindungen und Ausflüge nach Paradise Valley, Souss-Massa oder Kasbah Agadir Oufella.",
      highlights: [
        "Agadir-Bucht — 300 Sonnentage pro Jahr",
        "Taghazout — Surf, Yoga und Bohème-Dorf",
        "Kasbah Agadir Oufella — Bucht-Panorama",
        "Paradise Valley — Naturpools und Palmenhaine",
        "Souss-Massa — Nationalpark und Zugvögel",
      ],
      itinerary: [
        {
          dayLabel: "T1–T3",
          title: "Beispielprogramm — Agadir & Südküste",
          description: "Strandaufenthalt mit Naturausflügen rund um Agadir.",
          steps: [
            "T1 — Flughafentransfer, Promenade und Oufella-Kasbah bei Sonnenuntergang",
            "T2 — Taghazout-Ausflug: Surf, Strandcafé oder Yoga",
            "T2 — Freier Nachmittag Strand oder Spa",
            "T3 — Paradise Valley oder Souss-Massa je nach Saison",
            "Private Marrakesch–Agadir-Verbindung (3 h) verfügbar",
          ],
        },
      ],
      included: [
        "Agadir Al Massira Flughafentransfers",
        "Privater Chauffeur für Taghazout, Paradise Valley, Souss-Massa",
        "Marrakesch ↔ Agadir Verbindung per Minibus oder 4x4",
        "Maßgeschneiderte Halb- oder Ganztagesausflüge",
        "Empfehlungen für Strandhotels und Riads",
      ],
      notIncluded: [
        "Hotel- und Resort-Unterkünfte",
        "Surfunterricht und Board-Verleih",
        "Mahlzeiten und Getränke",
        "Souss-Massa-Park-Eintritt (~20 MAD)",
      ],
      groupPricing: [
        { travelers: "Agadir Flughafentransfer (1–4 Pers.)", price: "ab 28 €" },
        { travelers: "Paradise Valley Tagesausflug", price: "ab 55 €/Pers." },
        { travelers: "Marrakesch → Agadir Privattransfer", price: "ab 120 €" },
      ],
      faqs: [
        { question: "Agadir für Familien-Strandurlaub?", answer: "Ja, breite Strände, moderates Wasser und vollständige Touristeninfrastruktur. Ideal Oktober–Mai gegen Sommerhitze." },
        { question: "Wie weit ist Taghazout von Agadir?", answer: "20 Minuten mit dem Auto. Private Shuttles oder Surf-Halbtage mit Partner-Instruktoren." },
        { question: "Agadir mit Wüste oder Marrakesch kombinieren?", answer: "Marrakesch → Agadir → Taroudant Touren oder Rückfahrt über Atlas; individuelles Angebot nach Dauer." },
        { question: "Paradise Valley ganzjährig zugänglich?", answer: "Am besten Frühling–Herbst; nach Regen sind Naturpools spektakulärer." },
      ],
    },
    oualili: {
      metaTitle: "Oualili — Touren & Transfers | Red Nomad",
      metaDescription:
        "Oualili und Volubilis: UNESCO-Römerruinen, antike Mosaiken und kaiserliches Meknès. Private archäologische Ausflüge ab Fès mit Red Nomad.",
      subtitle: "Marokkos römisches Erbe",
      difficulty: "Leicht",
      duration: "1 bis 3 Tage",
      groupSize: "1–17 Personen",
      departure: "Fès oder Meknès",
      languages: "Französisch, English",
      about:
        "Volubilis, die besterhaltene römische Stätte im Maghreb, und die Umgebung von Oualili (Walili) bezeugen 2 000 Jahre Geschichte im Zentrum Marokkos. Mosaiken, Caracalla-Bogen und Blick auf die Saïss-Ebene: Red Nomad organisiert Ausflüge ab Fès oder Meknès mit Fachführer und Kombinationen mit Kaiserstädten.",
      highlights: [
        "Volubilis — UNESCO, Mosaiken und römische Häuser",
        "Triumphbogen und antikes Kapitol",
        "Kaiserliches Meknès — Bab Mansour und Kornspeicher",
        "Moulay Idriss Zerhoun — heilige Panorama-Stadt",
        "Saïss-Landschaften und jahrhundertealte Olivenhaine",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Beispielprogramm — Volubilis & Meknès",
          description: "Tagesausflug ab Fès, archäologischer Schatz und Kaiserstadt.",
          steps: [
            "09:00 — Abfahrt Fès, Fahrt zur Saïss-Ebene",
            "10:00 — Moulay Idriss Zerhoun (Panoramablick)",
            "10:45 — Geführte Volubilis-Stätte (2 h)",
            "13:00 — Mittagessen Meknès oder lokal",
            "14:30 — Meknès: Bab Mansour, Medersa, Heri es-Souani",
            "18:00 — Rückkehr Fès",
          ],
        },
      ],
      included: [
        "Privater Transport Fès ↔ Volubilis ↔ Meknès",
        "Zweisprachiger Chauffeur und archäologischer Stättenführer",
        "Kombinierte Fès + Oualili + Chefchaouen Touren",
        "Flexible Zeiten für Fotografen und Schulgruppen",
        "Abholung Riad oder Hotel in Fès / Meknès",
      ],
      notIncluded: [
        "Volubilis-Eintritt (~70 MAD) und Meknès (~10–20 MAD/Stätte)",
        "Mittagessen und Getränke",
        "Unterkunft (außer Mehrtagestour)",
        "Archäologie-Guide-Trinkgelder",
      ],
      groupPricing: [
        { travelers: "Volubilis & Meknès (1T, 2 Pers.)", price: "ab 85 €/Pers." },
        { travelers: "Nur Volubilis (halber Tag)", price: "ab 55 €/Pers." },
        { travelers: "Fès + Volubilis + Chefchaouen (3T)", price: "ab 290 €/Pers." },
      ],
      faqs: [
        { question: "Wie viel Zeit für Volubilis?", answer: "1,5–2 h vor Ort mit Guide einplanen; mindestens halber Tag, ganzer Tag mit Meknès empfohlen." },
        { question: "Braucht man einen Guide an der römischen Stätte?", answer: "Sehr empfohlen für Mosaiken und Geschichte; unsere Fachführer erwecken die Stätte zum Leben." },
        { question: "Volubilis bei eingeschränkter Mobilität?", answer: "Teilweise gepflasterte Wege und leichte Steigungen; informieren Sie uns zur Routenanpassung oder flachen Bereiche." },
        { question: "Besuch ab Rabat oder Casablanca?", answer: "Ja, langer Tagesausflug möglich; Fès oder Meknès bleiben praktischste Basen (45 Min.–1 h)." },
      ],
    },
  },
};
