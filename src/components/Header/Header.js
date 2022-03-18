import React from "react";

function Header() {
  return (
    <div>
      <div className="h-60 w-full flex flex-row justify-around bg-[url(https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)] bg-cover text-white items-center align-middle">
        <div>
          <p className="text-xl px-5 py-1 rounded-lg  bg-gradient-to-r from-red-600  to-blue-600 font-sans">Karan Kumar Gupta</p>
          <span className="font-semibold font-mono" >(Website Developer)</span>
        </div>
        <img src="my image.png" alt="My_image" className="w-[100px] h-[100px] bg-red-600 items-center" />
      </div>
    </div>
  );
}

export default Header;
