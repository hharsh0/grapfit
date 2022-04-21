import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BubbleChart({ userData, options }) {
  return <Bubble class="h-72" data={userData} options={options} />;
}

export default BubbleChart;
