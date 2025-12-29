import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useToursRelations } from "./hooks/useToursRelations";
import { ToursRelationsProps } from "./type";
import { TourCard } from "./Card";
import { Skeleton } from "@components/utilities/Skeleton";
import { When } from "@components/utilities/When";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useI18n } from "@contexts/I18n";

export function ToursRelations({ query, slidesPerView }: ToursRelationsProps) {
    const { tours, isLoading } = useToursRelations({ query });
    const { t } = useI18n()

    return (
        <div className="w-full">
            <Skeleton isLoading={isLoading} settings={{
                type: "board"
            }}>
                <Swiper
                    slidesPerView={"auto"}
                    modules={[Autoplay, Navigation]}


                    navigation={{
                        nextEl: ".gallery-button-next",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        500: {
                            // telas pequenas (celulares)
                            slidesPerView: 1,
                        },
                        640: {
                            // tablets em pé
                            slidesPerView: slidesPerView ?? 3,
                        },
                    }}
                >
                    {tours.map((tour, key) => (
                        <SwiperSlide key={`tour_${key}`} className="w-full md:w-[250px] mx-4">
                            <TourCard tour={tour} />
                        </SwiperSlide>
                    ))}
                    <When value={tours.length === 0}>
                        <div className="my-10">
                            <p className="text-center w-full py-10">{t("Screens.tours.not_found")}</p>
                        </div>
                    </When>
                </Swiper>
            </Skeleton>
        </div>
    )
}