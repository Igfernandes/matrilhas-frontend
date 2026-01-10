import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { PaymentForm } from "@components/Public/Payment/Form";
import { PaymentPageProps } from "@components/Public/Payment/types";
import { useI18n } from "@contexts/I18n";
import { getCharge } from "@services/Charges/GetPreview/SSR";
import { GetServerSideProps } from "next";
import Script from "next/script";

export default function Checkout({ charge }: PaymentPageProps) {
  const { t } = useI18n()
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Script
          src="https://sdk.mercadopago.com/js/v2"
          strategy="afterInteractive"
        ></Script>
        <Header />
        <div className="container max-w-[1100px] mx-auto my-12">
          <div className="title mb-6">
            <h1 className="text-2xl font-bold">{t("Words.checkout")}</h1>
          </div>
          <PaymentForm charge={charge} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<PaymentPageProps> = async ({
  query,
}) => {
  const { charge: reference } = query as { charge: string }; // Tipando o params
  const { rows: charge } = await getCharge({ reference: reference });

  if (!Array.isArray(charge) || charge.length === 0) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      charge: charge[0], // Passa o ID para o componente
    },
  };
};
