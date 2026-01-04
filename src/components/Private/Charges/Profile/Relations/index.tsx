import { useI18n } from "@contexts/I18n"
import { CheckList } from "../../CheckList"
import { FormProvider } from "react-hook-form"
import { useRelations } from "./hooks/useRelations"
import { ChargeShape } from "@type/Charges"
import { Button } from "@components/shared/forms/Button"

type Props = {
    charge: ChargeShape
}

export function ChargesRelations({ charge }: Props) {
    const { t } = useI18n()
    const { formMethods, handleSubmit, onSubmit, relation } = useRelations({ charge })

    return (
        <FormProvider {...formMethods}>
            <form className="bg-white p-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between mt-4">
                    <div className="px-4">
                        <h1 className="font-bold text-primary text-xl underline">{t("Words.relations")}</h1>
                        <span className="text-sm text-gray">{t("Screens.dashboard.charges.text_about_relations_tab")}</span>
                    </div>
                    <div className="w-full md:w-[12rem]">
                        <Button text={t("Words.update")} />
                    </div>
                </div>
                <div className="pt-6 text-center">
                    <p className="text-center bg-red text-white font-semibold uppercase text-sm py-2 rounded-sm">{t("Screens.dashboard.charges.text_about_relations_tab_warning")}</p>
                </div>
                <div className="flex flex-wrap justify-between items-center px-4 mt-8">
                    <div className="w-full md:w-[48%] py-1  px-2 text-center ">
                        <div className="border border-primary py-1 rounded-sm">
                            <h4 className="font-semibold text-primary">{t("Texts.selected_clients")}</h4>
                        </div>
                        <div>
                            <ul className="h-[10vh] overflow-y-auto">
                                {relation?.clients?.map(client => (
                                    <li className="bg-secondary shadow-md py-1 text-sm" key={`client_selected_${client.id}`}>
                                        {client.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%]  px-2 text-center">
                        <div className="border border-primary py-1 rounded-sm">
                            <h4 className="font-semibold text-primary">{t("Texts.selected_clients")}</h4>
                        </div>
                        <div>
                            <ul className="h-[10vh] overflow-y-auto">
                                {relation?.agencies?.map(agency => (
                                    <li className="bg-secondary text-primary shadow-md py-1 text-sm" key={`agency_selected_${agency.id}`}>
                                        {agency.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <CheckList />
            </form>
        </FormProvider>
    )
}