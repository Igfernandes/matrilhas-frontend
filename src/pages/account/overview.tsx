import { AccountContainer } from "@components/Account/Container";
import { ClientCalendar } from "@components/Account/Overview/GeneralCalendar";
import { AccountOverviewPageProps } from "@components/Account/Overview/type";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { getClient } from "@services/Clients/GetAuth/SSR";
import { ClientShape } from "@type/Clients";
import { GetServerSideProps } from "next";

export default function Dashboard({ client }: AccountOverviewPageProps) {

    return (
        <AccountContainer client={client} title="Dashboard">
            <ClientCalendar />
        </AccountContainer>
    );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
    AccountOverviewPageProps
> = async ({ req }) => {
    const tokenNavigation = req.cookies["token_access"] ?? "";
    const { data: auth } = await getClient(tokenNavigation);

    if (!auth) {
        return {
            redirect: {
                destination: `${publicRoutes.access}`, // Redireciona para a página principal
                permanent: true, // Define como redirecionamento temporário (status 307)
            },
        };
    }

    return {
        props: {
            client: auth as ClientShape, // Passa o ID para o componente
        },
    };
};
