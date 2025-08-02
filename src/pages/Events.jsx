// src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import Heading from '../components/Event/Heading.jsx';
import FeaturedEventCard from '../components/Event/FeaturedEventCard.jsx';
import EventItem from '../components/Event/EventItem.jsx';
import Calendar from '../components/Event/Calendar.jsx';
import CheckboxFilter from '../components/Event/CheckboxFilter.jsx';
import FilterSection from '../components/Event/FilterSection.jsx';

/* ────────── sidebar icons ────────── */
const CalSmall = () => <i className="fa-solid fa-table-cells mr-2 text-pink-600" />;
const CapSmall = () => <i className="fa-solid fa-graduation-cap mr-2 text-pink-600" />;
const PinSmall = () => <i className="fa-solid fa-location-dot mr-2 text-pink-600" />;

/* ────────── search icon ────────── */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-5-5m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

/* ────────── demo data ────────── */
const featuredEvents = [
  {
    title: 'Campus Tour - New York City',
    date:  'Friday, August 1 2025  11:00 AM – 12:00 PM EDT',
    location: '17 Battery Pl, NYC NY 10004',
    description:
      'Join us at NYFA for a Tour of our New York City location. Please arrive 15 minutes early to check in.',
  },
  {
    title: 'Campus Tour - Los Angeles',
    date:  'Monday, August 4 2025  2:00 PM – 4:00 PM PDT',
    location: '3300 Riverside Dr, Burbank CA 91505',
    description:
      'Experience the vibrant campus life at our Los Angeles location. See where movie magic happens!',
  },
];

const dailyEvents = [
  {
    date: '2025-08-01',
    time: '11:00 AM – 12:00 PM EDT',
    title: 'Campus Tour – NYC Morning',
    location: '17 Battery Pl, NYC NY 10004',
  },
  {
    date: '2025-08-01',
    time: '03:00 PM – 04:00 PM EDT',
    title: 'Campus Tour – NYC Afternoon',
    location: '17 Battery Pl, NYC NY 10004',
  },
];

const typeFilters = [
  'Virtual Information Session',
  'Campus Tour',
  'Open House',
  'College Fair',
  'Thespian Event',
  'Talent Convention',
  'Graduate Fair',
  'Guidance Visit',
];

export default function Events() {
  /* ────── featured-carousel state ────── */
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % featuredEvents.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* ────── filters / collapse state ────── */
  const [showAllTypes, setShowAllTypes] = useState(false);
  const [showNearby, setShowNearby]     = useState(true);
  const visibleTypes = showAllTypes ? typeFilters : typeFilters.slice(0, 5);

  return (
    <div className="bg-[#f5f6f8] min-h-screen font-sans">
      <Heading />

      {/* full-width layout */}
      <main className="w-full px-6 py-8 grid lg:grid-cols-3 gap-8">
        {/* ────── left 2/3 ────── */}
        <section className="lg:col-span-2">
          {/* search box */}
          <div className="mb-6">
            <div className="relative max-w-lg">
              <span className="absolute inset-y-0 left-3 flex items-center">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search Events"
                className="w-full pl-10 pr-4 py-3 rounded-full border focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          {/* featured carousel */}
          <h3 className="font-bold text-lg mb-4">FEATURED EVENTS</h3>
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {featuredEvents.map(ev => (
                <div key={ev.title} className="w-full flex-shrink-0">
                  <FeaturedEventCard event={ev} />
                </div>
              ))}
            </div>

            {/* dots */}
            <div className="flex justify-center mt-3 space-x-2">
              {featuredEvents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 w-2 rounded-full ${slide === i ? 'bg-gray-800' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* daily list */}
          <div className="mt-10">
            <div className="bg-gray-200 px-4 py-2 font-bold">
              Friday, August 1, 2025
            </div>
            <div className="bg-white rounded-b-md shadow-sm">
              {dailyEvents.map(ev => (
                <EventItem key={ev.title} event={ev} />
              ))}
            </div>
          </div>
        </section>

        {/* ────── right sidebar ────── */}
        <aside className="space-y-8">
          <Calendar date={new Date(2025, 7, 1)} view="list" />

          <div className="bg-white rounded-lg shadow-sm p-4 divide-y divide-gray-200">
            {/* quick links */}
            <div className="space-y-3 pb-4">
              <a href="#" className="flex items-center font-semibold hover:text-blue-600">
                <CalSmall /> ALL EVENTS
              </a>
              <a href="#" className="flex items-center font-semibold hover:text-blue-600">
                <CapSmall /> FEATURED EVENTS
              </a>
            </div>

            {/* nearby */}
            <div className="py-4 space-y-3">
              <button
                className="w-full flex justify-between items-center font-semibold"
                onClick={() => setShowNearby(o => !o)}
              >
                <span className="flex items-center">
                  <PinSmall /> NEARBY
                </span>
                <i
                  className={`fa-solid fa-angle-down transition-transform ${
                    showNearby ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showNearby && (
                <div className="space-y-3 pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by City, State, Zip"
                      className="w-full border rounded py-2 pl-3 pr-11 text-sm"
                    />
                    <button className="absolute right-0 top-0 h-full px-3 bg-orange-700 hover:bg-orange-800 text-white">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-semibold">
                    CURRENT LOCATION
                  </button>
                </div>
              )}
            </div>

            {/* type filters */}
            <FilterSection title="TYPE" defaultOpen>
              {visibleTypes.map(t => (
                <CheckboxFilter key={t} label={t} />
              ))}

              <button
                className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                onClick={() => setShowAllTypes(o => !o)}
              >
                {showAllTypes ? 'Show Less' : 'Show More'}
              </button>
            </FilterSection>
          </div>
        </aside>
      </main>
    </div>
  );
}
