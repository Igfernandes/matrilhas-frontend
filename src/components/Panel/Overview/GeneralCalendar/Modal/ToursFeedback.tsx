import { publicRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { TourPreviewShape } from "@type/Tours";
import moment from "moment";
import Link from "next/link";

type Props = {
  tours?: Array<TourPreviewShape>;
  date: string;
};

export function ToursFeedback({ tours, date }: Props) {
  const { tours: toursRoute } = publicRoutes;
  const { t } = useI18n()
  console.log(date)
  return (
    <>
      {tours
        ?.filter((tour) => tour.available_at === date)
        .map((tour) => (
          <li key={tour.id} className="bg-secondary px-2 py-2 rounded-md mb-2 shadow-md">
            <Link href={`${toursRoute}/${tour.slug}`} className=" flex items-center justify-between">
              <div>
                <span className="inline-block font-semibold text-primary">{`${t("Words.tour")}: ${tour.title}`}</span>
                <span className="block leading-3 text-zinc-500"><small>{moment(tour.available_at).format("LL")}</small></span>
              </div>
              <span className="text-xs inline-block bg-primary  text-white py-1 px-3 rounded-md
              ">{t("Texts.see_more")}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
