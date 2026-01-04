import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Checkbox } from "../Checkbox";
import { GroupCheckAjaxProps, GroupChecksProps } from "./type";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";
import { useGroupChecks } from "./hooks/useGroupChecks";
import { Skeleton } from "@components/utilities/Skeleton";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";

export function GroupChecks<Payload extends FieldValues>({
  data = [],
  name,
  ajax = {} as GroupCheckAjaxProps
}: GroupChecksProps<Payload>) {
  const { t } = useI18n()
  const { items, handleScroll, handleSearch, isInitialLoad, isLoading, isChecked } = useGroupChecks({ ...ajax, data })
  const { register, watch } = useFormContext()
  const list = watch(name)

  return (
    <Skeleton isLoading={isInitialLoad} index={name} settings={{
      type: "text",
      lines: 4
    }}>
      <div className="relative bg-secondary">
        <div className="p-2">
          <input onChange={handleSearch} type="search"
            placeholder={t("Texts.search_placeholder")}
            className="w-full shadow py-2 px-2 rounded-sm border border-secondary  bg-white" />
        </div>
        <div onScroll={(ev) => handleScroll(ev.currentTarget)} className="bg-secondary h-[35vh] overflow-x-hidden overflow-y-auto py-2 px-1 shadow-md">
          {items.map((item, index) => (
            <div key={`key_group_checks_${index}`} className="bg-white shadow-sm border border-secondary p-1 mb-2">
              <Checkbox
                {...register(`${name}.${index}` as Path<Payload>)}
                label={item.label}
                defaultChecked={item.isChecked}
                checked={isChecked(list, index, item.value)}
                defaultValue={item.value}
                dataTestId={`key_group_checks_${name}_${index}`}
              />
            </div>
          ))}
          <When value={isLoading}>
            <div key={`key_group_loading`} className="text-sm border-secondary border shadow px-2 py-2 mb-4">
              <RotateClockwise /> {t("Words.loading")}...
            </div>
          </When>
          <When value={items.length === 0}>
            <div key={`key_group_checks_empty`} className="text-sm border-secondary border shadow px-2 py-2 mb-4">
              <span>Ainda não há registro disponíveis para escolha</span>
            </div>
          </When>
        </div>
      </div>
    </Skeleton>
  );
}
