import { GeneralCalendar } from "@components/Private/Dashboard/GeneralCalendar";
import { Graphics } from "@components/Private/Dashboard/Graphics";
import { DashboardHeader } from "@components/Private/Dashboard/Header";
import { useOverviewData } from "@components/Private/Dashboard/hooks/useData";
import { DashboardPageProps } from "@components/Private/Dashboard/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { getUserAuth } from "@services/Users/GetAuth/SSR";
import { GetServerSideProps } from "next";

export default function Dashboard({ user }: DashboardPageProps) {
  const { chargesCount, clientsCount, formsCount, usersCount, isLoading } = useOverviewData()

  return (
    <DashboardContainer user={user}>
      <DashboardHeader
        clients={clientsCount}
        forms={formsCount}
        users={usersCount}
        charges={chargesCount}
        isLoading={isLoading}
      />
      <GeneralCalendar />
      <Graphics />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
> = async ({ req }) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { data: user } = await getUserAuth(tokenNavigation);

  if (!user) {
    return {
      redirect: {
        destination: `${publicRoutes.login}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      user, // Passa o ID para o componente
    },
  };
};
