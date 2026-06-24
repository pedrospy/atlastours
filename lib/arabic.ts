export const decorativePhrases = {
  morocco: {
    text: "Morocco",
  },
  welcome: {
    text: "Welcome",
  },
  saharaTravel: {
    text: "Atlas Routes & Transfer",
  },
  authenticJourney: {
    text: "Authentic Journey",
  },
  discover: {
    text: "Discover",
  },
  hospitality: {
    text: "Moroccan Hospitality",
  },
  trips: {
    text: "Journeys",
  },
  desertSoul: {
    text: "Soul of the Desert",
  },
} as const;

export type DecorativePhraseKey = keyof typeof decorativePhrases;
