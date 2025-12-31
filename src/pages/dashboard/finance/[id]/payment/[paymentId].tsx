import { PaymentPreview } from "@components/Private/Finance/Payment";
import { PaymentPageProps } from "@components/Private/Finance/Payment/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { getExtract } from "@services/Extract/MercadoPago/Get/SSR";
import { GetServerSideProps } from "next";

export default function Charge({ targetPayment }: PaymentPageProps) {
  return (
    <DashboardContainer>
      <PaymentPreview payment={targetPayment} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<PaymentPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id, paymentId } = params as { id: string; paymentId: string };
  const extract = await getExtract(tokenNavigation, {
    id: parseInt(id),
    payment_id: paymentId,
  });
  
  if (!extract || Object.hasOwn(extract, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetPayment: extract, // Passa o ID para o componente
    },
  };
};
