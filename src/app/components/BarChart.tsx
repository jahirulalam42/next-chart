'use client'

import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: datasets,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Slightly transparent background for bars
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Label",
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: "X-axis Label",
        },
        display: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl shadow-xl transform transition-all  duration-300">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">Monthly Data Overview</h2>
      </div>
      <div className="relative">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
