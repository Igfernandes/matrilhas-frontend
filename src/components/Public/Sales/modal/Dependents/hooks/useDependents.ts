import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function useDependents() {
  const { watch, setValue } = useFormContext();
  const { register, getValues, setValue: setControl } = useForm();
  const dependents = watch("dependents");
  const amount = useMemo(() => {
    const data = {
      adults: 0,
      children: 0,
    };

    if (!dependents || dependents.length === 0) return data;

    for (const dependent of dependents) {
      if (dayjs().diff(dayjs(dependent.birthdate, "DD/MM/YYYY"), "year") < 18) {
        data.children += 1;
      } else {
        data.adults += 1;
      }
    }

    return data;
  }, [dependents]);
  const [errors, setErrors] = useState<boolean>(false);

  const handleAddDependent = useCallback(() => {
    const { name, birthdate, cpf } = getValues();

    if (!name || !birthdate || !cpf) {
      setErrors(true);
      return;
    } else {
      setErrors(false);
    }

    setValue("dependents", [
      ...(dependents ?? []),
      {
        name: name || "",
        cpf: cpf || "",
        birthdate: birthdate || "",
      },
    ]);
    setControl("name", "");
    setControl("cpf", "");
    setControl("birthdate", "");
  }, [dependents, setValue, getValues, setControl]);

  return {
    dependents,
    errors,
    register,
    handleAddDependent,
    amount,
  };
}
