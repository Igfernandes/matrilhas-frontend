import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useRouter } from "next/navigation";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { useI18n } from "@contexts/I18n";

type Props = {
  id: number;
  reference: string;
};

export function ChargesActions({ id, reference }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { panel } = privateRoutes;
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: t("Texts.see_more"),
            handle: () => router.push(`${panel.charges}/${id}`),
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
