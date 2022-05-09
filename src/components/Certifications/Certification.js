import React from 'react'

const ProfileCard = ({name,taglin,img}) => {
  return (
    <div style={{fontFamily:"Manrope,sans-serif"}} className='transition duration-300 hover:outline hover:outline-red-500 hover:shadow-md hover:shadow-gray-700 hover:scale-105 flex flex-col items-center mx-auto bg-gradient-to-r from-red-400 to-red-700 w-64 justify-center py-5 my-2 sm:w-4/5 sm:h-40 rounded-xl'>
        <img src={img} alt='' className='h-10 w-10 sm:h-14 sm:w-14' />
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
      <div className='my-10 sm:grid sm:gap-y-5 sm:gap-x-2 sm:grid-cols-2 md:grid-cols-3 sm:px-20'>
        <ProfileCard name="HTML, CSS & JS" taglin="" img="https://cdn-icons-png.flaticon.com/128/1051/1051328.png" />
        <ProfileCard name="Introduction to Machine Learning" taglin="" img="https://cdn-icons.flaticon.com/png/128/6100/premium/6100860.png?token=exp=1652077422~hmac=4fa00e6c65ba351b5f068920ef5606dc" />
        <ProfileCard name="Foundation data everywhere" taglin="" img="https://cdn-icons.flaticon.com/png/128/2839/premium/2839484.png?token=exp=1652077462~hmac=3525f51836ab8d193b566fc3b7a116e5" />
        <ProfileCard name="Programming for everybody" taglin="" img="https://cdn-icons.flaticon.com/png/128/2911/premium/2911813.png?token=exp=1652077486~hmac=1d424021ad7ede56b6aee0fc09be3ad3" />
      </div>
    </div>
    </div>
  )
}

export default Certification