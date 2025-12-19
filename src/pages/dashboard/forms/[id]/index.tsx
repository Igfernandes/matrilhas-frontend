import { FormsPageProps } from "@components/Private/Forms/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { getForm } from "@services/Forms/Get/SSR";
import { StepBar } from "@components/shared/layouts/StepBar";
import { FormsProfile } from "@components/Private/Forms/Profile";
import { useState } from "react";

export default function Update({ targetForm }: FormsPageProps) {
  const [stepActive, setStepActive] = useState<number>(1);

  return (
    <DashboardContainer>
      <StepBar
        setStepActive={setStepActive}
        steps={[
          {
            title: i18n(`Words.definitions`),
            active: stepActive == 1,
          },
          {
            title: i18n(`Words.customization`),
            active: stepActive == 2,
          },
          {
            title: i18n(`Words.preview`),
            active: stepActive == 3,
          },
          {
            title: i18n(`Words.inscribes`),
            active: stepActive == 4,
          },
        ]}
      />
      <FormsProfile form={targetForm} step={stepActive} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FormsPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = (params as { id: string }) ?? {}; // Tipando o params
  const { rows } = await getForm(tokenNavigation, { id: parseInt(id) });
  const currentForm = rows?.[0] ?? null;

  if (!rows || !Array.isArray(rows) || rows.length === 0) {
    return {
      redirect: {
        destination: `${privateRoutes.forms}?alert=${i18n(
          "errors.system.not_found_form"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetForm: currentForm, // Passa o ID para o componente
    },
  };
};
