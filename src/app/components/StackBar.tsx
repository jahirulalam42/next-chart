'use client'

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const StackBar = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const secondDatasets = [15, 40, 70, 50, 91, 30, 75, 47];
  const thirdDatasets = [20, 50, 69, 48, 85, 37, 70, 50];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: datasets,
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Slightly transparent background for bars
      },
      {
        label: "Dataset 2",
        data: secondDatasets,
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Different color for the second dataset
      },
      {
        label: "Dataset 3",
        data: thirdDatasets,
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Different color for the third dataset
      },
    ],
  };

  const options:any = {
    plugins: {
      title: {
        display: true,
        text: "Stacked Bar Chart Example",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true, // Enable stacking on the x-axis
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        stacked: true, // Enable stacking on the y-axis
        title: {
          display: true,
          text: "Values",
        },
        ticks: {
          beginAtZero: true, // Ensure the y-axis starts at zero
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl shadow-xl transform transition-all duration-300">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
          Stacked Monthly Data Overview
        </h2>
      </div>
      <div className="relative">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StackBar;
