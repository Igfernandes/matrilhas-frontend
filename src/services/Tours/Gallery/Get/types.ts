import { GetRequestShape } from "@type/service";
import { TourGalleryShape } from "@type/Tours/Gallery";

export type GetTourGalleryRequest = GetRequestShape & {
  tour_id?: number;
  imageId?: number;
};
export type GetToursGalleryResponse = {
  rows: TourGalleryShape[];
  count: number;
};
