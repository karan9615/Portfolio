import React from "react";

const ProfileCard = ({ number, heading }) => {
  return (
    <div className="shadow-inner hover:scale-105 flex flex-col my-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg py-5 min-w-48 min-h-48 justify-center items-center px-4 sm:px-0">
      <h1 className="font-mono text-3xl font-bold" style={{fontFamily:"Fredoka,sans-serif"}}>{number}</h1>
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
    <div className="mt-2 hover:bg-red-700 flex items-center bg-red-600 py-3 text-left pl-5 text-white font-semibold">
        <img className="w-10 h-10" src={img} />
        <div className="ml-5">{name}</div>
    </div>
  );
};

function About() {
  return (
    <>
    <div className="my-5 p-5 text-left">
      <p className="text-3xl text-red-600 font-bold" style={{fontFamily:"Sora, sans-serif"}}>
        Hello! I am Karan,
      </p>
      <p className="mt-5" >
        I am currently pursuing B.Tech. Degree in Computer Science & Engineering
        from Maharaja Agrasen Institute of Technology, Delhi. I know C,C++,Java
        and Python programming language with strong command DSA. I am also a
        MERN Stack developer. I am also a competitive programmer and always
        ready to learn new technologies.
      </p>
      <div className="mt-5">
        <p>
          <span className="text-2xl px-2 font-bold text-red-600">></span>
          <span className="font-bold">Branch: </span>Computer Science &
          Engineering
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600">></span>
          <span className="font-bold">City: </span>Sec-22A, Rohini Delhi-86,
          India
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600">></span>
          <span className="font-bold">Mobile: </span>9971592763
        </p>
        <p>
          <span className="text-2xl px-2 font-bold text-red-600">></span>
          <span className="font-bold">Email: </span>karangupta9615@gmail.com
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4">
      <ProfileCard number="302" heading="Best Rank(Codeforces)(41K+ participants)" />
      <ProfileCard number="5" heading="Project(MERN Stack)" />
      <ProfileCard number="2" heading="Project(PHP)" />
      <ProfileCard number="6" heading="Courses" />
      <ProfileCard number="700" heading="Problems Solved" />
      </div>

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

      <h1 style={{fontFamily:"League Spartan,sans-serif"}} className="text-2xl sm:w-60 uppercase font-bold mt-10 flex py-2 border border-b-red-600 justify-center shadow-xl">
        Interests
      </h1>
      <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
      <InterestCard name="Compeitive Programming" img="https://cdn-icons-png.flaticon.com/512/3721/3721726.png"/>
      <InterestCard name="Full Stack Development" img="https://cdn-icons-png.flaticon.com/512/2301/2301273.png" />
      <InterestCard name="News" img="https://cdn-icons.flaticon.com/png/512/3055/premium/3055743.png?token=exp=1647667572~hmac=6243afdeb7b8556b3aa3edea7c90b636" />
      <InterestCard name="Research" img="https://cdn-icons-png.flaticon.com/512/598/598059.png" />
      </div>
    </div>
    </>
  );
}

export default About;
