import { JSX } from "react";
import { TourShape } from "@type/Tours";

export type HookToursProps<TourType> = {
  filter: string;
  handleFilter: (data: TourType) => boolean;
};

export type TDataTour = Pick<
  TourShape,
  "id" | "title" | "status" | "price" | "unavailable_at"
> & {
  created_at: string | JSX.Element;
  updated_at: string | JSX.Element;
  actions: JSX.Element;
};

export type ToursStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalTourOperationType =
  | "TOUR"
  | "DELETE"
  | "SHARED"
  | "IMPORT"
  | boolean;

export type TourTabOption = "PROFILE" | "ADDRESS";

export type TourPageProps = {
  targetTour: TourShape;
};
export type ProfileManagerProps = {
  tour?: TourShape;
};
