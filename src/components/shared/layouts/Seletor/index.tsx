import { Checkbox } from "@components/shared/layouts/Checkbox";
import { SelectorProps } from "./type";
import { useSelector } from "./hooks/useSelector";

export function Selector({
  label,
  onSelectors,
  selectors,
  value,
  ...props
}: SelectorProps) {
  const { ref, handleCheckedAll } = useSelector({
    onSelectors,
    selectors,
    value,
  });

  return (
    <Checkbox
      {...props}
      dataTestId={`selector_${label}`}
      label={label}
      ref={ref}
      name={`selector_${label}`}
      onChecked={value == "all" ? handleCheckedAll : undefined}
    />
  );
}
