import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  Filler,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { TimeLineChartProps } from "./type";
import { useTimeLineChart } from "./hooks/useTimeLineChart";

ChartJS.register(
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  Filler
);

export default function TimelineChart({
  data = [],
  title,
}: TimeLineChartProps) {
  const { dates, labels } = useTimeLineChart({ data });

  const datasets = labels.map((label) => {
    const values = dates.map((date) => {
      const monthTarget = new Date(date).getMonth();
      const item = data.find(
        (d) => new Date(d.date).getMonth() === monthTarget && d.label === label
      );
      return item ? item.value : 0;
    });

    const color =
      data.find((item) => item.label === label)?.color || "#70707084";

    return {
      label,
      data: values,
      fill: false,
      backgroundColor: color,
      tension: 0.3,
    };
  });

  return (
    <div className="w-full h-60">
      <Line
        data={{
          labels: dates,
          datasets,
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: title.toUpperCase(),
              font: {
                weight: 800,
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "month",
                displayFormats: {
                  month: "MM",
                },
              },
              ticks: {
                callback: function (value) {
                  return new Date(value as string).getMonth() + 1;
                },
              },
              title: {
                display: true,
                text: "(Operações p/ Meses)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Valor",
              },
            },
          },
        }}
      />
    </div>
  );
}
