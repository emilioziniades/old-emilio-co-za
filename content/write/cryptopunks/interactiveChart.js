import React from "react"
import { Line } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Figure 4: Distribution of ETH Value of Punks over time (interactive)",
    },
  },
}

const labels = ["January", "February"]

const balances = require("./balances_eth_20.json")
console.log(balances)

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [100, 120],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: [356, 700],
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// }

console.log(balances[1].balances)
export const data = {
  labels: [0, 1, 2, 3, 4, 100],
  datasets: [
    {
      label: "Test",
      data: balances[1].balances,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

const InteractiveChart = () => {
  return (
    <div>
      {" "}
      I exist!!! <Line options={options} data={data} />
    </div>
  )
}

export default InteractiveChart
