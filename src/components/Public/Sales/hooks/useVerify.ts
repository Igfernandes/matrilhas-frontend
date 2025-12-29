import { useFormContext } from "react-hook-form";
import { SalesPayload } from "../salesSchemas";

export function useVerify() {
  const { watch } = useFormContext<SalesPayload>();
  const isFilledPersonalFields =
    watch("name") && watch("cpf") && watch("birthdate");
  const isFilledContactFields = watch("email") && watch("phone");
  const isFilledAddressFields =
    watch("country") && watch("state") && watch("city");
  const isFilledKinshipFields =
    watch("contacts.name") &&
    watch("contacts.phone") &&
    watch("contacts.kinship");
  const isFilledLandingAndBoardingFields = watch("boarding") && watch("landing");

  return {
    isFilledPersonalFields,
    isFilledAddressFields,
    isFilledContactFields,
    isFilledKinshipFields,
    isFilledLandingAndBoardingFields,
  };
}
