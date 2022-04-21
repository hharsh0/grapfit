import { UserData } from "./Data"

const userData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: ["User Gained"],
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["#FF6363", "#FAF5E4", "#F8B400", "#125B50"],
      borderColor: "rgb(255, 99, 132)",
      fill: false,
    },
    {
      label: ["User lost"],
      data: [3466, 3463, 32463, 34573, 75494],
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

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: "grey",
      },
    },
    x: {
      grid: {
        color: "grey",
      },
    },
  },
};

export { userData, options }
