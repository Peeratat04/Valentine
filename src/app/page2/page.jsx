"use client";

import { useRef, useState, useEffect } from 'react';

export default function Page2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/s1.jpg',
    '/images/s2.jpg', // ใช้ภาพเพิ่มเติมที่คุณต้องการ
    '/images/s3.jpg',
    '/images/s4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // เปลี่ยนภาพทุก ๆ 3 วินาที
    return () => clearInterval(interval); // ทำความสะอาด interval เมื่อ component หายไป
  }, [images.length]);

  const videoRef = useRef(null);
  // ฟังก์ชันสั่งเล่นวิดีโอ
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className='bg-pink-500'>
    <div className="relative h-screen bg-pink-200 p-4">
      {/* รูปพื้นหลัง */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/heart3.jpg)' }}></div>

      {/* เนื้อหาทับภาพพื้นหลัง */}
      <div className="relative z-10">
        <div className='bg-pink-500 p-4'>
          <h1 className="flex justify-center text-xl text-white font-mono">
            Happy Valentine's day 💐
          </h1>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 mt-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 overflow-hidden hover:scale-105 transition-transform duration-500">
            {/* วิดีโอ */}
            <video
              ref={videoRef}
              className="w-full h-48 sm:h-56 object-cover"
              controls
            >
              <source src="/videos/vd03.mp4" type="video/mp4" />
            </video>

            {/* เนื้อหาในการ์ด */}
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">แว้นไปเที่ยว 🛵💕</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                - ทริปไปดอยอินทนนท์ หนาวมากกกกก❄️
              </p>

              {/* ปุ่มสั่งเล่นวิดีโอ */}
              <button
                onClick={handlePlayVideo}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg active:scale-95 transition-all duration-300"
              >
                ▶️ เล่นวิดีโอ
              </button>
            </div>
          </div>
        </div>

        {/* การ์ดที่มีพื้นหลัง */}
        <div className="relative max-w-md mx-auto p-4 mt-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`, // เลื่อนภาพไปตาม index
                }}
              >
                {images.map((src, index) => (
                  <img key={index} src={src} alt="carousel image" className="w-full h-full object-center" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='relative bg-white rounded-2xl shadow-xl border border-gray-300 mt-6 '>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-pink-500">
              Happy Valentine's day Naa</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              ขอให้คบกันไปนานๆนะครับ 💕💕💕
            </p>
            <p className='text-xs sm:text-sm text-gray-600 mb-4'>
                ตั้งใจทำให้เลยนะ
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
