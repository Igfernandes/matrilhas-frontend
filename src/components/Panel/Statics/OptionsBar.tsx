import { Button } from "@components/shared/forms/Button";
import { Date } from "@components/shared/forms/Date";
import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";

export function OptionsBar() {
  const { register } = useFormContext()
  const { t } = useI18n()

  return (
    <div className="relative flex flex-wrap justify-center bg-white shadow py-4 rounded-md items-center md:flex-nowrap mb-4 ">
      <div className="w-full md:w-1/3 md:mr-2">
        <Date {...register("started_at")} label={t("Words.started_at")} dataTestId="started_dates" className="mr-4" />
      </div>
      <div className="w-full md:w-1/3">
        <Date {...register("ended_at")} label={t("Words.until")} dataTestId="ended_at" />
      </div>
      <div className="w-full md:w-40 md:ml-2">
        <Button text={t("Words.filter")} />
      </div>
    </div>
  );
}
