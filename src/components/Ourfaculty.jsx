import React from 'react';
import ourfaculty1 from '../assets/Images/ourfaculty1.png';
import ourfaculty2 from '../assets/Images/ourfaculty2.png';
import ourfaculty3 from '../assets/Images/ourfaculty3.png';

// --- Data ---
// In a real application, this data would likely be fetched from an API.
const facultyData = [
  {
    department: "Film Arts",
    imageUrl: ourfaculty1,
    altText: "Black and white portrait of a woman with glasses on her head, looking forward with a slight smile",
    color: "#3db4ff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    department: "Media Arts",
    imageUrl: ourfaculty2,
    altText: "Black and white portrait of a man with a hat and beard, smiling gently",
    color: "#ffca1f",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    department: "Performing Arts",
    imageUrl: ourfaculty3,
    altText: "Black and white portrait of a smiling woman with short hair and hoop earrings",
    color: "#b61f9f",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6" />
      </svg>
    ),
  },
];

// --- Components ---

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const FacultyCard = ({ department, imageUrl, altText, color, icon }) => (
  <div className="relative group w-full md:w-1/3 cursor-pointer rounded-lg overflow-hidden shadow-xl">
    <img alt={altText} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" src={imageUrl} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div 
      className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2"
    >
      <div style={{ color: color }} className="text-4xl mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{icon}</div>
      <h3 className="text-white text-2xl font-bold mb-1 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{department}</h3>
      <a href="#" style={{ color: color }} className="font-semibold text-sm uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        LEARN MORE
        <ChevronRightIcon />
      </a>
    </div>
  </div>
);

const OurFaculty = () => {
  return (
    <div className="OurfacultyFont">
      <div className="bg-white">
        <section className="bg-[#0a0a0a] text-white">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-start px-6 md:px-12 py-16 md:py-24 gap-12">
            <div className="flex flex-col justify-center md:justify-start md:items-start gap-8 md:gap-12 w-full md:w-1/4">
              <div className="flex items-center gap-6">
                <div className="w-1.5 h-20 bg-[#b61f9f]"></div>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
                  OUR
                  <br />
                  FACULTY
                </h2>
              </div>
              <a href="/faculty" className="bg-purple-600 text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 inline-block text-center" >
                MEET OUR FACULTY
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full md:w-3/4">
              {/* Looping through the data to render cards dynamically */}
              {facultyData.map((faculty) => (
                <FacultyCard key={faculty.department} {...faculty} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurFaculty;