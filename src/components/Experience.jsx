import React from 'react'
import html from '../components/Images/html-icon.jpg'
import css from '../components/Images/css.jpg'
import js from '../components/Images/javascript.png'
import php from '../components/Images/php.webp'
import sql from '../components/Images/sql.jpg'
import java from '../components/Images/java.png'
import xampp from '../components/Images/xampp.png'

function Experience() {
    const cardItems=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:js,
            name:"JS"
        },
        {
            id:4,
            logo:php,
            name:"PHP"
        },
        {
            id:5,
            logo:sql,
            name:"SQL"
        },
        {
            id:6,
            logo:java,
            name:"JAVA"
        },
        {
            id:7,
            logo:xampp,
            name:"XAMPP"
        }

    ]
  return (
    <>
        <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div className='text-sm md:text-lg text-justify'>
        <h1 className='mb-5 text-3xl font-bold'>Experience</h1>        
        <p className=''>I'm a fresher having experience in below technologies :-</p>
        <br />
        <div className='grid grid-cols-2 gap-7 my-3 md:grid-cols-5'>
           {cardItems.map(({id,logo,name})=>(
                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                     <img
                     src={logo}
                     className='w-[150px] rounded-full' 
                     alt="" />
                      
                    <div>
                        <div className=''>{name}</div>
                    </div>
                    
                </div>
            ))
           }
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience