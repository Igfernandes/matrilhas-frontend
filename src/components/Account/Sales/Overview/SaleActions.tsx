import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useI18n } from "@contexts/I18n";
import usePostClientsExports from "@services/Clients/Exports/Post/usePost";
import usePostClientSaleGateway from "@services/Clients/Sales/Post/usePost";
import { SaleStatus } from "@type/Sales";
import { useMemo } from "react";

type Props = {
  id: number;
  status: SaleStatus
};

export function SaleActions({ id, status }: Props) {
  const { t } = useI18n()
  const { mutateAsync: postExport } = usePostClientsExports()
  const { mutateAsync: postSaleGateway } = usePostClientSaleGateway()
  const actions = useMemo(() => {
    const action = [
      {
        text: t("Words.voucher") as string,
        handle: () => {
          postExport({
            entity: "VOUCHERS",
            in_ids: [id],
            type: "PDF",
          })
        },
      }
    ]

    if (status === "PENDING") {
      action.push({
        text: t("Words.pay") as string,
        handle: () => {
          postSaleGateway({
            sale_id: id,
          })
        },
      })
    }

    return action

  }, [id, postExport, postSaleGateway, status, t]);

  return (
    <div className="flex">
      <DotsOptions
        actions={actions}

      />
    </div>
  );
}
