import { BudgetTier, RoutineStep, TimelinePhase, WeeklyTreatment } from './types';

// Placeholder images selected to match the visual identity of the real products
// Anua = Green/Natural, Manyo = Yellow Oil, Cosrx = Minimal/Clear, BoJ = White/Cream
const IMAGES = {
  anuaFoam: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200", // Greenish foam tube look
  isntreeToner: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200", // Blue/Clear toner bottle
  puritoCream: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=200", // White cream tube/jar
  bojSunscreen: "https://images.unsplash.com/photo-1556228720-19875164a66e?auto=format&fit=crop&q=80&w=200", // White tube
  manyoOil: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200", // Golden oil
  snailMucin: "https://images.unsplash.com/photo-1615396668779-1987f4c0a520?auto=format&fit=crop&q=80&w=200", // Minimal pump bottle
  niacinamide: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=200", // Dropper bottle
  skin1004Eye: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=200", // Brown/Gold accents
  aesturaCream: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=200", // Clinical white pump
  pyunkangToner: "https://images.unsplash.com/photo-1571781565037-3ae1726a2618?auto=format&fit=crop&q=80&w=200", // Blue bottle
  bojMask: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=200", // Sheet mask pack
  cosrxAHA: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=200", // Toner bottle
  drjartEye: "https://images.unsplash.com/photo-1580870081665-226840788705?auto=format&fit=crop&q=80&w=200", // Tube
  anuaPeach: "https://images.unsplash.com/photo-1620917669809-192080df5057?auto=format&fit=crop&q=80&w=200" // Pinkish/Peach tone
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
    title: "Detergente Schiuma",
    product: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    image: IMAGES.anuaFoam,
    action: "Applica su viso bagnato, massaggia 2–3 minuti",
    why: "BHA 0.5% + Heartleaf rimuove sebo notturno senza irritare"
  },
  {
    time: "07:03",
    title: "Tonico Idratante",
    product: "Isntree Hyaluronic Acid Toner Plus",
    image: IMAGES.isntreeToner,
    action: "Versa su mani, tampona sul viso bagnato (2 min)",
    why: "5 tipi HA + Centella prepara pelle a ricevere siero. Pelle deve restare umida."
  },
  {
    time: "07:05",
    title: "Crema Leggera",
    product: "Purito Deep Sea Pure Water Cream",
    image: IMAGES.puritoCream,
    action: "1 cucchiaio per viso + collo",
    why: "60% acqua mare + Ceramidi non appesantisce pelle mista"
  },
  {
    time: "07:07",
    title: "Protezione Solare",
    product: "Beauty of Joseon Relief Sun Rice + Probiotics SPF 50+",
    image: IMAGES.bojSunscreen,
    action: "Almeno 1/4 cucchiaino su tutta faccia e collo",
    why: "Non negoziabile. UV rays peggiorano dermatite.",
    essential: true
  }
];

export const EVENING_ROUTINE: RoutineStep[] = [
  {
    time: "21:00",
    title: "Doppia Detersione Fase 1 (Oleosa)",
    product: "Manyo Pure Cleansing Oil",
    image: IMAGES.manyoOil,
    action: "Applica su viso asciutto, massaggia 3–5 minuti. Poi emulsiona con acqua.",
    why: "Scioglie sebo, sunscreen, impurità dentro pori."
  },
  {
    time: "21:06",
    title: "Doppia Detersione Fase 2 (Schiuma)",
    product: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    image: IMAGES.anuaFoam,
    action: "Massaggia 2 minuti, risciacqua",
    why: "Rimuove residui olio + ultimo strato sebo."
  },
  {
    time: "21:10",
    title: "Strato Idratazione 1",
    product: "Isntree Hyaluronic Acid Toner Plus",
    image: IMAGES.isntreeToner,
    action: "Tampona su viso umido (NON asciugare dopo cleanse)",
    why: "HA assorbimento ottimale su pelle bagnata."
  },
  {
    time: "21:13",
    title: "Strato Idratazione 2",
    product: "COSRX Advanced Snail 96 Mucin Power Essence",
    image: IMAGES.snailMucin,
    action: "2–3 gocce, tamponare fino assorbimento",
    why: "Snail mucin 96% per rigenerazione e 'glass skin'."
  },
  {
    time: "21:15",
    title: "Trattamento Attivo",
    product: "COSRX The Niacinamide 15 Serum",
    image: IMAGES.niacinamide,
    action: "2–3 gocce, tamponare",
    why: "Lavora durante sonno su sebum e pori. NON usare la mattina."
  },
  {
    time: "21:17",
    title: "Protezione Zona Occhi",
    product: "SKIN1004 Madagascar Centella Probio-Cica Bakuchiol Eye Cream",
    image: IMAGES.skin1004Eye,
    action: "Dito anulare solamente. Tap delicato.",
    why: "Pelle occhi 10x più sottile. Ceramidi + centella + bakuchiol."
  },
  {
    time: "21:20",
    title: "Crema Sigillo Notturna",
    product: "Purito Deep Sea (Estate) / Aestura Atobarrier 365 (Inverno)",
    image: IMAGES.aesturaCream,
    action: "1 cucchiaio su viso e collo",
    why: "Sigilla idratazione, rinforza barriera."
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
      { name: "Tutti i prodotti Fascia Bassa", price: "-", image: IMAGES.manyoOil }, // Placeholder
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