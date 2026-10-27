export function owner() {
  return {
    name: process.env.OWNER_NAME || "L'équipe Vitrina",
    whatsapp: process.env.OWNER_WHATSAPP || "",
    email: process.env.OWNER_EMAIL || "",
    bank: {
      name: process.env.BANK_NAME || "",
      holder: process.env.BANK_HOLDER || "",
      rib: process.env.BANK_RIB || "",
    },
  };
}
