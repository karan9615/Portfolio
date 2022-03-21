import React from 'react'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div style={{fontFamily:"Manrope,sans-serif"}} className='rounded-2xl transition duration-300 hover:scale-105 flex flex-col items-center mx-auto bg-gradient-to-r from-red-700 via-red-400 to-red-500 w-64 justify-center py-5 my-2'>
        <img src={img} alt='' className='h-10 w-10' />
        <h1 className='mt-2 text-white font-bold text-xl'>{name}</h1>
        <p className='text-white text-sm'>{taglin}</p>
    </div>
  )
}

function Projects() {
  return (
    <div className='mx-5'>
      <h1 style={{fontFamily:"League Spartan,sans-serif"}} className="text-2xl uppercase font-bold mt-5 flex py-2 border border-b-red-600 justify-center ">
        Projects
      </h1>
      <div className='my-10 grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <ProfileCard name="Virtual Restaurant" taglin="Realistic restaurant website" img="https://cdn-icons-png.flaticon.com/512/45/45332.png" />
        <ProfileCard name="Facebook Signup clone" taglin="this is the front-end of the facebook Signup/Sigin" img="https://cdn-icons-png.flaticon.com/512/1828/1828503.png" />
        <ProfileCard name="Single page website" taglin="" img="https://cdn-icons-png.flaticon.com/512/1231/1231223.png" />
        <ProfileCard name="SRMS" taglin="Student Result Management System" img="https://cdn-icons-png.flaticon.com/512/839/839986.png" />
        <ProfileCard name="OBS" taglin="Online Banking Software" img="https://cdn-icons.flaticon.com/png/512/5461/premium/5461910.png?token=exp=1647675957~hmac=dd82aac8bd4adcf063c0ceeb5eef18b3" />

      </div>
    </div>
  )
}

export default Projects