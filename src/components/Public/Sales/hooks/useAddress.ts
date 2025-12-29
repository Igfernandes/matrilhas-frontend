import useGetTourAddresses from "@services/Tours/Address/Get/useGet";
import { useSalesContext } from "../context";
import { useCallback } from "react";
import { OptionsShape } from "@components/shared/forms/SelectSearch/type";
import { TourAddressShape } from "@type/Tours/Address";

export function useAddress() {
  const { tour } = useSalesContext();
  const { rows } = useGetTourAddresses({
    tour_id: tour?.id,
  });
  const destinyAddresses = rows.filter((address) => address.type === "DESTINY");
  const originAddresses = rows.filter((address) => address.type === "ORIGIN");

  const builderOption = useCallback((addresses: TourAddressShape[]) => {
    return addresses.map((address) => {
      const addressFormatted = `${address?.complement} - ${address?.city}/${address?.state} - ${address?.country}`;
      
      return {
        value: addressFormatted,
        text: addressFormatted,
      };
    }) as Array<OptionsShape>;
  }, []);

  return {
    destinyAddresses,
    originAddresses,
    builderOption,
  };
}
