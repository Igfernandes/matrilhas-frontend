import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

type BarChartProps = {
  title: string;
  data: {
    label: string;
    value: number|string;
    color?: string;
  }[];
};

export default function BarChart({
  title,
  data,
}: BarChartProps) {
  return (
    <div className="w-full h-64">
      <Bar
        data={{
          labels: data.map(item => item.label),
          datasets: [
            {
              label: "Total de vendas",
              data: data.map(item => item.value),
              backgroundColor: data.map(
                item => item.color ?? "#16a34a"
              ),
              borderRadius: 8,
              barThickness: 22,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          // ⭐ AQUI ESTÁ O PULO DO GATO
          indexAxis: "y",

          plugins: {
            title: {
              display: true,
              text: title.toUpperCase(),
              font: { weight: "bold" },
            },
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw} vendas`,
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
              title: {
                display: true,
                text: "Quantidade de vendas",
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
