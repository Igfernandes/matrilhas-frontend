export type ModalContextData = {
  isShowModal: boolean;
  handleToggleModal: (isShowModal: boolean) => void;
};

export type ModalProviderProps = {
  children: React.ReactNode;
};
