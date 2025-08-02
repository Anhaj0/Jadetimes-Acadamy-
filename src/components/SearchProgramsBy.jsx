import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const dropdowns = [
    {
      title: 'All Disciplines',
      items: ['Film', 'Acting', 'Photography', 'Animation', 'Game Design', 'Screenwriting'],
    },
    {
      title: 'All Programs',
      items: ['BFA', 'MFA', 'Workshops', 'Certificate', 'Associate', 'Online'],
    },
    {
      title: 'All Locations',
      items: ['New York', 'Los Angeles', 'Miami', 'Gold Coast, Australia', 'Florence, Italy', 'Paris, France'],
    },
  ];

const Dropdown = ({ title, items, isOpen, onToggle, onSelect }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onToggle]);

  return (
    <div className="relative w-full md:w-auto" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full py-3 px-4 text-xs md:py-4 md:px-6 md:text-sm font-semibold text-gray-700 tracking-wider uppercase whitespace-nowrap hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
        onClick={() => onToggle(!isOpen)}
      >
        {title}
        <FontAwesomeIcon icon={faChevronDown} className={`ml-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-20 bg-white shadow-xl mt-1 w-full rounded-md overflow-hidden border border-gray-200 animate-fadeIn">
          {items.map((item, index) => (
            <a href="#" key={index} onClick={() => onSelect(item)} className="block px-6 py-3 text-sm text-gray-800 hover:bg-purple-50 transition-colors duration-200">{item}</a>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchProgramsBy = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSelect = (dropdownIndex, item) => {
    setSelectedFilters({ ...selectedFilters, [dropdownIndex]: item });
    setOpenDropdown(null);
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div className="font-sans bg-gray-50">
      <div className="bg-white shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 px-6 py-4 text-gray-800 text-lg font-bold whitespace-nowrap w-full md:w-auto">
            Find Your Program
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row md:border-l border-gray-200 flex-grow">
            {dropdowns.map((dropdown, index) => (
              <Dropdown
                key={index}
                title={selectedFilters[index] || dropdown.title}
                items={dropdown.items}
                isOpen={openDropdown === index}
                onToggle={(isOpen) => handleToggle(isOpen ? index : null)}
                onSelect={(item) => handleSelect(index, item)}
              />
            ))}
          </div>
          {Object.keys(selectedFilters).length > 0 && (
            <button
              onClick={clearFilters}
              className="w-full md:w-auto px-4 py-4 text-gray-600 hover:text-red-500 transition-colors duration-300"
              aria-label="Clear Filters"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
          <Link
            to="/programfinder"
            className="w-full md:w-auto px-4 py-3 md:px-8 md:py-5 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-bold tracking-wider uppercase flex items-center justify-center transition-all duration-300"
            aria-label="Search"
          >
            Search
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          The Original Hands-On Arts School
        </h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
          New York Film Academy's philosophy of "learning by doing" ensures students gain practical experience, preparing them for successful careers in film, media, and performing arts faster than at any other institution.
        </p>
      </div>
    </div>
  );
};

export default SearchProgramsBy;