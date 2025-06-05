import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { handleMaskDate } from "@helpers/date";
import { getNumberFormatted, handleMaskPhone } from "@helpers/string";
import { ModalFormProps } from "./type";
import { useClientModal } from "./hooks/useClientModal";
import dayjs from "dayjs";
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
      title={i18n("words.update_client")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>
                {i18n("clients.modal.create.text_select_category")}
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
                  selected: !!client.categories.find(
                    (clientCategory) => clientCategory.id === category.id
                  ),
                };
              })}
              label={i18n("words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("clients.modal.create.text_fill_information")}
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
                  label={i18n("words.name")}
                  dataTestId="name"
                  required={true}
                  defaultValue={client.name}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("birthdate")}
                  label={i18n("words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={i18n(`configs.formats.date`)}
                  defaultValue={dayjs(client.birthdate).format("DD/MM/YYYY")}
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
                  label={i18n("words.email")}
                  dataTestId="email"
                  errors={errors.email}
                  defaultValue={client.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={i18n("words.phone")}
                  dataTestId="phone"
                  defaultValue={getNumberFormatted(client.phone)}
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
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mx-auto">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("words.save")}
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
