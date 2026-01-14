import { CSRFShape } from "@services/Authentications/CSRF/types";

export type PostAuthPayload = {
  login: string;
  password: string;
  recaptcha: string;
  csrf: CSRFShape;
};
