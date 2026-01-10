import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { Modal } from "@components/shared/layouts/Modal";
import { useStoreFieldsModal } from "./hooks/useStoreFieldsModal";
import { Select } from "@components/shared/forms/Select";
import { StoreFieldsModalProps } from "./type";
import { useI18n } from "@contexts/I18n";
import { ComponentsManager } from "./Manager";

export function StoreFieldsModal({
  isShowModal,
  onModal,
  groups,
}: StoreFieldsModalProps) {
  const { t } = useI18n()
  const { formMethods, register, errors, handleSubmit, submit, isLoading } =
    useStoreFieldsModal({ handleModal: onModal });

  return (
    <Modal
      title={t("Texts.new_data")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[424px]">
          <div className="mb-6">
            <div className="form-title mb-4">
              <h4 className="text-xs md:text-lg">
                <strong>
                  {t("Components.form_hub.text_field_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[45vh]">
              <div className="form-group">
                <Select
                  {...register("group")}
                  options={groups.map((group) => {
                    return {
                      text: t(`Words.${group.name.toLowerCase()}`) as string,
                      value: group.id,
                    };
                  })}
                  label={t("Words.group")}
                  dataTestId="group"
                  required={true}
                  errors={errors.group}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={t("Words.name")}
                  dataTestId="name"
                  required={true}
                  maxLength={100}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <div className="form-group">
                  <Select
                    {...register("type")}
                    options={[
                      "TEXT",
                      "COLOR",
                      "NUMBER",
                      "DATE",
                      "FILE",
                      "DATETIME-LOCAL",
                    ].map((type) => ({
                      text: t(`Words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    label={t("Texts.field_type")}
                    dataTestId="type"
                    errors={errors.type}
                  />
                </div>
                <div className="form-group my-4">
                  <ComponentsManager />
                 
                </div>
                <div className="form-group my-4">
                  <Select
                    {...register("is_sensitive")}
                    options={["YES", "NOT"].map((type) => ({
                      text: t(`Words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    defaultValue={"NOT"}
                    label={t("Texts.is_sensitive")}
                    dataTestId="is_sensitive"
                    errors={errors.group}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="flex items-center">
              <Checkbox
                {...register("hasContinueRegister")}
                dataTestId="continue_register_field"
                id="continue_register_field"
                label={t(`Texts.continue_register`)}
              />
            </div>
            <div className="w-1/2">
              <div className="md:w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-primary text-white"
                  text={t("Words.save")}
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
