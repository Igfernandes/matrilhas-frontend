import { useI18n } from "@contexts/I18n"
import { useSalesContext } from "../../context"
import { useResume } from "./hooks/useResume"
import { When } from "@components/utilities/When"
import { ResumeShape } from "./type"
import { File } from "@components/shared/forms/File"
import { useFormContext } from "react-hook-form"
import { Skeleton } from "@components/utilities/Skeleton"
import { Button } from "@components/shared/forms/Button"

type Props = {
    isLoadingSubmit: boolean;
}

export function Resume({ isLoadingSubmit }: Props) {
    const { handleStep, tour } = useSalesContext()
    const { t } = useI18n()
    const { register } = useFormContext()
    const { resume, amountPaid, hasResidency, price, isLoadingResume } = useResume();

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">Resumo da Compra</h3>
                </div>
                <p className="text-sm">Abaixo está o resumo da sua compra.</p>
            </div>
            <div>
                <table className="w-full border border-zinc-300 rounded-md">
                    <thead>
                        <tr>
                            <th className="bg-zinc-300 text-zinc-800">{t("Words.passenger")}</th>
                            <th className="bg-zinc-300 text-zinc-800">{t("Words.value")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="py-2 px-2">
                                <Skeleton key={"resume_"} settings={{
                                    type: "text",
                                    lines: 2
                                }} isLoading={isLoadingResume}>
                                    {(resume ?? []).map((item: ResumeShape, index: number) => (
                                        <div key={`line_${index}`} className="flex max-h-[10vh] overflow-y-auto odd:bg-zinc-100 text-sm">
                                            <div className="w-full md:w-1/2">
                                                <span className="">{item.name}</span>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <When value={item.gratuities}>
                                                    {item.gratuities ? t("Screens.sales.gratuity_by_age") : ""}
                                                </When>
                                                <When value={!!item.discount}>
                                                    {item.discount && item.discount > 0 ? `${t("Words.discount")}: R$ ${item.discount.toFixed(2)}` : ""}
                                                </When>
                                                <When value={!item.gratuities && !item.discount}>
                                                    {`R$ ${price.toFixed(2)}`}
                                                </When>
                                            </div>
                                        </div>
                                    ))}
                                </Skeleton>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="px-2 bg-zinc-200">
                                <span className="font-semibold">{t("Words.subtotal")}</span>
                            </td>
                            <td className="pl-2">
                                R$: {(tour ? (resume?.length ?? 0) * price : 0).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 bg-zinc-200">
                                <span className="font-semibold">{t("Words.total")}</span>
                            </td>
                            <td className="pl-2">
                                R$: {(tour ? amountPaid : 0).toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <When value={hasResidency}>
                <div className="my-4">
                    <File {...register('residency_file')} label={t("Screens.sales.file_residency")} dataTestId="sale_residency" />
                    <span className="inline-block text-sm text-red mx-2 mt-1 mb-2">{t("Screens.sales.residency_notice")}</span>
                </div>
            </When>
            <div className="flex items-center justify-between mt-5">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("DEPENDENTS")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <Button isLoading={isLoadingSubmit} text={t("Words.finish")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block" />
                </div>
            </div>
        </div>
    )
}