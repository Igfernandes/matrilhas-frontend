export type TourTabType = "INFORMATION"  | "PAYMENTS" | "RELATIONS";
export type TourTabProps = {
  tabs: Record<TourTabType, React.ReactNode>;
};
