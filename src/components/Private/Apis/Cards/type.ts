import { Status } from "@type/status";

export type CardsProps = {
  items: Array<CardShape>;
};

export type CardShape = {
  id: number;
  img: string;
  text: string;
  status: Status;
  handleModal: (isShow: boolean, id: number) => void;
};
