import { BudgetTier, RoutineStep, TimelinePhase } from './types';

// Link diretti alle immagini reali dei prodotti (Packaging ufficiale)
const IMAGES = {
  anuaFoam: "https://succobene.com/wp-content/uploads/2023/10/Anua-Heartleaf-Quercetinol-Pore-Deep-Cleansing-Foam.jpg",
  isntreeToner: "https://www.littlewonderland.nl/cdn/shop/files/Isntree-Hyaluronic-Acid-Toner-Plus_800x.jpg?v=1718873400",
  puritoCream: "https://m.media-amazon.com/images/I/61gR+Lq-aDL._SL1500_.jpg",
  bojSunscreen: "https://www.beautyofjoseon.com/cdn/shop/products/Relief_Sun_Rice_Probiotics_1.jpg?v=1666663583",
  manyoOil: "https://m.media-amazon.com/images/I/611Z2i2+xTL._SL1000_.jpg",
  snailMucin: "https://m.media-amazon.com/images/I/51J4+VrXUCL._SL1000_.jpg",
  niacinamide: "https://m.media-amazon.com/images/I/61+y57y-cXL._SL1500_.jpg",
  skin1004Eye: "https://www.skin1004.com/cdn/shop/files/Probios-Cica-Bakuchiol-Eye-Cream-1.jpg?v=1683183984",
  aesturaCream: "https://m.media-amazon.com/images/I/51wQojWl+nL._SL1000_.jpg",
  pyunkangToner: "https://m.media-amazon.com/images/I/61nF3m3sDlL._SL1500_.jpg",
  bojMask: "https://m.media-amazon.com/images/I/61r-G-y+gWL._SL1000_.jpg",
  cosrxAHA: "https://m.media-amazon.com/images/I/51P+N1x+H0L._SL1000_.jpg",
  drjartEye: "https://m.media-amazon.com/images/I/51wQojWl+nL._SL1000_.jpg", // Placeholder fallback
  anuaPeach: "https://m.media-amazon.com/images/I/61wQojWl+nL._SL1000_.jpg" // Placeholder fallback
};

export const USER_PROFILE = {
  title: "Uomo 26 Anni",
  skinType: "Pelle Mista",
  concerns: ["Pori Dilatati", "Dermatite Invernale", "Punti Neri"],
  features: [
    { label: "Texture", value: "Pori dilatati su naso e fronte" },
    { label: "Imperfezioni", value: "Filamenti sebacei + blackheads + comedoni bianchi" },
    { label: "Stagionalità", value: "Dermatite invernale su naso laterale" },
    { label: "Rasatura", value: "Ogni 2 giorni (potenziale irritazione)" }
  ]
};

export const PILLARS = [
  { title: "Detersione Doppia", desc: "Per sbloccare i pori (olio + schiuma con BHA gentile)" },
  { title: "Idratazione Multi-layer", desc: "Tonico, essenza, siero niacinamide, crema" },
  { title: "Esfoliazione Chimica", desc: "2-3x/settimana (AHA/BHA) per punti neri" },
  { title: "Barriera Invernale", desc: "Ceramidi, centella, panthenolo per dermatite" }
];

export const MORNING_ROUTINE: RoutineStep[] = [
  {
    time: "07:00",
    duration: 3,
    title: "Detergente Schiuma",
    product: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    image: IMAGES.anuaFoam,
    action: "Applica su viso bagnato, massaggia 2–3 minuti.",
    why: "BHA 0.5% + Heartleaf rimuove sebo notturno senza irritare."
  },
  {
    time: "07:03",
    duration: 2,
    title: "Tonico Idratante",
    product: "Isntree Hyaluronic Acid Toner Plus",
    image: IMAGES.isntreeToner,
    action: "Versa su mani, tampona sul viso bagnato.",
    why: "5 tipi HA + Centella prepara pelle. La pelle deve restare umida."
  },
  {
    time: "07:05",
    duration: 2,
    title: "Crema Leggera",
    product: "Purito Deep Sea Pure Water Cream",
    image: IMAGES.puritoCream,
    action: "1 cucchiaio per viso + collo.",
    why: "60% acqua mare + Ceramidi. Non appesantisce la pelle mista."
  },
  {
    time: "07:07",
    duration: 3,
    title: "Protezione Solare",
    product: "Beauty of Joseon Relief Sun Rice + Probiotics",
    image: IMAGES.bojSunscreen,
    action: "Almeno 1/4 cucchiaino su tutta faccia e collo.",
    why: "Non negoziabile. I raggi UV peggiorano la dermatite.",
    essential: true
  }
];

