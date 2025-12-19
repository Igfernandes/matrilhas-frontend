import { useCallback, useState } from "react";
import { FormType } from "../../type";
import { FormShape } from "@type/Forms";

export function useFormsTab() {
  const [formStatus, setFormStatus] = useState<FormType>("OPENED");
  const handleFilterForms = useCallback(
    (formType: FormType, form: FormShape) => {
      switch (formType) {
        case "OPENED":
          if (form.status === "DRAFT") return false;
          const notExpired =
            !form.expired_at || new Date(form.expired_at) > new Date();
          const hasStarted =
            !form.started_at || new Date(form.started_at) <= new Date();
          return notExpired && hasStarted;
        case "TERMINATED":
          if (form.status === "DRAFT") return true;

          return form.expired_at && new Date(form.expired_at) < new Date();
        case "RELEASES":
          if (form.status === "DRAFT") return false;
          return !form.started_at || new Date(form.started_at) >= new Date();
        default:
          return false;
      }
    },
    []
  );
  return {
    formStatus,
    setFormStatus,
    handleFilterForms,
  };
}
