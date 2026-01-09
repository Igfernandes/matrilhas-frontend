import { File } from "@components/shared/forms/File";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import Image from "next/image";
import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import dayjs from "dayjs";
import { When } from "@components/utilities/When";
import { useMemo } from "react";
import { Select } from "@components/shared/forms/Select";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { Link } from "@assets/Icons/black/Link";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ setValue, watch, register, tour, errors, isLoading }: Props) {
    const { t } = useI18n()
    const bannerWatch = watch("banner")
    const banner = useMemo(() => {
        if (!!bannerWatch && bannerWatch !== "")
            return bannerWatch;

        return tour?.banner ?? "/imgs/previews/preview-300x300.png"
    }, [bannerWatch, tour]);
    const { handleCopy } = useNavigator();
    const { baseUrl } = useWindow();
    const status = watch("status")

    return (
        <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
                <div className="flex flex-wrap justify-between items-center w-full mb-4">
                    <ToggleSwitch
                        setValue={setValue}
                        label={t("Words.status")}
                        dataTestId="status"
                        name="status"
                        defaultValue={status}
                        options={{
                            left: {
                                text: t("Words.active"),
                                value: "PUBLISHED",
                            },
                            right: {
                                text: t("Words.inactive"),
                                value: "DRAFT",
                            },
                        }}
                    />
                    <div
                        className="px-3 py-2 shadow-md hover:bg-primary rounded-md cursor-pointer ml-2"
                        onClick={() => handleCopy(`${baseUrl + publicRoutes.tours}/${tour?.slug}`)}
                    >
                        <Link />
                    </div>
                </div>
                <div className="w-full mt-2">
                    <Image className="h-[8rem] object-cover mx-auto mb-2 border-2 border-secondary" width={300} height={130} src={banner} alt="Banner" />
                    <File dataTestId="banner" accept=".png,.jpg,.jpeg" {...register("banner")} label={t("Words.banner")} />
                </div>
                <hr className="my-2 border-secondary" />
                <When value={!!tour}>
                    <div>
                        <ul className="text-center">
                            <li className="mb-2"><strong className="bg-primary text-sm text-white mb-1 block rounded-sm">Criado em:</strong> <span className="text-xs">{dayjs(tour?.created_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                            <li><strong className="block bg-primary text-sm text-white mb-1 rounded-sm">Aturalizado em:</strong> <span className="text-xs">{dayjs(tour?.updated_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                        </ul>
                    </div>
                    <hr className="border-secondary" />
                </When>
                {/* Featured */}
                <div className="w-full  my-2">
                    <Select
                        dataTestId="featured"
                        {...register("featured")}
                        label={t("Words.featured")}
                        errors={errors?.featured}
                        options={[
                            {
                                text: t("Words.not"),
                                value: "0"
                            },
                            {
                                text: t("Words.yes"),
                                value: "1"
                            }

                        ]}
                    />
                </div>

            </div>
            <div className="w-full mt-auto">
                <div className="w-full ml-auto  mb-1">
                    <Button isLoading={isLoading} text={watch('id') ? t("Words.update") : t("Words.create")} />
                </div>
            </div>

        </div>
    )
}