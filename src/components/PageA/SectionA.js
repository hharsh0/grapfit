import React from 'react'
import BarChart from '../../Charts/BarChart'
import LineChart from '../../Charts/LineChart'
import PieChart from '../../Charts/PieChart'
import {
  appleData,
  options,
  PieData,
  bottomLineChartData,
} from "../../Data/appleData/useableData";


function SectionA({isLineChart,setIsLineChart}) {
  return (
    <div className="animate__animated animate__fadeIn">
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {!isLineChart && (
              <BarChart
                class="object-cover object-center rounded"
                userData={appleData}
                options={options}
              />
            )}
            {isLineChart && (
              <LineChart
                class="object-cover object-center rounded"
                userData={appleData}
                options={options}
              />
            )}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Apple revenue Vs iphone sales
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Apple revenue increased dramatically between 2009 to 2012, from
              $42.7 to $156.3 billion. During that period, Apple vastly
              increased its manufacturing volume through its partner Foxconn,
              which enabled global iPhone sales. It also saw the launch of the
              iPad, which added $19.1 billion revenue in the first year of
              sales.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setIsLineChart(!isLineChart)}
                class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                {isLineChart ? "Show Bar Chart" : "Show Line Chart"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionA