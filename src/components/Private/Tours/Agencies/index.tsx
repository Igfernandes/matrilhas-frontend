import { TourShape } from "@type/Tours";
import { useRules } from "./hooks/useRules";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useTable } from "./hooks/useTable";
import { useRoutes } from "@hooks/useRoutes";
import { ToursAgenciesModal } from "./Modals/store";
import { useModalContext } from "@contexts/Modal";
import { Notice } from "@components/shared/others/Notice";
import { useI18n } from "@contexts/I18n";

type Props = {
    tour: TourShape;
}

export function TourAgencies({ tour }: Props) {
    const { t } = useI18n()
    const { tHeads, updateForTable, setSelectors } = useTable()
    const { handleDeleteAgencyRelation, isLoadingDelete } = useRules({ tour })
    const { setParams } = useRoutes()
    const { handleToggleModal, modal } = useModalContext()

    return (
        <>
            <div className="mt-4">
                <div className="flex flex-wrap items-center mb-4">
                    <div className="w-full md:w-[70%]">
                        <h2 className="text-2xl font-semibold text-primary ">{t("Texts.agencies_relations")}</h2>
                        <p className="text-sm">{t("Screens.dashboard.tours.text_agencies_listed")}</p>
                    </div>
                    <div className="w-full md:w-[30%] text-right mt-4">
                        <span onClick={() => handleToggleModal("STORE")} className="inline-block border-primary text-primary hover:bg-primary cursor-pointer hover:text-white border px-4 py-2 rounded-md">
                            {t("Texts.agencies_add")}
                        </span>
                    </div>
                </div>

                <SmartTable
                    ajax={{
                        key: "tours/agencies",
                        url: setParams({
                            url: API_ROUTES.toursAgencies,
                            data: {
                                id: tour.id ?? "",
                            }
                        }),
                        builder: updateForTable
                    }}
                    options={{
                        selector: {
                            setSelectorRef: setSelectors,
                        },
                        pagination: {
                            max: 6,
                        },
                        filters: {},
                    }}
                    title={t("Words.agencies")}
                    excludes={["updated_at"]}
                    tHeads={{
                        data: tHeads,
                        widths: [60, 250, 70, 150, 150, 48],
                    }}
                />
            </div>
            <div className="relative z-10">
                <ToursAgenciesModal tour={tour} />
                <Notice
                    headerTitle={t("Words.attention")}
                    title={t("Screens.dashboard.agencies.title_already_exclude")}
                    text={t("Screens.dashboard.agencies.text_already_exclude")}
                    onSubmit={handleDeleteAgencyRelation}
                    isShowModal={modal.type === "DELETE"}
                    onModal={handleToggleModal}
                    isLoading={isLoadingDelete}
                />
            </div>
        </>
    )
}