import React, { useState } from 'react';
import studentImage1 from '../assets/Images/our-students-01-948x815-1-768x660.jpeg';
import studentImage2 from '../assets/Images/our-students-02-948x815-1-768x660.jpeg';
import studentImage3 from '../assets/Images/our-students-03-948x815-1-768x660.jpeg';
import studentImage4 from '../assets/Images/our-students-04-948x815--768x660.jpeg';

// Sample data for students. In a real app, this would likely come from a CMS or API.
const studentsData = [
  {
    name: 'Mayté Losada',
    program: 'Acting for Film',
    quote: 'Since enrolling in NYFA’s BFA Acting for Film degree, my classes, peers and professors have opened up a new world for me that I have come to appreciate and am proud to be a part. I cannot wait to use all the techniques and tools I’ve learned to continue my journey into the film industry.',
    imageUrl: studentImage1,
    altText: 'Portrait of Mayté Losada, a student at the film academy.',
  },
  {
    name: 'John Doe',
    program: 'Filmmaking',
    quote: 'The hands-on experience I gained here is invaluable. The instructors are industry professionals who provide real-world insights that you can\'t get from a textbook.',
    imageUrl: studentImage2, // Reusing image for demonstration
    altText: 'Portrait of John Doe, a student at the film academy.',
  },
  {
    name: 'Jane Smith',
    program: 'Photography',
    quote: 'I discovered my unique visual style here. The creative freedom and supportive community allowed me to push my boundaries and create work I\'m truly proud of.',
    imageUrl: studentImage3, // Reusing image for demonstration
    altText: 'Portrait of Jane Smith, a student at the film academy.',
  },
  {
    name: 'Alex Johnson',
    program: '3D Animation & VFX',
    quote: 'From character design to final render, the curriculum covered everything. I left with a professional-level portfolio that got me hired before I even graduated.',
    imageUrl: studentImage4, // Reusing image for demonstration
    altText: 'Portrait of Alex Johnson, a student at the film academy.',
  },
];

const OurStudents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStudent = studentsData[currentIndex];

  return (
    <div className="font-sans w-full bg-gray-900 text-white">
      <div className="w-full mx-auto flex flex-col min-h-screen">
        <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 py-16 gap-10 md:px-10 lg:px-16 lg:py-24 lg:gap-20">
          <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              alt={currentStudent.altText}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              src={currentStudent.imageUrl}
            />
          </div>
          <div className="max-w-lg flex flex-col justify-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-purple-500">Our</span> Students
            </h2>
            <blockquote className="relative border-l-4 border-purple-500 pl-6 mb-6">
              <p className="text-lg md:text-xl font-light leading-relaxed">
                {currentStudent.quote}
              </p>
            </blockquote>
            <div>
              <p className="text-xl font-semibold tracking-wide">
                {currentStudent.name}
              </p>
              <p className="text-purple-400 uppercase tracking-widest text-sm mt-1">
                {currentStudent.program}
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Pagination dots" className="flex justify-center items-center gap-4 pb-8">
          {studentsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all duration-300 ${
                currentIndex === index ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </nav>

        {/* Footer Navigation */}
        <footer className="bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
              <a href="#" className="py-5 text-sm font-medium tracking-wider text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300 border-r border-gray-800">Testimonials</a>
              <a href="#" className="py-5 text-sm font-medium tracking-wider text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300 border-r border-gray-800">Diversity</a>
              <a href="#" className="py-5 text-sm font-medium tracking-wider text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300 border-r border-gray-800">Showcase</a>
              <a href="#" className="py-5 text-sm font-medium tracking-wider text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300">Success Stories</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OurStudents;
