import { ClientShape } from "@type/Clients";

export type AccountContainerProps = {
  client?: ClientShape;
  title?: string;
  children: React.ReactNode;
};
