import { useFormRules } from "@hooks/Forms/useFormRules";
import { TourFiltersPayload, TourFiltersSchema } from "../filtersSchemas";
import { useEffect, useMemo } from "react";
import { TourPreviewShape } from "@type/Tours";
import { useRouter } from "next/router";

type Props = {
  tours: Array<TourPreviewShape>;
};

type AddressData = {
  countries: Array<string>;
  states: Array<string>;
  cities: Array<string>;
};

export function useToursSidebar({ tours }: Props) {
  const router = useRouter();
  const { formMethods, register, handleSubmit } = useFormRules({
    schema: TourFiltersSchema,
    defaultValues: router.query as Partial<TourFiltersPayload>,
  });

  const addresses = useMemo(() => {
    const addresses = {
      countries: [] as Array<string>,
      states: [] as Array<string>,
      cities: [] as Array<string>,
    } as AddressData;

    for (const tour of tours) {
      if(!Array.isArray(tour.addresses)) continue;
      const destiny = tour.addresses.find(
        (address) => address.type === "DESTINY"
      );
      if (!destiny) continue;

      addresses.countries.push(String(destiny.country));
      addresses.states.push(String(destiny.state));
      addresses.cities.push(String(destiny.city));
    }

    return addresses;
  }, [tours]);


  useEffect(() => {
    if (Object.keys(router.query).length === 0) return;

    formMethods.setValue(
      "title_contains",
      router.query.title_contains as string
    );
  }, [router.query, formMethods]);

  return {
    formMethods,
    register,
    handleSubmit,
    addresses,
    router,
  };
}
