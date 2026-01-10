import { DotsOptions } from "@components/shared/others/DotsOptions";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useI18n } from "@contexts/I18n";
import { ModalSubscriberOperationType } from "../type";

type Props = {
  handleToggleModal: (
    type: ModalSubscriberOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function SubscribersActions({ handleToggleModal, id }: Props) {
  const { t } = useI18n()
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <Shared entity="SUBSCRIBERS" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.subscribers.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
