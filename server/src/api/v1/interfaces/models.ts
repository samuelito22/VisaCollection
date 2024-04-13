export namespace models {
  interface BaseCompany {
    company_name: string;
  }

  export interface Visa extends BaseCompany {
    type_rating?: string;
    visa_route?: string;
  }

  export interface Url extends BaseCompany {
    website_url?: string;
    linkedin_url?: string;
  }

  export interface CompanyHouse extends BaseCompany { 
    city?: string;
    address?: string;
    postcode?: string;
    sic_code?: number;
    company_status?: string; // Example of a union type for known variants
    company_charges?: boolean;
    company_number?: string;
  }

  export interface Sic { 
    sic_code: number;
    industry?: string;
    description?: string;
  }
}
