import React from 'react';
import Banner from '@/components/Banner';
import BookList from '@/components/BookList';
import { Suspense } from 'react';

const Page = () => {
  return (
    <>
      <section className='container mx-auto flex flex-col items-center overflow-hidden  p-6'>
        <Banner />

        <Suspense fallback='Loading...'>
        <BookList />
        </Suspense>
        
      </section>
    </>
  );
}

export default Page;
