import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { TextArea } from "@components/shared/forms/TextArea";
import { useI18n } from "@contexts/I18n";
import { Phone } from "@components/shared/forms/Phone";
import { CNPJ } from "@components/shared/forms/CNPJ";

type Props = ProfileFormProps;

export function Information({ register, errors }: Props) {
    const { t } = useI18n()
    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Words.information")}</h2>
                <p className="text-sm">{t("Screens.dashboard.agencies.information_description")}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full my-2">
                    <Input required={true} maxLength={150} dataTestId="name" {...register("name")} label={t("Words.name")} errors={errors?.name} />
                </div>
                <div className="w-full my-2">
                    <Input dataTestId="email" maxLength={250} {...register("email")} label={t("Words.email")} errors={errors?.email} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Phone dataTestId="phone" {...register("phone")} label={`${t("Words.phone")}/Whatsapp`} errors={errors?.phone} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <CNPJ {...register("cnpj")} required={true} dataTestId="cnpj" label={t("Words.cnpj")} errors={errors?.cnpj} />
                </div>
                <div className="w-full">
                    <TextArea dataTestId="describe" maxLength={7000}  {...register("describe")} label={t("Words.describe")} className="h-40" errors={errors?.describe} ></TextArea>
                </div>
            </div>
        </div>

    )
}