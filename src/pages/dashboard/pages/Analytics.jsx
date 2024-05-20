import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

const Analytics = () => {
  const monthlyData = {
    Jan: { exchange: 5000, cost: 2000 },
    Feb: { exchange: 5500, cost: 2100 },
    Mar: { exchange: 6000, cost: 2200 },
    Apr: { exchange: 6500, cost: 2300 },
    May: { exchange: 7000, cost: 2400 },
    June: { exchange: 7500, cost: 2500 },
    July: { exchange: 8000, cost: 2600 },
    Aug: { exchange: 8500, cost: 2700 },
    Sep: { exchange: 9000, cost: 2800 },
    Oct: { exchange: 9500, cost: 2900 },
    Nov: { exchange: 10000, cost: 3000 },
    Dec: { exchange: 10500, cost: 3100 },
  };

  const labels = Object.keys(monthlyData);
  const exchangeData = Object.values(monthlyData).map(({ exchange }) => exchange);
  const costData = Object.values(monthlyData).map(({ cost }) => cost);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Exchange',
        data: exchangeData,
        borderColor: 'black',
        borderWidth: 1,
        pointStyle: 'arrow',
        fill: false,
      },
      {
        label: 'Cost',
        data: costData,
        borderColor: 'rgba(128, 128, 128, 1)',
        borderWidth: 1,
        pointStyle: 'arrow',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  
  const pendingPercentage = 50;
  const completePercentage = 30;
  const canceledPercentage = 20;
  
  const DoughnutData = {
    labels: ["Pending", "Complete", "Canceled"],
    datasets: [
      {
        data: [pendingPercentage, completePercentage, canceledPercentage],
        backgroundColor: [
          "black",
          "gray",
          "red"
        ],
        borderColor: [
          "black",
          "rgba(128, 128, 128, 1)",
          "red"
        ],
        borderRadius: [
          "black",
          "rgba(128, 128, 128, 1)",
          "red"
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const DoughnutOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: "85%", // Adjust the size of the doughnut hole
  };
  

  return (
    <div className='absolute top-[18.8vh] right-0 h-full bg-[#ececec] p-[1vw] w-[85vw] overflow-y-auto'>
      <div className="top-[15vh] right-0 h-full bg-[#ececec] flex flex-col gap-[2vw] p-[1vw] w-[85vw] ">
          <div className=" h-[17vw] w-[82vw] flex flex-row justify-between items-center">
            <div className="bg-[#444444] text-white shadow-lg h-[17vw] w-[25vw] p-[1vw] rounded-[1vw]">
              <div className='flex flex-row items-center gap-[1vw]'>
                <img src="public/analytics/sales.png" className='w-[5vw]' alt="" />
                <div>
                  <h1 className='text-[1.5vw]'>Total Sales</h1>
                  <p className='twxt-[1vw]'>Orders</p>
                </div>
              </div>
              <div className='text-[2.4vw] my-[2vw]'>$5000.00</div>
              <div className='text-[1.4vw] my-[2vw]'>+1.3k $ This week</div>
              </div>
            <div className="bg-white shadow-lg h-[17vw] w-[25vw] p-[1vw] rounded-[1vw]">
            <div className='flex flex-row items-center gap-[1vw]'>
                <img src="public/analytics/visitors.png" className='w-[5vw]' alt="" />
                <div>
                  <h1 className='text-[1.5vw]'>Visitors</h1>
                  <p className='twxt-[1vw]'>Avg time 4pm</p>
                </div>
              </div>
              <div className='text-[2.4vw] my-[2vw]'>12,322</div>
              <div className='text-[1.4vw] my-[2vw]'>+1.1k $ This week</div>
            </div>
            <div className="bg-white shadow-lg h-[17vw] w-[25vw] p-[1vw] rounded-[1vw]">
            <div className='flex flex-row items-center gap-[1vw]'>
                <img src="public/analytics/refunds.png" className='w-[5vw]' alt="" />
                <div>
                  <h1 className='text-[1.5vw]'>Refund</h1>
                  <p className='twxt-[1vw]'>2 Disputed</p>
                </div>
              </div>
              <div className='text-[2.4vw] my-[2vw]'>963</div>
              <div className='text-[1.4vw] my-[2vw]'>-333</div>
            </div>
          </div>
          <div className=" h-[23vw] w-[82vw] flex flex-row justify-between items-center">
          <div className="bg-white shadow-lg  h-[25vw] p-[1vw] w-[54vw] rounded-[1vw]">
          <div className='flex flex-row justify-between px-[1vw]'>
            <h1 className='text-[1.3vw] font-bold'>Sales Performance</h1>
            <button className='border px-[0.4vw] rounded-sm'>Export Data</button>
          </div>

          <div className="chart-container h-[20vw] w-[50vw] flex flex-row justify-center items-center">
          <Line data={chartData} options={chartOptions} />
            </div>
          </div>
            <div className="bg-white shadow-lg h-[25vw] p-[1vw] w-[25vw] flex flex-col  gap-[1vw] rounded-[1vw]">
              <div className=' w-[25vw] h-[5vw]'>
                <h1 className='text-[1.3vw] font-bold '>Delivery</h1>
              </div>
              <div className="chart-container w-[18vw] ml-[3vw]">
                <Doughnut data={DoughnutData} options={DoughnutOptions} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analytics