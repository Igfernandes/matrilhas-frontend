import { AccountContainer } from "@components/Account/Container";
import { AccountSettingsForms } from "@components/Account/Settings/Forms";

export default function Settings() {
  return (
    <AccountContainer>
      <div className="bg-white p-6 rounded-xl">
        <AccountSettingsForms />
      </div>
    </AccountContainer>
  );
}
