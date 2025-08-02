import React from 'react';
import AboutWelcome from '../../assets/Images/AboutWelcome.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=FKz0Fnk_TRM';
  const videoThumbnail = 'https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg';

  const handlePlayClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-50 text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <main className="flex-1">
            <div className="flex items-center gap-4 mb-10">
              <span className="inline-block w-2 h-12 bg-blue-500 rounded-full"></span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight">
                WELCOME TO NEW YORK FILM ACADEMY
              </h1>
            </div>

            <article className="mb-16 flex flex-col sm:flex-row items-start gap-8">
              <figure className="flex-shrink-0 relative w-40 sm:w-48 md:w-56 mx-auto sm:mx-0 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  alt="Black and white photo of Jerry Sherlock holding a film camera, captioned Jerry Sherlock Founder"
                  className="w-full h-full object-cover"
                  src={AboutWelcome}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center text-xs py-1">
                  Jerry Sherlock Founder
                </figcaption>
              </figure>
              <div className="text-base text-gray-700 leading-relaxed space-y-6">
                <p>
                  New York Film Academy, commonly known as NYFA, was founded in 1992 by Jerry Sherlock, executive producer of
                  <em> The Hunt for Red October (1990),</em>
                  as an alternative to traditional university-based film schools. Designed to demystify and democratize the highly competitive filmmaking industry, NYFA was established to provide accessibility to education in the art of filmmaking. Today, we continue to give a voice to students from all backgrounds and experiences, teaching them how to tell captivating stories through film, media, and the performing arts through a hands-on, project-based approach.
                </p>
                <p>
                  From their first day at NYFA, students receive the practical training and mentorship required to develop creative and technical expertise, as well as communication, collaboration, and critical thinking skills. Students spend a majority of their time creating projects, learning how to navigate the creative process from start-to-finish. By providing them with an ample amount of experience in their area of study, students can learn and master the framework to continue to create and innovate. Through this rigorous, but rewarding approach, students are given the tools, resources, and support to build their confidence and grow as an artist.
                </p>
              </div>
            </article>

            <figure className="mb-16 relative rounded-xl overflow-hidden shadow-xl group">
              <img
                alt="Collage of film and photography images with large text overlay reading New York Film Academy and a white circular play button in the center"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                src={videoThumbnail}
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              <button
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-white text-3xl cursor-pointer bg-black/50 hover:bg-black/70 transition-all duration-300 transform group-hover:scale-110"
                onClick={handlePlayClick}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </figure>

            <blockquote className="border-l-6 border-purple-600 p-16 bg-purple-50 text-base sm:text-lg leading-relaxed relative rounded-r-lg shadow-md">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-400 absolute top-6 left-6 text-4xl sm:text-5xl md:text-6xl opacity-30" aria-hidden="true" />
              <p className="pl-12 sm:pl-16  text-gray-800">
                “Jerry was inspired by the idea that to learn how to make movies, one must actually make movies. He brought together a group of filmmakers and educators from the around the world, and we designed a truly unique film school with a new hands-on, immersive approach. Through this experiential learning method, students write, direct, shoot, and edit their own original films, while also serving as crewmembers on their fellow classmates’ films, gaining extensive on-set experience. This learn-by-doing philosophy is applied to all of our areas of study.”
              </p>
              <footer className="mt-6 text-sm sm:text-base text-gray-900 pl-12 sm:pl-16">
                <strong className="font-bold text-gray-900">Michael J. Young</strong>
                <span className="block sm:inline sm:ml-2 text-gray-600 font-normal">President of NYFA</span>
              </footer>
            </blockquote>
          </main>

          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="font-extrabold text-lg px-6 py-4 border-b border-gray-300 uppercase tracking-wider text-gray-800">
                RELATED LINKS
              </h2>
              <nav className="flex flex-col text-base font-medium text-gray-700">
                <a className="px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100" href="#">
                  MISSION AND PURPOSE
                </a>
                <a className="px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100" href="#">
                  DEGREE PROGRAMS
                </a>
                <a className="px-6 py-4 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100" href="#">
                  EXPLORE OUR PROGRAMS
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
