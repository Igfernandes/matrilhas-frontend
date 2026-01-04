import { When } from "@components/utilities/When"
import { useManager } from "../hooks/useManager"
import dayjs from "dayjs"
import { useI18n } from "@contexts/I18n";

type Props = {
    value: string;
    index: string;
}

export function Manager({ value, index }: Props) {
    const { t } = useI18n()
    const { isDate, isOnlyString, builderText, isTranslateText } = useManager()

    return (
        <>
            <When value={isDate(value)}>
                <span>{dayjs(value).format("DD/MM/YYYY")}</span>
            </When>
            <When value={isOnlyString(value) && !isTranslateText(index)}>
                <span>{builderText(index, value)}</span>
            </When>
            <When value={isTranslateText(index)}>
                {t(`Words.${value.toLowerCase()}`)}
            </When>
        </>
    )
}