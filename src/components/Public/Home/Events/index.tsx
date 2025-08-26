import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDES } from "./slides";
import Image from "next/image";

export function Events() {
  return (
    <div>
      <Swiper autoplay={true} fadeEffect={{ crossFade: true }}>
        {SLIDES.map(({ text }, i) => (
          <SwiperSlide key={`event_${i}`}>
            <div>
              <Image src="/seila" width={400} height={400} alt="event" />
            </div>
            <div>
              <div>
                <h3>Title of event</h3>
              </div>
              <div>
                <span>Inscrições abertas: 0</span>
                <span>Vagas: 0</span>
              </div>
              <div>
                <p>describe about event</p>
              </div>
              <div>
                <span>Inscrever-se</span>
              </div>
            </div>
            <span>{text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
