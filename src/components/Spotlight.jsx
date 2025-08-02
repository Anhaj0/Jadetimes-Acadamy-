import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Spotlight1 from '../assets/Images/Spotlight 01.jpeg';
import Spotlight2 from '../assets/Images/Spotlight 02.png';
import Spotlight3 from '../assets/Images/Spotlight 03.png';
import Spotlight4 from '../assets/Images/Spotlight 04.jpeg';
import Spotlight5 from '../assets/Images/Spotlight 05.jpeg';
import Spotlight6 from '../assets/Images/Spotlight 06.jpeg';
import Spotlight7 from '../assets/Images/Spotlight 07.jpeg';
import Spotlight8 from '../assets/Images/Spotlight 08.jpeg';
import Spotlight9 from '../assets/Images/Spotlight 09.jpeg';

const Spotlight = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Centered container for top content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="inline-block border-l-4 border-purple-700 pl-2">
            <h1 className="text-2xl sm:text-3xl font-normal leading-tight">
              SPOTLIGHT
              <br />NYFA
            </h1>
          </div>
        </div>

        {/* Top row cards */}
        {/* Top row cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Group of people filming a scene with boom mic and lights in blue lighting"
              className="w-full object-cover filter hover:grayscale-0 transition-all duration-300"
              height="300"
              src={Spotlight1}
              width="400"
            />
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
                OPEN HOUSE & LIVE ONLINE VIRTUAL EVENTS
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                NYFA holds monthly open houses as well as a number of online virtual info sessions and events.
              </p>
            </div>
          </div>


           {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Young girl smiling looking through a video camera indoors"
              className="w-full object-cover filter hover:grayscale-0 transition-all duration-300"
              height="300"
              src={Spotlight2}
              width="400"
            />
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
                SIGN UP FOR SUMMER CAMP!
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                NYFA has in-person and online summer camps and classes for teens ages 14-17 and kids 10-13. Camps are offered in NY, LA, Miami, Harvard, Florence, Paris, and online. Sign up your aspiring youth filmmaker, performer, or visual storyteller today!
              </p>
            </div>
          </div>


           {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              alt="NYFA logo text in black on yellow geometric background"
              className="w-full object-cover filter  hover:grayscale-0 transition-all duration-300"
              height="300"
              src={Spotlight3}
              width="400"
            />
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
                EXPLORE MORE AS A NYFA MEMBER! JOIN TODAY!
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Join now for $50! NYFA Membership opens the door to unique Film, Media, and Performing Arts experiences including masterclasses, discounts, and access to live online guest speaker events.
              </p>
            </div>
          </div>
        </div>


        {/* Carousel controls (centered) - visual only */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <button aria-label="Previous" className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 text-purple-600">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-purple-600"></div>
          </div>
          <button aria-label="Next" className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 text-purple-600">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>

      {/* Full-width container for bottom image grids */}
      <div className="w-full p-4 pb-20">
        {/* Seamless 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Degree Programs */}
          <div className="relative group cursor-pointer overflow-hidden h-80">
            <img
              alt="Filming inside a dimly lit space"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight4}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  DEGREE PROGRAMS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          {/* Certificate Programs */}
          <div className="relative group cursor-pointer overflow-hidden h-80">
            <img
              alt="Two people filming outdoors"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight5}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  CERTIFICATE PROGRAMS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          {/* Short-Term Workshops */}
          <div className="relative group cursor-pointer overflow-hidden h-80">
            <img
              alt="Group with NYFA shirts and equipment"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight6}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  SHORT-TERM WORKSHOPS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        {/* Seamless 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Youth Programs */}
          <div className="relative group cursor-pointer overflow-hidden h-96">
            <img
              alt="Smiling young people posing for a photo"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight7}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  YOUTH PROGRAMS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          {/* Study Abroad with NYFA */}
          <div className="relative group cursor-pointer overflow-hidden h-96">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  STUDY ABROAD WITH NYFA
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        {/* Online Programs full width */}
        <div className="relative group cursor-pointer overflow-hidden h-[500px] mt-4">
          <img
            alt="Hands typing on a laptop"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            src={Spotlight9}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-white text-2xl font-bold tracking-wider">
                ONLINE PROGRAMS
              </h3>
              <p className="text-white mt-2 max-w-md">
                Learn from industry experts from anywhere in the world. Explore our flexible online programs.
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 text-white text-3xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;