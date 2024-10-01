import React from 'react';
import Image from 'next/image';
import Book from "../assets/book.jpg"


const Banner = () => {
  return (
    <>
    <div className=' mt-20 flex items-center justify-center'>

        <div className='flex justify-evenly bg-gray-950 px-4 py-7 gap-5 items-center shadow-md'>
            <div>
                <h1 className='text-2xl text-white tracking-tight md:text-4xl text-center'> "A room without books is like a body without a soul." – Cicero</h1>
            </div>
            <div>

                <Image src={Book} alt='book_image' className='h-40 w-40'/>
            </div>


        </div>

<div>

   
</div>
    </div>
    </>
  )
}

export default Banner