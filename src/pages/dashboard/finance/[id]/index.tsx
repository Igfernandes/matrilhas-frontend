import { ChargePreview } from "@components/Private/Finance/Charge";
import { ChargePageProps } from "@components/Private/Finance/Charge/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { getCharges } from "@services/Charges/Get/SSR";
import { GetServerSideProps } from "next";

export default function Charge({ targetCharge }: ChargePageProps) {
  return (
    <DashboardContainer>
      <ChargePreview charge={targetCharge} />
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
  const charges = await getCharges(tokenNavigation, { id: parseInt(id) });

  if (!charges || Object.hasOwn(charges, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetCharge: Array.isArray(charges) ? charges[0] : charges, // Passa o ID para o componente
    },
  };
};
