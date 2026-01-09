import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useI18n } from "@contexts/I18n";

export function CheckList() {
    const { t } = useI18n()
    const { agencies, clients } = API_ROUTES

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
                <div className="text-center bg-primary rounded-sm py-2">
                    <h4 className="text-white"><strong>{t("Texts.select_recipient_agencies")}</strong></h4>
                </div>
                <GroupChecks
                    ajax={{
                        url: agencies,
                        key: "agencies",
                        ref: {
                            label: "name",
                            value: "id",
                            queryIndex: "name_contains"
                        }
                    }} name="agency_ids" />
            </div>
        </div>
    )
}