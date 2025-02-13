import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
        await axios.post("https://getform.io/f/bnllzjnb", userInfo);
        toast.success("Your message has been sent");
    } catch (error) {
       console.error(error);
       toast.error("Something went wrong");
    }
  }
  return (
    <>
       <div name='Contact' className='container px-4 mx-auto my-10 max-w-screen-2xl md:px-20'>
        <h1 className='text-3xl font-boldmb-4'>Contact me</h1>
        <span>Please fill out the below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
          <form
           onSubmit={handleSubmit(onSubmit)}
           name="contact" method="POST" data-netlify="true"
          // action="https://getform.io/f/bnllzjnb"
           //method="POST" 
           className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>FullName</label>
              <input
              {...register("name", { required: true })} 
              className='rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type="text"
              placeholder='Enter your full name' 
              />
              {errors.name && <span>Name is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Email Address</label>
              <input 
              {...register("email", { required: true })}
              className='rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type="text"
              placeholder='Enter your email address' 
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Message</label>
              <textarea 
              {...register("message", { required: true })}
              className='rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              type="text"
              placeholder='Enter your Quary' 
              />
              {errors.message && <span>Message is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact