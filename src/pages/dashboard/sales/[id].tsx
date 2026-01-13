import { DashboardContainer } from "@components/Private/Container";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { SalePreview } from "@components/Private/Sales/Preview";
import { SalesPageProps } from "@components/Private/Sales/type";
import { getSales } from "@services/Sales/Get/SSR";

export default function SaleUpdate({ targetSale }: SalesPageProps) {
  return (
    <DashboardContainer>
      <SalePreview sale={targetSale} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<SalesPageProps> = async ({
  req,
  params,
}) => {
  try {
    const tokenNavigation = req.cookies["token_navigation"] ?? "";
    const { id } = params as { id: string }; // Tipando o params
    const { rows } = await getSales(tokenNavigation, { id: +id });

    if (!Array.isArray(rows) || rows.length == 0) {
      return {
        redirect: {
          destination: `${privateRoutes.sales}?alert=${i18n(
            "errors.system.not_found_user"
          )}`, // Redireciona para a página principal
          permanent: true, // Define como redirecionamento temporário (status 307)
        },
      };
    }

    return {
      props: {
        targetSale: rows[0], // Passa o ID para o componente
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
