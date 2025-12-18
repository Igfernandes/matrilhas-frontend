export type TourTabType = "INFORMATION" | "ADDRESSES" | "PERIODS" | "RULES" | "GALLERY" | "AGENCIES";
export type TourTabProps = {
  tabs: Record<TourTabType, React.ReactNode>;
};
