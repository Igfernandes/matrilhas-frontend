import { useEffect, useState } from "react";
import { FeedDataShape } from "../type";

type Props = {
  data: Array<FeedDataShape>;
};

export function useFeed({ data }: Props) {
  const [feeds, setFeeds] = useState<Array<FeedDataShape>>([]);

  const handleSearch = (query: string) => {
    setFeeds((feeds) => {
      if (!query) return data;

      return feeds.filter((item) => item.message.includes(query));
    });
  };

  useEffect(() => {
    if (data.length === 0) return;
    setFeeds(data);
  }, [data]);

  return {
    feeds,
    handleSearch,
  };
}
