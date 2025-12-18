import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useModalContext } from "@contexts/Modal";

type Props = {
  id: number;
};

export function AgencyActions({ id }: Props) {
  const { handleToggleModal } = useModalContext()
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {

            text: i18n("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.agencies.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
