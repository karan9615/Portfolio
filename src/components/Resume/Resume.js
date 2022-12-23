import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Resume() {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className="px-5 sm:px-20">
      
      <div className="flex justify-between items-center">
      <p style={{fontFamily:"Roboto,sans-serif"}} className="text-left sm:leading-9  animate-bounce text-2xl sm:mt-14  sm:text-4xl font-bold text-red-600 mt-14">
        Here is My Resume ...
      </p>
      <a href="Myresume.pdf" download="KaranKumarGupta_Resume" className="px-5 py-2 border-2 border-blue-600 hover:bg-blue-600 rounded-xl">Download</a>
      </div> 
      <div style={{fontFamily:"Manrope,sans-serif"}} className="sm:mt-10  sm:tracking-widest sm:leading-9  text-xl w-20 mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Summary
      </div>
      <ol className="list-disc p-5 text-left  sm:tracking-wider sm:leading-9 ">
        <li>
          I am enthusiastic Undergraduate with highly motivated skills pursuing
          bachelor of technology degree in Computer Science & Engineering from
          MAIT,Delhi. Expert in implementation of each step of project. Always
          Eager to learn new technologies. Always willing to innovate the new
          things which can improve the existing technology to a new level.
        </li>
      </ol>

      <div style={{fontFamily:"Manrope,sans-serif"}} className="text-xl  sm:tracking-widest sm:leading-9  w-20 mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Education
      </div>
      <ol className="list-disc p-5 text-left text-sm  sm:tracking-wider sm:leading-9">
        <li className="font-semibold" data-aos="fade-right">
          <p style={{fontFamily:"Roboto,sans-serif"}} className="text-md  sm:tracking-wider sm:leading-9  font-semibold text-red-500 uppercase">
            Bachelor of technology, Computer Scinence & Engineering
          </p>
          <p style={{fontFamily:"Fredoka,sans-serif"}} className="font-mono mt-2  sm:tracking-wider sm:leading-9  py-1 bg-gradient-to-r from-blue-500 to-blue-300 text-center w-24 px-2">
            2019-2023
          </p>
          <p className="italic py-1  sm:tracking-wider sm:leading-9 ">
            Maharaja Agrasen Institute of Technology, Delhi
          </p>
          <p className="italic py-1  sm:tracking-wider sm:leading-9 ">(Affilated to GGSIPU University, Delhi)</p>
          <p className="py-1  sm:tracking-wider sm:leading-9 ">Current CGPA - <span  style={{fontFamily:"Fredoka,sans-serif"}} >8.97</span></p>
          <p className="py-1  sm:tracking-wider sm:leading-9 ">Percentage - <span  style={{fontFamily:"Fredoka,sans-serif"}} >85.21%</span></p>
        </li>
        <li className="font-semibold  sm:tracking-wider sm:leading-9 "  data-aos="fade-right">
          <p style={{fontFamily:"Roboto,sans-serif"}} className="text-md font-semibold mt-2 text-red-500 uppercase">
            Senior Secondry(12th),CBSE Board
          </p>
          <p style={{fontFamily:"Fredoka,sans-serif"}}  className="font-mono  sm:tracking-wider sm:leading-9  mt-2 py-1 bg-gradient-to-r from-blue-500 to-blue-300 text-center w-24 px-2">
            2017-2018
          </p>
          <p className="italic py-1  sm:tracking-wider sm:leading-9 ">
            GOVT. Boys Senior Secondry School, Delhi-62
          </p>
          <p className="py-1  sm:tracking-wider sm:leading-9 " >Percentage -<span  style={{fontFamily:"Fredoka,sans-serif"}} > 84%</span></p>
        </li>
        <li className="font-semibold  sm:tracking-wider sm:leading-9 "  data-aos="fade-right">
          <p style={{fontFamily:"Roboto,sans-serif"}} className="text-md font-semibold mt-2 text-red-500 uppercase">
            Secondry(10th),CBSE Board
          </p>
          <p style={{fontFamily:"Fredoka,sans-serif"}}  className=" sm:tracking-wider sm:leading-9  font-mono mt-2 py-1 bg-gradient-to-r from-blue-500 to-blue-300 text-center w-24 px-2">
            2015-2016
          </p>
          <p className="italic py-1  sm:tracking-wider sm:leading-9 ">
            GOVT. Boys Senior Secondry School, Delhi-62
          </p>
          <p className="py-1  sm:tracking-wider sm:leading-9 ">CGPA - <span  style={{fontFamily:"Fredoka,sans-serif"}} >8.8</span></p>
        </li>
      </ol>
      {/* google kickstart rank codeforces 4star codechef codejam hashcode  */}
      <div  data-aos="fade-up">
      <div style={{fontFamily:"Manrope,sans-serif"}} className=" sm:tracking-wider sm:leading-9 text-xl mt-5 font-semibold text-left border border-b-0 border-r-0 border-t-0 border-l-2 pl-2 border-red-600 ">
        Programming Profile
      </div>
      <ol className="list-disc p-5 text-left text-sm sm:tracking-wider sm:leading-9 ">
        <li className="font-semibold">
          <p style={{fontFamily:"Roboto,sans-serif"}} className=" sm:tracking-wider sm:leading-9 text-md font-semibold text-red-500 uppercase">
            Solving Problems on Platforms:-
          </p>
          <ol className="list-disc pl-5 py-1 text-lg font-normal"  style={{fontFamily:"Fredoka,sans-serif"}} >
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
     
    </div>
  );
}

export default Resume;
