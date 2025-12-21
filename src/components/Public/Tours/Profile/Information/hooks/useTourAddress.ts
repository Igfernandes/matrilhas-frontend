import { TourPreviewShape } from "@type/Tours";
import { useMemo } from "react";

type Props = {
  tour: TourPreviewShape;
};

export function useTourAddress({ tour }: Props) {
  const destiny = useMemo(
    () => tour.addresses.find((address) => address.type === "DESTINY"),
    [tour]
  );
  const origin = useMemo(
    () => tour.addresses.find((address) => address.type === "ORIGIN"),
    [tour]
  );

  return {
    origin,
    destiny,
  };
}
