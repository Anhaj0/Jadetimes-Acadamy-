import React from 'react';
import AlumniExplore01 from '../../assets/Images/AlumniExplore01.jpeg';
import AlumniExplore02 from '../../assets/Images/AlumniExplore02.jpeg';
import AlumniExplore03 from '../../assets/Images/AlumniExplore03.jpeg';

const alumniData = [
  {
    id: 1,
    name: 'Issa Rae',
    imageUrl: AlumniExplore01,
    altText: 'Portrait of Issa Rae',
  },
  {
    id: 2,
    name: 'Bill Hader',
    imageUrl: AlumniExplore02,
    altText: 'Bill Hader holding an Emmy award',
  },
  {
    id: 3,
    name: 'Aubrey Plaza',
    imageUrl: AlumniExplore03,
    altText: 'Portrait of Aubrey Plaza',
  },
];

const AlumniCard = ({ name, imageUrl, altText }) => (
  <a href="#" className="relative group block aspect-[3/4] overflow-hidden rounded-lg">
    <img 
      src={imageUrl} 
      alt={altText} 
      className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70"></div>
    <div className="absolute bottom-6 left-6 flex items-center gap-4 transition-all duration-300 group-hover:bottom-8">
      <div className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h14" transform="rotate(45 12 12)"></path>
        </svg>
      </div>
      <h3 className="text-white text-lg font-semibold tracking-wider uppercase">{name}</h3>
    </div>
  </a>
);

const Explore = () => {
  return (
    <div className="ExploreFont">
      <div className="bg-white text-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative mb-12">
            <div className="relative inline-block pl-6">
              <span className="absolute left-0 top-0 h-full w-1.5 bg-purple-600"></span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-800 uppercase">
                Explore NYFA Alumni
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {alumniData.map((alumni) => (
              <AlumniCard key={alumni.id} {...alumni} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;