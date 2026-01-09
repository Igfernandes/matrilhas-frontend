import { Color } from "@components/shared/forms/Color";
import { Input } from "@components/shared/forms/Input";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";
import { StoreFieldsPayload } from "./schemas";
import { Date } from "@components/shared/forms/Date";
import { Datetime } from "@components/shared/forms/DateTime";
import { File } from "@components/shared/forms/File";
import { useEffect } from "react";

export function ComponentsManager() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<StoreFieldsPayload>()
  const type = watch("type")
  const { t } = useI18n()

  useEffect(() => {
    setValue('value', undefined);
  }, [type, setValue])

  return (
    <>
      <When value={type === "TEXT"}>
        <Input
          {...register("value")}
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
          max={200}
        />
      </When>
      <When value={type === "COLOR"}>
        <Color
          {...register("value")}
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
        />
      </When>
      <When value={type === "NUMBER"}>
        <Input
          {...register("value")}
          type="number"
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
        />
      </When>
      <When value={type === "DATE"}>
        <Date
          {...register("value")}
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
        />
      </When>
      <When value={type === "DATETIME-LOCAL"}>
        <Datetime
          {...register("value")}
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
        />
      </When>
      <When value={type === "FILE"}>
        <File
          {...register("value")}
          label={t("Words.value")}
          dataTestId="identify"
          errors={errors.value}
        />
      </When>
    </>
  );
}
