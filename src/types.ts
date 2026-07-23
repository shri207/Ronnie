export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  detailedDescription?: string;
  schedule?: string;
  leadTrainer?: string;
  highlights?: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  quote: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'WORKOUTS' | 'EQUIPMENT' | 'GYM INTERIOR' | 'TRANSFORMATIONS' | 'COMMUNITY';
  image: string;
  span?: string; // CSS grid span class
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  dateAgo: string;
  rating: number;
  title: string;
  review: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
