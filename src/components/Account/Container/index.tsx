import ModalProvider from "@contexts/Modal";
import { Content } from "./Content";
import { ClientShape } from "@type/Clients";
import ClientNavigationProvider from "@contexts/Navigation/Client";

type Props = {
  client?: ClientShape;
  title?: string;
  children: React.ReactNode;
};

export function AccountContainer<ModalOptions>({
  children,
  title,
  client,
}: Props) {
  return (
    <ClientNavigationProvider client={client ?? {} as ClientShape}>
      <ModalProvider<ModalOptions>>
        <Content title={title}>{children}</Content>
      </ModalProvider>
    </ClientNavigationProvider>
  );
}
