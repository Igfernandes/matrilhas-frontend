import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';

import { useToursRelations } from "./hooks/useToursRelations";
import { ToursRelationsProps } from "./type";
import { TourCard } from "./Card";
import { Skeleton } from "@components/utilities/Skeleton";
import { When } from "@components/utilities/When";

export function ToursRelations({ query }: ToursRelationsProps) {
    const { tours, isLoading } = useToursRelations({ query });

    return (
        <div>
            <Skeleton isLoading={isLoading} settings={{
                type: "board"
            }}>
                <Swiper
                    slidesPerView={"auto"}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={5}
                    navigation={{
                        nextEl: ".gallery-button-next",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >
                    {tours.map((tour, key) => (
                        <SwiperSlide key={`tour_${key}`}>
                            <TourCard tour={tour} />
                        </SwiperSlide>
                    ))}
                    <When value={tours.length === 0}>
                        <div className="my-10">
                            <p className="text-center w-full py-10">Nenhum passeio encontrado para o período selecionado.</p>
                        </div>
                    </When>
                </Swiper>
            </Skeleton>
        </div>
    )
}