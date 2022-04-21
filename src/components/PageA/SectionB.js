import React from 'react'
import BarChart from "../../Charts/BarChart";
import LineChart from "../../Charts/LineChart";
import PieChart from "../../Charts/PieChart";
import {
  appleData,
  options,
  PieData,
  bottomLineChartData,
} from "../../Data/appleData/useableData";

function SectionB({isLineChart2, setIsLineChart2}) {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex pg-2-chart- px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {!isLineChart2 && (
              <BarChart
                class="object-cover object-center rounded"
                userData={bottomLineChartData}
                options={options}
              />
            )}
            {isLineChart2 && (
              <LineChart
                class="object-cover object-center rounded"
                userData={bottomLineChartData}
                options={options}
              />
            )}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              iphone sales vs Mac sales
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              iPhone continues to be the main revenue generator, but its
              percentage has decreased in the past five years. Apple’s other
              hardware, which includes Watch, AirPods, HomePod and Beats, has
              become a priority category for Apple, as a way to add more revenue
              to a single iPhone purchase. Services have also seen significant
              growth in the past five years.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setIsLineChart2(!isLineChart2)}
                class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                {isLineChart2 ? "Show Bar Chart" : "Show Line Chart"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionB