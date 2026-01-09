import { Checks } from "@assets/Icons/colorful/Checks";
import { FormSuccessfulPageProps } from "@components/Public/Forms/types";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { useI18n } from "@contexts/I18n";
import { getFormPreview } from "@services/Forms/GetPreview/SSR";
import { GetServerSideProps } from "next";

export default function Successful({ form }: FormSuccessfulPageProps) {
  const { t } = useI18n()
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column ">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl">
              <strong>{t("Screens.forms.successful.form_received")}</strong>
            </h2>
          </div>
          <div
            className="text-justify text-sm mb-6"
            dangerouslySetInnerHTML={{
              __html:
                form?.thanks_message ??
                t("Screens.forms.successful.form_message"),
            }}
          ></div>
        </div>
      </div>
    </ExternalContainer>
  );
}
// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  FormSuccessfulPageProps
> = async (request) => {
  const { form } = (request?.query as { form: string }) ?? {}; // Tipando o params
  const foundForm = await getFormPreview({ slug: form });

  return {
    props: {
      form: foundForm, // Passa o ID para o componente
    },
  };
};
