import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col background'>
      <h1 className='bg-white rounded-lg my-5 mx-6 py-2 px-3 text-3xl font-bold text-center'>
        RANDOM GIFS
      </h1>
      
      <div className='flex flex-col justify-center items-center gap-y-10 mb-10 mt-5'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
