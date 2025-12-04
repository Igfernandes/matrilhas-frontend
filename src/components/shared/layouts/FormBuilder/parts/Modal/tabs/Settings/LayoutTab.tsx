import { FormGroup } from "../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { TabProps } from "../type";


export function SettingsLayoutTab({ field, oChangeField, tabActive }: TabProps) {
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
          label="text"
          name="defaultValue"
          key={"defaultValue"}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
