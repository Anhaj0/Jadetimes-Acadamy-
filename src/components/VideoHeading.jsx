import React from 'react';
import PropTypes from 'prop-types';
import HeadingBackground from '../assets/Videos/VideoHeadingBgVideo.mp4';

const VideoHeading = ({ title, subtitle }) => {
  return (
    <div className="font-sans relative">
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[290px] overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HeadingBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-50 sm:bg-opacity-60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-lg">
            {title}
          </h1>
          <div className="mt-25 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-gray-200 text-shadow-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="h-2 bg-purple-600 w-full"></div>
    </div>
  );
};

VideoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default VideoHeading;
