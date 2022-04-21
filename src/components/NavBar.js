import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header class="animate__animated animate__slideInDown text-gray-400 body-font about animate__animated animate__slideInDown animate__delay-1s bg-gray-900">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span class="ml-3 text-3xl">Graphs</span>
        </p>
        <nav class="md:ml-auto  flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/apple-stats" class="mr-5 hover:text-white">
            Apple Statistics
          </Link>
          {/* <Link to="/second" class="mr-5 hover:text-white">
            Page 2
          </Link>
          <Link to="/third" class=" hover:text-white">
            Page 3
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar
