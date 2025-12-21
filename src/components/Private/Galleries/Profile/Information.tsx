import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { ProfileFormProps } from "./type";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { File } from "@components/shared/forms/File";
import Image from "next/image";
import { When } from "@components/utilities/When";

type Props = ProfileFormProps;

export function Information({ register, errors, setValue, watch }: Props) {
    const cover = watch("cover") ?? ""
    return (
        <div>
            <div className="mb-4">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold text-primary">
                            {i18n("Words.information")}
                        </h2>
                        <p className="text-sm">
                            Informações gerais da galeria.
                        </p>
                    </div>
                    <div className="ml-auto">
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
            </div>

            <div className="flex flex-wrap justify-between">
                <div className="w-full flex">
                    <When value={!!cover}>
                        <div className="bg-white w-[15rem] mb-2 p-2 shadow">
                            <Image className="h-[20vh] object-contain w-full" src={cover} alt={watch("title")} width={400} height={400} />
                        </div>
                    </When>
                    <div className="w-full">
                        <div className="mt-1">
                            <File dataTestId="cover" {...register("cover")} accept=".png,.jpg,.jpeg" label={i18n("Words.cover")} errors={errors?.cover} />
                        </div>
                        <div className="mt-2">
                            <Input
                                required
                                dataTestId="title"
                                {...register("title")}
                                label={i18n("Words.title")}
                                errors={errors?.title}
                            />
                        </div>
                    </div>
                </div>
                {/* Title */}
                <div className="w-full my-2">

                </div>

            </div>
        </div>
    );
}
