import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";
import { FormGroup } from "../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";

type Props = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement>) => void;
  tabActive: string;
};

export function SizesTab({ field, oChangeField, tabActive }: Props) {
  const {t} = useI18n()
  return (
    <When value={tabActive === "sizes"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormGroup
          defaultValue={field?.style?.fontSize as string}
          label={t("Words.size")}
          type="number"
          name="style.fontSize"
          key={"fontSize"}
          measure="px"
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.style?.fontWeight as string}
          label={t("Words.weight")}
          type="number"
          name="style.fontWeight"
          min={100}
          max={900}
          step={50}
          key={"weight"}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
