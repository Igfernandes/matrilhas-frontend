import { useRecaptcha } from "@hooks/useRecaptcha";
import usePostSubmitForm from "@services/Forms/Post/usePostSubmitForm";
import { FormsShape } from "@type/Forms";
import { FormEvent } from "react";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

type Props = {
  form: FormsShape;
};

export function useForm({ form }: Props) {
  const { token, handleLoaded } = useRecaptcha(RECAPTCHA_KEY ?? "", "login");
  const { mutateAsync: postSubmitForm, isPending: isLoading } =
    usePostSubmitForm();
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    handleLoaded();
    const formElement = ev.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append("g-recaptcha-response", token);
    formData.append("form_id", String(form.id));
    handleLoaded();

    postSubmitForm(formData);
  };
  return {
    handleSubmit,
    isLoading,
  };
}
