import ModalProvider from "@contexts/Modal";
import UserNavigationProvider from "@contexts/UserNavigation";
import { DashboardContent } from "./Content";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export function DashboardContainer<ModalOptions>({ children, title }: Props) {
  return (
    <UserNavigationProvider>
      <ModalProvider<ModalOptions>>
        <DashboardContent title={title}>{children}</DashboardContent>
      </ModalProvider>
    </UserNavigationProvider>
  );
}
