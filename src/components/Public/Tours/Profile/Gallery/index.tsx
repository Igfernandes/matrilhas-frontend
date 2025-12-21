

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Skeleton } from "@components/utilities/Skeleton";
import { TourGalleryShape } from "@type/Tours/Gallery";
import Image from "next/image";
import { useMemo } from "react";
import { TourPreviewShape } from "@type/Tours";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Share from "yet-another-react-lightbox/plugins/share";
import { useToursGallery } from "./hooks/useToursGallery";
import { EyeOpenSimple } from "@assets/Icons/black/EyeOpenSimple";
import { othersColors } from "@assets/colors/colors";

type Props = {
    tour: TourPreviewShape
}

export function TourGallery({ tour }: Props) {
    const { isOpenLightbox, setIsOpenLightbox } = useToursGallery()
    const gallery = useMemo(() => {
        return tour.galleries ?? [] as TourGalleryShape[]
    }, [tour.galleries])

    return (
        <>
            <div className="mt-10">
                <div className=" border-b-2 border-slate-200 mb-5">
                    <h2 className="text-2xl font-sans text-dark font-bold mb-5">Galeria de Fotos</h2>
                </div>
            </div>
            <Skeleton isLoading={!gallery} settings={{
                type: "board"
            }}>
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
                >
                    {gallery.map((gallery, key) => (
                        <SwiperSlide key={`gallery_${key}`} onClick={() => setIsOpenLightbox(true)}>
                            <Image className="w-full h-[30vh] object-cover brightness-75" src={gallery.src} alt={tour.title} width={600} height={400} />
                            <div className="absolute top-4 right-4">
                                <EyeOpenSimple fill={othersColors.white} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Skeleton>
            <Lightbox
                open={isOpenLightbox}
                close={() => setIsOpenLightbox(false)}
                slides={gallery} plugins={[Share]}
            />
        </>
    )

}