import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { ModalChargesOperationType } from "./type";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { Shared } from "@components/shared/others/Shared";

type Props = {
  handleToggleModal: (
    type: ModalChargesOperationType,
    id?: string | number
  ) => void;
  id: number;
  reference: string;
};

export function ChargesActions({ handleToggleModal, id, reference }: Props) {
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
            text: i18n("Words.edit"),
            handle: () => router.push(`${finance}/${id}`),
          },
          {
            text: i18n("Words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
          {
            text: i18n("Texts.link_copy"),
            handle: () => handleCopy(`${baseUrl + publicRoutes.checkout}?charge=${reference}`),
          }
        ]}
      />
    </div>
  );
}
