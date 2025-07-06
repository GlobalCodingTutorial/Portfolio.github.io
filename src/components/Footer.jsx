import React from 'react'
import { FaFacebook,FaLinkedinIn,FaGithub} from 'react-icons/fa6'
function Footer() {
  return (
    <>
    <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
           <div className='flex flex-col items-center justify-center'>
             <div className='flex space-x-4'>
              
              <a href="https://www.facebook.com/vikas.gola.353/" target="_blank" className='flex space-x-4'>
                <FaFacebook size={24}/>
                </a>
              
              
                <a href="https://www.linkedin.com/in/vikas-gola-821207370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className='flex space-x-4'>
                <FaLinkedinIn size={24}/>
                </a>
            

                <a href="https://github.com/GlobalCodingTutorial" target="_blank" className='flex space-x-4'>
                <FaGithub size={24}/>
                </a>
                
             </div>
             <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
              <p className='text-sm'>&copy; 2024 GlobalCodingTutorial. All rights reserved.</p>
             </div>
           </div>
        </div>
      </footer>
    </>

  )
}

export default Footer
