import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalTourOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";

type Props = {
  handleToggleModal: (
    type: ModalTourOperationType,
    id?: string | number
  ) => void;
  id: number;
  slug: string;
};

export function TourActions({ handleToggleModal, id, slug }: Props) {
  const router = useRouter();
  const { tours } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <Shared entity="TOURS" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit") as string,
            handle: () => {
              router.push(`${tours}/${id}`);
            },
            permissions: [PERMISSIONS.tours.update],
          },
          {
            text: i18n("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.tours.delete],
          },
          {
            text: i18n("Texts.link_copy") as string,
            handle: () => handleCopy(`${baseUrl + publicRoutes.tours}/${slug}`),
          }
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
