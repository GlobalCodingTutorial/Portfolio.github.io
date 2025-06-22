import React from 'react'
import pic from '../components/Images/Untitled2.png' 

import { ReactTyped } from "react-typed";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { TbFileTypePhp } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { LiaJava } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";

function Home() {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
         <div className='flex flex-col md:flex-row'>
            {/*left side*/}
           <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
             <div className='flex space-x-1 text-2xl md:text-4xl'>
               <h1>Hello,
                <br /><h2 className='text-blue-400'>I'm a &nbsp;
                  {/*<span className='text-red-700 font-bold'> Developer</span>*/}
                <ReactTyped 
                className='text-red-700 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
               />
                </h2>
               </h1>
             </div>
             <span className='text-xl'>Welcome In My Feed</span>
             <br />
             <p className='text-sm md:text-md text-justify'>
               I’m Vikas Gola, As a fresher developer, I am driven by a passion for technology and a relentless desire to 
               learn and grow. With a strong foundation in coding, problem-solving, and creativity, I am 
               eager to take on new challenges, collaborate with experienced professionals, and 
               contribute to meaningful projects. My focus is on continuous improvement, adapting to 
               new technologies, and delivering innovative solutions that make a real impact. Whether 
               it’s building efficient applications, solving complex problems, or staying ahead of industry
               trends, I am committed to honing my skills and becoming a valuable asset to any 
               development team.
             </p>
             <br />
             {/*Social media icon*/}
             <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
              <div className='space-y-2'>
               <h1 className='font-bold  text-center'>Avaliable on</h1>
               <ul className='flex space-x-5'>
                 <li className='text-2xl cursor-pointer hover:scale-110 duration-200'>
                  <a href="https://www.facebook.com/vikas.gola.353/" target="_blank">
                   <FaSquareFacebook />
                  </a>
                 </li>
                 <li className='text-2xl cursor-pointer hover:scale-110 duration-200'>
                  <a href="https://www.linkedin.com/in/vikas-gola-821207370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                   <FaLinkedin />
                  </a>
                 </li>
                 <li className='text-2xl cursor-pointer hover:scale-110 duration-200'>
                  <a href="https://github.com/GlobalCodingTutorial" target="_blank">
                   <FaGithubSquare />
                  </a>
                 </li>
               </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <div className='flex space-x-5 justify-center'>
                   <TbFileTypePhp size={24} className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                   <TbBrandReact size={24} className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                   <LiaJava size={24} className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  <TbBrandJavascript size={24} className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                </div>
              </div>
             </div>
           </div>
           {/*right side*/}
           <div className=' flex justify-center md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img 
            src={pic} 
            className='rounded-full md:h-[450px] md:w-[450px] bg-blue-100' 
            alt="" />
           </div>
       </div>
      </div>
      <hr />
    </>
  )
}

export default Home