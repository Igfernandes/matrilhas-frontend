import i18n from "@configs/i18n";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { useClientCategoriesModal } from "./hooks/useClientCategoriesModal";

export function ClientCategoriesModal({
  isShowModal,
  onModal,
  categories = [],
  selectors = [],
}: ModalFormProps) {
  const { formMethods, register, errors, submit, modal, isLoading } = useClientCategoriesModal({
    selectors,
  });

  return (
    <Modal title={i18n(modal.type === "CHANGE_ALL_CATEGORY" ? "Texts.all_alter_category" : "Texts.alter_category")} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(submit)}
          className=" md:w-[424px]"
        >
          <div className="form-title mb-4">
            <h4 className="md:text-lg">
              <strong>
                {i18n("Screens.dashboard.clients.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-group mb-6">
            <Select
              {...register("category")}
              label={i18n("Words.category")}
              id="category"
              dataTestId="category"
              required={true}
              options={[
                {
                  text: i18n("Texts.select_category"),
                  value: "",
                },
                ...categories.map((category) => ({
                  text: category.name,
                  value: category.id,
                }))
              ]}
              errors={errors.category}
            />
          </div>

          <div className="form-btn flex justify-end pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mr-1 md:mr-0">
              <Button
                className="border-secondary border-2 px-4"
                text={i18n("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:ml-5">
              <Button
                isLoading={isLoading}
                type="submit"
                className="bg-primary text-white px-2"
                text={i18n("Words.save")}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
