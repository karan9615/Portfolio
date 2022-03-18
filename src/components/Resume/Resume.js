import React from "react";

function Resume() {
  return (
    <div className="px-5">
      <h1 className="text-2xl uppercadse font-bold mt-5 flex py-2 border border-b-red-600 justify-center ">
        Resume
      </h1>
      <p className="text-left text-2xl font-bold text-red-600 mt-5">
        Here is My Resume ...
      </p>
      <div className="text-xl w-20 mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Summary
      </div>
      <ol className="list-disc p-5 text-justify text-sm">
        <li>
          I am enthusiastic Undergraduate with highly motivated skills pursuing
          bachelor of technology degree in Computer Science & Engineering from
          MAIT,Delhi. Expert in implementation of each step of project. Always
          Eager to learn new technologies. Always willing to innovate the new
          things which can improve the existing technology to a new level.
        </li>
      </ol>

      <div className="text-xl w-20 mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Education
      </div>
      <ol className="list-disc p-5 text-left text-sm">
        <li className="font-semibold">
          <p className="text-lg font-semibold text-red-600 uppercase">
            Bachelor of technology,Computer Scinence & Engineering{" "}
          </p>
          <p className="font-mono mt-2 py-1 bg-gradient-to-r from-gray-500 to-gray-300 text-center w-24 px-2">
            2019-2023
          </p>
          <p className="italic py-1">
            Maharaja Agrasen Institute of Technology, Delhi
          </p>
          <p className="italic py-1">(Affilated to GGSIPU University, Delhi)</p>
          <p className="py-1">Current CGPA - 8.97</p>
          <p className="py-1">Percentage - 85.21%</p>
        </li>
        <li className="font-semibold">
          <p className="text-lg font-semibold mt-2 text-red-600 uppercase">
            Senior Secondry(12th),CBSE Board
          </p>
          <p className="font-mono mt-2 py-1 bg-gradient-to-r from-gray-500 to-gray-300 text-center w-24 px-2">
            2017-2018
          </p>
          <p className="italic py-1">
            GOVT. Boys Senior Secondry School, Delhi-62
          </p>
          <p className="py-1">Percentage - 84%</p>
        </li>
        <li className="font-semibold">
          <p className="text-lg font-semibold mt-2 text-red-600 uppercase">
            Secondry(10th),CBSE Board
          </p>
          <p className="font-mono mt-2 py-1 bg-gradient-to-r from-gray-500 to-gray-300 text-center w-24 px-2">
            2015-2016
          </p>
          <p className="italic py-1">
            GOVT. Boys Senior Secondry School, Delhi-62
          </p>
          <p className="py-1">CGPA - 8.8</p>
        </li>
      </ol>
      {/* google kickstart rank codeforces 4star codechef codejam hashcode  */}
      <div className="text-xl mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Programming Profile
      </div>
      <ol className="list-disc p-5 text-left text-sm">
        <li className="font-semibold">
          <p className="text-lg font-semibold text-red-600 uppercase">
            Solving Problems on Platforms:-
          </p>
          <ol className="list-disc pl-5 py-1 text-lg font-normal font-serif">
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Codechef
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Codeforces
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Hackerrank
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Leetcode
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Google CodeJam
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Google Hashcode
            </li>
            <li className="hover:cursor-pointer hover:underline hover:text-blue-800">
              Google Kickstart
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default Resume;
