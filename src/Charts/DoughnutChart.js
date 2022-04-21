import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughtnutChart({ userData}) {
  return <Doughnut class="h-72" data={userData} />;
}

export default DoughtnutChart;
