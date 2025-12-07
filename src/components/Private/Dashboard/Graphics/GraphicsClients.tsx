import i18n from "@configs/i18n";
import { Feeds } from "@components/shared/layouts/Feeds";
import { Skeleton } from "@components/utilities/Skeleton";
import { useGraphicClients } from "./hooks/useGraphicClients";


export function GraphicsClients() {
  const { fieldsPendents } = useGraphicClients();

  return (
    <div className="my-4">
      <div className="content flex flex-wrap justify-around">
        <div className="w-full md:w-[30%] ml-2">
          <Skeleton
            isLoading={!fieldsPendents}
            settings={{
              type: "board",
            }}
          >
            <Feeds
              title={i18n("Words.dependencies_historic")}
              data={fieldsPendents ?? []}
            />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
