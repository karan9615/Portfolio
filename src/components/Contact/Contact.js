import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Contact() {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  Aos.init({
    // offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className="flex h-[450px] sm:h-52 sm:px-20 flex-col my-5 mx-5 items-center sm:grid sm:gap-x-5 sm:gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-aos="zoom-in-up">
      <div className="w-80 sm:w-auto flex my-2 h-20 sm:h-40 bg-red-500 hover:scale-105 hover:outline hover:outline-red-400 transition duration-400 hover:shadow-md hover:shadow-gray-700 text-white items-center justify-around rounded-xl px-5 ">
        <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center" onClick={()=>window.location.href="https://goo.gl/maps/Yrvfu4SJ3p1KBzFJ6"}>
          <p className="text-xl font-bold sm:text-2xl sm:leading-8 text-gray-900">My Address</p>
          <p className="text-sm py-1 sm:px-1">Dakshinpuri, New Delhi-62</p>
        </div>
      </div>
      <div className="w-80 sm:w-auto flex  my-2 h-20 sm:h-40 bg-red-500  hover:scale-105 hover:outline hover:outline-red-400 transition duration-400 hover:shadow-md hover:shadow-gray-700   text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold py-1 sm:text-2xl sm:leading-8 text-gray-900">Social Profiles</p>
          <p className="text-sm flex justify-evenly w-full sm:leading-8">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" onClick={()=>window.location.href="https://facebook.com/Karan00Gupta"} alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png" onClick={()=>window.location.href="https://twitter.com/Karan0_0Gupta"} alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" onClick={()=>window.location.href="https://www.linkedin.com/in/karan-kumar-gupta-7441321b2"} alt="" className="w-5 h-5" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" onClick={()=>window.location.href="https://www.instagram.com/96karan15/"} alt="" className="w-5 h-5" />
          </p>
        </div>
      </div>
      <div className="w-80 sm:w-auto flex my-2 h-20  hover:scale-105 hover:outline hover:outline-red-400 transition duration-400 hover:shadow-md hover:shadow-gray-700  sm:h-40 bg-red-500  text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons-png.flaticon.com/128/60/60543.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center" onClick={()=>{window.location.href="mailto: karangupta9615@gmail.com"}}>
          <p className="text-xl font-bold sm:text-2xl sm:leading-8 text-gray-900">Email me</p>
          <p className="text-sm text-gray-300 sm:leading-9 sm:px-1" >Karangupta9615@gmail.com</p>
        </div>
      </div>
      <div className="w-80 sm:w-auto flex my-2 h-20  hover:scale-105 hover:outline hover:outline-red-400 transition duration-400 hover:shadow-md hover:shadow-gray-700  sm:h-40 bg-red-500 text-white items-center justify-around rounded-xl px-5">
        <img src="https://cdn-icons.flaticon.com/png/128/3135/premium/3135905.png?token=exp=1652078333~hmac=c5f83bfd8c8b30e99dbf9100245338de" alt="" className="w-10 h-10" />
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold sm:text-2xl sm:leading-8 text-gray-900">My resume</p>
          <a href='Myresume.pdf' download="KaranKumarGupta_Resume" className="text-sm my-1 py-1 border border-blue-800 hover:bg-blue-700 px-5 mb-2 shadow-2xl transition duration-200 rounded-md">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
