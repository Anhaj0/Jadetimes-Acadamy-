import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import resourceImg1 from '../../assets/Images/Resources and Information01.jpeg';
import resourceImg2 from '../../assets/Images/Resources and Information02.jpeg';
import resourceImg3 from '../../assets/Images/Resources and Information03.jpeg';
import resourceImg4 from '../../assets/Images/Resources and Information04.jpeg';
import resourceImg5 from '../../assets/Images/Resources and Information05.jpeg';
import resourceImg6 from '../../assets/Images/Resources and Information06.jpeg';
import resourceImg7 from '../../assets/Images/Resources and Information07.jpeg';

const resourceData = [
    {
        href: '#',
        imgSrc: resourceImg1,
        imgAlt: 'Two people in NYFA shirts on a film set with lighting and boom mic',
        label: 'TUITION',
        gridClass: 'md:col-span-3'
    },
    {
        href: '#',
        imgSrc: resourceImg2,
        imgAlt: 'Close-up of a hand adjusting a Canon camera dial',
        label: 'ADMISSIONS REQUIREMENTS',
        gridClass: 'md:col-span-3'
    },
    {
        href: '#',
        imgSrc: resourceImg3,
        imgAlt: 'Close-up of a calendar showing months May, Jun, Sep',
        label: 'START DATES',
        gridClass: 'md:col-span-2'
    },
    {
        href: '#',
        imgSrc: resourceImg4,
        imgAlt: 'Group of diverse students smiling and talking in a classroom',
        label: 'INTERNATIONAL STUDENTS',
        gridClass: 'md:col-span-2'
    },
    {
        href: '#',
        imgSrc: resourceImg5,
        imgAlt: 'Two people sitting on stairs with a professional video camera',
        label: 'VETERANS & MILITARY STUDENTS',
        gridClass: 'md:col-span-2'
    },
    {
        href: '#',
        imgSrc: resourceImg6,
        imgAlt: 'Group of diverse young adults smiling outdoors on a boat',
        label: 'TRANSFER STUDENTS',
        gridClass: 'md:col-span-3'
    },
    {
        href: '#',
        imgSrc: resourceImg7,
        imgAlt: 'Person wearing NYFA shirt pointing a camera on a film set',
        label: 'MEET NYFA NEAR YOU',
        gridClass: 'md:col-span-3'
    }
];

const ResourceCard = ({ href, imgSrc, imgAlt, label, gridClass }) => (
   
   <a href={href} className={`relative group block aspect-[16/9] overflow-hidden ${gridClass}`}>
        <img
            alt={imgAlt}
            className="object-cover w-full h-full brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-300 transform group-hover:scale-105"
            src={imgSrc}
            loading="lazy"
        />
        <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-lg sm:text-xl font-bold tracking-wide leading-snug">
                {label}
            </span>
            <span aria-hidden="true" className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-2">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
        </div>
    </a>
);

const ResourcesandInformation = () => {
    return (
        <div className="bg-gray-100 font-sans text-gray-900 py-16 sm:py-24">
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight flex items-center gap-6 mb-12">
                        <span aria-hidden="true" className="block w-2 h-16 bg-yellow-500 rounded-full"></span>
                        RESOURCES AND INFORMATION
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
                    {resourceData.map((resource) => (
                        <ResourceCard key={resource.label} {...resource} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ResourcesandInformation;
