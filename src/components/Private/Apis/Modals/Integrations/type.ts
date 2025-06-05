import { IntegrationShape } from "@type/Integrations";

export type ModalFormProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  integrations: Array<IntegrationShape>;
};
