import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { Select } from "@components/shared/forms/Select";
import { useMemo } from "react";
import { Trash } from "@assets/Icons/black/Trash";
import { textColors } from "@assets/colors/colors";
import { useSocialMedias } from "./hooks/useSocialMedias";
import { useI18n } from "@contexts/I18n";

type Props = ProfileFormProps;

export function SocialMedias({ register, agency, errors }: Props) {
    const { t } = useI18n()
    const options = useMemo(() => ["FACEBOOK", "INSTAGRAM", "TWITTER", "LINKEDIN", "WHATSAPP"].map((media) => ({
        text: t(`Words.${media.toLowerCase()}`),
        value: media
    })), [t]);
    const { lines, setLines, handleRemoveSocialMedia } = useSocialMedias({ socialMedias: agency?.social_media || [] });

    return (
        <div className="mt-6">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Texts.social_medias")}</h2>
                <p className="text-sm">{t("Screens.dashboard.agencies.social_medias_description")}</p>
            </div>
            <div className="text-end mb-3">
                <span onClick={() => setLines(lines + 1)} className="inline-block bg-primary hover:bg-white border border-primary hover:text-primary text-white rounded-md py-2 cursor-pointer px-6">
                    {t("Words.add")}
                </span>
            </div>
            <div className="bg-secondary min-h-20 px-2 rounded-md">
                {Array.from({ length: lines }).map((_, index) => (
                    <div className="form-social-media" key={index}>
                        <div className="pt-2" >
                            <Trash onClick={() => handleRemoveSocialMedia(index)} className="ml-auto cursor-pointer" width={15} height={15} fill={textColors.red} />
                        </div>
                        <div className="flex flex-wrap justify-between relative" >

                            <div className=" w-full md:w-[48%] my-2">
                                <Select defaultValue={agency?.social_media?.[index]?.platform}   {...register(`social_media.${index}.platform`)} errors={errors?.social_media?.[index]?.platform} options={[
                                    {
                                        text: t("Words.selection"),
                                        value: ""
                                    },
                                    ...options
                                ]} dataTestId="platform" label={t("Words.platform")} />
                            </div>
                            <div className="w-full md:w-[48%] my-2">
                                <Input defaultValue={agency?.social_media?.[index]?.link} type="url" dataTestId="link" {...register(`social_media.${index}.link`)} errors={errors?.social_media?.[index]?.link} label={t("Words.url")} />
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>

    )
}