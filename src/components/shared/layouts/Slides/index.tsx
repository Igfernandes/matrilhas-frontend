import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { Skeleton } from "@components/utilities/Skeleton";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { SwiperOptions } from "swiper/types";

type Props = SwiperOptions & {
    slides: Array<React.ReactNode>
    className?: string
}
export function Slides({ slides, className, ...swiperProps }: Props) {
    return (
        <div className={`w-full ${className}`}>
            <Skeleton isLoading={!slides} settings={{
                type: "board"
            }}>
                <Swiper
                    {...swiperProps}
                    modules={[Autoplay, Navigation]}
                >
                    {slides.map((slide, key) => (
                        <SwiperSlide key={`slide_${key}`} className="w-full md:w-[250px] mx-4">
                            {slide}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Skeleton>
        </div>
    )
}