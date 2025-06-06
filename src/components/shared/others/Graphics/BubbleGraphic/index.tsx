import { ChartData, ChartOptions } from "chart.js";
import { Bubble } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
interface CircleChartProps {
  title: string;
  data: ChartData<"bubble", number[], unknown>;
  options?: ChartOptions<"bubble">;
}

ChartJS.register(ArcElement, Tooltip, Legend);
export function BubbleGraphic({ data, options, title}: CircleChartProps) {
  return (
    <div className="w-full  max-w-md mx-auto p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <div className="h-[40vh] ">
        <Bubble data={data} options={options} />
      </div>
    </div>
  );
}
