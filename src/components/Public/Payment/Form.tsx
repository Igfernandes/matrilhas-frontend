import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { usePaymentForm } from "./hooks/usePaymentForm";
import { OrderSummary } from "./OrderSummary";
import { ChargePreviewShape } from "./types";
import { Phone } from "@components/shared/forms/Phone";
import { CPF } from "@components/shared/forms/CPF";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

type Props = {
  charge: ChargePreviewShape;
};

export function PaymentForm({ charge }: Props) {
  const { t } = useI18n()
  const {
    errors,
    formMethods,
    handleSubmit,
    onSubmit,
    register,
    isLoading,
    hasAllFilledFields
  } = usePaymentForm();
  const currentPrice = useMemo(() => charge.promotional_price
    ? charge.promotional_price
    : charge.price, [charge.price, charge.promotional_price]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content flex">
          <div className="w-4/6">
            <div className="form-group w-full mb-4 lg:mb-6">
              <Phone
                {...register("phone")}
                dataTestId="phone"
                label={t("Words.phone")}
                required={true}
                errors={errors.phone}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <CPF
                {...register("cpf")}
                dataTestId="cpf"
                label={t("Words.cpf")}
                required={true}
                errors={errors.cpf}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("name")}
                dataTestId="name"
                label={t("Words.name")}
                required={true}
                errors={errors.name}
              />
            </div>
            <div className="form-group w-full mb-4 lg:mb-6">
              <Input
                {...register("email")}
                dataTestId="email"
                label={t("Words.email")}
                required={true}
                errors={errors.email}
              />
            </div>
          </div>
          <div className="w-2/6">
            <OrderSummary
              type={charge.type}
              products={[
                {
                  title: charge.title,
                  price: currentPrice,
                  amount: 1,
                  max: charge.amount ?? 1,
                },
              ]}
              isLoading={isLoading}
              hasAllFilledFields={hasAllFilledFields}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
