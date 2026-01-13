import { AgencyShape } from "@type/Agencies";

export type PanelContainerProps = {
  auth?: AgencyShape;
  title?: string;
  children: React.ReactNode;
};
