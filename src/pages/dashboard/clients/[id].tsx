import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { ClientPageProps } from "@components/Private/Clients/type";
import { FormHub } from "@components/shared/layouts/FormHub";
import { useClientsUpdate } from "@components/Private/Clients/Update/hooks/useClientsUpdate";
import { getClients } from "../../../services/Clients/Get/SSR";
import { ClientUpdateModal } from "@components/Private/Clients/Update/Modals/Clients";
import { ClientShape } from "@type/Clients";
import { useRef } from "react";

export default function ClientProfile({ targetClient }: ClientPageProps) {
  const {
    fields,
    fieldsGroups,
    handleSubmitFields,
    handleToggleModal,
    isShowModalUpdateUser,
  } = useClientsUpdate({
    client: targetClient,
  });
  const clientRef = useRef<ClientShape>(targetClient);

  return (
    <DashboardContainer>
      <FormHub
        handleSubmitFields={handleSubmitFields}
        entityType="CLIENT"
        entity={targetClient}
        groups={fieldsGroups}
        fields={fields ?? []}
        handleUpdateClient={handleToggleModal}
      />
      <ClientUpdateModal
        client={clientRef}
        isShowModal={isShowModalUpdateUser}
        onModal={handleToggleModal}
      />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ClientPageProps> = async ({
  req,
  params,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string }; // Tipando o params
  const { rows } = await getClients(tokenNavigation, { id: +id });

  if (!Array.isArray(rows) || rows.length == 0) {
    return {
      redirect: {
        destination: `${privateRoutes.clients}?alert=${i18n(
          "errors.system.not_found_user"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetClient: rows[0], // Passa o ID para o componente
    },
  };
};
