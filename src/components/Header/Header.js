import React from "react";

function Header() {
  return (
    <div>
      <div className="h-60 sm:h-72 md:h-80 lg:h-96 bg-fixeds flex flex-row justify-around w-full bg-[url(https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)] bg-cover text-white items-center align-middle">
        <div>
          <p style={{fontFamily:"Spartan League,sans-serif"}} className="font-bold text-xl mt-16 px-5 py-1 rounded-lg  bg-gradient-to-r from-red-600  to-blue-600 font-sans sm:text-2xl md:text-3xl">Karan Kumar Gupta</p>
          <span className="font-semibold font-mono sm:text-lg md:text-xl" >(Website Developer)</span>
        </div>
        <img src="my image.png" alt="My_image" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] bg-gray-600 border border-b-2 border-l-2 border-r-0 border-t-0 items-center shadow-lg shadow-slate-300 mt-10 block" />
      </div>
    </div>
  );
}

export default Header;
