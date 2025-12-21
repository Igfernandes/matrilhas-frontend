import { GetServerSideProps } from "next";
import { Header } from "@components/Public/External/Header";
import { Footer } from "@components/Public/External/Footer";
import { Subscribe } from "@components/Public/Subscribe";
import { getToursPreview } from "@services/Tours/GetPreview/SSR";
import { TourPreviewPageProps } from "@components/Public/Tours/type";
import { Profile } from "@components/Public/Tours/Profile";

export default function TourPreview({ targetTour }: TourPreviewPageProps) {
    return (
        <>
            <Header />
            <Profile tour={targetTour} />
            <Subscribe />
            <Footer />
        </>
    );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<TourPreviewPageProps> = async ({
    params,
}) => {
    try {
        const { slug } = params as { slug: string }; // Tipando o params
        const { rows } = await getToursPreview({ slug });

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
                targetTour: rows[0], // Passa o ID para o componente
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
