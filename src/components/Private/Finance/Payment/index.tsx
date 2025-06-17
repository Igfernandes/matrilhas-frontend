import { FormBoard } from "./FormBoard";
import { PaymentPreviewProps } from "./type";

export function PaymentPreview({ payment }: PaymentPreviewProps) {
  return (
    <div>
      <FormBoard payment={payment} />
    </div>
  );
}
