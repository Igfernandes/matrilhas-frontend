import ModalProvider from "@contexts/Modal";
import { Content } from "./Content";
import { AgencyShape } from "@type/Agencies";
import AgencyNavigationProvider from "@contexts/Navigation/Agency";

type Props = {
  agency?: AgencyShape;
  title?: string;
  children: React.ReactNode;
};

export function PanelContainer<ModalOptions>({
  children,
  title,
  agency,
}: Props) {
  return (
    <AgencyNavigationProvider agency={agency ?? {} as AgencyShape}>
      <ModalProvider<ModalOptions>>
        <Content title={title}>{children}</Content>
      </ModalProvider>
    </AgencyNavigationProvider>
  );
}
