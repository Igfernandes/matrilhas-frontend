
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { Section } from "@components/shared/layouts/Section";
import { useI18n } from "@contexts/I18n";
import { useAgencies } from "./hooks/useAgencies";
import { CardAgency } from "./parts/card";

export function Agencies() {
  const { agencies } = useAgencies()
  const { t } = useI18n();

  return (
    <Section>
      <div id="agencies" className="agencies mt-20">
        <div className="text-sm md:text-md text-center md:text-left w-full lg:w-[50%] md:pr-5">
          <span>{t("Screens.home.agencies.title")}</span>
          <h1 className="text-lg md:text-2xl text-primary">
            <strong>{t("Screens.home.agencies.subtitle")}</strong>
          </h1>
          <p className="text-justify mt-5">
            {t("Screens.home.agencies.description")}
          </p>
        </div>

        <button className="gallery-button-next absolute hidden xl:right-[-20] top-1/2 -translate-y-1/2 z-50  p-2 ">
          <ArrowRight className="w-8 h-8" fill="red" />
        </button>
        <div className="relative w-full lg:w-[70%] mt-8">
          <Swiper
            slidesPerView={3}
            modules={[Autoplay, Navigation]}
            spaceBetween={5}
            navigation={{
              nextEl: ".gallery-button-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                // telas pequenas (celulares)
                slidesPerView: 1,
              },
              640: {
                // tablets em pé
                slidesPerView: 3,
              },
            }}
          >
            {agencies.map((agency, key) => (
              <SwiperSlide key={`agency_${key}`}>
                <CardAgency
                  agency={agency}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
