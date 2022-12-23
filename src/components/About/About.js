import React,{useEffect} from "react";
import CountUp from "react-countup";
import Aos from "aos";
import 'aos/dist/aos.css'


const ProfileCard = ({ number, heading }) => {
  return (
    <div className="shadow-inner hover:scale-105 flex flex-col my-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg py-5 min-w-48 min-h-48 justify-center items-center px-4 sm:px-0 transition duration-500">
      <h1 className="font-mono text-3xl font-bold" style={{fontFamily:"Fredoka,sans-serif"}}>
        <CountUp start="0" end={number} duration="5" />
      </h1>
      <h1 className=" text-md text-center font-light">{heading}</h1>
      
    </div>
  );
};

const ProgresBar = ({ label, length }) => {
  return (
    <div className="mt-10">
      <label>
        <div className="flex justify-between font-semibold text-sm uppercase">
          <p>{label}</p>
          <p className="text-gray-400" style={{fontFamily:"Fredoka,sans-serif"}}>{length}%</p>
        </div> 
        <div className="w-full h-2 bg-gray-300 rounded-xl">
          <div
            className="rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 h-2 mt-2"
            style={{ width: `${length}%` }}
          ></div>
        </div>
      </label>
    </div>
  );
};

const InterestCard = ({name,img}) => {
  return (
    <div className="mt-2  flex items-center bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition duration-300  from-red-500 to-red-600 py-3 text-left pl-5 text-white font-semibold">
        <img className="w-10 h-10" src={img} alt=""/>
        <div className="ml-5">{name}</div>
    </div>
  );
};

function About() {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  Aos.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <>
    <div className="my-5 p-5 px-10 text-left sm:px-20 sm:tracking-wider sm:leading-9">
      <p className="text-4xl  text-red-600 font-bold uppercase sm:mt-14" style={{fontFamily:"Sora, sans-serif"}}>
        <span className="text-green-500 animate-pulse">Hello!</span> I am Karan,
      </p>
      <p className="mt-5 sm:mt-10">
        I am currently pursuing B.Tech. Degree in Computer Science & Engineering
        from Maharaja Agrasen Institute of Technology, Delhi. I know C,C++,Java
        and Python programming language with strong command DSA. I am also a
        MERN Stack developer. I am also a competitive programmer and always
        ready to learn new technologies.
      </p>
      <div data-aos="zoom-in-up">
      <div className="mt-5" >
        <p>
          <span className="text-2xl px-2 font-bold text-red-600"></span>
          <span className="font-bold">Branch: </span>Computer Science &
          Engineering
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600"></span>
          <span className="font-bold">City: </span>Sec-22A, Rohini Delhi-86,
          India
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600"></span>
          <span className="font-bold">Mobile: </span>9971592763
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600"></span>
          <span className="font-bold">Email: </span>karangupta9615@gmail.com
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4"> 
      {/* <ProfileCard number="302" heading="Best Rank(Codeforces)(41K+ participants)" /> */}
      <ProfileCard number="5" heading="Project(MERN Stack)" />
      <ProfileCard number="2" heading="Project(PHP)" />
      <ProfileCard number="6" heading="Courses" />
      <ProfileCard number="400" heading="Problems Solved" />
      </div>
      </div>

      <div data-aos="zoom-in-up">
      <h1 style={{fontFamily:"League Spartan,sans-serif"}} className="sm:w-60 text-2xl tracking-widset uppercase font-bold mt-10 flex py-2 border border-b-red-600 justify-center shadow-xl">
        Skills
      </h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5 md:grid-cols-3 lg:grid-cols-4">
      <ProgresBar label="C++ programming" length="90" />
      <ProgresBar label="C programming" length="90" />
      <ProgresBar label="Java programming" length="80" />
      <ProgresBar label="Python programming" length="70" />
      <ProgresBar label="Data Structures" length="90" />
      <ProgresBar label="Algorithms" length="90" />
      <ProgresBar label="MERN" length="90" />
      </div>
      </div>

<div data-aos="zoom-in-up">
  
      <h1 style={{fontFamily:"League Spartan,sans-serif"}} className="text-2xl sm:w-60 uppercase font-bold mt-10 flex py-2 border border-b-red-600 justify-center shadow-xl">
        Interests
      </h1>
      <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
      <InterestCard name="Compeitive Programming" img="https://cdn-icons-png.flaticon.com/512/3721/3721726.png"/>
      <InterestCard name="Full Stack Development" img="https://cdn-icons-png.flaticon.com/512/2463/2463484.png" />
      <InterestCard name="News" img="https://cdn-icons.flaticon.com/png/512/542/premium/542707.png?token=exp=1652071526~hmac=d2b8251be4bdf207f4c0c1201593cf52" />
      <InterestCard name="Research" img="https://cdn-icons-png.flaticon.com/512/598/598059.png" />
      </div>
</div>
    </div>
    </>
  );
}

export default About;
