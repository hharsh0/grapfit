import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ userData, options }) {
  return <Bar class='h-72' data={userData} options={options}  />;
}

export default BarChart;
