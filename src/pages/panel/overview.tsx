import { PanelContainer } from "@components/Panel/Container";
import { AgencyCalendar } from "@components/Panel/Overview/GeneralCalendar";
import { PanelOverviewPageProps } from "@components/Panel/Overview/type";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { getAgency } from "@services/Agencies/GetAuth/SSR";
import { AgencyShape } from "@type/Agencies";
import { GetServerSideProps } from "next";

export default function Dashboard({ agency }: PanelOverviewPageProps) {

    return (
        <PanelContainer agency={agency}>
            <AgencyCalendar />
        </PanelContainer>
    );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
    PanelOverviewPageProps
> = async ({ req }) => {
    const tokenNavigation = req.cookies["token_access"] ?? "";
    const { data: auth } = await getAgency(tokenNavigation);

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
            agency: auth as AgencyShape, // Passa o ID para o componente
        },
    };
};
