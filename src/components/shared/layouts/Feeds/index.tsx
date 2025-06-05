import Link from "next/link";
import { FeedProps } from "./type";

export function Feeds({ title, data }: FeedProps) {
  return (
    <div className="feed shadow-sm bg-white p-4 max-w-[400px] rounded-md">
      <div className="header text-center shadow-xl py-1 border-2 border-tertiary">
        <span className="font-semibold">{title}</span>
      </div>
      <div className="content bg-secondary h-[40vh] overflow-auto p-2">
        {data.map((item, key) => (
          <div className="row" key={`feed_${key}`}>
            <div className="bg-white rounded-md px-2 p-[1px] my-1">
              <Link href={item.scape}>
                <span className="text-xs line-clamp-1">{item.message}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
