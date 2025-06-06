export type FeedProps = {
  title: string;
  data: Array<DataShape>;
};

type DataShape = {
  message: string;
  scape: string;
};
