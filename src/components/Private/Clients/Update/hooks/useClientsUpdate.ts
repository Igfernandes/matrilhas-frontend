import useGetClientsFields from "@services/Clients/Fields/Get/useGet";
import useGetFieldsGroups from "@services/Fields/Groups/Get/useGet";
import usePostClientsFields from "@services/Clients/Fields/Post/usePost";
import { ClientShape } from "@type/Clients";
import { PayloadFieldValues } from "@components/shared/layouts/FormHub/context/Fields/types";
import { useCallback, useMemo, useState } from "react";

type Props = {
  client: ClientShape;
};

export function useClientsUpdate({ client }: Props) {
  const { rows: clientsFields = [] } = useGetClientsFields({ id: client.id });
  const { data: fieldsGroupsData = [], refetch } = useGetFieldsGroups({
    scope: "CLIENT",
  });
  const { mutateAsync: postClientsFields, isPending: isLoading } =
    usePostClientsFields();
  const fields = useMemo(() => clientsFields, [clientsFields]);
  const fieldsGroups = useMemo(() => fieldsGroupsData, [fieldsGroupsData]);
  const [isShowModalUpdateUser, setIsShowModalUpdateUser] =
    useState<boolean>(false);

  const handleSubmitFields = useCallback(
    (clientId: number, payload: PayloadFieldValues) => {
      return postClientsFields({
        client: clientId,
        ...payload,
      }).then(() => refetch());
    },
    [postClientsFields, refetch]
  );

  const handleToggleModal = (isShow: boolean) => {
    setIsShowModalUpdateUser(isShow ? isShow : !isShowModalUpdateUser);
  };

  return {
    fields,
    fieldsGroups,
    handleSubmitFields,
    handleToggleModal,
    isShowModalUpdateUser,
    isLoading,
  };
}
