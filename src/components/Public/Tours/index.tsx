import { When } from "@components/utilities/When";
import { useTours } from "./hooks/useTours";
import { TourSidebar } from "./Sidebar";
import { TourCard } from "./ToursRelations/Card";
import { LoadingIcon } from "yet-another-react-lightbox";


export function Tours() {
    const { tours, handleApplyFilters } = useTours()

    return (
        <div>
            <div className="flex flex-wrap justify-between min-h-[62vh]">
                <div className="w-full md:w-[20%]">
                    <TourSidebar onFilters={handleApplyFilters} tours={tours} />
                </div>
                <div className="w-full md:w-[78%]">
                    <div className="text-center mb-7">
                        <h1 className="text-primary font-bold text-2xl mb-1">Explore nossos passeios</h1>
                        <p className="text-slate-600">Faça uma busca e encontre a aventura ideal para você e sua família</p>
                    </div>
                    {tours.map((tour, key) => (
                        <TourCard tour={tour} key={`tour_${key}`} />
                    ))}
                    <When value={tours.length === 0}>
                        <div className="my-10">
                            <p className="text-center w-full py-10">Nenhum passeio encontrado para o período selecionado.</p>
                        </div>
                    </When>
                    <When value={false}>
                        <div className="flex justify-center items-center bg-secondary py-2 my-10">
                            <span className="text-xl text-primary font-semibold inline-block mr-4">Loading </span><LoadingIcon width={30} height={30} className="animate-spin " />
                        </div>
                    </When>
                </div>
            </div>
        </div>
    )
}