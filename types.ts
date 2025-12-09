export interface Product {
  name: string;
  price: string;
  image?: string;
  description?: string;
  ingredients?: string[];
  why?: string;
  usage?: string;
}

export interface BudgetTier {
  name: string;
  range: string;
  recommended: boolean;
  concept: string;
  products: Product[];
  pros: string[];
  cons?: string[];
}

export interface RoutineStep {
  time: string;
  title: string;
  product: string;
  image?: string;
  action: string;
  why: string;
  details?: string[];
  essential?: boolean;
}

export interface WeeklyTreatment {
  frequency: string;
  title: string;
  days: string[];
  steps: string[];
  notes: string[];
}

export interface TimelinePhase {
  period: string;
  results: string[];
  progress: number;
}