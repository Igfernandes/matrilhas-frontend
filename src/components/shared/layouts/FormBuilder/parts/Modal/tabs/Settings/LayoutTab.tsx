import { FormGroup } from "../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { TabProps } from "../type";
import { useI18n } from "@contexts/I18n";


export function SettingsLayoutTab({ field, oChangeField, tabActive }: TabProps) {
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
          defaultValue={field?.defaultValue}
          label={t("Words.text")}
          name="defaultValue"
          key={"defaultValue"}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
