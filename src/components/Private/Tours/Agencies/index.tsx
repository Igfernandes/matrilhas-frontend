import i18n from "@configs/i18n";
import { TourShape } from "@type/Tours";
import { useRules } from "./hooks/useRules";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useTable } from "./hooks/useTable";
import { useRoutes } from "@hooks/useRoutes";
import { ToursAgenciesModal } from "./Modals/store";
import { useModalContext } from "@contexts/Modal";
import { Notice } from "@components/shared/others/Notice";

type Props = {
    tour: TourShape;
}

export function TourAgencies({ tour }: Props) {
    const { tHeads, updateForTable, setSelectors} = useTable()
    const { handleDeleteAgencyRelation, isLoadingDelete } = useRules({ tour })
    const { setParams } = useRoutes()
    const { handleToggleModal, modal } = useModalContext()

    return (
        <>
            <div className="mt-4">
                <div className="flex flex-wrap items-center mb-4">
                    <div className="w-full md:w-[70%]">
                        <h2 className="text-2xl font-semibold text-primary ">{i18n("Texts.agencies_relations")}</h2>
                        <p className="text-sm">As agências listadas para vendas ao passeio.</p>
                    </div>
                    <div className="w-full md:w-[30%] text-right mt-4">
                        <span onClick={() => handleToggleModal("STORE")} className="inline-block border-primary text-primary hover:bg-primary cursor-pointer hover:text-white border px-4 py-2 rounded-md">{i18n("Texts.agencies_add")}</span>
                    </div>
                </div>

                <SmartTable
                    ajax={{
                        key: "agencies",
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
                    title={i18n("Words.agencies")}
                    excludes={["updated_at"]}
                    tHeads={{
                        data: tHeads.current,
                        widths: [60, 250, 70, 150, 150, 48],
                    }}
                />
            </div>
            <div className="relative z-10">
                <ToursAgenciesModal tour={tour} />
                <Notice
                    headerTitle={i18n("Words.attention")}
                    title={i18n("Screens.dashboard.agencies.title_already_exclude")}
                    text={i18n("Screens.dashboard.agencies.text_already_exclude")}
                    onSubmit={handleDeleteAgencyRelation}
                    isShowModal={modal.type === "DELETE"}
                    onModal={handleToggleModal}
                    isLoading={isLoadingDelete}
                />
            </div>
        </>
    )
}