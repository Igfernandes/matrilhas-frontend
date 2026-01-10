import i18n from "@configs/i18n";
import { Feeds } from "@components/shared/layouts/Feeds";
import { Skeleton } from "@components/utilities/Skeleton";
import { useGraphicSales } from "./hooks/useGraphicSales";


export function GraphicsSales() {
  const { salesFeedback, isLoading } = useGraphicSales();

  return (
    <div className="w-full md:w-[33%] my-4">
      <div className="content">
        <div className="shadow ml-2">
          <Skeleton
            isLoading={isLoading}
            settings={{
              type: "board",
            }}
          >
            <Feeds
              title={i18n("Texts.sales_historic")}
              data={salesFeedback ?? []}
            />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
