import { CSRFShape } from "@services/Authentications/CSRF/types";
import { FormShape } from "@type/Forms";

export type FormPageProps = {
  form: FormShape;
  csrf: CSRFShape;
};

export type FormSuccessfulPageProps = {
  form: FormShape;
};

export type Form404PageProps = {
  formSlug: string;
};
