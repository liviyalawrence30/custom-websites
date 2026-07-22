export interface WebsiteRequestModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  business_name: string;
  website_type: string;
  number_of_pages?: string | null;
  feature_needs?: string | null;
  hosting: boolean;
  maintenance_frequency?: string | null;
  seo_level?: string | null;
  discovery_call: boolean;
  budget: string;
  description?: string | null;
  status: string;
}
