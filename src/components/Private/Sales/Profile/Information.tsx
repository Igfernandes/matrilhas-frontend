import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { CPF } from "@components/shared/forms/CPF";
import { useFormContext } from "react-hook-form";
import { useI18n } from "@contexts/I18n";
import { Date } from "@components/shared/forms/Date";
import { Phone } from "@components/shared/forms/Phone";

type Props = ProfileFormProps;

export function Information({ errors }: Props) {
    const { register } = useFormContext()
    const { t } = useI18n()
    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Texts.client_information")}</h2>
                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_client_information")}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full my-2">
                    <Input required={true} dataTestId="name" maxLength={100} {...register("name")} label={t("Words.name")} errors={errors?.name} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="email" required={true}  {...register("email")} label={t("Words.email")} errors={errors?.email} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Phone dataTestId="phone" required={true}  {...register("phone")} label={`${t("Words.phone")}/Whatsapp`} errors={errors?.phone} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <CPF {...register("cpf")}  required={true} dataTestId="cpf" label={t("Words.cpf")} errors={errors?.cpf} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date dataTestId="birthdate" required={true}  {...register("birthdate")} label={t("Words.birthdate")} errors={errors?.birthdate} />
                </div>
            </div>
        </div>

    )
}