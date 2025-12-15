import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClientSchema, ClientUpdatePayload } from "../schemas";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { useEffect, useState } from "react";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import usePutClient from "@services/Clients/Put/usePut";
import { ClientShape } from "@type/Clients";
import i18n from "@configs/i18n";
import { getCPFFormatted, getNumberFormatted } from "@helpers/string";

dayjs.extend(customParseFormat);

type Props = {
  client: React.RefObject<ClientShape>;
};

export function useClientModal({ client }: Props) {
  const { formMethods, handleSubmit } = useFormRules<ClientUpdatePayload>({
    schema: ClientSchema,
    defaultValues: {
      ...client.current,
      cpf: getCPFFormatted(client.current?.cpf ?? ""),
      birthdate: client.current?.birthdate
        ? dayjs(client.current.birthdate).format(i18n("Configs.format.date"))
        : undefined,
      phone: client.current?.phone
        ? getNumberFormatted(client.current.phone)
        : undefined,
      category: client.current?.categories[0]
        ? String(client.current?.categories[0]?.id)
        : undefined,
    },
  });
  const { mutateAsync: putClient, isPending } = usePutClient();
  const [categories, setCategories] = useState<ClientCategoriesShape[]>([]);
  const { data: categoryData, isFetched: isFetchedCategory } =
    useGetCategories();

  useEffect(() => {
    if (!categoryData) return;

    setCategories(categoryData);
  }, [categoryData, isFetchedCategory]);

  const submit = ({ birthdate, ...payload }: ClientUpdatePayload) => {
    putClient({
      ...payload,
      id: client.current.id,
      cpf: client.current.cpf,
      birthdate: birthdate
        ? dayjs(birthdate, i18n("Configs.format.date")).format("YYYY-MM-DD")
        : undefined,
    });
    client.current = {
      ...client.current,
      ...payload,
      birthdate,
    } as ClientShape;
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    categories,
  };
}
