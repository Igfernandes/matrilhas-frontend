import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";
import { FormGroup } from "../fieldsGroup/FormGroup";
import { FormRange } from "../fieldsGroup/FormRange";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";

type Props = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement>) => void;
  tabActive: string;
};

export function StructsTab({ field, oChangeField, tabActive }: Props) {
  const { t } = useI18n()
  return (
    <When value={tabActive === "structs"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormRange
          defaultValue={field?.width}
          label={t("Words.width")}
          name="width"
          key={"width"}
          onChange={oChangeField}
        />
        <FormRange
          defaultValue={field?.height}
          label={t("Words.height")}
          name="height"
          key={"height"}
          onChange={oChangeField}
        />
        <FormRange
          defaultValue={field?.style?.padding as string}
          label={t("Words.padding")}
          name="style.padding"
          key={"padding"}
          onChange={oChangeField}
        />
        <FormRange
          defaultValue={field?.style?.borderWidth as string}
          label={t("Words.border")}
          name="style.borderWidth"
          key={"borderWidth"}
          measure="px"
          onChange={oChangeField}
        />
        <FormRange
          defaultValue={field?.margin as string}
          label={t("Words.margin")}
          name="margin"
          key={"margin"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.className}
          label={t("Texts.styled_class")}
          name="className"
          key={"className"}
          onChange={oChangeField}
        />
        {/* <FormTable
        label="attributes"
        name="attributes"
        key={"attributes"}
      /> */}
      </div>
    </When>
  );
}
