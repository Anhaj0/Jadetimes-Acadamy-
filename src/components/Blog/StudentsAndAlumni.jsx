import React from 'react'
import PartnershipImg01 from '../../assets/Images/PaetnershipImg01.jpeg';
import PartnershipImg02 from '../../assets/Images/PaetnershipImg02.jpeg';

const StudentsAndAlumni = () => {
  return (
<div className="bg-gray-100 font-sans py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: NYFA Partnerships */}
          <div className="relative bg-gradient-to-br from-green-700 to-indigo-700 p-8 rounded-lg shadow-2xl min-h-[500px] flex flex-col justify-between text-white transform hover:scale-105 transition-transform duration-300">
            <div>
              <h2 className="text-2xl font-bold tracking-widest">NYFA PARTNERSHIPS</h2>
              <p className="mt-4 text-indigo-200">Explore our collaborations with industry leaders and institutions.</p>
            </div>
            <div className="flex justify-end items-center">
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-indigo-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Trending Article */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative">
              <img src={PartnershipImg01} alt="Saheem Ali Q&A Session" className="w-full h-64 object-cover"/>
              <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold tracking-widest px-3 py-1 rounded-full">TRENDING</div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-xs font-semibold tracking-widest">MAY 7, 2025</p>
              <h3 className="text-xl font-bold text-gray-800 leading-tight mt-2">Buena Vista Social Club Documentary Screening and Q&A with Saheem Ali</h3>
              <p className="text-gray-600 text-base mt-4">
                A special screening and Q&A with Broadway Director Saheem Ali, in partnership with Carnegie Hall’s Nuestro Sonidos Season.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-bold text-sm tracking-wider mt-6 inline-block">LEARN MORE &rarr;</a>
            </div>
          </div>

          {/* Right Column: Tribeca Article */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={PartnershipImg02} alt="NYFA group at Tribeca" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <p className="text-gray-500 text-xs font-semibold tracking-widest">JULY 16, 2025</p>
              <h3 className="text-xl font-bold text-gray-800 leading-tight mt-2">History Made at Tribeca: NYFA Alum Mohamed Diab and Sarah Goher's Film Sweeps Awards</h3>
              <p className="text-gray-600 text-base mt-4">
                NYFA alum and board member Mohamad Diab's film makes history at the Tribeca Film Festival, and the NYFA community had a front-row seat.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-bold text-sm tracking-wider mt-6 inline-block">LEARN MORE &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentsAndAlumni