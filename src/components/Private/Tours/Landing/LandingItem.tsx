import { Input } from "@components/shared/forms/Input";
import { AccordionItemContent } from "@components/shared/layouts/Accordion/AccordionItemContent";
import { AccordionItemHeader } from "@components/shared/layouts/Accordion/AccordionItemHeader";
import { useI18n } from "@contexts/I18n";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { COUNTRIES } from "../../../../data/address/countries";
import { BRAZILIAN_STATES } from "../../../../data/address/states";
import { Select } from "@components/shared/forms/Select";
import { When } from "@components/utilities/When";
import { LandingPayload } from "./LandingSchemas";
import { AccordionItem } from "@components/shared/layouts/Accordion/AccordionItem";
import { Trash } from "@assets/Icons/black/Trash";

type Props = {
    id: number;
    onRemove: (id: number) => void;
}

export function LandingItem({ id, onRemove }: Props) {
    const { t } = useI18n()
    const countriesRef = useRef<{ code: string, name: string }[]>(COUNTRIES ?? [])
    const statesRef = useRef<{ code: string, name: string }[]>(BRAZILIAN_STATES ?? [])
    const { register, watch, formState: { errors } } = useFormContext<LandingPayload>()
    const address = watch(`address.${id}`)
    const title = !address || Object.keys(address).length === 0 ? t("Texts.define_first_option") :
        `${address.complement ? address.complement + ", " : ""} ${address.city} - ${address.state}, ${address.country}`

    return (
        <AccordionItem>
            <AccordionItemHeader accordionId={1} title={title} />
            <AccordionItemContent accordionId={1}>
                <div className="mt-2">
                    <div className="text-right ">
                        <span className="inline-block cursor-pointer" onClick={() => onRemove(id)}><Trash width={15} className="fill-rose-400" /></span>
                    </div>
                    <div className="flex flex-wrap justify-between pb-5">
                        <div className="w-full md:w-[30%] my-2">
                            <Input type="hidden" dataTestId="destiny_type" {...register(`address.${id}.type`)} defaultValue={"DESTINY"} />
                            <Select defaultValue={"Brasil"} dataTestId={`address.${id}.country`} options={countriesRef.current.map(country => ({ value: country.name, text: country.name }))} {...register(`address.${id}.country`)} label={t("Words.country")} errors={errors?.address?.[id]?.country} />
                        </div>
                        <When value={!address?.country || address.country === "Brasil"}>
                            <div className="w-full md:w-[30%] my-2">
                                <Select defaultValue={"Rio de Janeiro"} dataTestId={`address.${id}.state`} options={statesRef.current.map(state => ({ value: state.name, text: state.name }))} {...register(`address.${id}.state`)} label={t("Words.state")} errors={errors?.address?.[id]?.state} />
                            </div>
                        </When>
                        <When value={!!address?.country && address.country !== "Brasil"}>
                            <div className="w-full md:w-[30%] my-2">
                                <Input defaultValue={"Rio de Janeiro"} dataTestId={`address.${id}.state`} {...register(`address.${id}.state`)} label={t("Words.state")} errors={errors?.address?.[id]?.state} />
                            </div>
                        </When>
                        <div className="w-full md:w-[30%] my-2">
                            <Input dataTestId={`address.${id}.city`} {...register(`address.${id}.city`)} label={t("Words.city")} errors={errors?.address?.[id]?.city} />
                        </div>
                        <div className="w-full md:w-[100%] my-2">
                            <Input dataTestId={`address.${id}.complement`} {...register(`address.${id}.complement`)} label={t("Words.complement")} errors={errors?.address?.[id]?.complement} />
                        </div>
                    </div>
                </div>
            </AccordionItemContent>
        </AccordionItem>
    )
}