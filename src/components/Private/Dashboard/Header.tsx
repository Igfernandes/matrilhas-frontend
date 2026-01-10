import { Form } from "@assets/Icons/black/Form";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Wallet } from "@assets/Icons/black/Wallet";
import { CardAmountBoard } from "@components/shared/layouts/CardAmountBoard";
import { ManagerProps } from "./type";
import { useI18n } from "@contexts/I18n";

export function DashboardHeader({
  clients,
  users,
  forms,
  charges,
  isLoading
}: ManagerProps) {
  const { t } = useI18n()
  return (
    <CardAmountBoard
      viewLimit={4}
      isLoading={isLoading}
      items={[
        {
          icon: <UserGroup fill="white" />,
          title: t("Words.clients"),
          value: String(clients).padStart(6, "0"),
        },
        {
          icon: <UsersManager fill="white" />,
          background: "bg-red",
          title: t("Words.users"),
          value: String(users).padStart(6, "0"),
        },
        {
          icon: <Form fill="white" />,
          background: "bg-purple",
          title: t("Words.forms"),
          value: String(forms).padStart(6, "0"),
        },
        {
          icon: <Wallet fill="white" />,
          background: "bg-orange",
          title: t("Words.charges"),
          value: String(charges).padStart(6, "0"),
        },
      ]}
    />
  );
}
