import { DotsOptions } from "@components/shared/others/DotsOptions";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useRouter } from "next/router";

type Props = {
  chargeId: number;
  paymentId: number;
};

export function PaymentActions({ chargeId, paymentId }: Props) {
  const { t } = useI18n()
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: t ("Texts.more_details"),
            handle: () =>
              router.push(
                privateRoutes.financePayments
                  .replace("{id}", String(chargeId))
                  .replace("{payment_id}", String(paymentId))
              ),
          },
        ]}
      />
    </div>
  );
}
