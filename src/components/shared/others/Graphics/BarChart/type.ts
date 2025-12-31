export type TimeLineChartProps = {
  title: string;
  data: Array<TimeLineChartDataShape>;
};
export type TimeLineChartDataShape = {
  date: string;
  value: string | number;
  label: string;
  color: string;
};
