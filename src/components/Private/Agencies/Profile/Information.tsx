import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { ProfileFormProps } from "./type";
import { handleMaskCNPJ, handleMaskPhone } from "@helpers/string";
import { TextArea } from "@components/shared/forms/TextArea";

type Props = ProfileFormProps;

export function Information({ register, errors }: Props) {

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{i18n("Words.information")}</h2>
                <p className="text-sm">Informações de cadastro e gerais sobre a agência.</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full my-2">
                    <Input required={true} dataTestId="name" {...register("name")} label={i18n("Words.name")} errors={errors?.name} />
                </div>
                <div className="w-full my-2">
                    <Input dataTestId="email" {...register("email")} label={i18n("Words.email")} errors={errors?.email} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="phone" {...register("phone")} onChangeCapture={handleMaskPhone} label={`${i18n("Words.phone")}/Whatsapp`} errors={errors?.phone} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("cnpj")} required={true} onChangeCapture={handleMaskCNPJ} dataTestId="cnpj" label={i18n("Words.cnpj")} errors={errors?.cnpj} />
                </div>
                <div className="w-full">
                    <TextArea dataTestId="describe"  {...register("describe")} label={i18n("Words.describe")} className="h-40" errors={errors?.describe} >
                    </TextArea>
                </div>
            </div>
        </div>

    )
}