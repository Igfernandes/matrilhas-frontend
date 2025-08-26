import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDES } from "./slides";

export function SlideActivity() {
  return (
    <div>
      <Swiper autoplay={true} fadeEffect={{ crossFade: true }}>
        {SLIDES.map(({ icon, text }, i) => (
          <SwiperSlide key={`slide_${i}`}>
            {icon}
            <span>{text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
