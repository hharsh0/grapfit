import { UserData } from "./Data";

const appleData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: ["Apple Revenue"],
      data: UserData.map((data) => data.Revenue),
      backgroundColor: ["#FF6363", "#FAF5E4", "#F8B400", "#125B50"],
      borderColor: "rgb(255, 99, 132)",
      fill: false,
    },
    {
      label: ["Iphone sales"],
      data: UserData.map((data)=> data.phoneSales),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      borderColor: "black",
      fill: false,
    },
  ],
};

const PieData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: ["Apple Revenue"],
      data: UserData.map((data) => data.Revenue),
      backgroundColor: [
        "#FF6363",
        "#FAF5E4",
        "#F8B400",
        "#125B50",
        "#A85CF9",
        "#5534A5",
        "#4B7BE5",
        "#6FDFDF",
        "#F900BF",
        "#006778",
        "#FFD124",
      ],
      borderColor: "black",
      fill: false,
    },
  ],
};

const bottomLineChartData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: ["iPhone Sales"],
      data: UserData.map((data) => data.phoneSales),
      backgroundColor: [
        "#FF6363",
        "#FAF5E4",
        "#F8B400",
        "#125B50",
        "#A85CF9",
        "#5534A5",
        "#4B7BE5",
        "#6FDFDF",
        "#F900BF",
        "#006778",
        "#FFD124",
      ],
      borderColor: "#FDAF75",
      fill: false,
    },
    {
      label: ["Mac Sales"],
      data: UserData.map((data) => data.macSales),
      backgroundColor: [
        "blue",
        "#FAF5E4",
        "#F8B400",
        "#125B50",
        "#A85CF9",
        "#5534A5",
        "#4B7BE5",
        "#6FDFDF",
        "#F900BF",
        "#006778",
        "#FFD124",
      ],
      borderColor: "#FAFFAF",
      fill: false,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: "grey",
      },
      ticks: {
        callback: function (value) {
          return "$" + value + "billion";
        },
      },
    },
    x: {
      grid: {
        color: "grey",
      },
    },
  },
};

export { appleData, options, PieData, bottomLineChartData };
