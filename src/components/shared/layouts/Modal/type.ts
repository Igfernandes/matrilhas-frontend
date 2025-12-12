export type ModalProps = {
  children: React.ReactNode;
  title?: string;
  handleModal: (isShow: boolean) => void;
  isShowModal: boolean;
  styled?: ModalStyled;
};

type ModalStyled = {
  titleColor?: string;
  background?: string;
  close?: string
};

export type ModalState = {
  isShow: boolean;
  key: unknown;
};
