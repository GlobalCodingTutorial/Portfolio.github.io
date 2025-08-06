import React from 'react'
import html from '../components/Images/html-icon.jpg'
import css from '../components/Images/css.jpg'
import js from '../components/Images/javascript.png'
import php from '../components/Images/php.webp'
import sql from '../components/Images/sql.jpg'
import java from '../components/Images/java.png'


function Portfolio() {
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
            name:"Javascript"
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
            name:"Java"
        }

    ]
  return (
    <>
          <div name='Portfolio' className='container px-4 mx-auto my-10 max-w-screen-2xl md:px-20'>
      <div>
        <h1 className='mb-5 text-3xl font-bold'>Portfolio</h1>
        <span className='font-semibold underline'>Featured projects</span>
        <div className='grid grid-cols-1 gap-3 my-5 md:grid-cols-4'>
           {cardItems.map(({id,logo,name})=>(
                <div className='md:w-[290px] md:h-[290px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                    <img
                     src={logo}
                     className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' 
                     alt="" />
                    <div>
                        <div className='px-2 mb-2 text-xl font-bold'>{name}</div>
                        <p className='px-2 text-gray-700'>
                        Build powerful solutions with clean, efficient code – tailored to your needs. 
                        </p>
                    </div>
                    <div>
                    <div className='justify-around space-x-3 px-6 py-2'>
                        <button className='bg-slate-600 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded'><a href='https://github.com/GlobalCodingTutorial'>Source Code</a></button>  
                    <br />
                    &nbsp;
                    </div>
                    
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

export default Portfolio
