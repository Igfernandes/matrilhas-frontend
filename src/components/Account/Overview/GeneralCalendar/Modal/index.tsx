import { Modal } from "@components/shared/layouts/Modal";
import { useModalContext } from "@contexts/Modal";
import { ChargeFeedback } from "./ChargeFeedback";
import { ToursFeedback } from "./ToursFeedback";
import { useI18n } from "@contexts/I18n";
import { TourPreviewShape } from "@type/Tours";
import { ChargeShape } from "@type/Charges";

export type ManagerEntitiesProps = {
  tours: Array<TourPreviewShape>;
  charges: Array<ChargeShape>;
};
export function ModalScheduled({
  charges,
  tours,
}: ManagerEntitiesProps) {
  const { handleToggleModal, modal } = useModalContext();
  const { t } = useI18n()

  return (
    <Modal
      title={t("Texts.month_events")}
      isShowModal={modal.type === "SCHEDULED"}
      handleModal={handleToggleModal}
    >
      <div className="list">
        <ul className="h-[40vh] min-w-[30vw] overflow-auto bg-tertiary py-2 rounded-md">
          <ChargeFeedback date={String(modal.id)} charges={charges} />
          <ToursFeedback date={String(modal.id)} tours={tours} />
        </ul>
      </div>
    </Modal>
  );
}
