import { UserPlus } from "@assets/Icons/red/UserPlus";
import { Shared } from "@components/shared/others/Shared";
import i18n from "@configs/i18n";
import { ClientServiceShape } from "@type/Clients/ClientService";

type Props = {
  serviceId: number;
  handleToggleModal: (type: unknown, id?: string | number) => void;
};

export function ActionsTable({ handleToggleModal, serviceId }: Props) {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <a
          className="flex items-center cursor-pointer"
          onClick={() => handleToggleModal("ADD_CLIENT")}
        >
          <UserPlus />
          <span className="text-red font-semibold ml-2">
            {i18n("Texts.clients_add")}
          </span>
        </a>
      </div>
      <Shared entity="INSCRIBES" in_ids={[serviceId]} />
    </div>
  );
}
