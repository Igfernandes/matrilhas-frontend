import { useFormContext } from "react-hook-form";
import { SalesPayload } from "../salesSchemas";

export function useVerify() {
  const { watch } = useFormContext<SalesPayload>();
  const isFilledPersonalFields =
    watch("name") && watch("cpf") && watch("birthdate") && watch("phone");
  const isFilledAddressFields =
    watch("country") && watch("state") && watch("city");

  return {
    isFilledPersonalFields,
    isFilledAddressFields,
  };
}
