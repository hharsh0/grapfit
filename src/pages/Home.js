import React from 'react'
import BarChart from "../Charts/BarChart"
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import { userData, options } from '../Data/useableData';
import {
  appleData,
  options as appleOptions,
  PieData,
  bottomLineChartData,
} from "../Data/appleData/useableData";
import Intro from '../components/Home/Intro';

function Home() {
  return (
    <div class="bg-gray-900">
      <Intro />
      <div class="flex flex-col text-center w-full">
        <h1 class="animate__animated animate__fadeIn animate__delay-1s text-xl font-medium title-font mb-12 text-white">
          Different graphs used in this Single page application
        </h1>
        {/* Graphs */}
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10">
            <div class="flex relative ">
              <BarChart userData={userData} options={options} />
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10">
            <div class="flex relative ">
              <LineChart userData={appleData} options={appleOptions} />
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10">
            <div class="flex relative ">
              <PieChart userData={userData} options={options} />
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10">
            <div class="flex relative ">
              <BarChart userData={appleData} options={options} />
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10">
            <div class="flex relative ">
              <LineChart
                userData={bottomLineChartData}
                options={appleOptions}
              />
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4 mt-10 mb-10">
            <div class="flex relative ">
              <PieChart userData={PieData} options={appleOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home