import { File } from "@components/shared/forms/File";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import i18n from "@configs/i18n";
import Image from "next/image";
import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import dayjs from "dayjs";
import { When } from "@components/utilities/When";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ setValue, watch, register, agency, isLoading }: Props) {

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
                                    value: "ACTIVE",
                                },
                                right: {
                                    text: i18n("Words.inactive"),
                                    value: "INACTIVE",
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="w-full mt-8">
                    <Image className="rounded-full mx-auto mb-2 border-2 border-secondary" width={130} height={130} src={agency?.logotype ? agency?.logotype : "/imgs/previews/preview-300x300.png"} alt="Logotype" />
                    <File dataTestId="logotype" accept=".png,.jpg,.jpeg" {...register("logotype")} label={i18n("Words.logotype")} />
                </div>
                <hr className="my-6 border-secondary" />
                <When value={!!agency}>
                    <div>
                        <ul className="text-center">
                            <li className="mb-2"><strong className="bg-primary text-white mb-1 block rounded-sm">Criado em:</strong> <span>{dayjs(agency?.created_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                            <li><strong className="block bg-primary text-white mb-1 rounded-sm">Aturalizado em:</strong> <span>{dayjs(agency?.updated_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                        </ul>
                    </div>
                    <hr className="border-secondary" />
                </When>
            </div>
            <div className="w-full mt-auto">
                <div className="w-full ml-auto mt-3  mb-1">
                    <Button isLoading={isLoading} text={watch('id') ? i18n("Words.update") : i18n("Words.create")} />
                </div>
            </div>

        </div>
    )
}