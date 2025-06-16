import { CSRFShape } from "@services/Authentications/CSRF/types";

export type LoginPageProps = {
  csrf: CSRFShape;
};