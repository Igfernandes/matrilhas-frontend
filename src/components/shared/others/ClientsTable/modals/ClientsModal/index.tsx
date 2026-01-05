import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { Modal } from "@components/shared/layouts/Modal";
import { useClientsPayed } from "./hooks/useClientsPayed";
import { ClientsPayedPayload } from "./type";
import { useModalContext } from "@contexts/Modal";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { ClientShape } from "@type/Clients";
import { useEffect } from "react";
import { Search } from "@components/shared/forms/Search";
import { Select } from "@components/shared/forms/Select";

type Props = {
  clients: ClientShape[];
  handleAddClients: (clients: Array<ClientShape>) => void;
  clientsSelected: Array<ClientShape>;
  isLoading?: boolean;
};

export function ClientsModal({
  clients,
  handleAddClients,
  clientsSelected,
  isLoading,
}: Props) {
  const {
    formMethods,
    handleSubmit,
    register,
    submit,
    handleSearch,
    filteredClients,
    categories,
  } = useClientsPayed({
    handleAddClients,
    clients,
  });
  const { setValue } = formMethods
  const { modal, handleToggleModal } = useModalContext();

  useEffect(() => {
    if (!clientsSelected) return;

    const clientsSelectedId = clientsSelected.map(
      (clientSelect) => clientSelect.id
    );
    setValue(
      "clients",
      clients.map((client) =>
        clientsSelectedId.includes(client.id) ? String(client.id) : ""
      )
    );
  }, [clientsSelected, clients, setValue]);

  return (
    <Modal
      title={i18n("Texts.clients_add")}
      isShowModal={modal.type == "ADD_CLIENT"}
      handleModal={handleToggleModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="w-full">
            <Search
              label={i18n("Words.research")}
              dataTestId="clients"
              handleSearch={handleSearch}
              className="w-full"
            />
          </div>
          <div className="my-4">
            <Select
              {...register("category")}
              dataTestId="categories"
              label={i18n("Words.categories")}
              options={[
                {
                  text: "--",
                  value: "",
                },
                ...categories?.map((category) => ({
                  text: category.name,
                  value: category.id,
                })),
              ]}
            />
          </div>
          <div>
            <div className="form-title mt-4 mb-2">
              <h4 className="text-sm md:text-md md:w-[400px]">
                <strong className="mr-2">
                  {i18n("Components.clients_table.add_clients_text")}:
                </strong>
              </h4>
            </div>
            <GroupChecks<ClientsPayedPayload>
              name={"clients"}
              data={filteredClients}
            />
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              isLoading={isLoading}
              text={i18n("Words.save")}
              className="bg-primary font-semibold text-white"
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
