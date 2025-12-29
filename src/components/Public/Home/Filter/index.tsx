
import { TravelBag } from "@assets/Icons/black/TravelBag";
import { Signpost } from "@assets/Icons/black/Signpost";
import { PinMap } from "@assets/Icons/black/PinMap";
import { PeoplesTwo } from "@assets/Icons/black/PeoplesTwo";
import { useI18n } from "@contexts/I18n";
import { Topics } from "../Main/Topics";

export function Filter() {
    const { t } = useI18n();

    return (
        <>
            <div className="flex flex-wrap bg-white justify-around w-[95%] lg:w-[50%] px-8 py-3 shadow-md rounded-full mt-[-4rem] relative z-10 mx-auto ">
                <form className="flex items-center flex-wrap justify-center md:justify-start" action="/tours" method="get">
                    <label htmlFor="search" className="mr-5 w-full text-center md:w-auto font-semibold text-primary">Busque seu novo destino</label>
                    <div className="relative w-full md:w-auto mt-2 md:mt-0">
                        <input type="text" name="title_contains" id="search" placeholder="Buscar..." className="border border-gray-300 pr-20 rounded-full px-4 py-2 w-full lg:w-auto" />
                        <button className="bg-primary text-white font-semibold  absolute right-0 top-[1px] py-2 rounded-br-full rounded-tr-full px-3">
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
            <div className="relative z-10 mt-10">
                <Topics
                    items={[
                        {
                            icon: <Signpost className="w-8 h-8" />,
                            text: t("Screens.home.status.tours"),
                        },
                        {
                            icon: <PinMap className="w-8 h-8" />,
                            text: t("Screens.home.status.guides"),
                        },
                        {
                            icon: <TravelBag className="w-8 h-8" />,
                            text: t("Screens.home.status.modalities"),
                        },
                        {
                            icon: <PeoplesTwo className="w-8 h-8" />,
                            text: t("Screens.home.status.travelers"),
                        },
                    ]}
                />
            </div>
        </>
    )
}