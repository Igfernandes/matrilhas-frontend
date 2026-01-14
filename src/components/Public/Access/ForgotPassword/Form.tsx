import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";

export function RecoverPasswordForm() {
  const {
    handleSubmit,
    register,
    formMethods,
    isAllFilled,
    isLoading,
    errors,
  } = useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            errors={errors.login}
            {...register("login")}
            dataTestId="login"
            label={"Login"}
            placeholder={i18n("Texts.enter_login")}
          />
        </div>
        <div className="form-submit mt-6">
          <Button
            text={i18n("Words.send")}
            type="submit"
            isLoading={isLoading}
            disabled={!isAllFilled}
          />
        </div>
      </form>
    </FormProvider>
  );
}
