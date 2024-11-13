'use client'

import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  // Define dynamic background and border colors
  const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',  // Light pink
    'rgba(255, 159, 64, 0.2)',  // Orange
    'rgba(255, 205, 86, 0.2)',  // Yellow
    'rgba(75, 192, 192, 0.2)',  // Turquoise
    'rgba(54, 162, 235, 0.2)',  // Light blue
    'rgba(153, 102, 255, 0.2)', // Light purple
    'rgba(201, 203, 207, 0.2)', // Light grey
  ];

  const borderColors = [
    'rgb(255, 99, 132)',  // Dark pink
    'rgb(255, 159, 64)',  // Dark orange
    'rgb(255, 205, 86)',  // Dark yellow
    'rgb(75, 192, 192)',  // Dark turquoise
    'rgb(54, 162, 235)',  // Dark blue
    'rgb(153, 102, 255)', // Dark purple
    'rgb(201, 203, 207)', // Dark grey
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: datasets,
        fill: true,
        backgroundColor: backgroundColors,  // Apply dynamic colors for each bar
        borderColor: borderColors,          // Apply matching border colors
        borderWidth: 2,  // Thicker border for better contrast
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
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-xl shadow-2xl transform transition-all duration-300">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out">Monthly Data Overview</h2>
      </div>
      <div className="relative">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
