import { TourPreviewShape } from "@type/Tours"
import 'swiper/css';

import { TourGallery } from "./Gallery";
import { Information } from "./Information";
import Image from "next/image";
import { When } from "@components/utilities/When";
import { ClockBI } from "@assets/Icons/black/ClockBI";
import { othersColors } from "@assets/colors/colors";
import { formatMoney } from "@helpers/currencies";
import { TravelBag } from "@assets/Icons/black/TravelBag";
import { useSalesContext } from "@components/Public/Sales/context";

type Props = {
    tour: TourPreviewShape
}

export function Profile({ tour }: Props) {
    const { handleTargetTour } = useSalesContext()
    return (
        <div className="px-2 lg:px-12 mt-5 mb-[5rem]">
            <div className="relative">
                <Image className="w-full h-[80vh] object-cover" src={tour.banner ?? "/imgs/illustration.png"} alt={tour.title} width={800} height={400} />

                <When value={!!tour.featured}>
                    <div className="absolute top-0 left-0 bg-emerald-400 text-white px-4 py-2 m-5 rounded-md text-lg font-bold">
                        <span>Excursão em Destaque</span>
                    </div>
                </When>
                <div className="absolute bottom-10 left-4">
                    <div className="mb-2">
                        <h1 className="text-2xl font-bold text-white">{tour.title}</h1>
                        <p className="text-white mt-2">{tour.short_description}</p>
                    </div>
                    <div className="inline-block">
                        <div className="flex items-center border-secondary border pb-1 pt-2 px-4">
                            <div className="flex items-center text-white ">
                                <ClockBI fill={othersColors.white} className="mr-2" /> <span><strong>Duração: </strong> &nbsp;{tour.activity_period.label}</span>
                            </div>
                            <div className="mx-5">
                                <span className="text-white">|</span>
                            </div>
                            <div className="flex items-center">
                                <TravelBag className="inline-block mr-4" fill={othersColors.white} />
                                <span style={{
                                    textDecoration: tour.promotional_price ? "line-through" : "none"
                                }} className="text-white">{formatMoney(tour.price, tour.currency)}</span>
                                <span className="text-emerald-400 inline-block ml-2">{tour.promotional_price ? " Por " + formatMoney(tour.promotional_price, tour.currency) : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[-3rem] mt-10">
                        <span onClick={() => tour.is_available_for_sale && handleTargetTour(tour.id)} className={`${tour.is_available_for_sale ? "hover:bg-white border-emerald-400 border hover:text-emerald-400 bg-emerald-400" : "bg-zinc-500 cursor-not-allowed"} py-4 px-10 inline-block rounded-md text-white font-semibold cursor-pointer`}>
                            {tour.is_available_for_sale ? "Reservar Agora" : "Indisponível para Reserva"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md shadow-slate-400  px-6 pt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <div className=" border-b-2 border-slate-200 mb-5">
                            <h2 className="text-2xl font-sans text-dark font-bold mb-5">Visão Geral</h2>
                        </div>
                        <div className="px-2 mt-5" dangerouslySetInnerHTML={{ __html: tour.description as string }}>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <Information tour={tour} />
                    </div>
                </div>
                <When value={!!tour.video}>
                    <div>
                        <video src={tour.video} />
                    </div>
                </When>
                <div className="w-full p-4 pb-[4rem] ">
                    <TourGallery tour={tour} />
                </div>
            </div>


        </div >
    )
}