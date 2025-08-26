import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDES } from "./slides";

export function Main() {
  return (
    <div className="container">
      <div className="content">
        <div className="background">
          <Swiper autoplay={true} fadeEffect={{ crossFade: true }}>
            {SLIDES.map((slide, i) => (
              <SwiperSlide key={`slide_${i}`}>
                <Image
                  className="w-full h-full object-contain"
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
    </div>
  );
}
