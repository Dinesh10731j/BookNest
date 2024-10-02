import React from 'react';
import Image from 'next/image';
import bookImg from '../../../assets/book.jpg';

const About: React.FC = () => {
  return (
    <div className="flex  flex-col lg:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
        <Image
          src={bookImg}
          alt="Books"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center lg:text-left max-w-2xl mb-6">
          Welcome to our bookstore, where stories come to life! We are passionate about
          connecting readers with the books they love. Our carefully curated selection includes
          everything from timeless classics to the latest bestsellers.
        </p>
        <p className="text-lg text-center lg:text-left max-w-2xl mb-6">
          Founded in 2005, we believe in the power of books to inspire, educate, and entertain.
          Our team is dedicated to providing exceptional customer service and creating a cozy,
          welcoming atmosphere for all book lovers.
        </p>
        <p className="text-lg text-center lg:text-left max-w-2xl">
          Join us for book signings, readings, and community events as we celebrate the joy of
          reading together. Thank you for supporting your local bookstore!
        </p>
      </div>
    </div>
  );
};

export default About;
