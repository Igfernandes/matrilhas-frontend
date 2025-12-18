export type DeleteTourAgencyPayload = {
  tour_id: number;
  all?: boolean;
  agency_id?: number;
  in_agencies?: Array<number>;
};
