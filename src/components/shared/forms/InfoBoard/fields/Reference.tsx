import { useI18n } from "@contexts/I18n";
import Link from "next/link";
import { FieldError } from "react-hook-form";
import { TFields } from "../type";
import { When } from "@components/utilities/When";

type Props = TFields & {
  label?: string;
  name?: string;
  value?: string | number | unknown;
  dataTestId?: string;
  errors?: FieldError;
  url?: string;
};

export function TReference({ label, dataTestId, url, className, value }: Props) {
  const { t } = useI18n()
  return (
    <tr className={`border-t-2 border-t-zinc-200`}>
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex justify-between">
          <input
            className={`w-full line-clamp-1  pl-2 py-1 bg-zinc-100 ${className}`}
            data-testid={dataTestId}
            value={String(value)}
            readOnly
          />
          <When value={!!url} >
            <Link href={String(url)} target="_blank" rel="noopener noreferrer"
              className="text-sm bg-primary text-white px-3 py-1 rounded-md  ml-2 mt-1 block">
              {t("Words.see")}
            </Link>
          </When>
        </div>
      </td>
    </tr>
  );
}
