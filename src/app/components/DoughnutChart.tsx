'use client'
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, ArcElement } from "chart.js"; // Add ArcElement here
import { Doughnut } from "react-chartjs-2";

// Register the necessary components including ArcElement
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, ArcElement);

const DoughnutChart = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component renders only on the client
  useEffect(() => {
    setIsClient(true); // Set client-side flag once mounted
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR, only render on the client
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',  // Red
        'rgb(54, 162, 235)',  // Blue
        'rgb(255, 205, 86)',  // Yellow
      ],
      hoverOffset: 4, // Adds a hover effect where the segments get slightly separated
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    cutout: '60%', // Adjusts the inner hole of the doughnut
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-200 rounded-xl shadow-2xl transform transition-all duration-300">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out">Monthly Data Overview</h2>
        <p className="text-lg text-gray-600 mt-2">Insights based on monthly data analysis.</p>
      </div>
      <div className="relative">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
