import { BaseShape } from "@type/data";
import { GalleryPhotoShape } from "./photo";

export type GalleryShape = BaseShape & {
  id: number;
  title: string;
  cover?: string;
  status: "PUBLISHED" | "DRAFT";
  images: Array<GalleryPhotoShape>;
  created_at: string;
  updated_at: string;
};
