export type FeedProps = {
  title: string;
  data: Array<FeedDataShape>;
};

export type FeedDataShape = {
  title: string;
  message: string;
  scape: string;
  date: string;
  status?: string;
};
