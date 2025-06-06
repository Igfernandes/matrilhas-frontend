import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClientSchema, ClientUpdatePayload } from "../schemas";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { useEffect, useState } from "react";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import usePutClient from "@services/Clients/Put/usePostCreateClient";
import { ClientShape } from "@type/Clients/client";
import { useRouter } from "next/router";

dayjs.extend(customParseFormat);

type Props = {
  client: ClientShape;
};

export function useClientModal({ client }: Props) {
  const { formMethods, handleSubmit } = useFormRules<ClientUpdatePayload>({
    schema: ClientSchema,
  });
  const [categories, setCategories] = useState<ClientCategoriesShape[]>([]);
  const { data: categoryData, isFetched: isFetchedCategory } =
    useGetCategories();
  const router = useRouter();

  useEffect(() => {
    if (!categoryData) return;

    setCategories(categoryData);
  }, [categoryData, isFetchedCategory]);
  const { mutateAsync: postCreateClient, isPending } = usePutClient();

  const submit = ({ birthdate, ...payload }: ClientUpdatePayload) => {
    postCreateClient({
      ...payload,
      id: client.id,
      birthdate: birthdate
        ? dayjs(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD")
        : undefined,
    }).then(() => router.reload());
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    categories,
  };
}
