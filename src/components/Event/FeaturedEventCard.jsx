import React from 'react';
import eventImage01 from '../../assets/Images/events01.jpeg';

const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0
             002-2V7a2 2 0 00-2-2H5a2 2 0 00-2
             2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L12 21.314l-5.657-4.657a8 8
             0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export default function FeaturedEventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
      <img
        src={eventImage01}
        alt="Featured"
        className="w-full md:w-1/3 h-52 md:h-auto object-cover"
      />

      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>

          <div className="text-gray-600 text-sm mb-1 flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2" />
            {event.date}
          </div>

          <div className="text-gray-600 text-sm mb-3 flex items-center">
            <LocationIcon className="h-4 w-4 mr-2" />
            {event.location}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>

        <button className="self-start mt-5 bg-cyan-500 text-white text-sm font-semibold py-2 px-5 rounded hover:bg-cyan-600">
          MORE INFO
        </button>
      </div>
    </div>
  );
}
