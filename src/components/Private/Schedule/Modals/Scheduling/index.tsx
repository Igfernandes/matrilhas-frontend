import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Modal } from "@components/shared/layouts/Modal";
import { useModal } from "./hooks/useModal";
import { useModalContext } from "@contexts/Modal";
import { When } from "@components/utilities/When";
import { useModalForm } from "./hooks/useModalForm";
import { Information } from "./parts/Information";
import { Users } from "./parts/Users";
import { useI18n } from "@contexts/I18n";


export function SchedulingModal() {
  const { t } = useI18n()
  const { modal, handleToggleModal } = useModalContext();
  const {
    formMethods,
    handleSubmit,
    users,
    setStep,
    step, scheduleCurrent,
    handleSteps
  } = useModal();
  const { handleDeleteSchedule, isLoading, isLoadingDelete, submit } = useModalForm({ setStep, reset: formMethods.reset });

  return (
    <Modal
      title={t("Texts.new_scheduling")}
      isShowModal={modal.type === "SCHEDULE"}
      handleModal={(isShow) => {
        setStep("INFORMATION");
        handleToggleModal(isShow);
        formMethods.reset();
      }}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className=" w-full md:w-[400px]">
          <div className="content h-[60vh] px-2 scroll-smooth overflow-x-hidden overflow-y-auto">
            <When value={step === "INFORMATION"}>
              <Information />
            </When>
            <When value={step === "USERS"}>
              <Users users={users} />
            </When>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mx-2">
              <div className="ml-auto">
                <When value={!!scheduleCurrent && step !== "USERS"}>
                  <Button
                    type="button"
                    className="border-primary text-primary border-tertiary  font-semibold border-2"
                    text={t(`Words.exclude`)}
                    isLoading={isLoadingDelete}
                    onClick={handleDeleteSchedule}
                  />
                </When>
                <When value={step === "USERS"}>
                  <Button
                    type="button"
                    className="border-primary text-primary font-semibold border-2"
                    text={t(`Texts.go_back`)}
                    onClick={() => handleSteps("PREV")}
                  />
                </When>
              </div>
            </div>
            <div className="w-1/2 mx-2">
              <div className=" ml-auto">
                <When value={step === "INFORMATION"}>
                  <Button
                    type={"button"}
                    className="bg-primary text-white"
                    text={t(`Words.continue`)}
                    onClick={() => handleSteps("NEXT")}
                  />
                </When>
                <When value={step === "USERS"}>
                  <Button
                    type={"submit"}
                    className="bg-primary text-white"
                    text={t(`Words.save`)}
                    isLoading={isLoading}
                  />
                </When>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
