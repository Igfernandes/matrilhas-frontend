import { Form } from "@assets/Icons/black/Form";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Wallet } from "@assets/Icons/black/Wallet";
import { CardAmountBoard } from "@components/shared/layouts/CardAmountBoard";
import i18n from "@configs/i18n";
import { ManagerProps } from "./type";

export function DashboardHeader({
  clients,
  users,
  forms,
  charges,
  isLoading
}: ManagerProps) {
  return (
    <CardAmountBoard
      viewLimit={4}
      isLoading={isLoading}
      items={[
        {
          icon: <UserGroup fill="white" />,
          title: i18n("Words.clients"),
          value: String(clients).padStart(6, "0"),
        },
        {
          icon: <UsersManager fill="white" />,
          background: "bg-red",
          title: i18n("Words.users"),
          value: String(users).padStart(6, "0"),
        },
        {
          icon: <Form fill="white" />,
          background: "bg-purple",
          title: i18n("Words.forms"),
          value: String(forms).padStart(6, "0"),
        },
        {
          icon: <Wallet fill="white" />,
          background: "bg-orange",
          title: i18n("Words.charges"),
          value: String(charges).padStart(6, "0"),
        },
      ]}
    />
  );
}
