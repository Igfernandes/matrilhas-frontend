import { CSRFShape } from "@services/Authentications/CSRF/types";

export type PostCreateFormPayload = {
  payload: FormData;
  csrf: CSRFShape;
};
