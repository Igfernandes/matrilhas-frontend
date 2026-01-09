import { Modal } from "@components/shared/layouts/Modal";
import { useModalContext } from "@contexts/Modal";
import { ManagerEntitiesProps } from "../../type";
import { ChargeFeedback } from "./ChargeFeedback";
import { ClientFeedback } from "./ClientFeedback";
import { UserFeedback } from "./UserFeedback";
import { FormFeedback } from "./FormFeedback";
import { useI18n } from "@contexts/I18n";

export function ModalScheduled({
  charges,
  clients,
  users,
  forms = []
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
        <ul className="h-[40vh] min-w-[30vw] overflow-auto bg-tertiary p-2 rounded-md">
          <UserFeedback date={String(modal.id)} users={users} />
          <ClientFeedback date={String(modal.id)} clients={clients} />
          <ChargeFeedback date={String(modal.id)} charges={charges} />
          <FormFeedback date={String(modal.id)} forms={forms} />
        </ul>
      </div>
    </Modal>
  );
}
