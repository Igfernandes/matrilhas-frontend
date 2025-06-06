import { UsersShape } from "@type/Users";
import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";

export type ModalFormProps = {
  users?: UsersShape[];
  title: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: Array<UsersGroupShape>;
};
