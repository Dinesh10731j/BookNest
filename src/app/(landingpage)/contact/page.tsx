'use client'
import React from 'react';
import Image from 'next/image';
import bookImage from '../../../assets/book.jpg';
import {useForm,SubmitHandler} from "react-hook-form"
import { contactType } from '../../../../types/Type';
import Header from '@/components/Header';

const Contact: React.FC = () => {

  const {register,formState:{errors},reset,handleSubmit} = useForm<contactType>();

  const onContactSubmit:SubmitHandler<contactType>=(data)=>{
    console.log(data);

    reset();

  

  }


  return (
    <>
    <Header/>
      <div className="flex flex-col md:flex-row md:gap-7 lg:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
        <Image
          src={bookImage}
          alt="Books"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Contact Us</h1>
        <form className="bg-white h-[500px] w-[400px] p-6 md:w-[500px] md:h-[500px] rounded-lg shadow-lg" onSubmit={handleSubmit(onContactSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
              {...register('name',{required:'Name is required'})}

            />

            {errors.name && <p className='text-red-700 text-sm'>{errors.name?.message}</p>}
            
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
              {...register('email',{required:'E-mail is required',validate:{
                validateEmail: (value)=>{
                  const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailPattern.test(value) || 'Please enter a valid email address'

                }
              }})}
            />

            {errors.email && <p className='text-red-700 text-sm'>{errors.email?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Your Message"
              {...register('message',{required:'Message is required'})}
              />
              {errors.message && <p className='text-red-700 text-sm'>{errors.message?.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded hover:bg-gray-900 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  
  );
};

export default Contact;
