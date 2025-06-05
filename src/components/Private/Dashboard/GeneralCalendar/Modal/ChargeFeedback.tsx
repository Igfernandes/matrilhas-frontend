import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ChargeShape } from "@type/Charges";
import Link from "next/link";

type Props = {
  charges?: Array<ChargeShape>;
  date: string;
};

export function ChargeFeedback({ charges, date }: Props) {
  const { finance } = privateRoutes;
  return (
    <>
      {charges
        ?.filter((charge) => charge.expired_at === date)
        .map((charge) => (
          <li key={charge.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${finance}/${charge.id}`}>
              <span>{`${i18n("words.expired_charge")}: ${
                charge.title
              }`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
