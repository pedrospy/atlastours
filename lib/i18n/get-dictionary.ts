import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { fr } from "./dictionaries/fr";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { de } from "./dictionaries/de";

const dictionaries: Record<Locale, Dictionary> = { fr, en, es, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
