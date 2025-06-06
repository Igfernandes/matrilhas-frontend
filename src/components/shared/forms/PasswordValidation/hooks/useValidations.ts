import { useEffect, useMemo, useState } from "react";
import { CriteriaStatusShape, StatusValidation } from "../type";
import {
  hasMinLength,
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { useFormContext } from "react-hook-form";

export function useValidations() {
  const { watch, getValues } = useFormContext();
  const password = watch("password");
  const [validationsStatus, setValidationsStatus] =
    useState<StatusValidation>("void");
  const fieldsAllEmpties = useMemo(() => {
    return {
      hasLowercase: "void",
      hasUppercase: "void",
      hasNumber: "void",
      hasSpecialLetter: "void",
      hasMinEightLetters: "void",
    } as CriteriaStatusShape;
  }, []);
  const [criteriaStatus, setCriteriaStatus] =
    useState<CriteriaStatusShape>(fieldsAllEmpties);

  useEffect(() => {
    if (!password) return setCriteriaStatus(fieldsAllEmpties);

    setCriteriaStatus({
      hasMinEightLetters: getStatus(hasMinLength(8, password)),
      hasUppercase: getStatus(hasSomeLetterUppercase(password)),
      hasLowercase: getStatus(hasSomeLetterLowercase(password)),
      hasNumber: getStatus(hasSomeNumber(password)),
      hasSpecialLetter: getStatus(hasSomeSpecialCharacter(password)),
    });
  }, [password, fieldsAllEmpties]);

  const handleChangeValidationsStatus = () => {
    const password = getValues("password");
    if (!password) return setValidationsStatus("void");

    const criteria = {
      hasMinEightLetters: getStatus(hasMinLength(8, password)),
      hasUppercase: getStatus(hasSomeLetterUppercase(password)),
      hasLowercase: getStatus(hasSomeLetterLowercase(password)),
      hasNumber: getStatus(hasSomeNumber(password)),
      hasSpecialLetter: getStatus(hasSomeSpecialCharacter(password)),
    };

    const criteriaFiltered = Object.entries(criteria).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([key, value]) => value !== "success"
    );
    setValidationsStatus(criteriaFiltered.length == 0 ? "success" : "error");
  };

  const getStatus = (resp: boolean) => (resp ? "success" : "error");

  return {
    handleChangeValidationsStatus,
    validationsStatus,
    criteriaStatus,
  };
}
