import React from 'react';
import HeadlinesImg from '../../assets/Images/HeadlinesImg.png';
import TrendingImg from '../../assets/Images/HeadlinesImg01.jpeg';
import CannesImg from '../../assets/Images/HeadlinesImg02.jpeg';

const HEADLINES = () => {
  return (
    <div className="bg-gray-50 font-sans py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Headlines */}
          <div className="relative group cursor-pointer col-span-1 md:col-span-1 bg-black rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img 
              alt="Woman with glasses holding a golden trophy" 
              className="object-cover w-full h-full opacity-50 group-hover:opacity-75 transition-opacity duration-300" 
              src={HeadlinesImg} 
            />
            <div className="absolute top-8 left-8">
              <h2 className="text-white text-2xl font-bold tracking-widest uppercase">Headlines</h2>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Middle Column: Trending Article */}
          <div className="col-span-1 md:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img 
              alt="Man sitting on a park bench" 
              className="w-full h-64 object-cover" 
              src={TrendingImg} 
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-yellow-400 text-black text-xs font-bold tracking-widest px-3 py-1 rounded-full">TRENDING</span>
                <p className="text-gray-500 text-xs font-semibold tracking-widest">FEBRUARY 11, 2025</p>
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight uppercase">Q&A With Bob Ahmed</h3>
              <p className="text-gray-600 text-base mt-4 flex-grow">
                Meet Pakistani-American writer and director Bob Ahmed, an alum of NYFA’s short-term filmmaking workshop. We recently caught up with Bob to discuss his career and latest project.
              </p>
              <a href="#" className="text-pink-600 hover:text-pink-800 font-bold text-sm tracking-wider mt-6 inline-block self-start">LEARN MORE &rarr;</a>
            </div>
          </div>

          {/* Right Column: Cannes Article */}
          <div className="col-span-1 md:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img 
              alt="Red theater seats" 
              className="w-full h-64 object-cover" 
              src={CannesImg} 
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-500 text-xs font-semibold tracking-widest mb-4 text-right">MAY 23, 2024</p>
              <h3 className="text-xl font-bold text-gray-800 leading-tight uppercase">NYFA Alum Step into the Spotlight at Cannes</h3>
              <p className="text-gray-600 text-base mt-4 flex-grow">
                Join us in celebrating NYFA alumni debuting films at the 77th Cannes Film Festival! Under the direction of jury president, filmmaker, and actress Greta Gerwig, known for the 2023 blockbuster...
              </p>
              <a href="#" className="text-pink-600 hover:text-pink-800 font-bold text-sm tracking-wider mt-6 inline-block self-start">LEARN MORE &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HEADLINES;