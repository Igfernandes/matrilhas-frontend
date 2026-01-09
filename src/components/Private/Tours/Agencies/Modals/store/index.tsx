import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Modal } from "@components/shared/layouts/Modal";
import { useModal } from "./hooks/useModal";
import { useModalContext } from "@contexts/Modal";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { TourShape } from "@type/Tours";
import { useI18n } from "@contexts/I18n";

type Props = {
  tour: TourShape;
};

export function ToursAgenciesModal({ tour }: Props) {
  const { t } = useI18n()
  const { modal, handleToggleModal } = useModalContext();
  const { agencies, formMethods, handleSubmit, submit, isLoading } = useModal({ tour });

  return (
    <Modal
      title={t("Texts.agencies_linked")}
      isShowModal={modal.type === "STORE"}
      handleModal={(isShow) => {
        handleToggleModal(isShow);
      }}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className=" w-full md:w-[400px]">
          <div className="content h-[60vh] px-2 scroll-smooth overflow-x-hidden overflow-y-auto">

            <div className="form-title mb-4">
              <h4 className="text-lg">
                <strong>{t("Texts.list_linked_agencies")}</strong>
              </h4>
              <span className="text-sm text-primary">
                <i>{t("Screens.dashboard.tours.text_select_linked")}</i>
              </span>
            </div>
            <div className="form-group">
              <GroupChecks
                name="agencies"
                data={agencies}
              />
            </div>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mx-2">
              <div className=" ml-auto">
                <Button
                  type={"button"}
                  className="border-primary border text-primary"
                  text={t(`Words.cancel`)}
                  onClick={() => handleToggleModal(false)}
                />
              </div>
            </div>
            <div className="w-1/2 mx-2">
              <div className=" ml-auto">
                <Button
                  type={"submit"}
                  className="bg-primary text-white"
                  text={t(`Words.save`)}
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
