import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCreatePayload, ClientCreateSchema } from "../schemas";
import usePostCreateClient from "../../../../../../../services/Clients/Post/usePost";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useModalContext } from "@contexts/Modal";
import { Validations } from "@helpers/validations";
import i18n from "@configs/i18n";

dayjs.extend(customParseFormat);

export function useModalForm() {
  const { formMethods, handleSubmit } = useFormRules<ClientCreatePayload>({
    schema: ClientCreateSchema,
  });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postCreateClient, isPending } = usePostCreateClient();
  const { watch, setError } = formMethods;

  const submit = ({ birthdate, ...payload }: ClientCreatePayload) => {
    if (Validations.cpf(payload.cpf))
      return setError("cpf", {
        type: "manual",
        message: i18n("Validations.cpf"),
      });
      
    postCreateClient({
      ...payload,
      birthdate: birthdate
        ? dayjs(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD")
        : undefined,
    }).then(() => {
      const isContinueRegister = watch("hasContinueRegister");
      formMethods.reset();

      if (isContinueRegister == false) handleToggleModal(false);
    });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
  };
}
