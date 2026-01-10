import { Input } from "@components/shared/forms/Input";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { ModalFormProps } from "./type";
import { useClientModal } from "./hooks/useClientModal";
import { SelectSearch } from "@components/shared/forms/SelectSearch";
import { useI18n } from "@contexts/I18n";
import { Phone } from "@components/shared/forms/Phone";
import { CPF } from "@components/shared/forms/CPF";
import { Date } from "@components/shared/forms/Date";

export function ClientUpdateModal({
  isShowModal,
  onModal,
  client,
}: ModalFormProps) {
  const { t } = useI18n()
  const { formMethods, handleSubmit, submit, isLoading, categories } =
    useClientModal({ client });
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal
      title={t("Texts.update_client")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {t("Screens.dashboard.clients.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-category">
            <SelectSearch
              {...register("category")}
              options={categories.map((category) => {
                return {
                  text: category.name,
                  value: category.id,
                };
              })}
              label={t("Words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-xs md:text-lg">
                <strong>
                  {t(
                    "Screens.dashboard.clients.text_fill_information"
                  )}
                </strong>
              </h4>
            </div>
            <div
              className="overflow-y-auto scrollbar"
              style={{
                height: "24vh",
              }}
            >
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={t("Words.name")}
                  dataTestId="name"
                  required={true}
                  maxLength={150}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <CPF
                  {...register("cpf")}
                  label={t("Words.cpf")}
                  dataTestId="cpf"
                  required={true}
                  errors={errors.cpf}
                />
              </div>
              <div className="form-group my-4">
                <Date
                  {...register("birthdate")}
                  label={t("Words.birthdate")}
                  dataTestId="birthdate"
                  errors={errors.birthdate}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("email")}
                  label={t("Words.email")}
                  dataTestId="email"
                  maxLength={250}
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-4">
                <Phone
                  {...register("phone")}
                  label={t("Words.phone")}
                  dataTestId="phone"
                  required={true}
                  errors={errors.phone}
                />
              </div>
            </div>
          </div>
          <div className="form-btn pt-4 border-t-2 border-secondary">
            <div className="w-full md:w-1/2 mx-auto">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-primary text-white"
                  text={t("Words.update")}
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
