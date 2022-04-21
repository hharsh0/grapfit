import React from 'react'

function Heading() {
  return (
    <div className="animate__animated animate__fadeIn">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="lg:text-6xl sm:text-3xl mt-9 text-9xl font-medium title-font mb-4 text-white">
          Apple Statistics
        </h1>
        <p class="lg:w-2/3 text-gray-300 mx-auto leading-relaxed text-base animate__animated animate__fadeIn animate__delay-1s">
          Apple is one of the most influential and recognisable brands in the
          world, responsible for the rise of the smartphone with the iPhone.
          Valued at over $2 trillion in 2021, it is also the most valuable
          technology company in the world.Originally known for desktop
          computers, Apple was one of the first companies move to the graphical
          user interface (GUI) and saw success with the first Macintosh. Steve
          Jobs, the founder and CEO, was one of technology’s first “rockstars”,
          able to sell hardware as more than a tool for work.
        </p>
      </div>
    </div>
  );
}

export default Heading