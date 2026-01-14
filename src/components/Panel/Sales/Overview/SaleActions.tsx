import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { useI18n } from "@contexts/I18n";
import usePostAgencyExports from "@services/Agencies/Exports/Post/usePost";

type Props = {
  id: number;
};

export function AgencyActions({ id }: Props) {
  const { t } = useI18n()
  const router = useRouter();
  const { mutateAsync: postExport } = usePostAgencyExports()
  const { panel } = privateRoutes;

  return (
    <div className="flex">
      <Shared entity="SALES" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Texts.see_more") as string,
            handle: () => {
              router.push(`${panel.sales}/${id}`);
            },
          },
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
