import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDES } from "../slides";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";

export function Main() {
  return (
    <main>
      <div className="content relative z-0 max-h-[600px]">
        <div className="background">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
          >
            {SLIDES.map((slide, i) => (
              <SwiperSlide key={`slide_${i}`}>
                <Image
                  className="w-full max-h-[600px] h-[95vh] object-cover bg-left-top brightness-75"
                  src={slide.src}
                  alt={slide.alt}
                  width={2400}
                  height={2400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
     
    </main>
  );
}
