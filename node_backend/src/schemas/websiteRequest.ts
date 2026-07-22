export interface WebsiteRequestCreate {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  website_type: string;
  budget: string;
  description?: string | null;

  number_of_pages?: string | null;
  feature_needs?: string | null;

  hosting?: boolean | null;
  maintenance_frequency?: string | null;
  seo_level?: string | null;
  discovery_call?: boolean | null;
}

export interface WebsiteRequestResponse extends WebsiteRequestCreate {
  id: number;
  hosting: boolean;
  discovery_call: boolean;
  status: string;
}

export interface StatusUpdate {
  status: string;
}
