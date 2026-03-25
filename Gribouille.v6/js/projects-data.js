/* ════════════════════════════════════════════════════════
   projects-data.js — Gribouille Event Lab
   ────────────────────────────────────────────────────────
   SOURCE DE VÉRITÉ pour tous les projets.

   ► AJOUTER un projet  : copier un bloc et l'ajouter au tableau.
   ► SUPPRIMER un projet: supprimer son bloc du tableau.
   ► MODIFIER un projet : éditer les champs directement ici.

   Les pages projects.html et project-detail.html se génèrent
   automatiquement depuis ce fichier — rien d'autre à toucher.
════════════════════════════════════════════════════════ */

const PROJECTS = [
/* ──────────────────────────────────────────────────────
     PROJET 01
  ────────────────────────────────────────────────────── */
  {
    // Identifiant unique (sans espaces ni accents) — apparaît dans l'URL
    id: "scene-festival",

    // Catégorie — doit correspondre à un filtre dans projects.html
    // Valeurs existantes : festival | club | collectif | bar
    cat: "festival",

    // Mise en page de la carte (grille 12 colonnes)
    span: 7,           // largeur : 3 | 4 | 5 | 6 | 7 | 8
    ratio: "wide",     // ratio   : wide | square | tall | std | film

    year: "2026",

    // ── CARTE (projects.html) ──────────────────────────
    title:   "Scène Latérale Festival",
    breadcrumb: "Une scène atypique!",
    desc:    "Construction scénique complète pour une scène outdoor de 3 000 personnes — tours de truss, façades LED et vidéo mapping.",
    img:     "img/Chateau1.png",
    imgAlt:  "Festival main stage scenography",

    // ── PAGE DÉTAIL (project-detail.html) ─────────────

    // Tags affichés sous le titre hero
    tags: ["Scénographie", "LED & Truss", "Vidéo Mapping", "3 000 pers."],

    // 4 chiffres clés — laisser vide [] pour masquer la bande
    stats: [
      { num: "3k",  label: "Festivaliers" },
      { num: "12",  label: "Jours de Montage" },
      { num: "200", label: "m² de Structures" },
      { num: "6",   label: "Artisans Mobilisés" },
    ],

    // Fiche projet (sidebar)
    client:  "À renseigner",
    lieu:    "Belgique",
    date:    "2026",
    duree:   "—",
    surface: "—",

    // Texte principal (HTML autorisé : <strong>, <em>, <br>…)
    subtitle: "Une scène qui impose le respect.",
    body: `
      <p>Description complète du projet à renseigner.</p>
      <p>Remplacez ce texte par le récit de votre intervention : brief client, contraintes techniques, solutions apportées.</p>
    `,

    // Citation mise en avant — null pour masquer
    quote: null,
    // quote: { text: "Votre citation ici.", cite: "Source, 2026" },

    // Liste des prestations
    services: [
      "Conception scénographique complète",
      "Plans techniques & permis temporaire",
      "Fabrication des structures",
      "Installation & montage sur site",
      "Design lumière & programmation",
      "Démontage & transport",
    ],

    // Galerie — tableau vide = utilise l'image de la carte
    gallery: [ 
      { src: "img/Chateau1.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau2.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau3.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau4.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau5.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau6.png", alt: "Description", caption: "Légende" },
      { src: "img/Chateau7.png", alt: "Description", caption: "Légende" },
    ],

  },


  /* ──────────────────────────────────────────────────────
     PROJET 02
  ────────────────────────────────────────────────────── */
  {
    id:    "totems-lumineux-festival",
    cat:   "festival",
    span:  5,
    ratio: "wide",
    year:  "2026",

    title:  "Totems Lumineux Festival",
    breadcrumb: "Une structure imposante",
    desc:   "Structures totems en acier fabriquées à la main avec bandeaux LED intégrés et finitions peintes sur-mesure.",
    img:    "img/Tour1.png",
    imgAlt: "Festival totem structure",

    tags: ["Fabrication Acier", "LED Intégrés", "Peinture Sur-Mesure", "Outdoor"],
    stats: [
      { num: "8",   label: "Totems Fabriqués" },
      { num: "4m",  label: "Hauteur Moyenne" },
      { num: "320", label: "m de LED" },
      { num: "3",   label: "Semaines de Fab." },
    ],

    client:  "À renseigner",
    lieu:    "Belgique",
    date:    "2026",
    duree:   "—",
    surface: "—",

    subtitle: "Des totems qui redéfinissent l'horizon du festival.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Design & conception des structures",
      "Soudure & fabrication acier",
      "Intégration LED sur-mesure",
      "Peinture & finitions",
      "Implantation sur site",
    ],
// Galerie — tableau vide = utilise l'image de la carte
    gallery: [ 
      { src: "img/Tour1.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour2.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour3.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour4.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour5.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour6.png", alt: "Description", caption: "Légende" },
      { src: "img/Tour7.png", alt: "Description", caption: "Légende" },
    ],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 03
  ────────────────────────────────────────────────────── */
  {
    id:    "scene-collectif-ecologique",
    cat:   "collectif",
    span:  4,
    ratio: "std",
    year:  "2026",

    title:  "Scène Collectif & Écologique",
    breadcrumb: "On n'arrête pas un peuple qui danse",
    desc:   "Scène durable construite en matériaux recyclés pour un événement collectif éco-responsable.",
    img:    "img/Pirate1.png",
    imgAlt: "Collectif ecologic stage",

    tags: ["Matériaux Recyclés", "Éco-Scénographie", "Collectif", "Durable"],
    stats: [
      { num: "90%", label: "Matériaux Recyclés" },
      { num: "0",   label: "Déchet Enfoui" },
      { num: "500", label: "Participants" },
      { num: "5",   label: "Artisans Bénévoles" },
    ],

    client:  "Collectif éco-responsable",
    lieu:    "Belgique",
    date:    "2026",
    duree:   "—",
    surface: "—",

    subtitle: "Construire autrement, sans compromis sur l'impact.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Scénographie en matériaux de récupération",
      "Plans techniques",
      "Fabrication & montage",
      "Éclairage basse consommation",
      "Démontage & tri des matériaux",
    ],
    // Galerie — tableau vide = utilise l'image de la carte
    gallery: [ 
      { src: "img/Pirate1.png", alt: "Description", caption: "Légende" },
      { src: "img/Pirate2.png", alt: "Description", caption: "Légende" },
      { src: "img/Pirate3.png", alt: "Description", caption: "Légende" },
      { src: "img/Pirate4.png", alt: "Description", caption: "Légende" },
      { src: "img/Pirate5.png", alt: "Description", caption: "Légende" },
      { src: "img/Pirate6.png", alt: "Description", caption: "Légende" },
    ],

  },


  /* ──────────────────────────────────────────────────────
     PROJET 04
  ────────────────────────────────────────────────────── */
  {
    id:    "dour-festival-scene-foret",
    cat:   "festival",
    span:  4,
    ratio: "std",
    year:  "2026",

    title:  "Dour Festival — Scène Forêt",
    breadcrumb: "Dans la forêt, la musique pousse",
    desc:   "Scénographie organique nichée dans la ligne de cimes naturelle — des structures qui semblent avoir poussé, pas construites.",
    img:    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=700",
    imgAlt: "Outdoor festival forest stage",

    tags: ["Scénographie Organique", "Structures Bois", "Éclairage", "Concept & Build"],
    stats: [
      { num: "8k",  label: "Festivaliers" },
      { num: "18",  label: "Jours de Montage" },
      { num: "340", label: "m² de Structures" },
      { num: "4",   label: "Artisans Mobilisés" },
    ],

    client:  "Dour Festival ASBL",
    lieu:    "Dour, Belgique",
    date:    "Juillet 2026",
    duree:   "5 jours / festival",
    surface: "340 m²",

    subtitle: "Une scène qui semble avoir toujours existé.",
    body: `
      <p>
        Pour l'édition 2026 du <strong>Dour Festival</strong>, Gribouille Event Lab a conçu et fabriqué
        la scénographie complète de la Scène Forêt — 340 m² entièrement fondus dans la ligne de cimes naturelle du site.
      </p>
      <p>
        Le brief était limpide : créer une scène qui ne ressemble à aucune scène. L'architecture devait émerger du sol,
        frôler les arbres, épouser les irrégularités du terrain. <strong>Chaque poteau, chaque voile, chaque luminaire</strong>
        a été pensé pour renforcer l'illusion d'un espace naturel que la musique aurait simplement colonisé.
      </p>
      <p>
        Les matériaux — bois non traité, cordes naturelles, toiles de jute — vieillissent visuellement au fil des cinq jours
        de festival, <strong>renforçant progressivement l'esthétique organique</strong>.
      </p>
    `,
    quote: { text: "On voulait que les gens arrivent et aient l'impression que cette forêt a toujours produit de la musique.", cite: "Brief client initial, Dour Festival 2026" },
    services: [
      "Conception scénographique complète",
      "Plans techniques & permis de construire temporaire",
      "Fabrication des structures bois sur-mesure",
      "Installation & montage sur site (18 jours)",
      "Design lumière & programmation",
      "Démontage & transport",
    ],
    gallery: [
      { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1000", alt: "Scène forêt vue générale — nuit",   caption: "Vue générale — nuit" },
      { src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=700",  alt: "Installation lumineuse détail",       caption: "Détail installation" },
      { src: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",  alt: "Structure bois portante",             caption: "Structure bois" },
      { src: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600",  alt: "Ambiance festivaliers",               caption: "Ambiance jour 2" },
      { src: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=600",  alt: "Éclairage RGB scène",                 caption: "Light show — clôture" },
    ],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 05
  ────────────────────────────────────────────────────── */
  {
    id:    "redbull-bc-one-bruxelles",
    cat:   "collectif",
    span:  4,
    ratio: "std",
    year:  "2026",

    title:  "Redbull BC One — Bruxelles",
    breadcrumb: "Ça nous a donné des ailes",
    desc:   "Design de scène urbaine pour la compétition de breakdance — esthétique béton brut avec plafonds LED dynamiques.",
    img:    "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=700",
    imgAlt: "Collectif event installation",

    tags: ["Scène Urbaine", "LED Dynamiques", "Béton Brut", "Compétition"],
    stats: [
      { num: "2k",  label: "Spectateurs" },
      { num: "6",   label: "Jours de Montage" },
      { num: "80",  label: "m² de Plafond LED" },
      { num: "2",   label: "Artisans Mobilisés" },
    ],

    client:  "Red Bull Belgium",
    lieu:    "Bruxelles, Belgique",
    date:    "2026",
    duree:   "2 jours / événement",
    surface: "—",

    subtitle: "Une arène urbaine taillée pour la performance.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Design de scène urbaine",
      "Fabrication des éléments de décor",
      "Installation plafond LED dynamique",
      "Montage & régie technique",
      "Démontage",
    ],
    gallery: [],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 06
  ────────────────────────────────────────────────────── */
  {
    id:    "nuit-en-club-installation-permanente",
    cat:   "club",
    span:  6,
    ratio: "wide",
    year:  "2025",

    title:  "Nuit en Club — Installation Permanente",
    breadcrumb: "Une installation digne d'un grand club",
    desc:   "Rig LED suspendu permanent et architecture textile sur-mesure transformant le plafond de la piste de danse d'un club bruxellois.",
    img:    "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Club immersive lighting installation",

    tags: ["Installation Permanente", "Rig LED", "Architecture Textile", "Club"],
    stats: [
      { num: "120", label: "m² de Plafond" },
      { num: "600", label: "Points LED" },
      { num: "8",   label: "Semaines de Travaux" },
      { num: "3",   label: "Artisans Mobilisés" },
    ],

    client:  "Club bruxellois (confidentiel)",
    lieu:    "Bruxelles, Belgique",
    date:    "2025",
    duree:   "Installation permanente",
    surface: "120 m²",

    subtitle: "Le plafond comme cinquième mur.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Conception de l'installation",
      "Fabrication du rig & structure textile",
      "Intégration LED & contrôleurs DMX",
      "Installation & câblage",
      "Formation de l'équipe du club",
    ],
    gallery: [],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 07
  ────────────────────────────────────────────────────── */
  {
    id:    "foret-lumineuse-exposition-collective",
    cat:   "club",
    span:  6,
    ratio: "wide",
    year:  "2025",

    title:  "Forêt Lumineuse — Exposition Collective",
    breadcrumb: "Une scénographie organique",
    desc:   "Installation lumineuse in situ commandée pour une exposition multi-artistes dans un entrepôt industriel.",
    img:    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgAlt: "Immersive light installation",

    tags: ["Installation In Situ", "Lumière", "Exposition", "Industriel"],
    stats: [
      { num: "200", label: "m² d'Installation" },
      { num: "3k",  label: "Visiteurs" },
      { num: "14",  label: "Jours d'Expo" },
      { num: "2",   label: "Artisans Mobilisés" },
    ],

    client:  "Collectif d'artistes (confidentiel)",
    lieu:    "Bruxelles, Belgique",
    date:    "2025",
    duree:   "14 jours",
    surface: "200 m²",

    subtitle: "La lumière comme matière première.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Conception de l'installation lumineuse",
      "Fabrication des éléments porteurs",
      "Intégration lumière & programmation",
      "Montage & réglages",
      "Démontage",
    ],
    gallery: [],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 08
  ────────────────────────────────────────────────────── */
  {
    id:    "amenagement-bar-ixelles",
    cat:   "bar",
    span:  4,
    ratio: "std",
    year:  "2025",

    title:  "Aménagement Bar — Ixelles",
    breadcrumb: "Une déco digne d'un bon bar bruxellois",
    desc:   "Scénographie intérieure complète et architecture de bar sur-mesure pour un nouveau lieu festif à Ixelles, Bruxelles.",
    img:    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=700",
    imgAlt: "Bar fit-out scenography",

    tags: ["Aménagement Intérieur", "Bar Sur-Mesure", "Scénographie", "Ixelles"],
    stats: [
      { num: "85",  label: "m² Aménagés" },
      { num: "6",   label: "Semaines de Travaux" },
      { num: "150", label: "Couverts / Soir" },
      { num: "4",   label: "Artisans Mobilisés" },
    ],

    client:  "Bar (confidentiel)",
    lieu:    "Ixelles, Bruxelles",
    date:    "2025",
    duree:   "6 semaines",
    surface: "85 m²",

    subtitle: "Un lieu festif pensé jusqu'au dernier clou.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Scénographie intérieure complète",
      "Architecture du bar sur-mesure",
      "Mobilier & éclairage",
      "Coordination des corps de métier",
      "Suivi de chantier",
    ],
    gallery: [],
  },


  /* ──────────────────────────────────────────────────────
     PROJET 09
  ────────────────────────────────────────────────────── */
  {
    id:    "esperanzah-scene-principale",
    cat:   "festival",
    span:  8,
    ratio: "wide",
    year:  "2025",

    title:  "Esperanzah! — Scène Principale",
    breadcrumb: "Pour un festival qui en vaut la peine",
    desc:   "Production complète de la main stage pour 8 000 festivaliers — des plans de rigging à la programmation finale du light show.",
    img:    "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1000",
    imgAlt: "Festival large crowd stage",

    tags: ["Main Stage", "Rigging", "Light Show", "8 000 pers."],
    stats: [
      { num: "8k",  label: "Festivaliers" },
      { num: "21",  label: "Jours de Montage" },
      { num: "500", label: "m² de Structures" },
      { num: "12",  label: "Artisans Mobilisés" },
    ],

    client:  "Esperanzah! Festival ASBL",
    lieu:    "Floreffe, Belgique",
    date:    "Juillet 2025",
    duree:   "4 jours / festival",
    surface: "500 m²",

    subtitle: "Du plan de rigging au dernier light show.",
    body: `
      <p>Description complète du projet à renseigner.</p>
    `,
    quote: null,
    services: [
      "Production complète main stage",
      "Plans de rigging & calculs de charge",
      "Coordination équipes techniques",
      "Design lumière & programmation",
      "Régie son & lumière",
      "Démontage & transport",
    ],
    gallery: [],
  },

]; // ← fin du tableau PROJECTS


/* ════════════════════════════════════════════════════════
   CATÉGORIES — labels d'affichage pour les filtres
   Ajouter ici si vous créez une nouvelle catégorie.
════════════════════════════════════════════════════════ */
const CATEGORY_LABELS = {
  festival:  "Festival",
  club:      "Club",
  collectif: "Collectif",
  bar:       "Bar",
};
