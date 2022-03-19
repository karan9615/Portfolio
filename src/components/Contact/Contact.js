import React from "react";

function Contact() {
  return (
    <div className="flex flex-col my-5">
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">My Address</p>
          <p className="text-sm py-1">Dakshinpuri, New Delhi-62</p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold py-1">Social Profiles</p>
          <p className="text-sm flex justify-evenly w-full">
            <img src="https://cdn-icons.flaticon.com/png/128/2168/premium/2168281.png?token=exp=1647676344~hmac=b6e1ef547045ddfb39e37bc0829b5764" alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png" alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png" alt="" className="w-5 h-5" />
          </p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons-png.flaticon.com/128/60/60543.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">Email me</p>
          <p className="text-sm text-gray-300">Karangupta9615@gmail.com</p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons.flaticon.com/png/128/4212/premium/4212312.png?token=exp=1647676726~hmac=58ae6de9e8a14892029973ffaab3b92e" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">My resume</p>
          <button className="text-sm my-1 py-1 border border-blue-800 hover:bg-blue-700 px-5 mb-2 shadow-2xl transition duration-200 rounded-md">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
