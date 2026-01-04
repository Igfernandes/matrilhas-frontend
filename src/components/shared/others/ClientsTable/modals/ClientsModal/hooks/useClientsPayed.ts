import { ClientShape } from "@type/Clients";
import { ClientsPayedPayload } from "../type";
import { useModalContext } from "@contexts/Modal";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { z } from "zod";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import { useCallback, useMemo } from "react";

type Props = {
  clients: ClientShape[];
  handleAddClients: (clients: Array<ClientShape>) => void;
};

export function useClientsPayed({ handleAddClients, clients }: Props) {
  const { formMethods, handleSubmit, register } =
    useFormRules<ClientsPayedPayload>({
      schema: z.object({
        clients: z.array(z.string().or(z.boolean())).optional(),
      }),
    });
  const { setValue, getValues, watch, reset } = formMethods;
  const { handleSearch } = useSearch();
  const { handleToggleModal } = useModalContext();
  const { data: categoriesData } = useGetCategories();
  const categories = useMemo(() => categoriesData ?? [], [categoriesData]);
  const targetCategory = watch("category");
  const filteredClients = useMemo(() => {
    const clientsFiltered = clients.filter((client) => {
      if (!targetCategory) return true;

      return client?.categories?.find(
        (clientCategory) => clientCategory.id === +targetCategory
      );
    });

    setValue("clients", []);
    return clientsFiltered.map((client) => ({
      label: client.name,
      value: client.id,
    }));
  }, [clients, setValue, targetCategory]);

  const submit = useCallback(
    async (payload: ClientsPayedPayload) => {
      const clientsId = payload.clients;

      reset();
      await handleAddClients(
        clients.filter((client) => clientsId.includes(String(client.id)))
      );
      handleToggleModal(getValues());
    },
    [clients, handleAddClients, handleToggleModal, reset, getValues]
  );

  return {
    formMethods,
    submit,
    handleSubmit,
    register,
    handleSearch,
    filteredClients,
    categories,
  };
}
