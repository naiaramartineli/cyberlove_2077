import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Paper, Typography, Box } from "@mui/material";

// Registro dos componentes do Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Grafico() {
  const data = {
    labels: [
      "Jogos",
      "Animes",
      "Terror",
      "Música",
      "Comunicação (Discord)",
      "Afeto",
    ],
    datasets: [
      {
        label: "Nai",
        data: [90, 85, 80, 90, 95, 100],
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 0, 255, 0.2)",
        pointBackgroundColor: "#ff00ff",
      },
      {
        label: "Doug",
        data: [100, 85, 80, 90, 95, 100],
        borderColor: "#00ffff",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        pointBackgroundColor: "#00ffff",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: "#444" },
        grid: { color: "#333" },
        pointLabels: { color: "#00ffff" },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <Paper sx={{backgroundColor: "transparent", boxShadow:"none"}} elevation={0}>
      <Box>
        <Radar data={data} options={options} style={{backgroundColor:"trasparent"}}/>
      </Box>
    </Paper>
  );
}
