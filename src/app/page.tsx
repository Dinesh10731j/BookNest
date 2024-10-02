import React from 'react';
import Banner from '@/components/Banner';
import BookList from '@/components/BookList';

const Page = () => {
  return (
    <>
      <section className='container mx-auto flex flex-col items-center overflow-hidden  p-6'>
        <Banner />
        <BookList />
      </section>
    </>
  );
}

export default Page;
