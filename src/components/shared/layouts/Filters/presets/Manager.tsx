import { When } from "@components/utilities/When"
import { useManager } from "../hooks/useManager"
import dayjs from "dayjs"
import { StatusText } from "@components/shared/others/StatusText";
import { Status } from "@type/status";

type Props = {
    value: string;
    index: string;
}

export function Manager({ value, index }: Props) {
    const { isDate, isOnlyString, builderText } = useManager()

    return (
        <>
            <When value={isDate(value)}>
                <span>{dayjs(value).format("DD/MM/YYYY")}</span>
            </When>
            <When value={isOnlyString(value) && index !== "status"}>
                <span>{builderText(index, value)}</span>
            </When>
            <When value={index === "status"}>
                <StatusText status={value as Status} />
            </When>
        </>
    )
}