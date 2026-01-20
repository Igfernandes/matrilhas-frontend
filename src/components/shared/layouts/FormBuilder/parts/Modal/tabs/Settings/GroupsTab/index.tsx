import { FormGroup } from "../../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { FormSelect } from "../../../fieldsGroup/FormSelect";
import { Options } from "./Options";
import { OptionShape } from "./type";
import { TabProps } from "../../type";
import { useMemo } from "react";
import { useI18n } from "@contexts/I18n";

export function SettingsGroupsTab({
  field,
  oChangeField,
  handleUpdateField,
  tabActive,
}: TabProps) {
  const { t } = useI18n()
  const parsedOptions = useMemo(() => {
    try {
      return JSON.parse(field?.options ?? "[]") as Array<OptionShape>;
    } catch {
      return [];
    }
  }, [field]);

  return (
    <When value={tabActive === "settings"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormGroup
          defaultValue={field?.label}
          label={t("Words.title")}
          name="label"
          key={"label"}
          onChange={oChangeField}
        />
        <Options
          currentOptions={parsedOptions}
          onChange={handleUpdateField}
        />
        <FormSelect
          options={[
            {
              text: t("Words.not"),
              value: "",
            },
            {
              text: t("Words.yes"),
              value: "true",
            },
          ]}
          label={t("Words.is_required")}
          name="required"
          key={"required"}
          defaultValue={String(field?.required)}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
