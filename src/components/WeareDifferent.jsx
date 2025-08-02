import React from 'react';

const StatCard = ({ value, label, color }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out text-center">
    <div className={`inline-flex items-center justify-center border-4 border-${color}-400 px-10 py-6 rounded-lg`}>
      <span className={`text-6xl font-extrabold text-${color}-500`}>{value}</span>
    </div>
    <p className="mt-5 text-lg font-medium text-gray-600">{label}</p>
  </div>
);

const WeareDifferent = () => {
  return (
    <div className="font-sans bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:pr-12">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                WE ARE <br /><span className="text-purple-600">DIFFERENT</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <StatCard value="135k+" label="Students Graduated Since 1992" color="blue" />
            <StatCard value="160+" label="Nationalities Represented" color="purple" />
            <StatCard value="30" label="Years of Hands-On Programs" color="yellow" />
            <StatCard value="8" label="Campuses Worldwide" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeareDifferent;
