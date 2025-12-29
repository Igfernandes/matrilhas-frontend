import { File } from "@components/shared/forms/File";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import i18n from "@configs/i18n";
import Image from "next/image";
import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import dayjs from "dayjs";
import { When } from "@components/utilities/When";
import { useMemo } from "react";
import { Select } from "@components/shared/forms/Select";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ setValue, watch, register, tour, errors, isLoading }: Props) {
    const bannerWatch = watch("banner")
    const banner = useMemo(() => {
        if (!!bannerWatch && bannerWatch !== "")
            return bannerWatch;

        return tour?.banner ?? "/imgs/previews/preview-300x300.png"
    }, [bannerWatch, tour]);

    return (
        <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
                <div className="flex flex-wrap w-full mb-4">
                    <div className="w-full">
                        <ToggleSwitch
                            setValue={setValue}
                            label={i18n("Words.status")}
                            dataTestId="status"
                            name="status"
                            defaultValue={watch("status")}
                            options={{
                                left: {
                                    text: i18n("Words.active"),
                                    value: "PUBLISHED",
                                },
                                right: {
                                    text: i18n("Words.inactive"),
                                    value: "DRAFT",
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="w-full mt-2">
                    <Image className="h-[8rem] object-cover mx-auto mb-2 border-2 border-secondary" width={300} height={130} src={banner} alt="Banner" />
                    <File dataTestId="banner" accept=".png,.jpg,.jpeg" {...register("banner")} label={i18n("Words.banner")} />
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
                        label={i18n("Words.featured")}
                        errors={errors?.featured}
                        options={[
                            {
                                text: i18n("Words.not"),
                                value: false
                            },
                            {
                                text: i18n("Words.yes"),
                                value: true
                            }

                        ]}
                    />
                </div>

            </div>
            <div className="w-full mt-auto">
                <div className="w-full ml-auto  mb-1">
                    <Button isLoading={isLoading} text={watch('id') ? i18n("Words.update") : i18n("Words.create")} />
                </div>
            </div>

        </div>
    )
}