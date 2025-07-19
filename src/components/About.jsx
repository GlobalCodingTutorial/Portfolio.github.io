import React from 'react'

function About() {
  return (
    <>
    <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <div>
    <h1 className='text-3xl font-bold mb-5'>About</h1>    
     <p className='text-sm md:text-lg text-justify'>
     I am a computer science diploma graduate with a strong passion for software development 
     and problem-solving. Skilled in programming languages such as Java, Php, 
     and JavaScript, as well as web development technologies like HTML, CSS, and 
     React, I am eager to apply my technical knowledge in real-world projects. 
     A quick learner with a collaborative mindset, I am excited to grow as a 
     developer and contribute to innovative solutions in a dynamic work environment.
     </p>
     <br />
     {/*Education & Traning*/}
     <h1 className='text-green-600 font-semibold text-xl'>
      Education
     </h1>
     <span className='text-sm md:text-lg'>
       <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
         <table class="w-full text-left table-auto min-w-max text-slate-800">
           {/*table head start from here */}
           <thead>
           <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Course
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Institute 
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Field
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Completed
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Education Board
          </p>
        </th>

        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Percentage
          </p>
        </th>
           </tr>
           </thead>
           {/*table body start from here */}
           <tbody>

            {/*1*/}
            <tr class="hover:bg-slate-50">
        <td class="p-4">
          <p class="text-sm font-bold">
            12<sup>th</sup>
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
           Gov't Sarvodaya Vidhayala Rohini Sec-8 
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            Medical Science Stream
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            2021
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            C.B.S.E
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            61.1%
          </p>
        </td>
             </tr>
                {/*2*/}
             <tr class="hover:bg-slate-50">
              <td class="p-4">
          <p class="text-sm font-bold">
            Diploma 
          </p>
              </td>
              <td class="p-4">
          <p class="text-sm">
            Guru Tegh Bahadur Polytechnic Institute
          </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                 Computer Science Engineering
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                2024
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                B.T.E
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                75%
               </p>
              </td>
             </tr>
                     <tr class="hover:bg-slate-50">
              <td class="p-4">
          <p class="text-sm font-bold">
            Graduation 
          </p>
              </td>
              <td class="p-4">
          <p class="text-sm">
            Manipal University Jaipur 
          </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                  Bachelor of Computer Applications
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                Pursuing
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                Manipal University 
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                ---
               </p>
              </td>
             </tr>
           </tbody>
         </table>
       </div>
     </span>
     <br />
     <br />
          {/*Professional Experience*/}
     <h1 className='text-green-600 font-semibold text-xl'>
      Professional Training & Experience 
     </h1>
          <span className='text-sm md:text-lg'>
       <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
         <table class="w-full text-left table-auto min-w-max text-slate-800">
           {/*table head start from here */}
           <thead>
           <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
           Company
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Department 
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Desigation
          </p>
        </th>
        <th class="p-4">
          <p class="text-sm leading-none font-normal">
            Duration
          </p>
        </th>
           </tr>
           </thead>
           {/*table body start from here */}
           <tbody>

            {/*1*/}
            <tr class="hover:bg-slate-50">
        <td class="p-4">
          <p class="text-sm font-bold">
            Rajiv Gandhi Cancer Institute and Research Center
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
           Information Technology
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            Web Developer trainee
          </p>
        </td>
        <td class="p-4">
          <p class="text-sm">
            Mar/2024 - May/2024
          </p>
        </td>
             </tr>
                {/*2*/}
             <tr class="hover:bg-slate-50">
              <td class="p-4">
          <p class="text-sm font-bold">
            Fabasian Industrie's Pvt. Ltd. 
          </p>
              </td>
              <td class="p-4">
          <p class="text-sm">
            Business Management
          </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                GeM Portal Operator
               </p>
              </td>
              <td class="p-4">
               <p class="text-sm">
                Dec/2024 - May/2025
               </p>
              </td>
             </tr>
      
           </tbody>
         </table>
       </div>
     </span>
     <br />
     <br />
     {/*Skills & Expertise*/}
     <h1 className='text-green-600 font-semibold text-xl'>
      Skills & Expertise
     </h1>
     <span className='text-sm md:text-lg'>
      <ol>
        <li>
          <b>
           Programming Skills :-
          </b>
          Frontend(html,css & js) and Backend(Basic Java & php), framework(Bootstrap, Tailwind CSS, Spring-boot), tools(Vscode, Xampp & Mysql).
        </li>
        <br />
        <li>
          <b>
            Techanical Skills :-
          </b>
          Data management, Computer operaton, File management, Web Designing etc.
        </li>
        <br />
        <li>
          <b>
            Other Skills :-
          </b> 
          Communication, Analytical Skills, Problem-solving, Teamwork, Adaptability.
        </li>
      </ol>       
     </span>
     <br />
     <br />

     {/*Achievements & Awards*/}
     <h1 className='text-green-600 font-semibold text-xl'>
      Achievements & Awards
     </h1>
     <span className='text-sm md:text-lg'>
       <ol>
         <li>
          Advanced Computing Course Certification-NAVJYOTI Foundation <b>(2023)</b> 
         </li>
         <br />
         <li>
          International Equanimity Olympiad <b>(2017)</b>
         </li>
         <br />
         <li>
          Edusoft IT Solution Certification <b>(2014)</b>
         </li>
       </ol>
     </span>
     <br />
     <br />

     {/*Mission Statement*/}
     <h1 className='text-green-600 font-semibold text-xl'>
      Mission Statement
     </h1>
     <span className='text-sm md:text-lg text-justify'>
      As a developer, my mission is to build visually engaging, user-friendly, and     responsive websites by applying modern web technologies and a continuous learning mindset. I am committed to writing clean, maintainable code and delivering solutions that meet both user needs and business goals. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I aim to grow into a full-stack developer who contributes to innovative, high-impact web applications. I thrive on challenges and am eager to collaborate, adapt, and evolve in the dynamic world of web development.
     </span>
    </div>
    </div>
    </>
  )
}

export default About
