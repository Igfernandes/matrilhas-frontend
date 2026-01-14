import { ForgotPasswordContent } from "@components/Public/Access/ForgotPassword";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";

export default function ForgotPassword() {
  return (
    <ExternalContainer  title={i18n("Screens.forgot_password.meta.title")}>
      <div className="row">
        <div className="column text-center">
          <ForgotPasswordContent />
        </div>
      </div>
    </ExternalContainer>
  );
}
