import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Chart from "chart.js/auto"
import { Scatter } from "react-chartjs-2"

const getData = filename => {
  const rawData = require(filename)
  const myData = []

  for (let i = 0; i < rawData.length; i++) {
    var points = []
    for (let j = 0; j < rawData[i].balances.length; j++) {
      points.push({ x: rawData[i].x[j], y: rawData[i].y[j] })
    }
    var current = {
      date: rawData[i].date,
      gini: rawData[i].gini,
      colour: rawData[i].colour,
      points: points,
    }
    myData.push(current)
    points = []
  }

  return myData
}

const InteractiveChart = () => {
  const myData = getData("./balances_interactive.json")
  const [time, setTime] = useState(0)
  const data = {
    datasets: [
      {
        data: myData[time].points,
        label: `${myData[time].date} (n = ${
          myData[time].points.length
        }, gini = ${myData[time].gini.toFixed(3)})`,
        backgroundColor: myData[time].colour,
      },
    ],
  }

  Chart.defaults.font.size = 18
  const options = {
    showLine: true,
    animation: false,
    aspectRatio: 1.3,
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        title: {
          display: true,
          text: "Cumulative Percent of ETH Value of Punks",
          ticks: {
            font: {
              size: 100000,
            },
          },
        },
      },
      x: {
        beginAtZero: true,
        max: 1,
        title: {
          display: true,
          text: "Cumulative Percent of Addresses",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 4,
        borderColor: myData[time].colour,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Figure 4: Interactive Distribution of ETH Value of Punks",
      },
      tooltip: { enabled: false },
    },
  }

  return (
    <>
      <Scatter options={options} data={data} />
      <Form className="my-3">
        <Form.Group controlId="formBasicRange">
          <Form.Range
            value={time}
            min={0}
            max={myData.length - 1}
            onChange={event => setTime(event.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
    </>
  )
}

export default InteractiveChart
