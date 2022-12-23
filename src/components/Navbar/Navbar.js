import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <header className="fixed w-full z-50">
      <div className="text-white flex justify-between items-center w-full h-14 p-5 bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
        <Link to='/'
          style={{ fontFamily: "Roboto,sans-serif" }}
          className="w-auto text-md font-bold uppercase"
        >
          Karan Gupta
        </Link>
        <div className="hidden md:flex md:flex-row font-bold text-white font-sans shadow-sm rounded-b-xl">
          <Link
            to="/"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2  hover:text-gray-300 transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>{" "}
            Home
          </Link>
          <Link
            to="resume"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2  hover:text-gray-300 transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>{" "}
            Resume
          </Link>
          <Link
            to="projects"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2  hover:text-gray-300 transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
            </span>
            Projects
          </Link>
          <Link
            to="certification"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2  hover:text-gray-300 transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>{" "}
            Certifications
          </Link>
          <Link
            to="profile"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2  hover:text-gray-300  transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Profile
          </Link>
          <Link
            to="contact"
            className="lg:px-5 lg:py-3 md:px-3 md:py-3 md:flex md:items-center md:gap-x-2 border-0 border-red-600 hover:border-b-2   hover:text-gray-300 transition duration-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            Conatct
          </Link>
        </div>

        <button className="block md:hidden" onClick={() => setToggle(!Toggle)}>
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
        <div className="flex flex-col font-bold bg-gradient-to-r from-gray-600 to-gray-700 text-white font-sans shadow-sm rounded-b-xl">
          
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300  rounded-xl transition duration-300"><Link
            to="/"
            
          >
            Home
          </Link></div>
          
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"><Link
            to="/"
          >
            About
          </Link></div>
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"><Link
            to="resume"
          >
            Resume
          </Link></div>
          
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"><Link
            to="projects"
          >
            Projects
          </Link></div>
          
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"> <Link
            to="certification"
          >
            Certifications
          </Link></div>
         
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"><Link
            to="profile"
          >
            Profile
          </Link></div>
          
          <div onClick={()=>setToggle(false)} className="p-2 py-3 hover:bg-red-500 hover:text-gray-300 rounded-xl transition duration-300"><Link
            to="contact"
          >
            Conatct
          </Link></div>
          
        </div>
      )}
    </header>
  );
}

export default Navbar;
