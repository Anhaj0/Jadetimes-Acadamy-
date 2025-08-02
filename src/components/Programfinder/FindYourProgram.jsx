import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const programsData = [
  {
    title: 'MASTER OF FINE ARTS DEGREE IN FILMMAKING',
    location: 'Los Angeles',
    dates: [
      'September 2, 2025 – August 14, 2027',
      'January 12, 2026 – December 14, 2027',
      'May, 2026 – April, 2028',
      'September, 2026 – December, 2026',
    ],
    semesters: 6,
    tuition: {
      title: 'Fall 2025 Semester Tuition',
      semesterTuition: '$16,804 Per Semester',
      equipmentFee: '$1,807 Per Semester',
      wellnessFee: '$95 Per Semester',
    },
    discipline: 'Filmmaking',
    programType: 'Master of Fine Arts',
    startDate: '2025',
  },
  {
    title: 'MASTER OF FINE ARTS IN ACTING FOR FILM',
    location: 'Los Angeles',
    dates: [
      'September 2, 2025 – April 24, 2027',
      'January 12, 2026 – August 14, 2027',
      'August, 2026 – April, 2028',
    ],
    semesters: 5,
    tuition: {
      title: 'Fall 2025 Semester Tuition and Equipment & Technology Fee',
      semesterTuition: '$19,973 Per Semester',
      equipmentFee: '$40 Per Semester',
      wellnessFee: '$95 Per Semester',
    },
    discipline: 'Acting for Film',
    programType: 'Master of Fine Arts',
    startDate: '2025',
  },
];

const disciplines = [
  '3D Animation', 'Acting for Film', 'Cinematography', 'Digital Editing',
  'Documentary Filmmaking', 'Entertainment Media', 'ESL', 'Filmmaking',
  'Game Design', 'Musical Theatre', 'Photography', 'Producing',
  'Screenwriting', 'Virtual Reality'
];

const programTypes = [
  'Master of Fine Arts', 'Master of Arts', 'Masters of Arts Online',
  'Bachelor of Fine Arts', 'Bachelor of Arts', 'Associate of Fine Arts',
  '2-Year Certificate Program', '1-Year Certificate Program',
  'Short-Term Workshop', 'Online Short-Term Workshop', 'All Available'
];

const locations = [
  'New York City', 'Los Angeles', 'Miami', 'Florence, Italy',
  'Online', 'Harvard University', 'Paris, France', 'Bejing, China'
];

const startDates = ['2025', '2026'];


