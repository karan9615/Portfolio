import React from 'react'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div className='flex flex-col items-center mx-auto bg-gradient-to-r from-gray-400 to-gray-500 w-64 justify-center py-5 my-2'>
        <img src={img} alt='' className='h-10 w-10' />
        <h1 className='mt-2 text-white font-bold text-xl'>{name}</h1>
        <p className='text-white text-sm'>{taglin}</p>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h1 className="text-2xl uppercase font-bold mt-5 flex py-2 border border-b-red-600 justify-center ">
        Projects
      </h1>
      <p className="text-left text-2xl pl-2 font-bold text-red-600 mt-5">
        Projects
      </p>
      <div className='my-10'>
        <ProfileCard name="GeekforGeeks" taglin="this is profile card is temporary" img="" />
        <ProfileCard name="GeekforGeeks" taglin="this is profile card is temporary" img="" />
        <ProfileCard name="GeekforGeeks" taglin="this is profile card is temporary" img="" />
        <ProfileCard name="GeekforGeeks" taglin="this is profile card is temporary" img="" />
      </div>
    </div>
  )
}

export default Projects