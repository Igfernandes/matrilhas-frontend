import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { handleMaskDate } from "@helpers/date";
import { handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { ModalFormProps } from "./type";
import { useClientModal } from "./hooks/useClientModal";
import { SelectSearch } from "@components/shared/forms/SelectSearch";

export function ClientUpdateModal({
  isShowModal,
  onModal,
  client,
}: ModalFormProps) {
  const { formMethods, handleSubmit, submit, isLoading, categories } =
    useClientModal({ client });
  const {
    setValue,
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal
      title={i18n("Words.update_client")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {i18n("Screens.dashboard.clients.text_select_category")}
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
              label={i18n("Words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-xs md:text-lg">
                <strong>
                  {i18n(
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
                  label={i18n("Words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("cpf")}
                  label={i18n("Words.cpf")}
                  dataTestId="cpf"
                  onChange={(ev) => {
                    handleMaskCPF(ev);
                    setValue("cpf", ev.currentTarget.value);
                  }}
                  required={true}
                  errors={errors.cpf}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("birthdate")}
                  label={i18n("Words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={i18n(`Configs.format.date`)}
                  onChange={(ev) => {
                    handleMaskDate(ev);
                    setValue("birthdate", ev.currentTarget.value);
                  }}
                  errors={errors.birthdate}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("email")}
                  label={i18n("Words.email")}
                  dataTestId="email"
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={i18n("Words.phone")}
                  dataTestId="phone"
                  onChange={(ev) => {
                    handleMaskPhone(ev);
                    setValue("phone", ev.currentTarget.value);
                  }}
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
