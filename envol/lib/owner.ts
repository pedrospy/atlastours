export function owner() {
  return {
    name: process.env.OWNER_NAME || "L'équipe Envol",
    whatsapp: process.env.OWNER_WHATSAPP || "",
    email: process.env.OWNER_EMAIL || "",
    bank: {
      name: process.env.BANK_NAME || "",
      holder: process.env.BANK_HOLDER || "",
      rib: process.env.BANK_RIB || "",
    },
    paypal: process.env.PAYPAL_ME || "",
    links: {
      coaching: process.env.COACHING_LINK || "",
      community: process.env.COMMUNITY_LINK || "",
      vipBooking: process.env.VIP_BOOKING_LINK || "",
    },
    goal: {
      min: Number(process.env.MONTHLY_GOAL_MIN || 2500) * 100,
      max: Number(process.env.MONTHLY_GOAL_MAX || 5000) * 100,
    },
  };
}
