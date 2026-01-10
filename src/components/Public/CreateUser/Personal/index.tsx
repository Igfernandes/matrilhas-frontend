import { useFormContext } from "react-hook-form";
import { Input } from "@components/shared/forms/Input";
import { Button } from "@components/shared/layouts/Button";
import { CreateUserPayload } from "../hooks/useSchema";
import dayjs from "dayjs";
import { Date } from "@components/shared/forms/Date";
import { useI18n } from "@contexts/I18n";
import { CPF } from "@components/shared/forms/CPF";

type Props = {
  handleToggleStageForm: (stageForm: "PERSONAL" | "CREDENTIALS") => void;
};

export function Personal({ handleToggleStageForm }: Props) {
  const { t } = useI18n()
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateUserPayload>();

  return (
    <div>
      <div className="form-group my-6">
        <CPF
          {...register("cpf")}
          label={t("Words.cpf")}
          dataTestId="name"
          required={true}
          errors={errors.cpf}
        />
      </div>
      <div className="form-group my-6">
        <Date
          {...register("birthdate")}
          label={t("Words.birthdate")}
          dataTestId="name"
          required={true}
          max={dayjs().subtract(15, "years").format("YYYY-MM-DD")}
          errors={errors.birthdate}
        />
      </div>

      <div className="form-group my-6">
        <Input
          {...register("keyword")}
          label={t("Words.keyword")}
          dataTestId="keyword"
          required={true}
          errors={errors.keyword}
          tooltip="Será utilizado para recuperação de senha"
        />
      </div>

      <div className="form-button mt-4">
        <Button
          onClick={() => handleToggleStageForm("CREDENTIALS")}
          type="button"
          text={t("Words.proceed")}
          className="bg-primary font-semibold text-white"
        />
      </div>
    </div>
  );
}