const FindYourProgram = () => {
  const [filters, setFilters] = useState({
    discipline: [],
    programType: [],
    location: [],
    startDate: [],
  });

  const [filteredPrograms, setFilteredPrograms] = useState(programsData);

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prevFilters, [category]: newValues };
    });
  };

  const applyFilters = () => {
    let programs = [...programsData];

    if (filters.discipline.length > 0) {
      programs = programs.filter(p => filters.discipline.includes(p.discipline));
    }
    if (filters.programType.length > 0) {
      programs = programs.filter(p => filters.programType.includes(p.programType));
    }
    if (filters.location.length > 0) {
      programs = programs.filter(p => filters.location.includes(p.location));
    }
    if (filters.startDate.length > 0) {
      programs = programs.filter(p => filters.startDate.includes(p.startDate));
    }

    setFilteredPrograms(programs);
  };

  const clearFilters = () => {
    setFilters({
      discipline: [],
      programType: [],
      location: [],
      startDate: [],
    });
    setFilteredPrograms(programsData);
     // Reset checkboxes on UI
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  };


  return (
    <div className="bg-gray-50 text-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="flex-1">
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-2 h-10 bg-purple-600 rounded-full"></span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
                  FIND YOUR PROGRAM
                </h1>
              </div>
              <p className="text-base text-gray-600 mb-10 max-w-2xl">
                Use the filters to find more information about NYFA’s programs.
              </p>
              <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-gray-700 select-none">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm font-semibold w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                    1
                  </span>
                  <span>Select Discipline</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm" />
                <div className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm font-semibold w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                    2
                  </span>
                  <span>Select Program Type</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm" />
                <div className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-sm font-semibold w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                    3
                  </span>
                  <span>Select Location</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm" />
              </nav>
            </section>

            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <section key={index} className="mb-12 p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 mb-6">
                    {program.title}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-800 text-white text-sm font-semibold text-left uppercase tracking-wider">
                          <th className="py-3 px-4">LOCATION</th>
                          <th className="py-3 px-4">PROGRAM START DATE AND END DATE</th>
                          <th className="py-3 px-4">NUMBER OF SEMESTERS</th>
                          <th className="py-3 px-4">TUITION</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700 align-top divide-y divide-gray-200">
                        <tr>
                          <td className="py-4 px-4 font-medium">{program.location}</td>
                          <td className="py-4 px-4 leading-relaxed">
                            <div className="flex flex-col gap-2">
                              {program.dates.map((date, i) => <div key={i}>{date}</div>)}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="block font-bold text-lg text-blue-600">{program.semesters}</span>
                            <span className="block text-xs text-gray-500">Semesters</span>
                          </td>
                          <td className="py-4 px-4 font-normal leading-relaxed">
                            <div className="flex flex-col gap-1">
                              <div className="font-semibold text-gray-800">{program.tuition.title}</div>
                              <div className="text-blue-600 font-bold">{program.tuition.semesterTuition}</div>
                              <div className="font-semibold text-gray-800 mt-2">Equipment & Technology Fee:</div>
                              <div>{program.tuition.equipmentFee}</div>
                              <div className="font-semibold text-gray-800 mt-2">Wellness Services & Programming Fee:</div>
                              <div>{program.tuition.wellnessFee}</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button className="bg-blue-600 text-white text-sm font-bold uppercase tracking-wider py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300" type="button">
                      Apply Now
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 text-sm font-bold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300" type="button">
                      View Program Details
                    </button>
                  </div>
                </section>
              ))
            ) : (
              <p className="text-center text-lg text-gray-600 py-10">No programs match the selected filters.</p>
            )}
          </main>

          <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-6 rounded-lg shadow-xl">
            <div className="bg-gray-800 text-white px-6 py-4 rounded-t-lg -mx-6 -mt-6 mb-6">
              <h2 className="text-lg font-extrabold uppercase tracking-wider">
                IDENTIFY THE PROGRAM THAT IS RIGHT FOR YOU.
              </h2>
            </div>
            <form className="space-y-8 text-sm text-gray-700" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <legend className="font-bold uppercase text-xs mb-4 border-b-2 border-gray-200 pb-2 text-gray-800">
                  DISCIPLINE
                </legend>
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {disciplines.map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-colors duration-200">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={() => handleFilterChange('discipline', item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-bold uppercase text-xs mb-4 border-b-2 border-gray-200 pb-2 text-gray-800">
                  PROGRAM TYPE
                </legend>
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {programTypes.map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-colors duration-200">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={() => handleFilterChange('programType', item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-bold uppercase text-xs mb-4 border-b-2 border-gray-200 pb-2 text-gray-800">
                  LOCATION
                </legend>
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {locations.map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-colors duration-200">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={() => handleFilterChange('location', item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-bold uppercase text-xs mb-4 border-b-2 border-gray-200 pb-2 text-gray-800">
                  PROGRAM START DATE
                </legend>
                <div className="flex flex-col gap-2">
                  {startDates.map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-colors duration-200">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={() => handleFilterChange('startDate', item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="button" onClick={applyFilters} className="w-full bg-blue-600 text-white text-base font-bold uppercase tracking-wider py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
                Apply Filters
              </button>
              <button type="button" onClick={clearFilters} className="w-full text-blue-600 text-sm font-semibold uppercase tracking-wider py-2 px-6 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Clear Filters
              </button>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FindYourProgram;
