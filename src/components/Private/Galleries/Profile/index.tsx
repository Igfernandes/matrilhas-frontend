import { FormProvider } from "react-hook-form";
import { Information } from "./Information";

import { useProfile } from "./hooks/useProfile";
import { ProfileManagerProps } from "../type";
import { Button } from "@components/shared/forms/Button";
import i18n from "@configs/i18n";
import { Gallery } from "@components/shared/layouts/Gallery";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

type Props = Pick<ProfileManagerProps, "gallery">

export function GalleryProfile({ gallery }: Props) {
    const { formMethods, handleSubmit, onSubmit, errors, isLoading } = useProfile({ gallery })
    const { galleriesByPhoto } = API_ROUTES
    const { setParams } = useRoutes()

    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <Information {...formMethods} gallery={gallery} errors={errors} />
                <Gallery
                    id="gallery"
                    api={setParams({
                        url: galleriesByPhoto,
                        data: {
                            id: gallery.id ?? "",
                        }
                    })} />

                <div className="w-full md:w-[25%] ml-auto mt-10">
                    <Button text={gallery ? i18n("Words.update") : i18n("Words.create")} isLoading={isLoading} />
                </div>
            </form>
        </FormProvider>
    )
}