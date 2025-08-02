import React, { useState } from 'react';

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
       className="h-5 w-5"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor">
    <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
       className="h-5 w-5"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor">
    <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7" />
  </svg>
);

export default function FilterSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setIsOpen(o => !o)}
              className="w-full flex justify-between items-center text-left font-bold">
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  )
}