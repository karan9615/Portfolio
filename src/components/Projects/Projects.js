import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div style={{fontFamily:"Manrope,sans-serif"}} className='rounded-2xl hover:outline-3 hover:outline-red-400 hover:outline hover:shadow-md hover:shadow-gray-700 transition duration-300 hover:scale-105 flex flex-col items-center mx-auto bg-gradient-to-r from-red-700 via-red-400 to-red-500 w-64 justify-center py-5 my-2'>
        <img src={img} alt='' className='sm:h-14 sm:w-14 h-10 w-10' />
        <h1 className='mt-2 text-black font-extrabold text-xl sm:leading-9'>{name}</h1>
        <p className='text-white text-sm sm:px-5 sm:leading-6 sm:tracking-wider'>{taglin}</p>
    </div>
  )
}

function Projects() {
  Aos.init({
    // offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className='mx-5'>
      <h1 style={{fontFamily:"League Spartan,sans-serif"}} className="text-2xl uppercase font-bold mt-5 flex py-2 border border-b-red-600 justify-center ">
        Projects
      </h1>
      <div className='my-10 grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-20' data-aos="zoom-in-up">
        <ProfileCard name="Virtual Restaurant" taglin="Realistic restaurant website" img="https://cdn-icons-png.flaticon.com/512/45/45332.png" />
        <ProfileCard name="Facebook Signup clone" taglin="this is the front-end of the facebook Signup/Sigin" img="https://cdn-icons-png.flaticon.com/512/1828/1828503.png" />
        <ProfileCard name="Single page website" taglin="" img="https://cdn-icons-png.flaticon.com/512/1231/1231223.png" />
        <ProfileCard name="SRMS" taglin="Student Result Management System" img="https://cdn-icons-png.flaticon.com/512/839/839986.png" />
        <ProfileCard name="OBS" taglin="Online Banking Software" img="https://cdn-icons-png.flaticon.com/128/1161/1161439.png" />
        <ProfileCard name="UI" taglin="GPT-5" img="https://cdn-icons-png.flaticon.com/128/1260/1260169.png" />

      </div>
    </div>
  )
}

export default Projects