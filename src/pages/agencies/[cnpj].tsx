import { GetServerSideProps } from "next";
import { getAgenciesPreview } from "@services/Agencies/GetPreview/SSR";
import { AgencyPreviewPageProps } from "@components/Public/Agencies/type";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/External/Footer";
import { AgenciesPreviewPage } from "@components/Public/Agencies";
import { Subscribe } from "@components/Public/Subscribe";

export default function AgencyUpdate({ targetAgency }: AgencyPreviewPageProps) {
    return (
        <>
            <Header />
            <AgenciesPreviewPage targetAgency={targetAgency} />
            <Subscribe />
            <Footer />
        </>
    );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<AgencyPreviewPageProps> = async ({
    params,
}) => {
    try {
        const { cnpj } = params as { cnpj: string }; // Tipando o params
        const { rows } = await getAgenciesPreview({ cnpj: cnpj });

        if (!Array.isArray(rows) || rows.length == 0) {
            return {
                redirect: {
                    destination: `/404`, // Redireciona para a página principal
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
                destination: `/`, // Redireciona para a página principal
                permanent: true, // Define como redirecionamento temporário (status 307)
            },
        };
    }
}
