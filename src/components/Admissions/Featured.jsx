import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import FeaturedContentImage from '../../assets/Images/FeaturedContent.jpeg';

const FeaturedAdmissions = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-6 mb-6 sm:mb-0">
            <div className="w-2 h-16 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  leading-tight">
              FEATURED CONTENT
            </h2>
          </div>
          <div className="flex space-x-4">
            <button aria-label="Previous" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-md">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <button aria-label="Next" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-md">
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>
        <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-8" role="list">
          <article className="relative flex-shrink-0 w-full md:w-3/4 lg:w-2/3 xl:w-2/2 h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-xl group" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={FeaturedContentImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
              <h3 className="uppercase text-xl sm:text-2xl font-extrabold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAdmissions;