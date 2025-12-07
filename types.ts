import { LucideIcon } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  originalPrice: number;
  price: number;
  savings: number;
  features: string[];
  isPremium: boolean;
  ctaText: string;
  bonusFeatures?: string[];
}