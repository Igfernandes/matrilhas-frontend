import { useI18n } from "@contexts/I18n"
import { TourPreviewShape } from "@type/Tours"
import { useTourAddress } from "./hooks/useTourAddress"
import dayjs from "dayjs"
import { When } from "@components/utilities/When"

type Props = {
    tour: TourPreviewShape
}

export function Information({ tour }: Props) {
    const { origin, destiny } = useTourAddress({ tour });
    const { t } = useI18n()

    return (
        <div className="bg-secondary shadow-zinc-400 shadow-sm p-4 md:ml-7 rounded-md">
            <div>
                <h2 className="text-black text-2xl">{t("Texts.general_information")}</h2>
            </div>
            <div className="mt-5">
                <div className="bg-primary text-white py-1 border-2 text-center">
                    <p className="font-semibold"> {t("Screens.tours.address_landing")}</p>
                </div>
                {origin.map((origin, index) => (
                    <div key={`address_origin_${index}`} className="bg-secondary text-sm mx-1 px-2 border border-b-none  shadow-sm shadow-zinc-300 py-2">
                        <p>{origin?.complement}, {origin?.city}, {origin?.state} - {origin?.country}</p>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <div className="bg-primary text-white py-1 border-2 text-center">
                    <p className="font-semibold"> {t("Screens.tours.address_boarding")}</p>
                </div>
                {destiny.map((destiny, index) => (
                    <div key={`address_destiny_${index}`} className="bg-secondary text-sm mx-1 px-2 border border-b-none  shadow-sm shadow-zinc-300 py-2">
                        <p>{destiny?.complement}, {destiny?.city}, {destiny?.state} - {destiny?.country}</p>
                    </div>
                ))}

            </div>
            <div className="flex">
                <When value={!!tour?.activity_period?.start}>
                    <div className="w-full md:w-1/2 mt-5">
                        <div className="bg-primary text-white py-1 border-2 text-center">
                            <p className="font-semibold">Data Início</p>
                        </div>
                        <div className="bg-secondary text-center shadow-sm shadow-zinc-300 py-2">
                            <p>{dayjs(tour?.activity_period?.start).format("DD/MM/YYYY HH:mm")}</p>
                        </div>
                    </div>
                </When>
                <When value={!!tour?.activity_period?.end}>
                    <div className="w-full md:w-1/2 mt-5">
                        <div className="bg-primary text-white py-1 border-2 text-center">
                            <p className="font-semibold">Data Finalização </p>
                        </div>
                        <div className="bg-secondary text-center shadow-sm shadow-zinc-300 py-2">
                            <p>{dayjs(tour?.activity_period?.end).format("DD/MM/YYYY HH:mm")}</p>
                        </div>
                    </div>
                </When>
            </div>

        </div>
    )
}