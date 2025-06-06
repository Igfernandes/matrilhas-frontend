import { ClientShape } from "@type/Clients";

export type ModalFormProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  client: ClientShape;
};
