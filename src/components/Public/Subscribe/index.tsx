import { Section } from "@components/shared/layouts/Section";

import { Input } from "@components/shared/forms/Input";
import { useSubscribe } from "./hooks/useSubscribe";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/forms/Button";
import { Phone } from "@components/shared/forms/Phone";

import { useI18n } from "@contexts/I18n";

export function Subscribe() {
  const { formMethods, handleSubmit, register, isLoading, onSubmit } =
    useSubscribe();
  const { t } = useI18n();
  return (
    <Section>
      <div className="content mt-15 mb-5">
        <div className="text-sm md:text-md text-center md:text-left title ">
          <span>{t("Screens.newsletter.title")}</span>
          <h1 className="text-lg md:text-2xl text-center md:text-left text-primary">
            <strong>{t("Screens.newsletter.subtitle")}</strong>
          </h1>
        </div>
        <div className="mb-4">
          <h3 className="text-center md:text-left font-semibold">
            {t("Screens.newsletter.description")}
          </h3>
        </div>
        <div className="bg-primary rounded-md">
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-[32%] my-3">
                <Input
                  dataTestId="name"
                  {...register("name")}
                  label={t("Words.name")}
                />
              </div>
              <div className="w-full md:w-[32%] my-3 mx-1">
                <Phone
                  dataTestId="phone"
                  {...register("phone")}
                  label={t("Words.phone")}
                />
              </div>
              <div className="w-full md:w-[10rem] my-3">
                <Button
                  text={t("Words.subscribe")}
                  className="border-white border-2 py-3 text-white font-semibold"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Section>
  );
}
