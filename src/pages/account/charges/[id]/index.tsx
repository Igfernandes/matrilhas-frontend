import { ChargeProfile } from "@components/Panel/Charges/Profile";
import { ChargePageProps } from "@components/Panel/Charges/Profile/type";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { GetServerSideProps } from "next";
import { AccountContainer } from "@components/Account/Container";
import { getClientsCharges } from "@services/Clients/Charges/Get/SSR";

export default function Charge({ targetCharge }: ChargePageProps) {
  return (
    <AccountContainer title="Charge Details">
      <ChargeProfile charge={targetCharge} />
    </AccountContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ChargePageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_access"] ?? "";
  const { id } = params as { id: string };
  const { rows: charges } = await getClientsCharges(tokenNavigation, { id: parseInt(id) });

  if (!Array.isArray(charges) || charges.length === 0) {
    return {
      redirect: {
        destination: `${privateRoutes.account.charges}?alert=${i18n(
          "errors.system.not_found_charge"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetCharge: charges[0], // Passa o ID para o componente
    },
  };
};
