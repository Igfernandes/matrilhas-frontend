import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Checkbox } from "../Checkbox";
import { GroupChecksProps } from "./type";
import { When } from "@components/utilities/When";

export function GroupChecks<Payload extends FieldValues>({
  items = [],
  name,
}: GroupChecksProps<Payload>) {
  const { register } = useFormContext()

  return (
    <div className="relative">
      <div className="bg-secondary h-[39vh] overflow-x-hidden overflow-y-auto py-2 px-1 shadow-md">
        {items.map((item, index) => (
          <div key={`key_group_checks_${index}`} className="bg-white shadow-sm border border-secondary p-1 mb-2">
            <Checkbox
              {...register(`${name}.${index}` as Path<Payload>)}
              label={item.label}
              defaultChecked={item.isChecked}
              defaultValue={item.value}
              dataTestId={`key_group_checks_${index}`}
            />
          </div>
        ))}
        <When value={items.length === 0}>
          <div key={`key_group_checks_empty`} className="text-sm border-secondary border shadow px-2 py-2 mb-4">
            <span>Ainda não há registro disponíveis para escolha</span>
          </div>
        </When>
      </div>
    </div>
  );
}
