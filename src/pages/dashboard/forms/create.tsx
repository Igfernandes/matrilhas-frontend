

import { FormsProfile } from "@components/Private/Forms/Profile";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { StepBar } from "@components/shared/layouts/StepBar";
import i18n from "@configs/i18n";
import { useState } from "react";

export default function Create() {
  const [stepActive, setStepActive] = useState<number>(1);

  return (
    <DashboardContainer title={i18n("Words.new_form")}>
      <StepBar
        setStepActive={setStepActive}
        steps={[
          {
            title: i18n(`Words.definitions`),
            active: stepActive == 1,
          },
          {
            title: i18n(`Words.customization`),
            active: stepActive == 2,
          },
          {
            title: i18n(`Words.preview`),
            active: stepActive == 3,
          },
        ]}
      />
      <FormsProfile step={stepActive} />
    </DashboardContainer>
  );
}
