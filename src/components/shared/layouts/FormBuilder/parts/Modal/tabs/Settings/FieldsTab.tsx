import { FormGroup } from "../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { FormSelect } from "../../fieldsGroup/FormSelect";
import { TabProps } from "../type";
import { useI18n } from "@contexts/I18n";


export function SettingsFieldsTab({ field, oChangeField, tabActive }: TabProps) {
  const { t } = useI18n()

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
        <FormGroup
          defaultValue={field?.defaultValue}
          label={t("Texts.filled_value")}
          name="defaultValue"
          key={"defaultValue"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.placeholder}
          label={t("Texts.value_example")}
          name="placeholder"
          key={"placeholder"}
          onChange={oChangeField}
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
            }
          ]}
          label={t("Texts.is_required")}
          name="required"
          key={"required"}
          value={String(field?.required)}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
