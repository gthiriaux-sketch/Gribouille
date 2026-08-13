/* ════════════════════════════════════════════════════════
   contact-data.js — Gribouille Event Lab
   Données affichées sur contact.html
 Généré automatiquement
════════════════════════════════════════════════════════ */

const CONTACT_DEFAULTS = {

  channels: [
    {
      label: "Email",
      value: "contact@gribouille-eventlab.be",
      link:  "mailto:contact@gribouille-eventlab.be",
      sub:   "Pour toute demande formelle",
      icon:  "img/icones/IMG_8029_1_.webp",
    },
    {
      label: "Instagram",
      value: "@gribouille_event_lab",
      link:  "https://instagram.com/gribouille_event_lab",
      sub:   "Nos réalisations en image",
      icon:  "img/icones/IMG_8031_1_.webp",
    },
    {
      label: "Localité",
      value: "Bruxelles & Belgique",
      link:  "",
      sub:   "Déplacement possible sur devis",
      icon:  "img/icones/IMG_8030_1_.webp",
    },
  ],

  promises: [
    "Lecture attentive de votre brief par l'équipe créative",
    "Réponse personnalisée avec questions de cadrage si nécessaire",
    "Proposition et devis détaillé, sans engagement de votre part",
    "Rencontre (sur site ou en visio) pour affiner le concept",
  ],

  form: {

    eventTypes: [
      { value: "festival", label: "Festival" },
      { value: "club", label: "Club / Bar" },
      { value: "event-prive", label: "Événement privé" },
      { value: "collectif", label: "Collectif / Association" },
      { value: "installation", label: "Installation artistique" },
      { value: "corporate", label: "Corporate / Entreprise" },
      { value: "other", label: "Autre" },
    ],

    durations: [
      { value: "1-soir", label: "1 soir / nuit" },
      { value: "1-jour", label: "1 journée" },
      { value: "weekend", label: "1 week-end (2–3 jours)" },
      { value: "semaine", label: "Plusieurs jours (4–7)" },
      { value: "installation-longue", label: "Installation longue durée (> 1 semaine)" },
    ],

    capacities: [
      { value: "moins-500", label: "Moins de 500 personnes" },
      { value: "500-2000", label: "500 – 2 000 personnes" },
      { value: "2000-5000", label: "2 000 – 5 000 personnes" },
      { value: "5000-15000", label: "5 000 – 15 000 personnes" },
      { value: "plus-15000", label: "Plus de 15 000 personnes" },
      { value: "nc", label: "Non communiqué / à définir" },
    ],

    services: [
      { value: "scenographie", label: "Scénographie & conception 3D" },
      { value: "structures", label: "Structures & certification" },
      { value: "eclairage", label: "Éclairage & mapping" },
      { value: "sonorisation", label: "Sonorisation" },
      { value: "decors", label: "Décors & habillage" },
      { value: "direction-artistique", label: "Direction artistique" },
      { value: "conseil", label: "Conseil & accompagnement" },
      { value: "cle-en-main", label: "Prestation clé en main" },
      { value: "montage", label: "Montage / Démontage" },
      { value: "installation-fixe", label: "Installation fixe" },
    ],

    budgetTicks: [
      "< 5k€",
      "5–10k€",
      "10–25k€",
      "25–50k€",
      "50–100k€",
      "> 100k€",
      "À définir",
    ],

    sources: [
      { value: "instagram", label: "Instagram" },
      { value: "bouche-a-oreille", label: "Bouche à oreille" },
      { value: "festival", label: "Vu sur un festival" },
      { value: "google", label: "Recherche Google" },
      { value: "collaborateur", label: "Collaborateur / partenaire" },
      { value: "presse", label: "Presse / médias" },
      { value: "autre", label: "Autre" },
    ],

    urgencies: [
      { value: "urgent", label: "Urgent — sous 24 h" },
      { value: "normal", label: "Normal — sous 48 h" },
      { value: "semaine", label: "Cette semaine" },
      { value: "pas-presse", label: "Pas pressé" },
    ],

  },

};