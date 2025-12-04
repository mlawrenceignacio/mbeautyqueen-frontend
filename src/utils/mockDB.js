// Mock Users DB
export function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}

export function saveCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

// Mock Reservations DB
export function getReservations() {
  return JSON.parse(localStorage.getItem("reservations") || "[]");
}

export function saveReservations(reservations) {
  localStorage.setItem("reservations", JSON.stringify(reservations));
}

export const wait = (ms) => new Promise((res) => setTimeout(res, ms));

// SERVICES

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function initDefaultServices() {
  const raw = localStorage.getItem("services");
  const existing = safeParse(raw);

  if (!Array.isArray(existing) || existing.length === 0) {
    const defaults = [
      // HAIR (10)
      { id: 1, category: "Hair", service: "Haircut" },
      { id: 2, category: "Hair", service: "Hair Color" },
      { id: 3, category: "Hair", service: "Hair Rebond" },
      { id: 4, category: "Hair", service: "Keratin Treatment" },
      { id: 5, category: "Hair", service: "Hair Spa" },
      { id: 6, category: "Hair", service: "Blowdry & Styling" },
      { id: 7, category: "Hair", service: "Hair Highlights" },
      { id: 8, category: "Hair", service: "Brazilian Blowout" },
      { id: 9, category: "Hair", service: "Hot Oil Treatment" },
      { id: 10, category: "Hair", service: "Curling / Perm" },

      // NAILS (10)
      { id: 11, category: "Nails", service: "Manicure" },
      { id: 12, category: "Nails", service: "Pedicure" },
      { id: 13, category: "Nails", service: "Foot Spa" },
      { id: 14, category: "Nails", service: "Gel Polish" },
      { id: 15, category: "Nails", service: "Acrylic Nails" },
      { id: 16, category: "Nails", service: "Nail Art" },
      { id: 17, category: "Nails", service: "Nail Extension" },
      { id: 18, category: "Nails", service: "Nail Refill" },
      { id: 19, category: "Nails", service: "Paraffin Wax" },
      { id: 20, category: "Nails", service: "Callus Removal" },

      // FACIAL & SKIN CARE (10)
      { id: 21, category: "Facial & Skin Care", service: "Signature Facial" },
      {
        id: 22,
        category: "Facial & Skin Care",
        service: "Deep Cleansing Facial",
      },
      {
        id: 23,
        category: "Facial & Skin Care",
        service: "Anti-Aging Treatment",
      },
      { id: 24, category: "Facial & Skin Care", service: "Acne Treatment" },
      { id: 25, category: "Facial & Skin Care", service: "Whitening Facial" },
      { id: 26, category: "Facial & Skin Care", service: "Diamond Peel" },
      { id: 27, category: "Facial & Skin Care", service: "Hydrating Facial" },
      { id: 28, category: "Facial & Skin Care", service: "Microdermabrasion" },
      { id: 29, category: "Facial & Skin Care", service: "Dermaplaning" },
      { id: 30, category: "Facial & Skin Care", service: "Collagen Mask" },

      // MASSAGE & BODY (10)
      { id: 31, category: "Massage & Body", service: "Full Body Massage" },
      { id: 32, category: "Massage & Body", service: "Swedish Massage" },
      { id: 33, category: "Massage & Body", service: "Shiatsu Massage" },
      { id: 34, category: "Massage & Body", service: "Hot Stone Massage" },
      { id: 35, category: "Massage & Body", service: "Aromatherapy Massage" },
      { id: 36, category: "Massage & Body", service: "Foot Reflexology" },
      { id: 37, category: "Massage & Body", service: "Body Scrub" },
      { id: 38, category: "Massage & Body", service: "Slimming Massage" },
      { id: 39, category: "Massage & Body", service: "Ventosa" },
      { id: 40, category: "Massage & Body", service: "Prenatal Massage" },

      // MAKEUP (10)
      { id: 41, category: "Makeup", service: "Full Glam Makeup" },
      { id: 42, category: "Makeup", service: "Soft Glam Makeup" },
      { id: 43, category: "Makeup", service: "Bridal Makeup" },
      { id: 44, category: "Makeup", service: "Debut Makeup" },
      { id: 45, category: "Makeup", service: "Photoshoot Makeup" },
      { id: 46, category: "Makeup", service: "Natural Look" },
      { id: 47, category: "Makeup", service: "HD Makeup" },
      { id: 48, category: "Makeup", service: "Airbrush Makeup" },
      { id: 49, category: "Makeup", service: "Avant-Garde Makeup" },
      { id: 50, category: "Makeup", service: "Eye Glam Only" },
    ];

    localStorage.setItem("services", JSON.stringify(defaults));
    return defaults;
  }
  return existing;
}

export function getServices() {
  const raw = localStorage.getItem("services");
  const parsed = safeParse(raw);
  return Array.isArray(parsed) ? parsed : [];
}

// CHAT MESSAGES STORAGE
export function getChatMessages(uid) {
  try {
    return JSON.parse(localStorage.getItem(`chat_messages_${uid}`)) || [];
  } catch {
    return [];
  }
}

export function saveChatMessages(uid, messages) {
  localStorage.setItem(`chat_messages_${uid}`, JSON.stringify(messages));
}
