import useGetClientsFields from "@services/Clients/Fields/Get/useGetClients";
import useGetFieldsGroups from "@services/Fields/Groups/Get/useGetFieldsGroups";
import usePostClientsFields from "@services/Clients/Fields/Post/usePostClientsFields";
import { ClientShape } from "@type/Clients/client";
import { PayloadFieldValues } from "@components/shared/layouts/FormHub/context/Fields/types";
import { useCallback, useState } from "react";

type Props = {
  client: ClientShape;
};

export function useClientsUpdate({ client }: Props) {
  const { data: clientsFields = [] } = useGetClientsFields({ id: client.id });
  const { data: fieldsGroupsData = [] } = useGetFieldsGroups({
    scope: "CLIENT",
  });
  const { mutateAsync: postClientsFields } = usePostClientsFields();
  const [isShowModalUpdateUser, setIsShowModalUpdateUser] = useState<boolean>(false);

  const handleSubmitFields = useCallback(
    (clientId: number, payload: PayloadFieldValues) => {
      return postClientsFields({
        client: clientId,
        ...payload,
      });
    },
    [postClientsFields]
  );

  const handleToggleModal = (isShow: boolean) => {
    setIsShowModalUpdateUser(isShow ? isShow : !isShowModalUpdateUser);
  };

  return {
    fields: clientsFields,
    fieldsGroups: fieldsGroupsData,
    handleSubmitFields,
    handleToggleModal,
    isShowModalUpdateUser,
  };
}
