import { DotsOptions } from "@components/shared/others/DotsOptions";
import { ModalGalleryOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalGalleryOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function GalleriesActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { galleries } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();
  const { t } = useI18n()

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: t("Words.edit") as string,
            handle: () => {
              router.push(`${galleries}/${id}`);
            },
            permissions: [PERMISSIONS.galleries.update],
          },
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.galleries.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
