import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <header className="fixed w-full">
      <div className="text-white flex justify-between items-center w-full h-14 p-5 bg-black">
        <p src="" alt="" className="w-auto text-md font-bold uppercase">Karan Gupta</p>
        
<button class="" onClick={()=>setToggle(!Toggle)}>
              <svg
                class="w-10 h-10 text-gray-500"
                // x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
      </div>
      {Toggle && (
        <div className="flex flex-col bg-gradient-to-r from-gray-400 to-gray-600 text-white font-sans font-semibold shadow-sm rounded-b-xl">
          <Link
            to="about"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            About
          </Link>
          <Link
            to="resume"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Resume
          </Link>
          <Link
            to="projects"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="certification"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Certifications
          </Link>
          <Link
            to="profile"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Profile
          </Link>
          <Link
            to="contact"
            className="p-2 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition duration-300"
          >
            Conatct
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
