import { File } from "@components/shared/forms/File";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useI18n } from "@contexts/I18n";
import Image from "next/image";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export function CheckList() {
    const { t } = useI18n()
    const { clients } = API_ROUTES
    const { register, watch } = useFormContext()
    const image = watch("image");
    const placeholderImage = useMemo(() => {
        return image && image.length > 0 ? image : "/images/placeholder/placeholder-image.png"
    }, [image])

    return (
        <div className="bg-white shadow flex flex-wrap justify-between p-4">
            <div className="w-full md:w-[48%]">
                <div className="text-center bg-primary rounded-sm py-2">
                    <h4 className="text-white"><strong>{t("Texts.select_recipient_clients")}</strong></h4>
                </div>
                <GroupChecks ajax={{
                    url: clients,
                    key: "clients",
                    ref: {
                        label: "name",
                        value: "id",
                        queryIndex: "name_contains"
                    }
                }} name="client_ids" />
            </div>
            <div className=" w-full md:w-[48%] md:ml-4 mt-4 md:mt-0">
                <div className="min-h-60 border-2  border-secondary">
                    <Image src={placeholderImage} alt={"preview"} className="w-full" width={1000} height={100} />
                </div>
                <div>
                    <File label={t("Words.image")} {...register("image")} />
                </div>
            </div>
        </div>
    )
}