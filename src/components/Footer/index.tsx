import { When } from "@components/utilities/when";
import { FooterSimple } from "./Simple";

export type FooterProps = {
  type?: "SIMPLE";
};

export function Footer({ type = "SIMPLE" }: FooterProps) {
  return (
    <footer>
      <When value={type === "SIMPLE"}>
        <FooterSimple />
      </When>
    </footer>
  );
}
