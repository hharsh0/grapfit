import React, { useState } from 'react'
import BarChart from '../Charts/BarChart'
import { appleData, options, PieData, bottomLineChartData } from '../Data/appleData/useableData'
import LineChart from '../Charts/LineChart'
import PieChart from '../Charts/PieChart'
import Heading from '../components/PageA/Heading'
import SectionA from '../components/PageA/SectionA'
import SectionB from '../components/PageA/SectionB'

function Page1() {
  const [isLineChart, setIsLineChart] = useState(false)
  const [isLineChart2, setIsLineChart2] = useState(true)
  return (
    <div>
      {/* heading */}
      <Heading />
      {/* section 1 */}
      <SectionA isLineChart={isLineChart} setIsLineChart={setIsLineChart} />
      {/* section 2 */}
      <SectionB isLineChart2={isLineChart2} setIsLineChart2={setIsLineChart2} />
      {/* heading - 2 */}
      <div class="flex flex-col text-center w-full mb-12">
        <p class="lg:w-2/3 mx-auto text-white leading-relaxed text-base">
          Some HighLights
        </p>
      </div>
      {/* graphs */}

      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative ">
            <BarChart userData={appleData} options={options} />
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative ">
            <LineChart
              class="object-center rounded"
              userData={appleData}
              options={options}
            />
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative ">
            <PieChart userData={PieData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1