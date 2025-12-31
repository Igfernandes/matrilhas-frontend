import i18n from "@configs/i18n";
import { ProfileFormProps } from "./type";
import { Button } from "@components/shared/forms/Button";
import dayjs from "dayjs";
import { When } from "@components/utilities/When";
import { Select } from "@components/shared/forms/Select";
import { useI18n } from "@contexts/I18n";
import { formatMoney } from "@helpers/currencies";
import { useMemo } from "react";

type Props = ProfileFormProps & {
    isLoading: boolean;
};

export function Sidebar({ register, sale, isLoading }: Props) {
    const { t } = useI18n()
    const subtotal = useMemo(() => {
        return (sale?.price ?? 0) * (sale?.amount ?? 0);
    }, [sale])
    const total = useMemo(() => {
        return subtotal - (sale?.discount ?? 0);
    }, [subtotal, sale]);

    return (
        <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
                <div className="mb-4">
                    <Select defaultValue={"PENDING"} options={["PAID", "PENDING", "CANCELED"]
                        .map(status => ({ text: t(`Words.${status.toLowerCase()}`), value: status }))}
                        {...register("status")} dataTestId="status" label={t("Words.status")} />
                </div>
                <div className="mb-4">
                    <table>
                        <tbody>
                            <tr>
                                <td className="w-20">
                                    <label htmlFor="price" className="block text-sm border border-black text-black mb-1 rounded-sm text-center font-semibold py-1">
                                        {i18n("Words.price")}
                                    </label>
                                </td>
                                <td>
                                    <input type="text" className="text-lg bg-secondary w-full px-2 py-1 shadow-sm" id="price" readOnly={true} value={formatMoney(sale?.price ?? 0, sale.currency ?? "REAL")} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-20">
                                    <label htmlFor="amount" className="block text-sm border border-black text-black mb-1 rounded-sm text-center font-semibold py-1">
                                        {i18n("Words.amount")}
                                    </label>
                                </td>
                                <td>
                                    <input type="text" className="text-lg bg-secondary w-full px-2 py-1 shadow-sm" id="amount" readOnly={true} value={sale?.amount ?? 0} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[7rem]">
                                    <label htmlFor="subtotal" className="block text-sm bg-warning text-white mb-1 rounded-sm text-center font-semibold py-1">
                                        {i18n("Words.subtotal")}
                                    </label>
                                </td>
                                <td>
                                    <input type="text" className="text-lg bg-secondary w-full px-2 py-1 shadow-sm" id="subtotal" readOnly={true} value={formatMoney(subtotal ?? 0, sale.currency ?? "REAL")} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[7rem]">
                                    <label htmlFor="discount" className="block text-sm bg-slate-400 text-white mb-1 rounded-sm text-center font-semibold py-1">
                                        {i18n("Words.discount")}
                                    </label>
                                </td>
                                <td>
                                    <input type="text" className="text-lg bg-secondary w-full px-2 py-1 shadow-sm" id="discount" readOnly={true} value={formatMoney(sale?.discount ?? 0, sale.currency ?? "REAL")} />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[7rem]">
                                    <label htmlFor="total" className="block text-sm bg-primary text-white mb-1 rounded-sm text-center font-semibold py-1">
                                        {i18n("Words.total")}
                                    </label>
                                </td>
                                <td>
                                    <input type="text" className="text-lg bg-secondary w-full px-2 py-1 shadow-sm" id="total" readOnly={true} value={formatMoney(total ?? 0, sale.currency ?? "REAL")} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <hr className="lg:my-6 border-secondary" />
                <When value={!!sale}>
                    <div>
                        <ul className="text-center">
                            <li className="mb-2"><strong className="bg-primary text-white mb-1 block rounded-sm">Criado em:</strong> <span>{dayjs(sale?.created_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                            <li className="md:hidden lg:block"><strong className="block bg-primary text-white mb-1 rounded-sm">Aturalizado em:</strong> <span>{dayjs(sale?.updated_at).format("DD/MM/YYYY HH:mm")}</span> </li>
                        </ul>
                    </div>
                    <hr className="border-secondary" />
                </When>
            </div>
            <div className="w-full mt-auto ">
                <div className="w-full ml-auto mt-3  mb-1">
                    <Button isLoading={isLoading} text={i18n("Words.update")} />
                </div>
            </div>

        </div>
    )
}