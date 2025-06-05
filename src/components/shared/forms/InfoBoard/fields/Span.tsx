import { FieldError } from "react-hook-form";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  text: string;
  value?: string | number | unknown;
  dataTestId?: string;
  errors?: FieldError;
};

export function TSpan({ text, dataTestId, className, value }: Props) {
  return (
    <tr className={`border-t-2 border-t-zinc-200`}>
      <td className="py-2 pl-4 w-2/6">
        <strong>{text}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <span
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            data-testid={dataTestId}
          >
            {String(value)}
          </span>
        </div>
      </td>
    </tr>
  );
}
