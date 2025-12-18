import { TourGalleryShape } from "@type/Tours/Gallery";

export type PostToursGalleryPayload = Array<
  Omit<TourGalleryShape, "created_at">
>;
