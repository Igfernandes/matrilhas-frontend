import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import i18n from "@configs/i18n";
import { useDefinitions } from "./hooks/useDefinitions";
import { useFormContext } from "react-hook-form";
import { ChargesPayload } from "./schemas";

export function Definitions() {
  const { services } = useDefinitions();
  const {
    register,
    formState: { errors },
  } = useFormContext<ChargesPayload>();

  return (
    <div className="bg-white  py-4 px-6 rounded-xl mb-6">
      <div className="form-title mt-3 mb-5">
        <h3 className="text-xl">
          <strong>{i18n("words.definitions")}</strong>
        </h3>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("title")}
            dataTestId="title"
            label={i18n("words.charge_name")}
            errors={errors.title}
          />
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("service_id")}
            dataTestId="service"
            label={`${i18n("words.service")} (${i18n("words.optional")})`}
            options={[
              {
                text: i18n("words.select_service"),
                value: 0,
              },
              ...services.map((service) => ({
                text: service.name,
                value: service.id,
              })),
            ]}
            errors={errors.service_id}
          />
          <span className="text-xs text-red ml-2 block mt-1">
            {i18n(`charges.about_name_and_service`)}
          </span>
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("privacy")}
            dataTestId="privacy"
            label={i18n("words.privacy")}
            options={["PUBLIC", "PRIVATE"].map((type) => ({
              text: i18n(`words.${type.toLowerCase()}`),
              value: type,
            }))}
            required={true}
            errors={errors.privacy}
          />
          <span className="text-xs text-red ml-2 block mt-1">
            {i18n(`charges.about_privacy_and_services`)}
          </span>
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("amount")}
            type="number"
            dataTestId="amount"
            label={`${i18n("words.charge_amount")}`}
            min={1}
            required={true}
            errors={errors.amount}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("type")}
            dataTestId="type"
            label={i18n("words.charge_type")}
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: i18n(`words.${type.toLowerCase()}`),
              value: type,
            }))}
            errors={errors.type}
          />
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("expired_at")}
            type="datetime-local"
            placeholder=" "
            dataTestId="expired_at"
            label={`${i18n("words.charge_expired_at")} (${i18n(
              "words.optional"
            )})`}
            errors={errors.expired_at}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("price")}
            dataTestId="price"
            label={i18n("words.price")}
            type="number"
            errors={errors.price}
          />
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("promotional_price")}
            dataTestId="promotional_price"
            errors={errors.promotional_price}
            label={`${i18n("words.promotional_price")} (${i18n(
              "words.optional"
            )})`}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
