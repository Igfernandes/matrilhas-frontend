import { DashboardContainer } from "@components/Private/Container";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { getAgencies } from "@services/Agencies/Get/SSR";
import { AgencyPageProps } from "@components/Private/Agencies/type";
import { AgencyProfile } from "@components/Private/Agencies/Profile";

export default function AgencyUpdate({ targetAgency }: AgencyPageProps) {
  return (
    <DashboardContainer>
      <AgencyProfile agency={targetAgency} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<AgencyPageProps> = async ({
  req,
  params,
}) => {
  try {
    const tokenNavigation = req.cookies["token_navigation"] ?? "";
    const { id } = params as { id: string }; // Tipando o params
    const { rows } = await getAgencies(tokenNavigation, { id: +id });

    if (!Array.isArray(rows) || rows.length == 0) {
      return {
        redirect: {
          destination: `${privateRoutes.agencies}?alert=${i18n(
            "errors.system.not_found_user"
          )}`, // Redireciona para a página principal
          permanent: true, // Define como redirecionamento temporário (status 307)
        },
      };
    }

    return {
      props: {
        targetAgency: rows[0], // Passa o ID para o componente
      },
    };
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: `${privateRoutes.agencies}?alert=${i18n("errors.system.not_found_user")}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }
}
