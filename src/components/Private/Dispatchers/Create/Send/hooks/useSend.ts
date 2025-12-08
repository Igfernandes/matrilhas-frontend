import useGetCharges from "@services/Charges/Get/useGetCharges";
import { ChargeShape } from "@type/Charges";
import { useEffect, useState } from "react";

export function useSend() {
  const { rows: chargesData } = useGetCharges();
  const [charges, setCharges] = useState<Array<ChargeShape>>([]);

  useEffect(() => {
    setCharges(chargesData ?? []);
  }, [chargesData]);

  return {
    charges,
  };
}
