import useWindow from "@hooks/useWindow";
import { CardAmountBoardProps } from "./types";

export function CardAmountBoard({ viewLimit, items }: CardAmountBoardProps) {
  const { screenType } = useWindow();
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full justify-around">
        {items.map((item, index) => (
          <div
            key={`card_${index}`}
            className="bg-white px-6 py-4 rounded-xl"
            style={{
              width: screenType === "DESKTOP" ? `${90 / viewLimit}%` : "100%",
            }}
          >
            <div className="flex items-center mb-2">
              <div className="icon mr-2">
                <div
                  className={`${item.background ?? "bg-blue"} p-2 rounded-md`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="information">
                <div className="title">
                  <p className="text-md">{item.title}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">{`${item?.prefix ?? ""}${
                    item?.value ?? 0
                  }${item?.suffix ?? ""}`}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
