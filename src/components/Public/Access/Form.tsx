import { Button } from "@components/shared/forms/Button";
import { Password } from "@components/shared/forms/Password";
import { publicRoutes } from "@configs/routes/Web/navigation";
import Link from "next/link";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useRecaptcha } from "@hooks/useRecaptcha";
import { useI18n } from "@contexts/I18n";

type Props = {
  csrf: CSRFShape;
};

export function AccessForm({ csrf }: Props) {
  const { Recaptcha, recaptchaInstance, isRecaptchaLoaded } = useRecaptcha()
  const {
    handleSubmit,
    register,
    formMethods,
    isAllFilled,
    isLoading,
    errors,
    isSuccess
  } = useForm({ csrf, recaptchaInstance });
  const { forgotPassword } = publicRoutes;
  const { t } = useI18n()

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            errors={errors.login}
            {...register("login")}
            dataTestId="login"
            label={t("Words.login")}
          />
        </div>
        <div className="form-group my-4">
          <Password
            errors={errors.password}
            dataTestId="password"
            label={t("Words.password")}
            {...register("password")}
          />
        </div>
        <Recaptcha />
        <div className="sm:flex justify-between items-center">
        
          <div className="mt-4 sm:mt-0 ml-auto">
            <Link
              href={forgotPassword}
              className="text-sm text-white relative top-[-3.5px]"
            >
              <strong>{t("Screens.login.forgot_password")}</strong>
            </Link>
          </div>
        </div>
        <div className="form-submit mt-2">
          <Button
            text={isSuccess ? t("Texts.redirect") : t("Words.connect")}
            type="submit"
            className="border-2 border-white"
            isLoading={isLoading || isRecaptchaLoaded}
            disabled={!isAllFilled || isSuccess}
          />
        </div>
      </form>
    </FormProvider>
  );
}
