import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { ProfileFormProps } from "./type";

type Props = ProfileFormProps;

export function Address({ register, errors }: Props) {

    return (
        <div className="mt-6">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{i18n("Words.address")}</h2>
                <p className="text-sm">Informações de endereço e localização da agência.</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="country" {...register("address.country")} label={i18n("Words.country")} errors={errors?.address?.country} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="state" {...register("address.state")} label={i18n("Words.state")} errors={errors?.address?.state} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="city" {...register("address.city")} label={i18n("Words.city")} errors={errors?.address?.city} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input dataTestId="zipcode" {...register("address.zip_code")} label={i18n("Words.zipcode")} errors={errors?.address?.zip_code} />
                </div>
                <div className="w-full md:w-[20%] my-2">
                    <Input type="number" dataTestId="number" {...register("address.number")} label={i18n("Words.number")} errors={errors?.address?.number} />
                </div>
                <div className="w-full md:w-[78%] my-2">
                    <Input dataTestId="complement" {...register("address.complement")} label={i18n("Words.complement")} errors={errors?.address?.complement} />
                </div>
            </div>
        </div>

    )
}