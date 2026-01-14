import { PasswordValidation } from "@components/shared/forms/PasswordValidation";
import { Modal } from "@components/shared/layouts/Modal";
import { ModalProps } from "@components/shared/layouts/Modal/type";
import { FormProvider } from "react-hook-form";
import { useModalAlterPassword } from "./hooks/useModalAlterPassword";
import { Button } from "@components/shared/forms/Button";
import { useI18n } from "@contexts/I18n";

type Props = Pick<ModalProps, "handleModal" | "isShowModal"> & {};

export function ModalAlterPassword({ handleModal, isShowModal }: Props) {
  const { t } = useI18n()
  const { formMethods, handleSubmit, submit, isLoading } =
    useModalAlterPassword({ handleModal });

  return (
    <Modal
      title={t("Texts.password_alter")}
      handleModal={handleModal}
      isShowModal={isShowModal}
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full md:min-w-[400px]"
        >
          <PasswordValidation
            className="mt-4"
            dataTestId="new_password"
            label={t("Texts.new_password")}
          />
          <Button
            type="submit"
            text={t("Words.alter")}
            isLoading={isLoading}
            className="mt-6"
          />
        </form>
      </FormProvider>
    </Modal>
  );
}
