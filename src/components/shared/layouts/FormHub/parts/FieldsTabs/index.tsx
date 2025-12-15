import { useFieldsTabs } from "./hooks/useFieldsTabs";
import useWindow from "@hooks/useWindow";
import { When } from "@components/utilities/When";
import { FieldsTabsDesktop } from "./presets/Desktop";
import { FieldsTabsMobile } from "./presets/Mobile";
import { useTabsContext } from "../../context/Tabs";
import { useFieldContext } from "../../context/Fields";
import { useFieldsGroupsContext } from "../../context/FieldsGroups";

export function FieldsTabs() {
  const { targetTab, handleChangeTab } = useTabsContext();
  const { fields } = useFieldContext();
  const { fieldsGroups } = useFieldsGroupsContext();
  const { screenType } = useWindow();
  const TAILWIND_CLASS =
    "hover:bg-primary hover:text-white inline-block font-medium text-xs px-4 py-1 uppercase rounded-xl shadow-sm border-secondary border-2 cursor-pointer";
  const { handleToggleTab } = useFieldsTabs({ targetTab });

  return (
    <div className="mt-4">
      <When value={screenType === "DESKTOP"}>
        <FieldsTabsDesktop
          fields={fields}
          fieldsGroups={fieldsGroups}
          handleChangeTab={handleChangeTab}
          handleToggleTab={handleToggleTab}
          tailwindClass={TAILWIND_CLASS}
        />
      </When>
      <When value={screenType === "MOBILE"}>
        <FieldsTabsMobile
          fields={fields}
          fieldsGroups={fieldsGroups}
          handleChangeTab={handleChangeTab}
          handleToggleTab={handleToggleTab}
          tailwindClass={TAILWIND_CLASS}
        />
      </When>
    </div>
  );
}
