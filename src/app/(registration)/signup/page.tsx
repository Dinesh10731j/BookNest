'use client'
import React from 'react';
import Header from '@/components/Header';
import bookImage from "../../../assets/book.jpg";
import Image from 'next/image';
import {useForm,SubmitHandler} from "react-hook-form";
import { signupType} from '../../../../types/Type';

const Signup = () => {




  const {register,formState:{errors},reset,handleSubmit} = useForm<signupType>();


  const onSignup:SubmitHandler<signupType> = (data)=>{
    console.log(data);

    reset();

  }
  return (
    <div className="flex gap-7 flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg">
        
          <div className="hidden md:flex md:flex-1  rounded-l-lg">
            <Image src={bookImage} alt='bookImage' height={400} width={410}/>
          
          </div>

          {/* Login Form Section */}
          <div className="flex-1 p-8">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Signup</h2>
            
            <form onSubmit={handleSubmit(onSignup)}>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
                  placeholder="Enter your fulname" 
                  {...register('name',{required:'Name  is required'})}
                />
                
                {errors.name && <p className='text-red-700 text-sm '>{errors.name?.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
                  placeholder="Enter your email" 
                  {...register('email',{required:'E-mail is required'})}
                />
                
                {errors.email && <p className='text-red-700 text-sm '>{errors.email?.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input 
                  type="password" 
               
              
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
                  placeholder="Enter your password" 
                  {...register('password',{required:'Password is required'})}
                />
                 {errors.password && <p className='text-red-700 text-sm'>{errors.email?.message}</p>}
              </div>
            

              <button 
                type="submit" 
                className="w-full py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Signup
              </button>
            </form>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
