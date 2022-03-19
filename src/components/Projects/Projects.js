import React from 'react'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div className='flex flex-col items-center mx-auto bg-gradient-to-r from-red-700 via-red-400 to-red-500 w-64 justify-center py-5 my-2'>
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
      <div className='my-10'>
        <ProfileCard name="Virtual Restaurant" taglin="Realistic restaurant website" img="https://cdn-icons-png.flaticon.com/512/45/45332.png" />
        <ProfileCard name="Facebook Signup clone" taglin="this is the front-end of the facebook Signup/Sigin" img="https://cdn-icons-png.flaticon.com/512/1828/1828503.png" />
        <ProfileCard name="Single page website" taglin="" img="https://cdn-icons-png.flaticon.com/512/1231/1231223.png" />
        <ProfileCard name="SRMS" taglin="Student Result Management System" img="https://cdn-icons-png.flaticon.com/512/839/839986.png" />
        <ProfileCard name="OBS" taglin="Online Banking Software" img="https://cdn-icons-png.flaticon.com/512/839/839986.png" />

      </div>
    </div>
  )
}

export default Projects