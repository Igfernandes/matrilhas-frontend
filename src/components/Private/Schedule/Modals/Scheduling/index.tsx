import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Modal } from "@components/shared/layouts/Modal";
import { useModal } from "./hooks/useModal";
import { useModalContext } from "@contexts/Modal";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { Color } from "@components/shared/forms/Color";
import { ScheduleShape } from "@type/Schedule";
import { useEffect } from "react";
import { ScheduleUpdatePayload } from "./schemas";

type Props = {
  schedules?: Array<ScheduleShape>;
};

export function SchedulingModal({ schedules }: Props) {
  const { modal, handleToggleModal } = useModalContext();
  const { formMethods, handleSubmit, submit, isLoading, users } = useModal();
  const {
    register,
    setValue,
    reset,
    formState: { errors },
  } = formMethods;

  useEffect(() => {
    const current = schedules?.find((schedule) => schedule.id === modal.id);

    if (!current) return reset();

    Object.entries(current).forEach(([key, value]) => {
      setValue(key as keyof ScheduleUpdatePayload, value as string);
    });

    setValue("linked", current.linked?.map((user) => String(user.id)) ?? []);
  }, [schedules, modal]);

  return (
    <Modal
      title={i18n("words.new_scheduling")}
      isShowModal={modal.type === "SCHEDULE"}
      handleModal={handleToggleModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className=" w-full md:w-[400px]">
          <div className="content h-[60vh] px-2 scroll-smooth overflow-x-hidden overflow-y-auto">
            <div className="form-group mb-4">
              <Input
                {...register("title")}
                label={i18n("words.title")}
                dataTestId="title"
                errors={errors.title}
              />
            </div>
            <div className="form-group my-4">
              <Input
                {...register("date")}
                label={i18n("words.date")}
                dataTestId="date"
                placeholder={i18n(`configs.formats.date`)}
                type="datetime-local"
                errors={errors.date}
              />
            </div>
            <div className="form-group my-4">
              <Input
                {...register("end_date")}
                label={i18n("words.until")}
                dataTestId="end_date"
                type="datetime-local"
                errors={errors.end_date}
              />
            </div>
            <div className="form-group mt-4 mb-1">
              <TextArea
                {...register("describe")}
                label="describe"
                dataTestId="describe"
              />
            </div>
            <div className="w-full ">
              <div className="form-group">
                <Color
                  {...register("color")}
                  label={i18n("words.color")}
                  dataTestId="color"
                  type="color"
                  errors={errors.color}
                />
              </div>
            </div>
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>{i18n("words.list_linked_users")}</strong>
              </h4>
            </div>
            <div className="form-group">
              <GroupChecks
                name="linked"
                register={register}
                items={users.map((user) => ({
                  label: user.name,
                  value: user.id,
                }))}
              />
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
