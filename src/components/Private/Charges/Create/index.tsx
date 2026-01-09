import { FormProvider } from "react-hook-form";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Definitions } from "@components/Private/Charges/Create/Definitions";
import { Button } from "@components/shared/layouts/Button";
import { useCharge } from "./hooks/useCharge";
import { useRouter } from "next/router";
import { CheckList } from "../CheckList";
import { useI18n } from "@contexts/I18n";

export function CreateCharge() {
  const { t } = useI18n()
  const { formMethods, submit, isPending } = useCharge();
  const router = useRouter();

  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submit)}>
          <Definitions />
          <CheckList />
          <div
            className={
              "flex items-center flex-wrap lg:flex-nowrap w-full lg:w-auto mt-6 bg-white rounded-lg py-4 px-6"
            }
          >
            <div className="flex justify-end w-full">
              <div className="lg:ml-8 w-[47%] lg:w-auto">
                <Button
                  className="p-3 border-[1px] border-secondary rounded-xl w-full"
                  text={t(`Words.cancel`)}
                  type="button"
                  onClick={() => router.push(privateRoutes.finance)}
                />
              </div>
              <div className="ml-4 w-[47%] lg:w-auto">
                <Button
                  className="p-3 bg-primary text-white rounded-xl w-full"
                  text={true ? t(`Words.save`) : t(`Words.update`)}
                  isLoading={isPending}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
