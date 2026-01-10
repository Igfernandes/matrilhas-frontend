import { PresetsFieldsTabsProps } from "./type";
import { useI18n } from "@contexts/I18n";

export function FieldsTabsDesktop({
  fields,
  tailwindClass,
  fieldsGroups,
  handleToggleTab,
  handleChangeTab,
}: PresetsFieldsTabsProps) {
  const { t } = useI18n()
  return (
    <ul className="flex pb-2 flex-wrap overflow-x-auto overflow-y-hidden">
      <li key={`field_group_all`} className="mx-2">
        <span
          className={`${tailwindClass} ${handleToggleTab("ALL")}`}
          onClick={() => handleChangeTab("ALL")}
        >
          {t(`Words.all`)}
        </span>
      </li>
      {fieldsGroups.map((group, key) => (
        <li key={`field_group_${key}`} className="mx-2">
          <span
            className={`${tailwindClass} ${handleToggleTab(group.name)}`}
            onClick={() => handleChangeTab(group.name)}
          >
            {t(`Words.${group.name.toLowerCase()}`)}(
            {fields.filter((fields) => fields.group_id == group.id).length})
          </span>
        </li>
      ))}
    </ul>
  );
}
