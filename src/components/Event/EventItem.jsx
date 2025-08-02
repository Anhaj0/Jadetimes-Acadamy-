import React from 'react';

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
       viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5l7 7-7 7" />
  </svg>
);

export default function EventItem({ event }) {
  const d     = new Date(event.date);
  const month = d.toLocaleDateString('en-US', { month: 'short' });
  const day   = d.getDate();

  return (
    <div className="flex items-center py-4 pl-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
      {/* left date box */}
      <div className="text-center mr-4 min-w-[3rem]">
        <div className="text-xs text-gray-500 uppercase">{month}</div>
        <div className="text-2xl font-bold text-gray-800">{day}</div>
      </div>

      {/* event info */}
      <div className="flex-grow">
        <p className="text-[13px] text-gray-600">{event.time}</p>
        <h4 className="font-bold text-gray-900">{event.title}</h4>
        <p className="text-sm text-gray-500">{event.location}</p>
      </div>

      <ChevronRightIcon />
    </div>
  );
}
