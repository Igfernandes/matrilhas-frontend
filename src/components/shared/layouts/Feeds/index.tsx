import Link from "next/link";
import { FeedProps } from "./type";
import i18n from "@configs/i18n";
import { useRef } from "react";
import { useFeed } from "./hooks/useFeed";

export function Feeds({ title, data }: FeedProps) {
  const { feeds, handleSearch } = useFeed({ data });
  const feedKey = useRef(`feed_${Math.random().toString(36).substring(2, 15)}`);

  return (
    <div className="feed shadow-sm bg-white p-4 w-full my-4 xl:my-0 rounded-md">
      <div className="header text-center shadow-xl py-1 border-2 border-tertiary">
        <span className="font-semibold">{title}</span>
      </div>
      <div className="px-1 py-1">
        <input name={feedKey.current} id={feedKey.current} type="search" onChange={(e) => handleSearch(e.target.value)} placeholder={`${i18n("Words.search")}...`} className="px-2 py-1 text-sm w-full shadow-md" />
      </div>
      <div className="content bg-white h-[40vh] overflow-auto p-2">
        {feeds.map((item, key) => (
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
