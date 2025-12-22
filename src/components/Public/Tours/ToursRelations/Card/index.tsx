import { When } from "@components/utilities/When"
import { TourPreviewShape } from "@type/Tours"
import Image from "next/image"
import { useTourCard } from "./hooks/useTourCard"
import { formatMoney } from "@helpers/currencies"
import Link from "next/link"
import { ClockBI } from "@assets/Icons/black/ClockBI"
import { PeopleAddBI } from "@assets/Icons/black/PeopleAddBI"
import { Bag } from "@assets/Icons/black/Bag"
import i18n from "@configs/i18n"
import { othersColors } from "@assets/colors/colors"
import { CalendarBI } from "@assets/Icons/black/CalendarBI"
import dayjs from "dayjs"
import { useI18n } from "@contexts/I18n"
import { useSalesContext } from "@components/Public/Sales/context"

type Props = {
    tour: TourPreviewShape
}

export function TourCard({ tour }: Props) {
    const { handleTargetTour } = useSalesContext();
    const { destinyAddress } = useTourCard({ tour })
    const { t } = useI18n()

    return (
        <div className="w-full md:w-[250px] my-5 md:my-0 shadow-sm p-2 border-2 border-zinc-200 rounded-lg bg-white mx-4 md:mx-2">
            <div className="relative">
                <Image
                    src={tour.banner ?? "/imgs/illustration.png"}
                    alt={tour.title}
                    width={700}
                    height={700}
                    className="w-full h-[8rem] object-cover brightness-90"
                />
                <When value={!!tour.featured}>
                    <div className="bg-warning absolute top-1 right-2 shadow-sm shadow-white text-white px-2 py-1 rounded-md text-xs font-bold">
                        Destaque
                    </div>
                </When>
            </div>
            <div className="relative">
                <div className="bg-primary">
                    <h2 className="text-white px-2 py-1 line-clamp-2 font-bold text-sm">{tour.title}</h2>
                </div>
                <div>
                    <ul>
                        <li className="text-justify text-sm py-2 px-1">
                            <p className="text-sm line-clamp-2">{tour.short_description}</p>
                        </li>
                        <li>
                            <p className="flex items-center text-center border-primary border px-3 py-1  my-2 text-primary">
                                <Bag width={17} height={17} /> <span className="inline-block font-semibold mx-auto">Destino</span>
                            </p>
                            <When value={!destinyAddress}>
                                <span className="text-sm text-center bg-secondary block ">Não definido</span>
                            </When>
                            <When value={!!destinyAddress}>
                                <span className="text-sm bg-secondary block ">{destinyAddress?.complement ? `${destinyAddress.complement}, ` : ""}{destinyAddress?.city}, {destinyAddress?.state} - {destinyAddress?.country} </span>
                            </When>

                        </li>
                        <When value={!!tour?.activity_period?.start}>
                            <li className="mb-2">
                                <p className="flex items-center text-center border-primary border px-3 py-1  my-2 text-primary">
                                    <CalendarBI width={17} height={17} /> <span className="inline-block font-semibold mx-auto">{t("Words.realized_at")}</span>
                                </p>
                                <span className="text-sm text-primary bg-secondary block text-center">
                                    {dayjs(tour?.activity_period?.start).format("DD/MM/YYYY HH:mm")}
                                </span>
                            </li>
                        </When>
                        <li className="flex justify-around">
                            <div>
                                <p className="flex items-center mt-1 px-1">
                                    <strong><ClockBI fill={othersColors.primary} width={15} height={15} /></strong>
                                    <span className="text-sm ml-2">{tour.activity_period.value} {i18n(`Words.${tour.activity_period.unit}`)}</span>
                                </p>
                            </div>
                            <div>
                                <span className="flex items-center mt-1 px-1 ml-4">
                                    <strong><PeopleAddBI fill={othersColors.primary} width={20} height={20} /></strong>
                                    <span className="text-sm ml-2">{tour.slots}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="border-zinc-300 my-2" />
                <div className="text-center text-sm px-1 mt-1">
                    Apenas  <span style={{
                        textDecoration: tour.promotional_price ? "line-through" : "none"
                    }} className="text-primary">{formatMoney(tour.price, tour.currency)}</span>
                    <span className="text-warning inline-block ml-2">{tour.promotional_price ? " Por " + formatMoney(tour.promotional_price, tour.currency) : ""}</span>
                </div>
                <div className="flex mt-4">
                    <button
                        onClick={() => handleTargetTour(tour.id)} type="button"
                        className="border-primary mr-1 text-primary disabled:bg-zinc-400 disabled:cursor-not-allowed disabled:text-white border underline font-semibold w-full block text-center py-1 rounded-md">
                        {"Reservar"}
                    </button>
                    <Link className="bg-primary text-white underline font-semibold w-full block text-center py-1 rounded-md" href={`/tours/${tour.slug}`}>
                        Ver mais
                    </Link>
                </div>
            </div>
        </div>
    )
}