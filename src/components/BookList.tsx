"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UseBookLists } from '@/hooks/UseBooklist';
import { bookListType } from '../../types/Type';

const BookList = () => {
  const { data: bookLists,isLoading,isError } = UseBookLists();

  if (isLoading) return <div className='text-black'>Loading...</div>;
  if (isError) return <div className='text-red-500'>Error: </div>;

  return (
    <div className='mt-20 text-white mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bookLists?.map((book: bookListType) => (
          <div
            key={book?._id}
            className="bg-black w-full rounded-lg p-4 shadow-md transition-transform hover:scale-105"
          >
            {
              book?.coverImage?(
                <Image
                src={book?.coverImage} 
                alt={book?.title} 
                className="object-cover rounded-t-lg w-full h-60"
                width={300}  
                height={300}
              />
              ):(
                <Image  width={300}  
                alt={book?.title} 
                height={300} src='https://avatar.iran.liara.run/public'   className="object-cover rounded-t-lg w-full h-60"/>
              )

          }
        
            <h2 className="text-lg font-bold mt-2">{book?.title}</h2>
            <p className="mt-2"><strong>Genre:</strong> {book?.genre}</p>
            <p className="mt-2"><strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}</p>
            <button className='bg-gray-700 shadow-md px-6 pb-3 py-2 text-white rounded mt-2'>
              <Link href={`book/${book?._id}`} className="block">Read more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
