import { DashboardContainer } from "@components/Private/Container";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { getFillFields } from "@services/Forms/Fills/Get/SSR";
import { getForm } from "@services/Forms/Get/SSR";
import { FormFillField } from "@type/Forms/FormsFill";
import { TViewer } from "@components/shared/forms/InfoBoard/fields/Viewer";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { FieldsShape } from "@type/Fields";
import { FieldsPageProps } from "@components/Private/Forms/Profile/Fills/type";
import { useFillsSubmit } from "@components/Private/Forms/Profile/Fills/hooks/useFillsSubmit";
import { useFillFieldsForms } from "@components/Private/Forms/Profile/Fills/hooks/useFillFieldsForms";

export default function FillField({ fields, form }: FieldsPageProps) {
  const { formMethods, fieldsData } = useFillFieldsForms({ fields, form });
  const { handleSubmit, isLoading } = useFillsSubmit({
    ref: fields[0].ref,
    formId: form.id,
  });

  return (
    <DashboardContainer>
      <div className="bg-white">
        <div className="title p-4">
          <h1 className="text-2xl font-semibold">
            {i18n("Words.fill_register")}
          </h1>
        </div>
        <div className="p-4">
          <InfoBoard
            submit={handleSubmit}
            isLoading={isLoading}
            formMethods={formMethods}
          >
            {fieldsData.map((props: FieldsShape, key) => (
              <TViewer
                key={`${props.label.replaceAll(" ", "")}_${key}`}
                {...props}
                name={`input_${props.id}`}
                id={String(props.id)}
              />
            ))}
          </InfoBoard>
        </div>
      </div>
    </DashboardContainer>
  );
}
const settings404 = {
  redirect: {
    destination: `${privateRoutes.forms}?alert=${i18n(
      "errors.system.not_found_register"
    )}`, // Redireciona para a página principal
    permanent: true, // Define como redirecionamento temporário (status 307)
  },
};

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FieldsPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id, ref } = params as { id: string; ref: string }; // Tipando o params
  const { rows: forms } = await getForm(tokenNavigation, { id: parseInt(id) });
  const form = forms[0] ?? null;
  const fields = await getFillFields(tokenNavigation, {
    formId: parseInt(id),
    ref,
  });

  if (!form || !fields) {
    return settings404;
  }
  if (Object.hasOwn(form, "errors") || Object.hasOwn(fields, "errors")) {
    return settings404;
  }

  return {
    props: {
      form,
      fields: fields as Array<FormFillField>, // Passa o ID para o componente
    },
  };
};
