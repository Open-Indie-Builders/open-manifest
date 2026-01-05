export interface Tool {
  id: string;
  name: string;
  description: string;
  status: 'LIVE' | 'BETA' | 'DEV';
  url?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ManifestPoint {
  title: string;
  content: string;
}

export enum LegalView {
  NONE,
  TERMS,
  PRIVACY
}