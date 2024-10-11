import React from 'react';
import { bookInfo } from '../../utils/bookInfo';
import Image from 'next/image';
import Link from 'next/link';
import { UseBookLists } from '@/hooks/UseBooklist';
const BookList = () => {
  const bookLists = UseBookLists();
  console.log(bookLists?.data);
  return (

    <>

    <div className='mt-20 text-white mx-auto '> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bookInfo.map((book, index) => (
          <div
            key={index}
            className="bg-black rounded-lg p-4 shadow-md transition-transform hover:scale-105"
          >
            <Image
              src={book?.imageUrl} 
              alt={book?.bookName} 
              className="object-fit rounded-t-lg w-[300px] h-[300px]" 
              width={300}  
             height={50}
            />
            <h2 className="text-lg font-bold mt-2">{book?.bookName}</h2>
            <p className="mt-2"><strong>Publisher:</strong> {book?.publisher}</p>
            <p className="mt-2"><strong>Published:</strong> {book?.publishDate}</p>
            <p className="mt-2">{book?.summary}</p>
            <button className='bg-gray-700 shadow-md px-12 pb-3 py-2 text-white rounded mt-2'>
              <Link href={book?.url} className=" block">Read more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
    
    
  );
}

export default BookList;
