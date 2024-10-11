"use client";
import React from "react";
import { UseSingleBook } from "@/hooks/UsegetSingleBook"; // Ensure the import path is correct
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";

const SingleBookPage: React.FC = () => {
  const { bookId } = useParams();
  const booksId = Array.isArray(bookId) ? bookId[0] : bookId;

  const { data: book, isLoading, error } = UseSingleBook(booksId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDownload = () => {
    if (book && book.file) {
      window.open(book.file, '_blank'); 
    }
  };

  return (
    <>
      <Header />
      {book ? (
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-10">
          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
              {book.title}
            </h2>
            <span className="text-lg font-semibold text-gray-700">by {book.author.name}</span>
            <p className="mt-5 text-lg leading-8 text-gray-600">{book.description}</p>
            <button
              onClick={handleDownload}
              className="mt-5 bg-black text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Download Book
            </button>
          </div>
          <div className="flex justify-center items-center">
          <Image
  src={book.coverImage}
  alt={book.title}
  className="rounded-md border shadow-lg"
  width={300}
  height={300}
 
/>

          </div>
        </div>
      ) : (
        <h1>No book found</h1>
      )}
    </>
  );
};

export default SingleBookPage;
