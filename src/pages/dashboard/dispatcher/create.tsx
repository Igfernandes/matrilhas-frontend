import { MessagesDispatcherForm } from "@components/Private/Dispatchers/Create";
import { FooterForms } from "@components/Private/Dispatchers/Create/FooterForms";
import { useMessagesDispatcherForms } from "@components/Private/Dispatchers/Create/hooks/useMessagesDispatcherForm";
import { DashboardContainer } from "@components/Private/Container";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";

export default function Create() {
  const {
    formMethods,
    handleNextStep,
    handlePrevStep,
    isLastStep,
    stepActive,
    submit,
    isLoading,
    handleSubmit,
    setStepActive,
  } = useMessagesDispatcherForms();

  return (
    <DashboardContainer title={i18n('Texts.new_dispatcher')}>
      <FormProvider {...formMethods}>
        <StepBar
          setStepActive={setStepActive}
          steps={[
            {
              title: i18n(`Words.definitions`),
              active: stepActive == 1,
            },
            {
              title: i18n(`Words.dispatch`),
              active: stepActive == 2,
            },
          ]}
        />
        <form onSubmit={handleSubmit(submit)}>
          <MessagesDispatcherForm
            step={stepActive}
          />
          <FooterForms
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isLoading={isLoading}
            isLastStep={isLastStep}
          />
        </form>
      </FormProvider>
    </DashboardContainer>
  );
}
