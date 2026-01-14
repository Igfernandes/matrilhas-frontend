
import { ChargeShape } from "@type/Charges";
import { Link } from "@assets/Icons/black/Link";
import { useNavigator } from "@hooks/useNavigator";
import { publicRoutes } from "@configs/routes/Web/navigation";
import useWindow from "@hooks/useWindow";
import { useI18n } from "@contexts/I18n";

type Props = {
  charge: ChargeShape;
};

export function FormBoardHeader({ charge }: Props) {
  const { t } = useI18n()
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="header mb-4">
      <div className="content flex justify-between">
        <div className="title mb-4">
          <h1 className="font-bold text-xl">{t(`Words.definitions`)}</h1>
        </div>
        <div className="dates flex">
          <div className="created_at text-center text-xs mr-2">
            <div className="bg-secondary mb-1 shadow-sm py-1">
              <span className="font-semibold">{t("Words.type")}</span>
            </div>
            <div className="border-secondary border-2 p-1">
              <span>{t(`Words.${charge.type.toLowerCase()}`)}</span>
            </div>
          </div>
          <div className="updated_at text-center text-xs ml-5">
            <div
              className="px-3 py-2 shadow-md hover:bg-primary rounded-md cursor-pointer ml-2"
              onClick={() => handleCopy(`${baseUrl + publicRoutes.checkout}?charge=${charge.reference}`)}
            >
              <Link />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
