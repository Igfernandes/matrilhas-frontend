import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalSaleOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import usePostExports from "@services/Exports/Post/usePost";

type Props = {
  handleToggleModal: (
    type: ModalSaleOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function AgencyActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { mutateAsync: postExport } = usePostExports()
  const { sales } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <Shared entity="SALES" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit") as string,
            handle: () => {
              router.push(`${sales}/${id}`);
            },
            permissions: [PERMISSIONS.sales.update],
          },
          {
            text: i18n("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.sales.delete],
          },
          {
            text: i18n("Words.voucher") as string,
            handle: () => {
              postExport({
                entity: "VOUCHERS",
                in_ids: [id],
                type: "PDF",
              })
            },
            permissions: [PERMISSIONS.sales.view],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
