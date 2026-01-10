

import { FormsProfile } from "@components/Private/Forms/Profile";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { StepBar } from "@components/shared/layouts/StepBar";
import { useI18n } from "@contexts/I18n";
import { useState } from "react";

export default function Create() {
  const { t } = useI18n()
  const [stepActive, setStepActive] = useState<number>(1);

  return (
    <DashboardContainer title={t("Texts.new_form")}>
      <StepBar
        setStepActive={setStepActive}
        steps={[
          {
            title: t(`Words.definitions`),
            active: stepActive == 1,
          },
          {
            title: t(`Words.customization`),
            active: stepActive == 2,
          },
          {
            title: t(`Words.preview`),
            active: stepActive == 3,
          },
        ]}
      />
      <FormsProfile step={stepActive} />
    </DashboardContainer>
  );
}
