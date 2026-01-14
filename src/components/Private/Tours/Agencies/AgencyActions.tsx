import { DotsOptions } from "@components/shared/others/DotsOptions";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import { useModalContext } from "@contexts/Modal";
import { useI18n } from "@contexts/I18n";

type Props = {
  id: number;
};

export function AgencyActions({ id }: Props) {
  const { t } = useI18n()
  const { handleToggleModal } = useModalContext()
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {

            text: t("Words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.agencies.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
