import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Image imports from local assets
import followUs1 from '../assets/Images/Followus1.png';
import followUs2 from '../assets/Images/Followus2.jpeg';
import followUs3 from '../assets/Images/Followus3.jpeg';
import followUs4 from '../assets/Images/Followus4.jpeg';
import followUs5 from '../assets/Images/Followus5.jpeg';
import followUs6 from '../assets/Images/Followus6.png';
import followUs7 from '../assets/Images/Followus7.jpeg';
import followUs8 from '../assets/Images/Followus8.jpeg';
import followUs9 from '../assets/Images/Followus9.jpeg';
import followUs10 from '../assets/Images/Followus10.png';
import followUs11 from '../assets/Images/Followus11.png';
import followUs12 from '../assets/Images/Followus12.jpeg';

const followUsImages = [
  { src: followUs1, alt: 'Man walking towards bright orange light wearing NYFA shirt holding a camera' },
  { src: followUs2, alt: 'Colorful vibrant background with NYFA New York Film Academy text' },
  { src: followUs3, alt: 'Silhouette of woman holding camera in blue smoky background' },
  { src: followUs4, alt: 'Smiling woman wearing NYFA cap and headphones with camera' },
  { src: followUs5, alt: 'Woman in red shirt and beret holding film reel on pink background' },
  { src: followUs6, alt: 'Man in suit holding NYFA diploma on city street' },
  { src: followUs7, alt: 'Back of person with ring lights and official selection logo' },
  { src: followUs8, alt: 'Man sitting at table with books and wooden chair' },
  { src: followUs9, alt: 'Sunset sky over water with buildings' },
  { src: followUs10, alt: 'Couple kissing outdoors in wedding attire' },
  { src: followUs11, alt: 'Clay skull model with blue hand sculpture on wooden table' },
  { src: followUs12, alt: 'Two people wearing masks operating film camera in black and white' },
  { src: followUs5, alt: 'Clay skull model with blue hand sculpture on wooden table' },
  { src: followUs9, alt: 'Two people wearing masks operating film camera in black and white' },

];

const FollowUsCard = ({ src, alt, className }) => (
  <div className={`relative group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg ${className}`}>
    <img 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" 
      src={src} 
    />
    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 ease-in-out"></div>
    <a 
      className="absolute bottom-4 right-4 text-white text-sm font-semibold flex items-center gap-2 bg-black bg-opacity-60 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 hover:bg-opacity-80" 
      href="https://www.instagram.com/jadetimes_academy/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} className="text-lg" />
      <span>Follow Us</span>
    </a>
  </div>
);

const FollowUs = () => {
  return (
    <div className="bg-gray-100 font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            FOLLOW <span className="text-purple-600">US</span>
          </h1>
          <div className="mt-4 w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {followUsImages.map((image, index) => (
            <FollowUsCard 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              className={index === 0 || index === 6 ? 'md:col-span-2 md:row-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
