import { useTranslation } from "next-i18next";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { LockCog } from "@assets/Icons/colorful/LockCog";
import { AlterPasswordForm } from "@components/AlterPassword/Form";

export default function ForgotPassword() {
  const { t } = useTranslation("recover-password");

  return (
    <ExternalContainer className={"my-2 sm:my-0"}>
      <div className="row">
        <div className="column text-center">
          <div className="mb-4">
            <LockCog className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{t("alter_password.title")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{t("alter_password.text")}</p>
          </div>
          <AlterPasswordForm />
        </div>
      </div>
    </ExternalContainer>
  );
}
