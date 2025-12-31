import i18n from "@configs/i18n";
import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import { TViewer } from "@components/shared/forms/InfoBoard/fields/Viewer";
import { ProfileManagerProps } from "./type";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import dayjs from "dayjs";

type Props = Pick<ProfileManagerProps, "sale">;

type DependentShape = {
    name: string;
    cpf: string;
    birthdate: Date;
}

export function Dependents({ sale }: Props) {
    const { t } = useI18n()
    const dependents = useMemo(() => {
        return sale?.metadata?.dependents as Array<DependentShape>
    }, [sale.metadata])

    return (
        <div className="flex flex-wrap">
            <div className="bg-white p-4 pt-10 md:pt-4 w-full md:pr-4 mb-4 md:mb-0 pb-10">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-primary ">{t("Words.dependents")}</h2>
                    <p className="text-sm">{t("Screens.dashboard.sales.text_describe_dependents")}</p>
                </div>
                <div className="flex flex-wrap ">
                    {dependents.map((dependent) => (
                        <div className="w-full md:w-[25rem]" key={dependent.cpf}>
                            <div className="bg-primary text-center text-white py-1 rounded-md ">
                                <h5>{dependent.name.split(" ").splice(0, 2).join(" ")}</h5>
                            </div>
                            <div className="shadow-md">
                                <InfoBoard>
                                    <TViewer name="name" label={i18n("Words.name")} defaultValue={dependent.name} />
                                    <TViewer name="cpf" label={i18n("Words.cpf")} defaultValue={dependent.cpf} />
                                    <TViewer name="birthdate" label={i18n("Words.birthdate")} defaultValue={dayjs(dependent.birthdate).format("DD/MM/YYYY")} />
                                </InfoBoard>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}