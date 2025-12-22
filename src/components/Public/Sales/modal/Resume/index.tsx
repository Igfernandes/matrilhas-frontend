import { useI18n } from "@contexts/I18n"
import { useSalesContext } from "../../context"
import { useResume } from "./hooks/useResume"
import { When } from "@components/utilities/When"
import { useMemo } from "react"
import { ResumeShape } from "./type"
import { File } from "@components/shared/forms/File"
import { useFormContext } from "react-hook-form"
import { Password } from "@components/shared/forms/Password"

export function Resume() {
    const { handleStep, tour } = useSalesContext()
    const { t } = useI18n()
    const { register } = useFormContext()
    const { resume, isClient } = useResume();
    const price = useMemo(() => {
        return tour ? (tour?.promotional_price ?? tour?.price ?? 0) : 0
    }, [tour])
    const amountPaid = useMemo(() => {
        const price = (tour?.promotional_price ?? tour?.price ?? 0)
        if (!resume) return price;
        const result = resume.reduce((acc: number, curr: ResumeShape) => {
            if (curr.gratuities) return acc;
            return acc + (curr.discount ? (price - curr.discount) : price);
        }, 0);
        return result > 0 ? result : price;
    }, [resume, tour])
    const hasResidency = useMemo(() => {
        if (!resume) return false;
        return resume.some((item: ResumeShape) => !!item.residency);
    }, [resume])


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
                            <th className="bg-zinc-300 text-zinc-800">Passageiro</th>
                            <th className="bg-zinc-300 text-zinc-800">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="py-2 px-2">
                                {(resume ?? []).map((item: ResumeShape, index: number) => (
                                    <div key={`line_${index}`} className="flex max-h-[10vh] overflow-y-auto odd:bg-zinc-100 text-sm">
                                        <div className="w-full md:w-1/2">
                                            <span className="">{item.name}</span>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <When value={item.gratuities}>
                                                {item.gratuities ? "Gratuidade pela idade" : ""}
                                            </When>
                                            <When value={!!item.discount}>
                                                {item.discount && item.discount > 0 ? `Desconto: R$ ${item.discount.toFixed(2)}` : ""}
                                            </When>
                                            <When value={!item.gratuities && !item.discount}>
                                                {`R$ ${price.toFixed(2)}`}
                                            </When>
                                        </div>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="px-2 bg-zinc-200">
                                <span className="font-semibold">Subtotal</span>
                            </td>
                            <td className="pl-2">
                                R$: {(tour ? (resume?.length ?? 0) * price : 0).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 bg-zinc-200">
                                <span className="font-semibold">Total</span>
                            </td>
                            <td className="pl-2">
                                R$: {(tour ? amountPaid : 0).toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <When value={hasResidency}>
                <div>
                    <File {...register('residency')} label="Comprovante de Residência" dataTestId="sale_residency" />
                    <span>É necessário anexar o comprovante de residência para garantir o benefício.</span>
                </div>
            </When>
            <When value={!isClient}>
                <div className=" my-2">
                    <Password dataTestId="sale_password" label={t("Words.password")} {...register('password')} />
                    <span className="text-red text-xs">Insira uma senha para que possa acessar sua conta posteriormente.*</span>
                </div>
            </When>
            <div className="flex items-center justify-between mt-5">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("DEPENDENTS")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button type="submit" className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.finish")}
                    </button>
                </div>
            </div>
        </div>
    )
}