import React from 'react'

function Intro() {
  return (
    <div>
      <div class="animate__animated animate__fadeIn animate__delay-1s flex justify-around text-gray-400 text-2xl justify-center items-center mb-20 mt-20 flex-wrap ">
        <div>
          Hello There 👋
          <br />
          I'm Harsh
          <br />I made this single page react application while learning Chartjs
        </div>
        <div>
          <img class="h-96" src={require("../../assets/images/pic4.png")} />
        </div>
      </div>
    </div>
  );
}

export default Intro