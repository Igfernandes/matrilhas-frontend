import ErrorMessage from "@components/shared/others/ErrorMessage";
import { When } from "@components/utilities/When";
import { FieldError, useFormContext } from "react-hook-form";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  options: {
    id: number;
    name: string;
  }[];
  dataTestId?: string;
  action?: React.ReactNode;
  errors?: FieldError;
};

export function TSelect({
  label,
  name,
  dataTestId,
  className,
  action,
  errors,
  defaultValue,
  options,
  ...props
}: Props) {
  const { register } = useFormContext();

  return (
    <tr className={`border-t-2 border-t-zinc-200 `}>
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <select
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            data-testid={dataTestId}
            {...register(name)}
            {...props}
          >
            <option value="" key={"select"}>
              -
            </option>
            {options.map((option) => (
              <option
                value={option.id}
                key={option.name}
                selected={defaultValue === option.id ? true : false}
              >
                {option.name}
              </option>
            ))}
          </select>

          <When value={!!action}>{action}</When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </td>
    </tr>
  );
}
