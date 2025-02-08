import { Button } from "@components/shared/forms/Button";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { Password } from "@components/shared/forms/Password";
import { userRoutes } from "@configs/routes/Web/navigation";
import Link from "next/link";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";

export function LoginForm() {
  const { handleSubmit, register, formMethods, hasAllFilledFields, isLoading } =
    useForm();
  const { forgotPassword } = userRoutes;
  
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input {...register("login")} dataTestId="login" label={"E-mail"} />
        </div>
        <div className="form-group my-4">
          <Password
            dataTestId="password"
            label={"Password"}
            {...register("password")}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Checkbox dataTestId="remember-me" label={"Lembre de mim"} />
          </div>
          <div>
            <Link
              href={forgotPassword}
              className="text-sm text-red relative top-[-3.5]"
            >
              <strong>{"Esqueci a minha senha"}</strong>
            </Link>
          </div>
        </div>
        <div className="form-submit mt-6">
          <Button
            text="Enviar"
            type="submit"
            isLoading={isLoading}
            disabled={!hasAllFilledFields()}
          />
        </div>
      </form>
    </FormProvider>
  );
}
