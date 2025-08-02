import React from 'react';

const disciplineData = [
  {
    id: 1,
    title: 'Filmmaking',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/60d2b59a-3ec7-4574-fb34-97a9f976b543.jpg',
    altText: 'Filmmaking',
    className: 'aspect-video',
  },
  {
    id: 2,
    title: 'Acting For Film',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/d6987d67-0697-481d-4c8d-5e0350d5aab8.jpg',
    altText: 'Acting for Film',
    className: 'aspect-video',
  },
  {
    id: 3,
    title: 'Producing',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/b9942dba-a8a9-47d4-1fa0-07776a777bf3.jpg',
    altText: 'Producing',
    className: 'aspect-video',
  },
  {
    id: 4,
    title: 'Screenwriting',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/7884c900-8716-4de9-8626-bc7e1259e03c.jpg',
    altText: 'Screenwriting',
    className: 'md:col-span-3 h-64 md:h-80',
  },
  {
    id: 5,
    title: 'Cinematography',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/e90aaea2-827b-4956-a309-0c8f5e6a49bc.jpg',
    altText: 'Cinematography',
    className: 'md:col-span-2 h-64 md:h-80',
  },
  {
    id: 6,
    title: 'Musical Theatre',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/d6d44b45-ddc9-4e74-c1e1-5861d3d2a030.jpg',
    altText: 'Musical Theatre',
    className: 'aspect-video',
  },
  {
    id: 7,
    title: 'Photography',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/361cc03d-99ff-4eba-5343-0fb55fbd69be.jpg',
    altText: 'Photography',
    className: 'aspect-video',
  },
  {
    id: 8,
    title: '3D Animation & VFX + Game Design',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/fe2ea9bc-4ad5-4b09-d2c6-dfc3a7976938.jpg',
    altText: '3D Animation & VFX',
    className: 'aspect-video',
  },
  {
    id: 9,
    title: 'Documentary Filmmaking',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/cfd3d319-a313-477f-b727-eef043ade166.jpg',
    altText: 'Documentary Filmmaking',
    className: 'md:col-span-3 h-64 md:h-80',
  },
  {
    id: 10,
    title: 'Broadcast Journalism',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/61027917-86cd-49cf-4d8d-9676bd6336e0.jpg',
    altText: 'Broadcast Journalism',
    className: 'md:col-span-2 h-64 md:h-80',
  },
  {
    id: 11,
    title: 'Digital Editing',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/21fc5384-0f78-4ddb-150b-b0c50293a6b8.jpg',
    altText: 'Digital Editing',
    className: 'aspect-video',
  },
  {
    id: 12,
    title: 'U.S. Veterans',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/bc8d6e18-d9ec-460d-352b-7eda92acd6bf.jpg',
    altText: 'U.S. Veterans',
    className: 'aspect-video',
  },
  {
    id: 13,
    title: 'Youth Programs',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/3e7c9b15-7a10-46a8-f54e-9c27bf97534d.jpg',
    altText: 'Youth Programs',
    className: 'aspect-video',
  },
];

const DisciplineCard = ({ title, imageUrl, altText, className }) => (
  <a href="#" className={`relative group block overflow-hidden ${className}`}>
    <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    <div className="absolute bottom-4 left-4">
      <h3 className="text-white text-lg tracking-widest font-medium uppercase" dangerouslySetInnerHTML={{ __html: title }}></h3>
    </div>
    <div className="absolute bottom-4 right-4 w-9 h-9 border-2 border-cyan-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14"></path></svg>
    </div>
  </a>
);

const BrowsebyDiscipline = () => {
  const rows = [
    { grid: 'md:grid-cols-3', items: disciplineData.slice(0, 3) },
    { grid: 'md:grid-cols-5', items: disciplineData.slice(3, 5) },
    { grid: 'md:grid-cols-3', items: disciplineData.slice(5, 8) },
    { grid: 'md:grid-cols-5', items: disciplineData.slice(8, 10) },
    { grid: 'md:grid-cols-3', items: disciplineData.slice(10, 13) },
  ];

  return (
    <div className="text-white">
      <div className="py-12">
        <div className="relative mb-8 px-4 sm:px-6 lg:px-8">
          <div className="relative pl-6">
            <span className="absolute left-5 top-0 h-full w-1 bg-cyan-400"></span>
            <h1 className="ml-4 text-5xl md:text-6xl font-light tracking-wider text-black uppercase">
              Browse By Discipline
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {rows.map((row, index) => (
            <div key={index} className={`grid grid-cols-1 ${row.grid} gap-1.5`}>
              {row.items.map((discipline) => (
                <DisciplineCard key={discipline.id} {...discipline} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsebyDiscipline;