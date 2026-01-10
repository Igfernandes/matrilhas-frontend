import i18n from "@configs/i18n";
import { Feeds } from "@components/shared/layouts/Feeds";
import { Skeleton } from "@components/utilities/Skeleton";
import { useGraphicPayments } from "./hooks/useGraphicPayments";

export function GraphicPayments() {
  const { paymentsFeedback, isLoading } = useGraphicPayments();

  return (
    <div className="w-full md:w-[33%] my-4">
      <div className="content ">
        <div className="shadow ml-2">
          <Skeleton
            isLoading={isLoading}
            settings={{
              type: "board",
            }}
          >
            <Feeds
              title={i18n("Texts.payments_historic")}
              data={paymentsFeedback ?? []}
            />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
