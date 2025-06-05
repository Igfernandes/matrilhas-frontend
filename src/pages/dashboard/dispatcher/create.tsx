import { FooterForms } from "@components/Private/Forms/FooterForms";
import { MessagesDispatcherForm } from "@components/Private/MessagesDispatcher/Create";
import { useMessagesDispatcher } from "@components/Private/MessagesDispatcher/Create/hooks/useMessagesDispatcher";
import { useMessagesDispatcherForms } from "@components/Private/MessagesDispatcher/Create/hooks/useMessagesDispatcherForm";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { StepBar } from "@components/shared/layouts/StepBar";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";

export default function Create() {
  const { clients, clientsSelected, updateClientsSelected } =
    useMessagesDispatcher();
  const {
    formMethods,
    handleNextStep,
    handlePrevStep,
    isLastStep,
    stepActive,
    submit,
    isLoading,
    handleSubmit,
  } = useMessagesDispatcherForms({ clientsSelected });

  return (
    <DashboardContainer>
      <FormProvider {...formMethods}>
        <StepBar
          steps={[
            {
              title: i18n(`words.definitions`),
              active: stepActive == 1,
            },
            {
              title: i18n(`words.dispatch`),
              active: stepActive == 2,
            },
          ]}
        />
        <form onSubmit={handleSubmit(submit)}>
          <MessagesDispatcherForm
            step={stepActive}
            clients={clients}
            clientsSelected={clientsSelected}
            handleUpdateClients={updateClientsSelected}
          />
          <FooterForms
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isLoading={isLoading}
            isLastStep={isLastStep}
          />
        </form>
      </FormProvider>
      <ClientsModal
        clientsSelected={clientsSelected}
        clients={clients}
        handleAddClients={updateClientsSelected}
      />
    </DashboardContainer>
  );
}
