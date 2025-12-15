import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { ClientCategoriesShape } from "../../../../../../types/Clients/ClientCategories";

export type ModalFormProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  categories?: ClientCategoriesShape[] | undefined;
  selectors?: SelectorShape[];
};
