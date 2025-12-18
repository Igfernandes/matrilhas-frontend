import i18n from "@configs/i18n";
import { TourShape } from "@type/Tours";
import { FormProvider } from "react-hook-form";
import { useRules } from "./hooks/useRules";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { Gallery } from "@components/shared/layouts/Gallery";

type Props = {
    tour: TourShape;
}

export function TourGallery({ tour }: Props) {
    const { formMethods, handleSubmit, onSubmit } = useRules({ tour })
    const { toursGallery } = API_ROUTES
    const { setParams } = useRoutes()

    return (
        <>
            <FormProvider {...formMethods}>
                <form className="bg-white w-full px-4 py-1 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <div className="mb-4">
                            <div className="w-full md:w-[70%]">
                                <h2 className="text-2xl font-semibold text-primary ">{i18n("Words.gallery")}</h2>
                                <p className="text-sm">As imagens relacionadas ao passeio e exibidas na página unica.</p>
                            </div>
                            <div>
                                <Gallery
                                    id="tour_gallery"
                                    api={setParams({
                                        url: toursGallery,
                                        data: {
                                            id: tour.id ?? "",
                                        }
                                    })} />
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>

        </>
    )
}