import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ userData, options }) {
  return <Line class="h-72" data={userData} options={options} />;
}

export default LineChart;
