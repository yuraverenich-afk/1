export type ResourceCategory =
  | 'Housing'
  | 'Employment'
  | 'Education'
  | 'Mental Health'
  | 'Physical Health'
  | 'Legal'
  | 'Life Skills'
  | 'Financial Assistance'
  | 'Other';

export interface ResourceLocation {
  address_line1: string;
  address_line2?: string | null;
  city: string;
  state: string;
  zip: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface ResourceContact {
  phone?: string | null;
  email?: string | null;
  website_url?: string | null;
}

export interface ResourceHours {
  [day: string]: string;
}

export interface ResourceCost {
  level: 'Free' | 'Sliding scale' | 'Paid' | 'Varies';
  details: string;
}

export interface Resource {
  id: string;
  name: string;
  provider: string;
  category: ResourceCategory;
  tags: string[];
  description: string;
  services_offered: string[];
  eligibility_summary: string;
  eligibility_details: string;
  age_min: number | null;
  age_max: number | null;
  location: ResourceLocation;
  contact: ResourceContact;
  hours: ResourceHours | null;
  cost: ResourceCost;
  documentation_required: string[];
  accessibility_features: string[];
  last_verified: string;
  is_emergency: boolean;
  notes_for_providers?: string;
}