export const EVENING_ROUTINE: RoutineStep[] = [
  {
    time: "21:00",
    duration: 6,
    title: "Doppia Detersione Fase 1 (Oleosa)",
    product: "Manyo Pure Cleansing Oil",
    image: IMAGES.manyoOil,
    action: "Viso asciutto, massaggia 3–5 min. Emulsiona con acqua.",
    why: "L'olio scioglie il sebo ossidato e la protezione solare."
  },
  {
    time: "21:06",
    duration: 4,
    title: "Doppia Detersione Fase 2 (Schiuma)",
    product: "Anua Heartleaf Quercetinol Foam",
    image: IMAGES.anuaFoam,
    action: "Massaggia 2 minuti, risciacqua bene.",
    why: "Rimuove residui oleosi e pulisce i pori in profondità."
  },
  {
    time: "21:10",
    duration: 3,
    title: "Strato Idratazione 1",
    product: "Isntree Hyaluronic Acid Toner Plus",
    image: IMAGES.isntreeToner,
    action: "Tampona su viso ancora umido.",
    why: "Massimo assorbimento dell'acido ialuronico."
  },
  {
    time: "21:13",
    duration: 2,
    title: "Strato Idratazione 2",
    product: "COSRX Snail 96 Mucin Power Essence",
    image: IMAGES.snailMucin,
    action: "2–3 gocce, tamponare fino assorbimento.",
    why: "Rigenerazione cellulare e effetto 'glass skin'."
  },
  {
    time: "21:15",
    duration: 2,
    title: "Trattamento Attivo",
    product: "COSRX The Niacinamide 15 Serum",
    image: IMAGES.niacinamide,
    action: "2–3 gocce, tamponare.",
    why: "Regola il sebo mentre dormi. NON usare la mattina."
  },
  {
    time: "21:17",
    duration: 3,
    title: "Protezione Zona Occhi",
    product: "SKIN1004 Centella Probio-Cica Eye Cream",
    image: IMAGES.skin1004Eye,
    action: "Dito anulare solamente. Tap delicato.",
    why: "La pelle degli occhi è 10x più sottile. Previene dermatite."
  },
  {
    time: "21:20",
    duration: 3,
    title: "Crema Sigillo Notturna",
    product: "Purito Deep Sea / Aestura Atobarrier 365",
    image: IMAGES.aesturaCream,
    action: "1 cucchiaio abbondante su viso e collo.",
    why: "Sigilla l'idratazione e ripara la barriera cutanea."
  }
];

export const BUDGETS: BudgetTier[] = [
  {
    name: "Fascia Bassa",
    range: "€109–135",
    recommended: false,
    concept: "Prodotti efficaci, budget-friendly, validati dalla comunità online.",
    products: [
      { name: "Manyo Pure Cleansing Oil", price: "€12–15", image: IMAGES.manyoOil },
      { name: "Anua Heartleaf Foam", price: "€14–16", image: IMAGES.anuaFoam },
      { name: "Isntree HA Toner Plus", price: "€18–22", image: IMAGES.isntreeToner },
      { name: "COSRX Snail Mucin", price: "€12–16", image: IMAGES.snailMucin },
      { name: "COSRX Niacinamide 15", price: "€18–22", image: IMAGES.niacinamide },
      { name: "Purito Deep Sea Cream", price: "€15–18", image: IMAGES.puritoCream },
      { name: "BoJ Relief Sun SPF", price: "€10–12", image: IMAGES.bojSunscreen }
    ],
    pros: ["Validati da Reddit", "Economici"],
    cons: ["Eye cream non specializzato", "Niente maschera invernale"]
  },
  {
    name: "Fascia Media",
    range: "€188–253",
    recommended: true,
    concept: "Aggiunge eye cream specializzato + tonico astragalus + maschera calming.",
    products: [
      { name: "Tutti i prodotti Fascia Bassa", price: "-", image: IMAGES.manyoOil },
      { name: "SKIN1004 Eye Cream", price: "€25–30", image: IMAGES.skin1004Eye },
      { name: "Pyunkang Yul Essence Toner", price: "€16–20", image: IMAGES.pyunkangToner },
      { name: "BoJ Centella Mask", price: "€8–10", image: IMAGES.bojMask },
      { name: "COSRX AHA/BHA Toner", price: "€14–18", image: IMAGES.cosrxAHA }
    ],
    pros: ["Protezione occhi specifica", "Tonico SOS dermatite", "Maschera settimanale"],
  },
  {
    name: "Fascia Alta",
    range: "€280–380",
    recommended: false,
    concept: "Versioni premium con ingredienti di grado clinico.",
    products: [
      { name: "Aestura Atobarrier 365 Cream", price: "€28–35", image: IMAGES.aesturaCream },
      { name: "Aestura Atobarrier Hydro Essence", price: "€22–28", image: IMAGES.aesturaCream },
      { name: "Dr. Jart+ Ceramidin Eye Cream", price: "€32–40", image: IMAGES.drjartEye },
      { name: "Anua Peach 77 Cream", price: "€20–28", image: IMAGES.anuaPeach }
    ],
    pros: ["Aestura è gold standard dermatite", "Ideale se dermatite severa"]
  }
];

export const TIMELINE: TimelinePhase[] = [
  { period: "Settimana 1", results: ["Pelle si assesta", "Possibile 'purging' (brufoli temporanei)", "Inizio idratazione barriera"], progress: 15 },
  { period: "Settimane 2-3", results: ["Riduzione punti neri (30-40%)", "Pori iniziano a restringersi", "Texture più liscia"], progress: 40 },
  { period: "Settimane 4-6", results: ["Riduzione punti neri (60-70%)", "Pori visibilmente più piccoli", "Luminosità aumentata"], progress: 75 },
  { period: "Settimane 7-10", results: ["Dermatite scomparsa", "Pelle stabile e radiante", "Mantenimento"], progress: 100 }
];

export const WINTER_ROUTINE = {
  triggers: ["Arrossamento", "Prurito", "Desquamazione"],
  swaps: [
    { from: "Isntree Toner", to: "Pyunkang Yul Essence Toner (Astragalus 95%)", why: "Azione terapeutica anti-infiammatoria" },
    { from: "Crema Viso", to: "Aestura Atobarrier 365 Cream", why: "Ceramidi cliniche per eczema" },
    { from: "Nessuna Maschera", to: "Beauty of Joseon Centella Mask (2-3x/sett)", why: "SOS rossore" }
  ],
  skip: ["COSRX AHA/BHA Toner", "Niacinamide 15 Serum (se acuto)"]
};

// Immagini specifiche per i trattamenti settimanali
export const WEEKLY_IMAGES_DATA = {
  cosrxAHA: IMAGES.cosrxAHA,
  bojMask: IMAGES.bojMask
};