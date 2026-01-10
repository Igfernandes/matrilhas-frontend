import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClientSchema, ClientUpdatePayload } from "../schemas";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { useEffect, useMemo, useState } from "react";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import usePutClient from "@services/Clients/Put/usePut";
import { ClientShape } from "@type/Clients";
import { getCPFFormatted, getNumberFormatted } from "@helpers/string";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Props = {
  client: React.RefObject<ClientShape>;
};

export function useClientModal({ client }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => ClientSchema(t), [t]);
  const { formMethods, handleSubmit } = useFormRules<ClientUpdatePayload>({
    schema,
    defaultValues: {
      ...client.current,
      cpf: getCPFFormatted(client.current?.cpf ?? ""),
      birthdate: client.current?.birthdate,
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

  const submit = (payload: ClientUpdatePayload) => {
    putClient({
      ...payload,
      id: client.current.id,
      cpf: client.current.cpf,
    });
    client.current = {
      ...client.current,
      ...payload,
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
