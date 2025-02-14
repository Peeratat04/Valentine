"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToPage2 = () => {
    router.push('/page2');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-100 p-4">
      <h1 className="text-4xl font-bold text-pink-600 text-center">Valentine's Day 💕💐</h1>
      <img src="/images/heart1.jpg" alt="" className='mt-6' />
      <button
        onClick={goToPage2}
        className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
      >
        Tap to open
      </button>
      
    </div>
  );
}
