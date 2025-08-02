import React, { useState } from 'react';

// generate days plus leading blanks
const generateCalendarDays = (year, month) => {
  const d = new Date(year, month, 1);
  const days = [];
  while (d.getMonth() === month) {
    days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  const firstDay = days[0].getDay();
  const blanks = Array(firstDay).fill(null);
  return [...blanks, ...days];
};

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor">
    <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor">
    <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7" />
  </svg>
);

export default function Calendar({ date, view }) {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear]   = useState(date.getFullYear());

  const days = generateCalendarDays(year, month);
  const mName = new Date(year, month).toLocaleString('default', { month: 'long' });

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  if (view === 'calendar') {
    const allMonths = Array.from({ length: 12 }, (_, i) => i);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50">
        {allMonths.map(i => {
          const mdays = generateCalendarDays(year, i);
          const name = new Date(year, i).toLocaleString('default', { month: 'long' });
          return (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-center mb-2">{name} {year}</h4>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
                {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mt-2">
                {mdays.map((d, idx) => (
                  <div key={idx} className={`p-1 rounded ${d ? 'hover:bg-blue-100' : ''}`}>
                    {d ? d.getDate() : ''}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prev} className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeftIcon />
        </button>
        <h3 className="font-bold text-lg">{mName} {year}</h3>
        <button onClick={next} className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRightIcon />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
        {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {days.map((d, idx) => (
          <div key={idx} className={`p-2 rounded-full cursor-pointer ${d ? 'hover:bg-blue-100' : ''}`}>
            {d ? d.getDate() : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
