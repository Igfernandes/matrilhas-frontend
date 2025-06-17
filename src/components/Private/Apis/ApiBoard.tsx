import { OptionsBar } from "./OptionsBar";
import { useApi } from "./hooks/useApi";
import { Cards } from "./Cards";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { API_SETTINGS } from "./constants/settings";
import { IntegrationsModal } from "./Modals/Integrations";

export function ApiBoard() {
  const { handleSearch, filterObjects, search } = useSearch();
  const { integrations, handleToggleModal, modal } = useApi({
    search,
    filterObjects,
  });

  return (
    <div>
      <OptionsBar handleSearch={handleSearch} />
      <Cards
        items={integrations.map((integration) => ({
          id: integration.id,
          img: integration.logotype,
          status: integration.status,
          text: API_SETTINGS[integration.provider] ?? "",
          handleModal: () => handleToggleModal("INTEGRATION", integration.id),
        }))}
      />
      <IntegrationsModal
        integrations={integrations}
        onModal={handleToggleModal}
        isShowModal={modal.type === "INTEGRATION"}
      />
    </div>
  );
}
