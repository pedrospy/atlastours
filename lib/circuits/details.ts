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
        { travelers: "2 voyageurs", price: "290 €/pers." },
        { travelers: "3–4 voyageurs", price: "290 €/pers." },
        { travelers: "5–7 voyageurs", price: "290 €/pers." },
        { travelers: "8–14 voyageurs", price: "290 €/pers." },
        { travelers: "15–17 voyageurs", price: "290 €/pers." },
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
            "Oui, comptez 9–10 h de route le J1 et J3. Nous faisons des pauses régulières. Pour un circuit plus complet avec Fès et Chefchaouen, optez le circuit Marrakech–Chefchaouen 3 jours.",
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
        { travelers: "2 travelers", price: "€290/person" },
        { travelers: "3–4 travelers", price: "€290/person" },
        { travelers: "5–7 travelers", price: "€290/person" },
        { travelers: "8–14 travelers", price: "€290/person" },
        { travelers: "15–17 travelers", price: "€290/person" },
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
            "Yes, expect 9–10 hours of driving on D1 and D3. We take regular breaks. For a more complete tour with Fes and Chefchaouen, choose the 3-day Marrakech–Chefchaouen tour.",
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
        { travelers: "2 viajeros", price: "290 €/pers." },
        { travelers: "3–4 viajeros", price: "290 €/pers." },
        { travelers: "5–7 viajeros", price: "290 €/pers." },
        { travelers: "8–14 viajeros", price: "290 €/pers." },
        { travelers: "15–17 viajeros", price: "290 €/pers." },
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
            "Sí, cuente 9–10 h de conducción el D1 y D3. Hacemos pausas regulares. Para un circuito más completo con Fez y Chefchaouen, elija el circuito Marrakech–Chefchaouen de 3 días.",
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
        { travelers: "2 Reisende", price: "290 €/Pers." },
        { travelers: "3–4 Reisende", price: "290 €/Pers." },
        { travelers: "5–7 Reisende", price: "290 €/Pers." },
        { travelers: "8–14 Reisende", price: "290 €/Pers." },
        { travelers: "15–17 Reisende", price: "290 €/Pers." },
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
            "Ja, rechnen Sie 9–10 Std. Fahrt an T1 und T3. Regelmäßige Pausen. Für eine vollständigere Tour mit Fès und Chefchaouen wählen Sie die 3-Tage-Tour Marrakesch–Chefchaouen.",
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
