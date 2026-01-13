import { ChargeProfile } from "@components/Private/Charges/Profile";
import { ChargePageProps } from "@components/Private/Charges/Profile/type";
import { DashboardContainer } from "@components/Private/Container";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { getCharges } from "@services/Charges/Get/SSR";
import { GetServerSideProps } from "next";

export default function Charge({ targetCharge }: ChargePageProps) {
  return (
    <DashboardContainer>
      <ChargeProfile charge={targetCharge} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ChargePageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string };
  const { rows: charges } = await getCharges(tokenNavigation, { id: parseInt(id) });

  if (!Array.isArray(charges) || charges.length === 0) {
    return {
      redirect: {
        destination: `${privateRoutes.charges}?alert=${i18n(
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
