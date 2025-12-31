import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function useDependents() {
  const { watch, setValue, getValues, register } = useFormContext();
  const dependents = watch("dependents");
  const amount = useMemo(() => {
    const data = {
      adults: 0,
      children: 0,
    };

    if (!dependents || dependents.length === 0) return data;

    for (const dependent of dependents) {
      if (dayjs().diff(dayjs(dependent.birthdate), "year") < 18) {
        data.children += 1;
      } else {
        data.adults += 1;
      }
    }

    return data;
  }, [dependents]);
  const [errors, setErrors] = useState<boolean>(false);

  const handleAddDependent = useCallback(() => {
    const { dependent_name, dependent_birthdate, dependent_cpf } = getValues();

    if (!dependent_name || !dependent_birthdate || !dependent_cpf) {
      setErrors(true);
      return;
    } else {
      setErrors(false);
    }

    setValue("dependents", [
      ...(dependents ?? []),
      {
        name: dependent_name,
        cpf: dependent_cpf,
        birthdate: dependent_birthdate,
      },
    ]);
    setValue("dependent_name", "");
    setValue("dependent_cpf", "");
    setValue("dependent_birthdate", "");
  }, [dependents, setValue, getValues]);

  return {
    dependents,
    errors,
    register,
    handleAddDependent,
    amount,
  };
}
