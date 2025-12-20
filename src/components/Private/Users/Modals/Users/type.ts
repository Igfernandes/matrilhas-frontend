import { UserShape } from "@type/Users";
import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";

export type ModalFormProps = {
  users?: UserShape[];
  title: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: Array<UsersGroupShape>;
};
