import React from "react";

function Contact() {
  return (
    <div className="flex flex-col my-5">
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold py-2">My Address</p>
          <p className="text-sm py-1">Dakshinpuri, New Delhi-62</p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold py-2">Social Profiles</p>
          <p className="text-sm py-1 flex justify-evenly w-full bg-black">
            <img src="" alt="" className="w-2 h-2" />
            <img src="" alt="" className="w-2 h-2" />
            <img src="" alt="" className="w-2 h-2" />
            <img src="" alt="" className="w-2 h-2" />
          </p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold py-2">Email me</p>
          <p className="text-sm py-1">Karangupta9615@gmail.com</p>
        </div>
      </div>
      <div className="flex my-2 w-80 h-20 bg-red-500 ml-5 text-white items-center justify-around rounded-xl px-5">
        <img src="" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold py-2">My resume</p>
          <button className="text-sm py-1 bg-blue-600 hover:bg-blue-700 px-5 mb-2 shadow-2xl transition duration-200">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
