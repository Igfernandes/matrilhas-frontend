import { DotsOptions } from "@components/shared/others/DotsOptions";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { useI18n } from "@contexts/I18n";

type Props = {
  slug: string;
};

export function TourActions({ slug }: Props) {
  const { t } = useI18n()
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: t("Texts.link_copy") as string,
            handle: () => handleCopy(`${baseUrl + publicRoutes.tours}/${slug}`),
          }
        ]}
      />
    </div>
  );
}
