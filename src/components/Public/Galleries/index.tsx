import { Section } from "@components/shared/layouts/Section";
import { useGalleries } from "./hooks";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { When } from "@components/utilities/When";
import Share from "yet-another-react-lightbox/plugins/share";
import { Skeleton } from "@components/utilities/Skeleton";

export function Galleries() {
    const { galleries, handleChangeTargetPhotos, targetPhotos, isLoading } = useGalleries()

    return (
        <Section>
            <div className="min-h-[70vh] my-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl text-primary font-bold">Galeria de Fotos</h1>
                    <p>Os melhores momentos com matrilhas e suas experiências</p>
                </div>
                <div className="flex flex-wrap ">
                    <Skeleton isLoading={isLoading} settings={{
                        type: "board"
                    }}>
                        {galleries.map(gallery => (
                            <div key={gallery.id} className=" w-[15rem] shadow-sm shadow-zinc-500 mx-2">
                                <div className="p-1">
                                    <Image src={gallery.cover || "/imgs/illustration.png"} className="h-[25vh] object-cover" width={400} height={400} alt={gallery.title} />
                                </div>
                                <div className="text-center bg-primary text-white">
                                    <h2 className="text-xl font-semibold mt-2">{gallery.title}</h2>
                                </div>
                                <div className="my-1">
                                    <When value={gallery?.images && gallery?.images?.length > 0}>
                                        <span onClick={() => handleChangeTargetPhotos(gallery.images, gallery.title)} className="inline-block w-full text-center cursor-pointer hover:bg-primary hover:text-white border-primary border rounded-sm">
                                            visualizar
                                        </span>
                                    </When>
                                    <When value={!gallery?.images || gallery?.images?.length === 0}>
                                        <span className="w-full inline-block text-center cursor-pointer hover:bg-primary hover:text-white rounded-sm">
                                            Ainda não há imagens
                                        </span>
                                    </When>
                                </div>
                            </div>
                        ))}
                    </Skeleton>
                </div>
            </div>
            <Lightbox
                open={targetPhotos.length > 0}
                close={() => handleChangeTargetPhotos([])}
                slides={targetPhotos} plugins={[Share]}
            />
        </Section>
    )
}