import { DotsOptions } from "@components/shared/others/DotsOptions";
import { ModalAgencyOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalAgencyOperationType,
    id?: string | number
  ) => void;
  id: number;
  cnpj: string;
};

export function AgencyActions({ handleToggleModal, id, cnpj }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { agencies } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <Shared entity="AGENCIES" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Words.edit") as string,
            handle: () => {
              router.push(`${agencies}/${id}`);
            },
            permissions: [PERMISSIONS.agencies.update],
          },
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.agencies.delete],
          },
          {
            text: t("Texts.link_copy"),
            handle: () => handleCopy(`${baseUrl + publicRoutes.agencies}/${cnpj}`),
          }
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
