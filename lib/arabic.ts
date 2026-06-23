export const decorativePhrases = {
  morocco: {
    text: "Morocco",
  },
  welcome: {
    text: "Welcome",
  },
  saharaTravel: {
    text: "Sahara Star Tour",
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
