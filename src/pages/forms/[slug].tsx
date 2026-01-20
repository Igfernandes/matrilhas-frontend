import { GetServerSideProps } from "next";
import { FormPageProps } from "@components/Public/Forms/types";
import { isErrorRequest } from "@helpers/routes";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { useForm } from "@components/Public/Forms/hooks/useForm";

import { getCSRF } from "@services/Authentications/CSRF/SSR";
import { getFormPreview } from "@services/Forms/GetPreview/SSR";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";

export default function Form({ form, csrf }: FormPageProps) {
  const { handleSubmit, isLoading, components } = useForm({
    form,
    csrf,
  });

  return (
    <>
      <ExternalContainer >
        <div className="flex flex-col justify-between min-h-[85vh] mx-w-[1440px]">
          <main>
            <div className="bg-tertiary max-w-[800px] p-4 mx-auto mt-4">
              <div className="text-center">
                <h1 className="text-2xl font-semibold">{form.name}</h1>
              </div>
              <div className="text-justify mt-4">
                <p>{form.description}</p>
              </div>
            </div>
            <div className="w-full lg:w-[60%] px-4 lg:px-0 mx-auto">
              <div
                className="flex flex-col min-h-[60vh] justify-between"
              >
                <FormBuilderPreview
                  isLoading={isLoading}
                  onSubmit={handleSubmit}
                  fields={components ?? "{}"}
                />
                <div className="flex justify-end items-center">

                </div>
              </div>
            </div>
          </main>
        </div>
      </ExternalContainer>
    </>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FormPageProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string }; // Tipando o params
  const form = await getFormPreview({ slug });
  const csrf = await getCSRF();

  if (!form || isErrorRequest(form)) {
    return {
      redirect: {
        destination: `/forms/404?form=${slug}`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      form, // Passa o ID para o componente
      csrf,
    },
  };
};
