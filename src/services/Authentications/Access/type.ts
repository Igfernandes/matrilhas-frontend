import { CSRFShape } from "../CSRF/types";

export type PostAuthPayload = {
  login: string;
  password: string;
  recaptcha: string;
  csrf: CSRFShape;
};
