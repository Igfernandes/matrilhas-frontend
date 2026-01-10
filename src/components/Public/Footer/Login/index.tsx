import { useI18n } from "@contexts/I18n";
import Link from "next/link";

export function FooterLogin() {
  const { t } = useI18n()
  return (
    <div>
      <div className="text-center">
        <span className="text-xs font-normal">
          {t("Screens.footer.developed_by")} <a href="https://companymarket.com.br"><strong>Company Market</strong></a>
        </span>
        <br />
        <Link href="/politics-privacy">
          <span className="text-xs">{t("Screens.footer.privacy_policy")}</span>
        </Link>
      </div>
    </div>
  );
}
