import React from 'react'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div style={{fontFamily:"Manrope,sans-serif"}} className='hover:scale-105 flex flex-col items-center mx-auto bg-gradient-to-r from-red-400 to-red-700 w-64 justify-center py-5 my-2 sm:w-4/5 sm:h-40 rounded-xl'>
        <img src={img} alt='' className='h-10 w-10' />
        <h1 className='mt-2 text-white font-bold text-xl px-3'>{name}</h1>
        <p className='text-white text-sm'>{taglin}</p>
    </div>
  )
}

function Certification() {
  return (
    <div>
      <div>
      <h1 className="text-2xl mx-2 uppercase font-bold mt-5 flex py-2 border border-b-red-600 justify-center ">
        Certifications
      </h1>
      <div className='my-10 sm:grid sm:gap-y-5 sm:gap-x-2 sm:grid-cols-2 md:grid-cols-3'>
        <ProfileCard name="HTML, CSS & JS" taglin="" img="https://cdn-icons-png.flaticon.com/128/1005/1005141.png" />
        <ProfileCard name="Introduction to Machine Learning" taglin="" img="https://cdn-icons.flaticon.com/png/128/2021/premium/2021717.png?token=exp=1647683638~hmac=4229c9eef4fdb10834ea67c50db3e0d8" />
        <ProfileCard name="Foundation data everywhere" taglin="" img="https://cdn-icons-png.flaticon.com/128/1449/1449312.png" />
        <ProfileCard name="Programming for everybody" taglin="" img="https://cdn-icons.flaticon.com/png/128/2721/premium/2721620.png?token=exp=1647683842~hmac=7ba2e9027c82c8161b326070aa0e6961" />
      </div>
    </div>
    </div>
  )
}

export default Certification