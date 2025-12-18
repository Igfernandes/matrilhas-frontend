import { BaseShape } from "@type/data";

export type TourShape = BaseShape & {
  id: number;

  title: string;
  slug: string;

  banner?: string;
  description?: string;
  short_description?: string;

  price: number;
  promotional_price?: number;

  currency: "REAL" | "USD" | "EURO";

  available_at?: string;   // ISO datetime
  unavailable_at?: string; // ISO datetime

  video?: string;
  rating?: unknown;

  slots?: number;
  featured: "0" | "1";

  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";

  owner_id?: number;

  created_at: string;
  updated_at: string;
};
