import { useI18n } from "@contexts/I18n"
import { useSalesContext } from "../context"
import { ClockBI } from "@assets/Icons/black/ClockBI"
import { othersColors } from "@assets/colors/colors"
import { PeopleAddBI } from "@assets/Icons/black/PeopleAddBI"
import { formatMoney } from "@helpers/currencies"
import { When } from "@components/utilities/When"

export function Footer() {
    const { t } = useI18n()
    const { tour } = useSalesContext()

    return (
        <div className="hidden md:block mt-2 bg-secondary p-2 text-center font-semibold shadow-sm">
            <div>
                <span>{tour?.title}</span>
            </div>
            <hr className="border-zinc-300 my-2" />
            <div className="flex justify-center items-center">
                <When value={!!tour?.activity_period?.value  && !!tour?.activity_period?.unit}>
                    <div>
                        <p className="flex items-center mt-1 px-1">
                            <strong><ClockBI fill={othersColors.primary} width={15} height={15} /></strong>
                            <span className="text-sm ml-2">{tour?.activity_period?.value} {t(`Words.${tour?.activity_period?.unit}`)}</span>
                        </p>
                    </div>
                </When>
                <div>
                    <span className="flex items-center mt-1 px-1 ml-4">
                        <strong><PeopleAddBI fill={othersColors.primary} width={20} height={20} /></strong>
                        <span className="text-sm ml-2">{tour?.slots}</span>
                    </span>
                </div>
                <span className="text-cross-white-secondary mx-4">|</span>
                <div className="text-center text-sm px-1 mt-1">
                    <span style={{
                        textDecoration: tour?.promotional_price ? "line-through" : "none"
                    }} className="text-primary">{formatMoney(tour?.price ?? 0, tour?.currency ?? "REAL")}</span>
                    <span className="text-warning inline-block ml-2">{tour?.promotional_price ? " Por " + formatMoney(tour?.promotional_price, tour?.currency) : ""}</span>
                </div>
            </div>

        </div>
    )
}