import { When } from "@components/utilities/When";
import { useTours } from "./hooks/useTours";
import { TourSidebar } from "./Sidebar";
import { TourCard } from "./ToursRelations/Card";
import { LoadingIcon } from "yet-another-react-lightbox";
import { useI18n } from "@contexts/I18n";


export function Tours() {
    const { t } = useI18n()
    const { tours, handleApplyFilters } = useTours()

    return (
        <div>
            <div className="flex flex-wrap justify-between min-h-[62vh]">
                <div className="w-full md:w-[20%]">
                    <TourSidebar onFilters={handleApplyFilters} tours={tours} />
                </div>
                <div className="w-full md:w-[78%]">
                    <div className="text-center mb-7">
                        <h1 className="text-primary font-bold text-2xl mb-1">{t("Screens.tours.title")}</h1>
                        <p className="text-slate-600">{t("Screens.tours.description")}</p>
                    </div>
                    <div className="flex flex-wrap">
                        {tours.map((tour, key) => (
                            <div className="w-1/2 md:w-1/4" key={`tour_${key}`}>
                                <TourCard tour={tour} />
                            </div>
                        ))}
                    </div>
                    <When value={tours.length === 0}>
                        <div className="my-10">
                            <p className="text-center w-full py-10">{t("Screens.tours.not_found")}</p>
                        </div>
                    </When>
                    <When value={false}>
                        <div className="flex justify-center items-center bg-secondary py-2 my-10">
                            <span className="text-xl text-primary font-semibold inline-block mr-4">{t("screens.public.tours.loading")}</span><LoadingIcon width={30} height={30} className="animate-spin " />
                        </div>
                    </When>
                </div>
            </div>
        </div>
    )
}