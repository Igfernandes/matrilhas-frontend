import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface PolarGraphicProps {
  title: string;
  data: ChartData<"polarArea", number[], string>;
  options?: ChartOptions<"polarArea">;
}

export function PolarGraphic({ title, data, options }: PolarGraphicProps) {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <div className="h-[40vh]">
        <PolarArea data={data} className="mx-auto" options={options} />
      </div>
    </div>
  );
}
