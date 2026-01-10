import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { ModalChargesOperationType } from "./type";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { Shared } from "@components/shared/others/Shared";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalChargesOperationType,
    id?: string | number
  ) => void;
  id: number;
  reference: string;
};

export function ChargesActions({ handleToggleModal, id, reference }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { finance } = privateRoutes;
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <Shared entity="CHARGES" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Words.edit"),
            handle: () => router.push(`${finance}/${id}`),
          },
          {
            text: t("Words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
          {
            text: t("Texts.link_copy"),
            handle: () => handleCopy(`${baseUrl + publicRoutes.checkout}?charge=${reference}`),
          }
        ]}
      />
    </div>
  );
}
