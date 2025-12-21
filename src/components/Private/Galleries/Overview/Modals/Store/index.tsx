import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useClientCreateModal";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FieldError, FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { useModalContext } from "@contexts/Modal";
import { Select } from "@components/shared/forms/Select";

export function GalleryCreateModal() {
  const { handleToggleModal, modal } = useModalContext()
  const { formMethods, handleSubmit, submit, isLoading } = useModalForm();
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal title={i18n("Screens.dashboard.galleries.title_create")} isShowModal={modal.type === "CREATE"} handleModal={() => handleToggleModal(false)}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[300px]">
          <div className="my-2 md:my-6">
            <div
            >
              <div className="form-group my-4">
                <Input
                  {...register("title")}
                  label={i18n("Words.title")}
                  dataTestId="title"
                  required={true}
                  errors={errors.title}
                />
              </div>
              <div className="form-group">
                <Select
                  {...register("status")}
                  label={i18n("Words.status")}
                  id="status"
                  dataTestId="status"
                  options={[
                    {
                      text: i18n("Words.active"),
                      value: "PUBLISHED",
                    },
                    {
                      text: i18n("Words.inactive"),
                      value: "DRAFT",
                    },
                  ]}
                  errors={errors.status as FieldError}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex flex-wrap md:flex-nowrap justify-between pt-4 border-t-2 border-secondary">
            <div className="mt-4 md:my-auto w-full">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-primary font-semibold text-white"
                  text={i18n("Words.save")}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
