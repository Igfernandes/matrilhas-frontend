import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useI18n } from "@contexts/I18n";
import usePostAgencyExports from "@services/Agencies/Exports/Post/usePost";

type Props = {
  id: number;
};

export function AgencyActions({ id }: Props) {
  const { t } = useI18n()
  const { mutateAsync: postExport } = usePostAgencyExports()

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: t("Words.voucher") as string,
            handle: () => {
              postExport({
                entity: "VOUCHERS",
                in_ids: [id],
                type: "PDF",
              })
            },
          },
        ]}
      />
    </div>
  );
}
