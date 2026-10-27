import { getCategory } from "./categories";
import { formatMoney } from "./format";
import { plans } from "./plans";

export function pitchMessage({ businessName, category, city, link, ownerName }: { businessName: string; category: string; city: string; link: string; ownerName: string }) {
  const essentiel = plans[0];
  const noun = getCategory(category).noun;
  return [
    `Salam ${businessName},`,
    "",
    `Je m'appelle ${ownerName}. J'ai préparé gratuitement un exemple de site internet pour votre ${noun} à ${city} :`,
    link,
    "",
    "Regardez sur votre téléphone : vos clients peuvent vous appeler, vous écrire sur WhatsApp et trouver votre adresse en 1 clic.",
    "",
    `Pour le mettre en ligne avec votre nom, vos vraies photos et vos prix : ${formatMoney(essentiel.priceMad, "MAD")} une seule fois (≈ ${formatMoney(essentiel.price)}), prêt en 48 h. Vous payez 50 % au début, le reste quand le site est en ligne.`,
    "",
    "Ça vous intéresse ? Je peux passer vous voir aujourd'hui ou demain. Choukran !",
  ].join("\n");
}

export function followUpMessage({ businessName, category, link, ownerName }: { businessName: string; category: string; link: string; ownerName: string }) {
  const noun = getCategory(category).noun;
  return [
    `Salam ${businessName}, c'est ${ownerName}.`,
    `Je vous ai envoyé l'exemple de site pour votre ${noun} : ${link}`,
    "Vous avez pu le regarder ? Je peux le mettre en ligne cette semaine, avec vos photos et vos prix. Je passe vous le montrer si vous voulez. Choukran !",
  ].join("\n");
}
