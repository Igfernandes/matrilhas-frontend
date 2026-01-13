import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { ChargeShape } from "@type/Charges";
import moment from "moment";
import Link from "next/link";

type Props = {
  charges?: Array<ChargeShape>;
  date: string;
};

export function ChargeFeedback({ charges, date }: Props) {
  const { panel } = privateRoutes;
  const { t } = useI18n()
  console.log(charges)
  return (
    <>
      {charges?.filter((charge) => moment(charge.started_at)
        .add(charge.expired_days, "days")
        .format("YYYY-MM-DD HH:mm") === date).map((charge) => (
      <li key={charge.id} className="bg-secondary px-2 py-2 rounded-md mb-2 shadow-md">
        <Link href={`${panel.charges}/${charge.id}`} className=" flex items-center justify-between">
          <div>
            <span className="inline-block font-semibold text-primary">{`${t("Texts.expired_charge")}: ${charge.title}`}</span>
            <span className="block leading-3 text-zinc-500"><small>{moment(charge.started_at).add(charge.expired_days, "days").format("LL")}</small></span>
          </div>
          <span className="text-xs inline-block bg-primary  text-white py-1 px-3 rounded-md
              ">{t("Texts.see_more")}</span>
        </Link>
      </li>
      ))}
    </>
  );
}
