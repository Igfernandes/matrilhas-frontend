import { useI18n } from "@contexts/I18n";
import Link from "next/link";

export function FooterDefault() {
  const { t } = useI18n()
  return (
    <div>
      <div className="text-center pb-4">
        <p className="leading-5 text-sm">
          {t("Screens.footer.developed_by")} &nbsp;
          <Link
            href="https://companymarket.com.br"
            target="_blank"
            rel="noopener"
            className="text-red"
          >
            Company Market
          </Link>
          &nbsp; © <strong>Matrilhas.</strong> <br />
          {t("Screens.footer.all_rights_reserved")}. &nbsp; · &nbsp;
          <Link href="/politics-privacy" className="underline">{t("Screens.footer.privacy_policy")}</Link>
        </p>
      </div>
    </div>
  );
}
