import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";
import { FormGroup } from "../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";

type Props = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement>) => void;
  tabActive: string;
};

export function ColorsTab({ field, oChangeField, tabActive }: Props) {
  return (
    <When value={tabActive === "colors"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormGroup
          defaultValue={field?.style?.color}
          label="color"
          type="color"
          name="style.color"
          key={"fontSize"}
          onChange={oChangeField}
        />
        <When value={!["layout"].includes(field?.group ?? "")}>
          <FormGroup
            defaultValue={field?.labelColor}
            label="title_color"
            type="color"
            name="labelColor"
            key={"labelColor"}
            onChange={oChangeField}
          />
        </When>
        <FormGroup
          defaultValue={field?.style?.backgroundColor}
          label="background_color"
          type="color"
          name="style.backgroundColor"
          key={"backgroundColor"}
          onChange={oChangeField}
        />
        <When value={!["layout"].includes(field?.group ?? "")}>
          <FormGroup
            defaultValue={field?.style?.borderColor}
            label="border_color"
            type="color"
            name="style.borderColor"
            key={"borderColor"}
            onChange={oChangeField}
          />
        </When>
      </div>
    </When>
  );
}
