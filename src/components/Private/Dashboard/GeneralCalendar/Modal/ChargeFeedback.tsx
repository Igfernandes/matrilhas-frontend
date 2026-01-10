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
  const { finance } = privateRoutes;
  const { t } = useI18n()
  return (
    <>
      {charges
        ?.filter(
          (charge) =>
            moment()
              .add(charge.expired_days, "days")
              .from("YYYY-mm-dd HH:mm:ss") === date
        )
        .map((charge) => (
          <li key={charge.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${finance}/${charge.id}`}>
              <span>{`${t("Texts.expired_charge")}: ${charge.title}`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
