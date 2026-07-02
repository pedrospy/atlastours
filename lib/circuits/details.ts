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
            "Oui, comptez 8–9 h de route le J1 et J3. Nous faisons des pauses régulières à Aït Benhaddou et dans les gorges. Pour un rythme plus lent, optez le Grand Tour 17 jours.",
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
    "grand-tour-17": {
      metaTitle:
        "Grand Tour Maroc 17 jours — Casablanca à Essaouira | Red Nomad",
      metaDescription:
        "Tour complet du Maroc en 17 jours : Casablanca, Rabat, Fès, Meknès, Sahara, Atlas et Essaouira. Circuit privé sur mesure avec guide francophone.",
      subtitle: "Le Maroc dans toute sa diversité",
      difficulty: "Modéré",
      duration: "17 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Le Grand Tour de 17 jours est l'immersion la plus complète au Maroc : villes impériales du Nord, médinas millénaires, dunes du Sahara, kasbahs de l'Atlas et brise atlantique d'Essaouira. Un voyage panoramique à travers l'histoire, les paysages et les traditions berbères, avec un rythme équilibré entre culture, nature et moments de détente.",
      highlights: [
        "Casablanca & Rabat — art déco et capitale administrative",
        "Fès & Meknès — médinas UNESCO et savoir-faire artisanal",
        "Sahara de Merzouga — nuit en bivouac aux dunes de l'Erg Chebbi",
        "Atlas & kasbahs — Aït Benhaddou et vallées berbères",
        "Essaouira — médina atlantique, port et remparts",
      ],
      itinerary: [
        {
          dayLabel: "J1–3",
          title: "Casablanca, Rabat & route vers Fès",
          description:
            "Découverte de la côte atlantique et des premières villes impériales.",
          steps: [
            "J1 — Accueil à Marrakech ou Casablanca, visite de la Mosquée Hassan II (option)",
            "J2 — Rabat : Kasbah des Oudayas, Tour Hassan et médina",
            "J3 — Route vers Fès via Volubilis (ruines romaines) et Meknès",
          ],
        },
        {
          dayLabel: "J4–6",
          title: "Fès & Meknès — villes impériales",
          description:
            "Plongée dans les médinas les plus anciennes du Maghreb.",
          steps: [
            "J4 — Visite guidée de Fès el-Bali : tanneries, medersas et souks",
            "J5 — Fès Jdid et artisanat local, après-midi libre",
            "J6 — Meknès : Bab Mansour, greniers royaux et ville impériale",
          ],
        },
        {
          dayLabel: "J7–10",
          title: "Atlas, gorges & Merzouga",
          description:
            "Traversée du Middle Atlas et descente vers le Sahara.",
          steps: [
            "J7 — Route vers Ifrane et Midelt, paysages de cèdres et montagne",
            "J8 — Gorges du Ziz, palmeraies et arrivée à Merzouga",
            "J9 — Dromadaire au coucher du soleil, nuit en bivouac aux dunes",
            "J10 — Lever de soleil, route vers les gorges du Todra ou Dadès",
          ],
        },
        {
          dayLabel: "J11–14",
          title: "Sud marocain & retour vers Marrakech",
          description:
            "Kasbahs, vallée du Drâa et remontée vers le Haut Atlas.",
          steps: [
            "J11 — Aït Benhaddou et studios de Ouarzazate",
            "J12 — Vallée du Drâa et kasbahs de pisé",
            "J13 — Col du Tizi n'Tichka, retour vers Marrakech",
            "J14 — Journée libre à Marrakech ou repos",
          ],
        },
        {
          dayLabel: "J15–17",
          title: "Essaouira & fin du voyage",
          description:
            "Escapade atlantique avant le retour final.",
          steps: [
            "J15 — Route vers Essaouira via arganiers, découverte de la médina",
            "J16 — Essaouira libre : port, remparts, plage et artisanat",
            "J17 — Retour à Marrakech, fin du Grand Tour",
          ],
        },
      ],
      included: [
        "Transport privé climatisé pendant 17 jours",
        "Guide-chauffeur francophone expérimenté",
        "1 nuit en bivouac de luxe au désert avec pension complète",
        "Petit-déjeuners quotidiens et balade à dos de dromadaire",
      ],
      notIncluded: [
        "Hébergements (riads, kasbahs, lodges)",
        "Déjeuners et dîners (sauf bivouac désert)",
        "Entrées monuments et sites historiques",
        "Boissons, activités optionnelles et dépenses personnelles",
        "Pourboires guide et personnel d'hébergement",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "1 680 €/pers." },
        { travelers: "3–4 voyageurs", price: "1 980–2 100 €/pers." },
        { travelers: "5–7 voyageurs", price: "1 780–1 920 €/pers." },
        { travelers: "8–14 voyageurs", price: "1 620–1 780 €/pers." },
        { travelers: "15–17 voyageurs", price: "1 550 €/pers." },
      ],
      faqs: [
        {
          question: "Peut-on commencer à Casablanca plutôt qu'à Marrakech ?",
          answer:
            "Oui, le Grand Tour est flexible. Nous adaptons le point de départ et les transferts aéroport selon vos vols.",
        },
        {
          question: "17 jours, est-ce trop long ?",
          answer:
            "Le rythme inclut des journées libres et des étapes courtes. Nous pouvons raccourcir ou allonger certaines portions selon vos envies.",
        },
        {
          question: "Quels types d'hébergement sont prévus ?",
          answer:
            "Riads de charme en ville, kasbahs dans le Sud et lodge confortable en montagne. L'hébergement est facturé à part, selon votre budget.",
        },
        {
          question: "Faut-il beaucoup marcher ?",
          answer:
            "Les visites de médina se font à pied (2–4 h). Le reste du temps est en véhicule. Aucune randonnée exigeante n'est obligatoire.",
        },
        {
          question: "Comment se paie le circuit ?",
          answer:
            "Acompte de 30 % à la réservation, solde avant ou à l'arrivée. Paiement par virement ou espèces. Devis détaillé sur demande.",
        },
      ],
    },
    "merzouga-3j": {
      metaTitle:
        "Désert Merzouga 3 jours — Erg Chebbi & bivouac | Red Nomad",
      metaDescription:
        "Séjour 3 jours au Sahara depuis Marrakech : route via Ouarzazate, dromadaire, nuit en camp de luxe sur les dunes de Merzouga et lever de soleil inoubliable.",
      subtitle: "L'essentiel du Sahara en 3 jours",
      difficulty: "Facile",
      duration: "3 jours",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Trois jours suffisent pour goûter à la magie du Sahara : route panoramique via le Haut Atlas et Ouarzazate, nuit en camp de luxe au pied des dunes de l'Erg Chebbi, balade à dos de dromadaire au coucher du soleil et lever de soleil sur l'infini doré. Un condensé d'émotions entre kasbahs, palmeraies et ciel étoilé.",
      highlights: [
        "Route via Ouarzazate — col du Tizi n'Tichka et kasbahs",
        "Balade à dos de dromadaire au coucher du soleil",
        "Nuit en camp de luxe sur les dunes de Merzouga",
        "Lever de soleil sur l'Erg Chebbi",
        "Palmeraies et gorges du Todra en route",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech — Atlas — Gorges — Merzouga",
          description:
            "Longue journée de route récompensée par des paysages spectaculaires.",
          steps: [
            "07h00 — Départ de Marrakech, traversée du col du Tizi n'Tichka",
            "Aït Benhaddou ou arrêt photo dans l'Atlas",
            "Gorges du Todra et palmeraies de Tinjdad",
            "Fin de journée — Arrivée à Merzouga, nuit en hôtel ou kasbah",
          ],
        },
        {
          dayLabel: "J2",
          title: "Merzouga — Dromadaire — Bivouac de luxe",
          description:
            "Journée consacrée au désert et à la nuit sous les étoiles.",
          steps: [
            "Matinée libre ou visite du village de Khamlia (gnawa)",
            "16h30 — Départ à dos de dromadaire vers les dunes",
            "Coucher de soleil sur l'Erg Chebbi",
            "Nuit en camp de luxe : dîner berbère, musique au coin du feu",
          ],
        },
        {
          dayLabel: "J3",
          title: "Lever de soleil — Retour Marrakech",
          description:
            "Réveil matinal sur les dunes et route de retour vers Marrakech.",
          steps: [
            "06h00 — Lever de soleil sur les dunes (option)",
            "Petit-déjeuner au camp, retour en 4x4 au point de départ",
            "Route de retour via Rissani, gorges et Atlas",
            "~20h00 — Arrivée à Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé 4x4 ou minibus climatisé (3 jours)",
        "Chauffeur-guide francophone",
        "1 nuit en camp de luxe avec dîner et petit-déjeuner",
        "Balade à dos de dromadaire (≈1h30 aller-retour)",
      ],
      notIncluded: [
        "Hébergement près de Merzouga (hôtel ou kasbah)",
        "Déjeuners et dîner du J1",
        "Boissons et dépenses personnelles",
        "Entrées sites optionnels",
        "Pourboires (usage local)",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "78 €/pers." },
        { travelers: "3–4 voyageurs", price: "330–350 €/pers." },
        { travelers: "5–7 voyageurs", price: "290–320 €/pers." },
        { travelers: "8–14 voyageurs", price: "260–290 €/pers." },
        { travelers: "15–17 voyageurs", price: "240 €/pers." },
      ],
      faqs: [
        {
          question: "Est-ce beaucoup de route pour 3 jours ?",
          answer:
            "Oui, comptez 9–10 h de route le J1 et J3. Nous faisons des pauses régulières. Pour un rythme plus doux, optez le Grand Tour 17 jours.",
        },
        {
          question: "Le camp de luxe est-il confortable ?",
          answer:
            "Tentes privées avec literie, douches, toilettes et électricité solaire. Repas traditionnels inclus.",
        },
        {
          question: "Faut-il savoir monter à dromadaire ?",
          answer:
            "Non, les dromadaires sont calmes et l'embarquement est assisté. La balade dure environ 1h30.",
        },
        {
          question: "Peut-on partir d'autres villes que Marrakech ?",
          answer:
            "Oui, départ possible depuis Fès (itinéraire inversé). Précisez-le lors de votre demande de devis.",
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
        { travelers: "2 voyageurs", price: "95 €/pers." },
        { travelers: "3–4 voyageurs", price: "370–390 €/pers." },
        { travelers: "5–7 voyageurs", price: "330–360 €/pers." },
        { travelers: "8–14 voyageurs", price: "300–330 €/pers." },
        { travelers: "15–17 voyageurs", price: "280 €/pers." },
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
            "Yes, expect 8–9 hours of driving on D1 and D3. We take regular breaks at Aït Benhaddou and the gorges. For a slower pace, choose the 17-day Grand Tour.",
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
    "grand-tour-17": {
      metaTitle:
        "17-Day Grand Tour of Morocco — Casablanca to Essaouira | Red Nomad",
      metaDescription:
        "Complete 17-day Morocco tour: Casablanca, Rabat, Fes, Meknes, Sahara, Atlas and Essaouira. Private tailor-made circuit with French-speaking guide.",
      subtitle: "Morocco in all its diversity",
      difficulty: "Moderate",
      duration: "17 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "The 17-day Grand Tour is the most complete immersion in Morocco: imperial cities of the North, ancient medinas, Sahara dunes, Atlas kasbahs and the Atlantic breeze of Essaouira. A panoramic journey through history, landscapes and Berber traditions, with a balanced pace between culture, nature and relaxation.",
      highlights: [
        "Casablanca & Rabat — art deco and administrative capital",
        "Fes & Meknes — UNESCO medinas and artisan crafts",
        "Merzouga Sahara — bivouac night on Erg Chebbi dunes",
        "Atlas & kasbahs — Aït Benhaddou and Berber valleys",
        "Essaouira — Atlantic medina, port and ramparts",
      ],
      itinerary: [
        {
          dayLabel: "D1–3",
          title: "Casablanca, Rabat & road to Fes",
          description:
            "Discovery of the Atlantic coast and the first imperial cities.",
          steps: [
            "D1 — Welcome in Marrakech or Casablanca, Hassan II Mosque visit (optional)",
            "D2 — Rabat: Kasbah of the Oudayas, Hassan Tower and medina",
            "D3 — Road to Fes via Volubilis (Roman ruins) and Meknes",
          ],
        },
        {
          dayLabel: "D4–6",
          title: "Fes & Meknes — imperial cities",
          description:
            "Deep dive into the oldest medinas of the Maghreb.",
          steps: [
            "D4 — Guided tour of Fes el-Bali: tanneries, medersas and souks",
            "D5 — Fes Jdid and local crafts, free afternoon",
            "D6 — Meknes: Bab Mansour, royal granaries and imperial city",
          ],
        },
        {
          dayLabel: "D7–10",
          title: "Atlas, gorges & Merzouga",
          description:
            "Crossing the Middle Atlas and descent to the Sahara.",
          steps: [
            "D7 — Road to Ifrane and Midelt, cedar forests and mountain scenery",
            "D8 — Ziz Gorges, palm groves and arrival in Merzouga",
            "D9 — Camel ride at sunset, bivouac night on the dunes",
            "D10 — Sunrise, road to Todra or Dadès gorges",
          ],
        },
        {
          dayLabel: "D11–14",
          title: "Southern Morocco & return to Marrakech",
          description:
            "Kasbahs, Draa Valley and climb back to the High Atlas.",
          steps: [
            "D11 — Aït Benhaddou and Ouarzazate film studios",
            "D12 — Draa Valley and earthen kasbahs",
            "D13 — Tizi n'Tichka pass, return to Marrakech",
            "D14 — Free day in Marrakech or rest",
          ],
        },
        {
          dayLabel: "D15–17",
          title: "Essaouira & end of journey",
          description:
            "Atlantic escape before the final return.",
          steps: [
            "D15 — Road to Essaouira via argan trees, medina discovery",
            "D16 — Free day in Essaouira: port, ramparts, beach and crafts",
            "D17 — Return to Marrakech, end of Grand Tour",
          ],
        },
      ],
      included: [
        "Private air-conditioned transport for 17 days",
        "Experienced French-speaking driver-guide",
        "1 night in luxury desert bivouac with full board",
        "Daily breakfasts and camel ride",
      ],
      notIncluded: [
        "Accommodation (riads, kasbahs, lodges)",
        "Lunches and dinners (except desert bivouac)",
        "Monument and historical site entrances",
        "Drinks, optional activities and personal expenses",
        "Tips for guide and hotel staff",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€1,680/person" },
        { travelers: "3–4 travelers", price: "€1,980–2,100/person" },
        { travelers: "5–7 travelers", price: "€1,780–1,920/person" },
        { travelers: "8–14 travelers", price: "€1,620–1,780/person" },
        { travelers: "15–17 travelers", price: "€1,550/person" },
      ],
      faqs: [
        {
          question: "Can we start in Casablanca instead of Marrakech?",
          answer:
            "Yes, the Grand Tour is flexible. We adapt the starting point and airport transfers according to your flights.",
        },
        {
          question: "Is 17 days too long?",
          answer:
            "The pace includes free days and short stages. We can shorten or extend certain sections to your preference.",
        },
        {
          question: "What type of accommodation is available?",
          answer:
            "Charming riads in cities, kasbahs in the South and comfortable lodge in the mountains. Accommodation is quoted separately according to your budget.",
        },
        {
          question: "Is there a lot of walking?",
          answer:
            "Medina visits are on foot (2–4 h). The rest is by vehicle. No demanding hikes are required.",
        },
        {
          question: "How is payment handled?",
          answer:
            "30% deposit on booking, balance before or on arrival. Bank transfer or cash. Detailed quote on request.",
        },
      ],
    },
    "merzouga-3j": {
      metaTitle:
        "Merzouga Desert 3 Days — Erg Chebbi & Bivouac | Red Nomad",
      metaDescription:
        "3-day Sahara stay from Marrakech: route via Ouarzazate, camel ride, luxury camp on Merzouga dunes and unforgettable sunrise.",
      subtitle: "The essentials of the Sahara in 3 days",
      difficulty: "Easy",
      duration: "3 days",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Three days are enough to taste the magic of the Sahara: scenic route via the High Atlas and Ouarzazate, luxury camp night at the foot of Erg Chebbi dunes, camel ride at sunset and sunrise over the golden infinity. A condensed experience of kasbahs, palm groves and starry skies.",
      highlights: [
        "Route via Ouarzazate — Tizi n'Tichka pass and kasbahs",
        "Camel ride at sunset",
        "Luxury camp night on Merzouga dunes",
        "Sunrise on Erg Chebbi",
        "Palm groves and Todra Gorges en route",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Atlas — Gorges — Merzouga",
          description:
            "A long driving day rewarded by spectacular landscapes.",
          steps: [
            "07:00 — Departure from Marrakech, crossing Tizi n'Tichka pass",
            "Aït Benhaddou or photo stop in the Atlas",
            "Todra Gorges and Tinjdad palm groves",
            "Late afternoon — Arrival in Merzouga, night in hotel or kasbah",
          ],
        },
        {
          dayLabel: "D2",
          title: "Merzouga — Camel — Luxury bivouac",
          description:
            "A day dedicated to the desert and a night under the stars.",
          steps: [
            "Free morning or visit to Khamlia village (gnawa music)",
            "16:30 — Camel departure toward the dunes",
            "Sunset on Erg Chebbi",
            "Luxury camp night: Berber dinner, music by the fire",
          ],
        },
        {
          dayLabel: "D3",
          title: "Sunrise — Return to Marrakech",
          description:
            "Early wake-up on the dunes and return road to Marrakech.",
          steps: [
            "06:00 — Sunrise on the dunes (optional)",
            "Breakfast at camp, 4x4 return to starting point",
            "Return via Rissani, gorges and Atlas",
            "~20:00 — Arrival in Marrakech",
          ],
        },
      ],
      included: [
        "Private 4x4 or air-conditioned minibus (3 days)",
        "French-speaking driver-guide",
        "1 night in luxury camp with dinner and breakfast",
        "Camel ride (≈1h30 round trip)",
      ],
      notIncluded: [
        "Accommodation near Merzouga (hotel or kasbah)",
        "Lunches and D1 dinner",
        "Drinks and personal expenses",
        "Optional site entrances",
        "Tips (local custom)",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€78/person" },
        { travelers: "3–4 travelers", price: "€330–350/person" },
        { travelers: "5–7 travelers", price: "€290–320/person" },
        { travelers: "8–14 travelers", price: "€260–290/person" },
        { travelers: "15–17 travelers", price: "€240/person" },
      ],
      faqs: [
        {
          question: "Is there a lot of driving for 3 days?",
          answer:
            "Yes, expect 9–10 hours of driving on D1 and D3. We take regular breaks. For a gentler pace, choose the 17-day Grand Tour.",
        },
        {
          question: "Is the luxury camp comfortable?",
          answer:
            "Private tents with bedding, showers, toilets and solar electricity. Traditional meals included.",
        },
        {
          question: "Do I need camel riding experience?",
          answer:
            "No, camels are calm and mounting is assisted. The ride lasts about 1h30.",
        },
        {
          question: "Can we depart from cities other than Marrakech?",
          answer:
            "Yes, departure possible from Fes (reversed itinerary). Mention it when requesting a quote.",
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
        { travelers: "2 travelers", price: "€95/person" },
        { travelers: "3–4 travelers", price: "€370–390/person" },
        { travelers: "5–7 travelers", price: "€330–360/person" },
        { travelers: "8–14 travelers", price: "€300–330/person" },
        { travelers: "15–17 travelers", price: "€280/person" },
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
            "Sí, cuente 8–9 h de conducción el D1 y D3. Hacemos pausas en Aït Benhaddou y las gargantas. Para un ritmo más suave, elija el Gran Tour de 17 días.",
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
    "grand-tour-17": {
      metaTitle:
        "Gran Tour Marruecos 17 días — Casablanca a Essaouira | Red Nomad",
      metaDescription:
        "Tour completo de 17 días por Marruecos: Casablanca, Rabat, Fez, Meknes, Sahara, Atlas y Essaouira. Circuito privado a medida con guía francófono.",
      subtitle: "Marruecos en toda su diversidad",
      difficulty: "Moderado",
      duration: "17 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "El Gran Tour de 17 días es la inmersión más completa en Marruecos: ciudades imperiales del Norte, medinas milenarias, dunas del Sahara, kasbahs del Atlas y brisa atlántica de Essaouira. Un viaje panorámico por la historia, los paisajes y las tradiciones bereberes, con un ritmo equilibrado entre cultura, naturaleza y descanso.",
      highlights: [
        "Casablanca y Rabat — art déco y capital administrativa",
        "Fez y Meknes — medinas UNESCO y artesanía",
        "Sahara de Merzouga — noche en bivouac en las dunas de Erg Chebbi",
        "Atlas y kasbahs — Aït Benhaddou y valles bereberes",
        "Essaouira — medina atlántica, puerto y murallas",
      ],
      itinerary: [
        {
          dayLabel: "D1–3",
          title: "Casablanca, Rabat y ruta a Fez",
          description:
            "Descubrimiento de la costa atlántica y las primeras ciudades imperiales.",
          steps: [
            "D1 — Bienvenida en Marrakech o Casablanca, visita a la Mezquita Hassan II (opcional)",
            "D2 — Rabat: Kasbah de los Oudayas, Torre Hassan y medina",
            "D3 — Ruta a Fez vía Volubilis (ruinas romanas) y Meknes",
          ],
        },
        {
          dayLabel: "D4–6",
          title: "Fez y Meknes — ciudades imperiales",
          description:
            "Inmersión en las medinas más antiguas del Magreb.",
          steps: [
            "D4 — Visita guiada de Fez el-Bali: curtidores, medersas y zocos",
            "D5 — Fez Jdid y artesanía local, tarde libre",
            "D6 — Meknes: Bab Mansour, graneros reales y ciudad imperial",
          ],
        },
        {
          dayLabel: "D7–10",
          title: "Atlas, gargantas y Merzouga",
          description:
            "Travesía del Medio Atlas y descenso hacia el Sahara.",
          steps: [
            "D7 — Ruta a Ifrane y Midelt, paisajes de cedros y montaña",
            "D8 — Gargantas del Ziz, palmerales y llegada a Merzouga",
            "D9 — Dromedario al atardecer, noche en bivouac en las dunas",
            "D10 — Amanecer, ruta hacia las gargantas del Todra o Dadès",
          ],
        },
        {
          dayLabel: "D11–14",
          title: "Sur marroquí y regreso a Marrakech",
          description:
            "Kasbahs, valle del Drâa y ascenso al Alto Atlas.",
          steps: [
            "D11 — Aït Benhaddou y estudios de cine de Ouarzazate",
            "D12 — Valle del Drâa y kasbahs de adobe",
            "D13 — Paso Tizi n'Tichka, regreso a Marrakech",
            "D14 — Día libre en Marrakech o descanso",
          ],
        },
        {
          dayLabel: "D15–17",
          title: "Essaouira y fin del viaje",
          description:
            "Escapada atlántica antes del regreso final.",
          steps: [
            "D15 — Ruta a Essaouira vía arganeros, descubrimiento de la medina",
            "D16 — Essaouira libre: puerto, murallas, playa y artesanía",
            "D17 — Regreso a Marrakech, fin del Gran Tour",
          ],
        },
      ],
      included: [
        "Transporte privado climatizado durante 17 días",
        "Guía-conductor francófono experimentado",
        "1 noche en bivouac de lujo en el desierto con pensión completa",
        "Desayunos diarios y paseo en dromedario",
      ],
      notIncluded: [
        "Alojamientos (riads, kasbahs, lodges)",
        "Almuerzos y cenas (excepto bivouac en el desierto)",
        "Entradas a monumentos y sitios históricos",
        "Bebidas, actividades opcionales y gastos personales",
        "Propinas para guía y personal del alojamiento",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "1 680 €/pers." },
        { travelers: "3–4 viajeros", price: "1 980–2 100 €/pers." },
        { travelers: "5–7 viajeros", price: "1 780–1 920 €/pers." },
        { travelers: "8–14 viajeros", price: "1 620–1 780 €/pers." },
        { travelers: "15–17 viajeros", price: "1 550 €/pers." },
      ],
      faqs: [
        {
          question: "¿Podemos empezar en Casablanca en lugar de Marrakech?",
          answer:
            "Sí, el Gran Tour es flexible. Adaptamos el punto de partida y traslados al aeropuerto según sus vuelos.",
        },
        {
          question: "¿17 días es demasiado?",
          answer:
            "El ritmo incluye días libres y etapas cortas. Podemos acortar o alargar ciertas secciones según sus preferencias.",
        },
        {
          question: "¿Qué tipo de alojamiento está previsto?",
          answer:
            "Riads con encanto en ciudad, kasbahs en el Sur y lodge confortable en montaña. El alojamiento se cotiza aparte según su presupuesto.",
        },
        {
          question: "¿Hay que caminar mucho?",
          answer:
            "Las visitas de medina son a pie (2–4 h). El resto es en vehículo. No hay senderismo exigente obligatorio.",
        },
        {
          question: "¿Cómo se paga el circuito?",
          answer:
            "Anticipo del 30 % en la reserva, saldo antes o a la llegada. Transferencia bancaria o efectivo. Presupuesto detallado bajo solicitud.",
        },
      ],
    },
    "merzouga-3j": {
      metaTitle:
        "Desierto Merzouga 3 días — Erg Chebbi y bivouac | Red Nomad",
      metaDescription:
        "Estancia de 3 días en el Sahara desde Marrakech: ruta vía Ouarzazate, dromedario, noche en campamento de lujo en las dunas de Merzouga y amanecer inolvidable.",
      subtitle: "Lo esencial del Sahara en 3 días",
      difficulty: "Fácil",
      duration: "3 días",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Tres días bastan para saborear la magia del Sahara: ruta panorámica por el Alto Atlas y Ouarzazate, noche en campamento de lujo al pie de las dunas de Erg Chebbi, paseo en dromedario al atardecer y amanecer sobre el infinito dorado. Un condensado de emociones entre kasbahs, palmerales y cielo estrellado.",
      highlights: [
        "Ruta vía Ouarzazate — paso Tizi n'Tichka y kasbahs",
        "Paseo en dromedario al atardecer",
        "Noche en campamento de lujo en las dunas de Merzouga",
        "Amanecer en Erg Chebbi",
        "Palmerales y gargantas del Todra en ruta",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Atlas — Gargantas — Merzouga",
          description:
            "Larga jornada en carretera recompensada por paisajes espectaculares.",
          steps: [
            "07:00 — Salida de Marrakech, cruce del paso Tizi n'Tichka",
            "Aït Benhaddou o parada fotográfica en el Atlas",
            "Gargantas del Todra y palmerales de Tinjdad",
            "Final del día — Llegada a Merzouga, noche en hotel o kasbah",
          ],
        },
        {
          dayLabel: "D2",
          title: "Merzouga — Dromedario — Bivouac de lujo",
          description:
            "Jornada dedicada al desierto y noche bajo las estrellas.",
          steps: [
            "Mañana libre o visita al pueblo de Khamlia (música gnawa)",
            "16:30 — Salida en dromedario hacia las dunas",
            "Atardecer en Erg Chebbi",
            "Noche en campamento de lujo: cena bereber, música junto al fuego",
          ],
        },
        {
          dayLabel: "D3",
          title: "Amanecer — Regreso a Marrakech",
          description:
            "Despertar temprano en las dunas y carretera de regreso a Marrakech.",
          steps: [
            "06:00 — Amanecer en las dunas (opcional)",
            "Desayuno en el campamento, regreso en 4x4 al punto de partida",
            "Regreso vía Rissani, gargantas y Atlas",
            "~20:00 — Llegada a Marrakech",
          ],
        },
      ],
      included: [
        "Transporte privado 4x4 o minibús climatizado (3 días)",
        "Conductor-guía francófono",
        "1 noche en campamento de lujo con cena y desayuno",
        "Paseo en dromedario (≈1h30 ida y vuelta)",
      ],
      notIncluded: [
        "Alojamiento cerca de Merzouga (hotel o kasbah)",
        "Almuerzos y cena del D1",
        "Bebidas y gastos personales",
        "Entradas a sitios opcionales",
        "Propinas (costumbre local)",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "78 €/pers." },
        { travelers: "3–4 viajeros", price: "330–350 €/pers." },
        { travelers: "5–7 viajeros", price: "290–320 €/pers." },
        { travelers: "8–14 viajeros", price: "260–290 €/pers." },
        { travelers: "15–17 viajeros", price: "240 €/pers." },
      ],
      faqs: [
        {
          question: "¿Hay mucha carretera para 3 días?",
          answer:
            "Sí, cuente 9–10 h de conducción el D1 y D3. Hacemos pausas regulares. Para un ritmo más suave, elija el Gran Tour de 17 días.",
        },
        {
          question: "¿El campamento de lujo es cómodo?",
          answer:
            "Tiendas privadas con ropa de cama, duchas, baños y electricidad solar. Comidas tradicionales incluidas.",
        },
        {
          question: "¿Hay que saber montar a dromedario?",
          answer:
            "No, los dromedarios son tranquilos y la subida es asistida. El paseo dura unos 1h30.",
        },
        {
          question: "¿Se puede salir de otras ciudades además de Marrakech?",
          answer:
            "Sí, salida posible desde Fez (itinerario inverso). Indíquelo al solicitar presupuesto.",
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
        { travelers: "2 viajeros", price: "95 €/pers." },
        { travelers: "3–4 viajeros", price: "370–390 €/pers." },
        { travelers: "5–7 viajeros", price: "330–360 €/pers." },
        { travelers: "8–14 viajeros", price: "300–330 €/pers." },
        { travelers: "15–17 viajeros", price: "280 €/pers." },
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
            "Ja, 8–9 Stunden am T1 und T3. Pausen in Aït Benhaddou und den Schluchten. Für langsameres Tempo: 17-Tage Grand Tour.",
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
    "grand-tour-17": {
      metaTitle:
        "17-Tage Grand Tour Marokko — Casablanca bis Essaouira | Red Nomad",
      metaDescription:
        "Komplette 17-Tage-Marokko-Tour: Casablanca, Rabat, Fes, Meknes, Sahara, Atlas und Essaouira. Private maßgeschneiderte Rundreise mit französischsprachigem Guide.",
      subtitle: "Marokko in all seiner Vielfalt",
      difficulty: "Mittel",
      duration: "17 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Die 17-tägige Grand Tour ist die vollständigste Marokko-Immersion: Kaiserstädte des Nordens, jahrtausendealte Medinas, Sahara-Dünen, Atlas-Kasbahs und die atlantische Brise von Essaouira. Eine panoramische Reise durch Geschichte, Landschaften und Berber-Traditionen mit ausgewogenem Rhythmus zwischen Kultur, Natur und Entspannung.",
      highlights: [
        "Casablanca & Rabat — Art déco und Verwaltungshauptstadt",
        "Fes & Meknes — UNESCO-Medinas und Handwerk",
        "Sahara Merzouga — Biwak-Nacht an den Erg-Chebbi-Dünen",
        "Atlas & Kasbahs — Aït Benhaddou und Berber-Täler",
        "Essaouira — atlantische Medina, Hafen und Festungsmauern",
      ],
      itinerary: [
        {
          dayLabel: "T1–3",
          title: "Casablanca, Rabat & Fahrt nach Fes",
          description:
            "Entdeckung der Atlantikküste und der ersten Kaiserstädte.",
          steps: [
            "T1 — Empfang in Marrakesch oder Casablanca, Hassan-II.-Moschee (optional)",
            "T2 — Rabat: Kasbah der Oudayas, Hassan-Turm und Medina",
            "T3 — Fahrt nach Fes via Volubilis (römische Ruinen) und Meknes",
          ],
        },
        {
          dayLabel: "T4–6",
          title: "Fes & Meknes — Kaiserstädte",
          description:
            "Eintauchen in die ältesten Medinas des Maghreb.",
          steps: [
            "T4 — Geführte Tour durch Fes el-Bali: Gerbereien, Medersas und Souks",
            "T5 — Fes Jdid und lokales Handwerk, freier Nachmittag",
            "T6 — Meknes: Bab Mansour, königliche Kornspeicher und Kaiserstadt",
          ],
        },
        {
          dayLabel: "T7–10",
          title: "Atlas, Schluchten & Merzouga",
          description:
            "Durchquerung des Mittleren Atlas und Abstieg zur Sahara.",
          steps: [
            "T7 — Fahrt nach Ifrane und Midelt, Zedernwälder und Berglandschaft",
            "T8 — Ziz-Schluchten, Palmenhaine und Ankunft in Merzouga",
            "T9 — Kamelritt bei Sonnenuntergang, Biwak-Nacht auf den Dünen",
            "T10 — Sonnenaufgang, Fahrt zu Todra- oder Dadès-Schluchten",
          ],
        },
        {
          dayLabel: "T11–14",
          title: "Südmarokko & Rückkehr nach Marrakesch",
          description:
            "Kasbahs, Draa-Tal und Aufstieg zum Hohen Atlas.",
          steps: [
            "T11 — Aït Benhaddou und Filmstudios von Ouarzazate",
            "T12 — Draa-Tal und Lehm-Kasbahs",
            "T13 — Tizi n'Tichka-Pass, Rückkehr nach Marrakesch",
            "T14 — Freier Tag in Marrakesch oder Ruhe",
          ],
        },
        {
          dayLabel: "T15–17",
          title: "Essaouira & Reiseende",
          description:
            "Atlantik-Ausflug vor der finalen Rückkehr.",
          steps: [
            "T15 — Fahrt nach Essaouira via Arganbäume, Medina-Entdeckung",
            "T16 — Freier Tag in Essaouira: Hafen, Festungsmauern, Strand und Handwerk",
            "T17 — Rückkehr nach Marrakesch, Ende der Grand Tour",
          ],
        },
      ],
      included: [
        "Privater klimatisierter Transport für 17 Tage",
        "Erfahrener französischsprachiger Fahrer-Guide",
        "1 Nacht im Luxus-Wüsten-Biwak mit Vollpension",
        "Tägliche Frühstücke und Kamelritt",
      ],
      notIncluded: [
        "Unterkünfte (Riads, Kasbahs, Lodges)",
        "Mittag- und Abendessen (außer Wüsten-Biwak)",
        "Eintritte zu Monumenten und historischen Stätten",
        "Getränke, optionale Aktivitäten und persönliche Ausgaben",
        "Trinkgelder für Guide und Hotelpersonal",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "1 680 €/Pers." },
        { travelers: "3–4 Reisende", price: "1 980–2 100 €/Pers." },
        { travelers: "5–7 Reisende", price: "1 780–1 920 €/Pers." },
        { travelers: "8–14 Reisende", price: "1 620–1 780 €/Pers." },
        { travelers: "15–17 Reisende", price: "1 550 €/Pers." },
      ],
      faqs: [
        {
          question: "Können wir in Casablanca statt Marrakesch starten?",
          answer:
            "Ja, die Grand Tour ist flexibel. Wir passen Startpunkt und Flughafentransfers an Ihre Flüge an.",
        },
        {
          question: "Sind 17 Tage zu lang?",
          answer:
            "Das Tempo umfasst freie Tage und kurze Etappen. Wir können Abschnitte nach Wunsch kürzen oder verlängern.",
        },
        {
          question: "Welche Unterkunftsart ist vorgesehen?",
          answer:
            "Charmante Riads in Städten, Kasbahs im Süden und komfortable Lodge in den Bergen. Die Unterkunft wird separat nach Budget kalkuliert.",
        },
        {
          question: "Muss man viel zu Fuß gehen?",
          answer:
            "Medina-Besuche zu Fuß (2–4 Std.). Der Rest im Fahrzeug. Keine anspruchsvollen Wanderungen erforderlich.",
        },
        {
          question: "Wie erfolgt die Zahlung?",
          answer:
            "30 % Anzahlung bei Buchung, Rest vor oder bei Ankunft. Überweisung oder bar. Detailliertes Angebot auf Anfrage.",
        },
      ],
    },
    "merzouga-3j": {
      metaTitle:
        "Merzouga-Wüste 3 Tage — Erg Chebbi & Biwak | Red Nomad",
      metaDescription:
        "3-Tage-Sahara-Aufenthalt ab Marrakesch: Route via Ouarzazate, Kamelritt, Luxus-Camp auf Merzouga-Dünen und unvergesslicher Sonnenaufgang.",
      subtitle: "Das Wesentliche der Sahara in 3 Tagen",
      difficulty: "Leicht",
      duration: "3 Tage",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, English",
      about:
        "Drei Tage genügen, um die Magie der Sahara zu erleben: panoramische Route über den Hohen Atlas und Ouarzazate, Luxus-Camp-Nacht am Fuße der Erg-Chebbi-Dünen, Kamelritt bei Sonnenuntergang und Sonnenaufgang über das goldene Unendliche. Ein Konzentrat aus Kasbahs, Palmenhainen und Sternenhimmel.",
      highlights: [
        "Route via Ouarzazate — Tizi n'Tichka-Pass und Kasbahs",
        "Kamelritt bei Sonnenuntergang",
        "Luxus-Camp-Nacht auf Merzouga-Dünen",
        "Sonnenaufgang am Erg Chebbi",
        "Palmenhaine und Todra-Schluchten unterwegs",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch — Atlas — Schluchten — Merzouga",
          description:
            "Langer Fahrttag, belohnt mit spektakulären Landschaften.",
          steps: [
            "07:00 — Abfahrt Marrakesch, Überquerung Tizi n'Tichka-Pass",
            "Aït Benhaddou oder Fotostopp im Atlas",
            "Todra-Schluchten und Tinjdad-Palmenhaine",
            "Spätnachmittag — Ankunft Merzouga, Nacht im Hotel oder Kasbah",
          ],
        },
        {
          dayLabel: "T2",
          title: "Merzouga — Kamel — Luxus-Biwak",
          description:
            "Ein Tag der Wüste und eine Nacht unter den Sternen.",
          steps: [
            "Freier Vormittag oder Besuch des Dorfs Khamlia (Gnawa-Musik)",
            "16:30 — Kamelabfahrt zu den Dünen",
            "Sonnenuntergang am Erg Chebbi",
            "Luxus-Camp-Nacht: Berber-Dinner, Musik am Lagerfeuer",
          ],
        },
        {
          dayLabel: "T3",
          title: "Sonnenaufgang — Rückkehr Marrakesch",
          description:
            "Frühes Erwachen auf den Dünen und Rückfahrt nach Marrakesch.",
          steps: [
            "06:00 — Sonnenaufgang auf den Dünen (optional)",
            "Frühstück im Camp, 4x4-Rückfahrt zum Startpunkt",
            "Rückweg via Rissani, Schluchten und Atlas",
            "~20:00 — Ankunft Marrakesch",
          ],
        },
      ],
      included: [
        "Privater 4x4 oder klimatisierter Minibus (3 Tage)",
        "Französischsprachiger Fahrer-Guide",
        "1 Nacht Luxus-Camp mit Abendessen und Frühstück",
        "Kamelritt (≈1h30 Hin- und Rückfahrt)",
      ],
      notIncluded: [
        "Unterkunft nahe Merzouga (Hotel oder Kasbah)",
        "Mittagessen und Abendessen T1",
        "Getränke und persönliche Ausgaben",
        "Optionale Stätteneintritte",
        "Trinkgelder (lokaler Brauch)",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "78 €/Pers." },
        { travelers: "3–4 Reisende", price: "330–350 €/Pers." },
        { travelers: "5–7 Reisende", price: "290–320 €/Pers." },
        { travelers: "8–14 Reisende", price: "260–290 €/Pers." },
        { travelers: "15–17 Reisende", price: "240 €/Pers." },
      ],
      faqs: [
        {
          question: "Ist das viel Fahrt für 3 Tage?",
          answer:
            "Ja, rechnen Sie 9–10 Std. Fahrt an T1 und T3. Regelmäßige Pausen. Für sanfteres Tempo wählen Sie die 17-Tage Grand Tour.",
        },
        {
          question: "Ist das Luxus-Camp komfortabel?",
          answer:
            "Private Zelte mit Bettwäsche, Duschen, Toiletten und Solarstrom. Traditionelle Mahlzeiten inklusive.",
        },
        {
          question: "Brauche ich Kamelreiterfahrung?",
          answer:
            "Nein, Kamele sind ruhig und das Aufsteigen wird unterstützt. Der Ritt dauert etwa 1h30.",
        },
        {
          question: "Abfahrt auch aus anderen Städten als Marrakesch?",
          answer:
            "Ja, Abfahrt möglich ab Fes (umgekehrte Route). Bei Anfrage angeben.",
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
        { travelers: "2 Reisende", price: "95 €/Pers." },
        { travelers: "3–4 Reisende", price: "370–390 €/Pers." },
        { travelers: "5–7 Reisende", price: "330–360 €/Pers." },
        { travelers: "8–14 Reisende", price: "300–330 €/Pers." },
        { travelers: "15–17 Reisende", price: "280 €/Pers." },
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
