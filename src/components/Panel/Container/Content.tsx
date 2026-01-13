
import { Header } from "@components/Panel/Header";
import { Sidebar } from "../Sidebar";
import { useSidebar } from "../Sidebar/hooks/useSidebar";

type Props = {
  title?: string;
  children: React.ReactNode;
};
export function Content({ children, title }: Props) {
  const { handleToggleSidebar, showSidebar } = useSidebar();

  return (
    <>
      <div className="bg-secondary h-[100vh] overflow-hidden flex">
        <Sidebar
          handleToggleSidebar={handleToggleSidebar}
          showSidebar={showSidebar}
        />
        <div className="h-[100vh] w-full">
          <Header
            title={title}
            handleSidebar={handleToggleSidebar}
          />
          <div className="relative h-full pb-[12vh] overflow-y-scroll">
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
