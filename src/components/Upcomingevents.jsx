import React, { useState } from 'react';

// --- Data ---
// In a real application, this data would likely be fetched from an API.
const deadlineData = [
  {
    type: "Spring ’26 Undergraduate Application Deadline",
    earlyAction: null,
    general: {
      domestic: { date: "December 1, 2025", commit: "December 12, 2025" },
      international: { date: "October 15, 2025", commit: "November 1, 2025" },
      fee: 75,
    },
    late: "N/A",
  },
  {
    type: "Spring ’26 Graduate Application Deadline",
    earlyAction: null,
    general: {
      domestic: { date: "December 1, 2025", commit: "December 12, 2025" },
      international: { date: "October 15, 2025", commit: "November 1, 2025" },
      fee: 75,
    },
    late: "N/A",
  },
  {
    type: "Fall ’25 Undergraduate Application Deadline",
    earlyAction: {
      date: "December 1, 2024",
      fee: 75,
      commit: "May 1, 2025",
    },
    general: {
      domestic: { date: "Extended to March 15, 2025", original: "February 14, 2025", fee: 75, commit: "May 1, 2025" },
      international: null,
    },
    late: {
      date: "Extended to July 7, 2025",
      original: "June 1, 2025",
      fee: 200,
    },
  },
  {
    type: "Fall ’25 Graduate Application Deadline",
    earlyAction: {
      date: "Extended to March 15, 2025",
      original: "February 14, 2025",
      fee: 75,
      commit: "May 1, 2025",
    },
    general: {
      domestic: { date: "Extended to July 7, 2025", original: "June 1, 2025", fee: 200 },
      international: null,
    },
    late: "N/A",
  },
];

// --- Components ---

// Reusable SVG icon to replace Font Awesome
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Component to render deadline details, used in both table and card views
const DeadlineDetails = ({ details, isEarly = false }) => {
  if (!details) return null;

  const renderSection = (title, data) => {
    if (!data) return null;
    return (
      <div className="mb-2">
        {title && <p className="font-semibold">{title}</p>}
        {data.original && <p className="line-through text-red-500">{data.original}</p>}
        <p>{data.date}</p>
        {data.commit && <p className="italic mt-1 text-xs">Deadline to commit: {data.commit}</p>}
        {data.fee && <p className="italic font-semibold mt-1 text-xs">Application Fee: ${data.fee}</p>}
      </div>
    );
  };

  return (
    <>
      {renderSection(isEarly ? null : "Domestic Students (US Citizens):", details.domestic)}
      {details.domestic && details.international && <hr className="my-2 border-gray-300" />}
      {renderSection(isEarly ? null : "International Students (Non-US):", details.international)}
      {details.fee && !details.domestic && <p className="italic font-semibold mt-2 text-xs">Application Fee: ${details.fee}</p>}
    </>
  );
};

// Main component
const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState('deadlines');

  const renderContent = () => {
    if (activeTab === 'workshops') {
      return <div className="text-center py-10">Short-term workshop information will be available soon.</div>;
    }

    return (
      <>
        {/* --- Desktop Table View (hidden on small screens) --- */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white text-xs font-semibold uppercase">
                <th className="py-3 px-3 text-left min-w-[200px]">Application Type/Term</th>
                <th className="py-3 px-3 text-left min-w-[200px]">Early Action (Non-binding)</th>
                <th className="py-3 px-3 text-left min-w-[300px]">General Application Deadline</th>
                <th className="py-3 px-3 text-left min-w-[200px]">Late Application Deadline</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {deadlineData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-3 align-top font-semibold">{item.type}</td>
                  <td className="py-4 px-3 align-top"><DeadlineDetails details={item.earlyAction} isEarly={true} /></td>
                  <td className="py-4 px-3 align-top"><DeadlineDetails details={item.general} /></td>
                  <td className="py-4 px-3 align-top">{typeof item.late === 'string' ? item.late : <DeadlineDetails details={item.late} isEarly={true} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile Card View (visible only on small screens) --- */}
        <div className="block md:hidden">
          {deadlineData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-base mb-3">{item.type}</h3>
              {item.earlyAction && (
                <div className="mb-2">
                  <h4 className="font-semibold text-sm text-gray-800 border-b pb-1 mb-1">Early Action</h4>
                  <DeadlineDetails details={item.earlyAction} isEarly={true} />
                </div>
              )}
              {item.general && (
                <div className="mb-2">
                  <h4 className="font-semibold text-sm text-gray-800 border-b pb-1 mb-1">General Deadline</h4>
                  <DeadlineDetails details={item.general} />
                </div>
              )}
              {item.late && (
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 border-b pb-1 mb-1">Late Deadline</h4>
                  {typeof item.late === 'string' ? item.late : <DeadlineDetails details={item.late} isEarly={true} />}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="EventsFont">
      <div className="bg-white font-sans text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300 pb-3 mb-6">
            <nav className="flex space-x-4 text-sm font-semibold">
              <button
                onClick={() => setActiveTab('deadlines')}
                className={`uppercase pb-2 ${activeTab === 'deadlines' ? 'text-black border-b-2 border-sky-500' : 'text-gray-500'}`}
              >
                Application Deadlines
              </button>
            </nav>
            <a href="/events" className="flex items-center text-sm font-semibold text-black hover:underline mt-4 sm:mt-0">
              <CalendarIcon />
              See Upcoming Events
            </a>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;