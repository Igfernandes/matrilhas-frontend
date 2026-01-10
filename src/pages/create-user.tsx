import { CreateUserForm } from "@components/Public/CreateUser/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { useI18n } from "@contexts/I18n";

export default function CreateUser() {
  const { t } = useI18n()
  return (
    <ExternalContainer className={"my-2 sm:my-0"}>
      <div className="row">
        <div className="column text-center">
          <div className="mb-1">
            <h2 className="text-xl">
              <strong>{t("Screens.create_user.title")}</strong>
            </h2>
          </div>
          <div className="mb-4">
            <p className="text-xs">{t("Screens.create_user.text")}</p>
          </div>
          <CreateUserForm />
        </div>
      </div>
    </ExternalContainer>
  );
}
