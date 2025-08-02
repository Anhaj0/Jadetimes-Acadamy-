import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ContactUsDetails01 from '../../assets/images/ContactUsDetails01.jpeg';
import ContactUsDetails02 from '../../assets/images/ContactUsDetails02.jpeg';
import ContactUsDetails03 from '../../assets/images/ContactUsDetails03.jpeg';
import ContactUsDetails04 from '../../assets/images/ContactUsDetails04.jpeg';
import ContactUsDetails05 from '../../assets/images/ContactUsDetails05.jpeg';
import ContactUsDetails06 from '../../assets/images/ContactUsDetails06.jpeg';

const locations = [
    {
      type: 'CAMPUS',
      name: 'New York City',
      image: ContactUsDetails01,
      contact: [
        '+1-212-674-4300',
        '+1-212-344-4434 (Fax)',
        'ny@nyfa.edu'
      ],
      address: [
        '17 Battery Place',
        'New York, NY 10004',
        'USA'
      ]
    },
    {
      type: 'CAMPUS',
      name: 'Los Angeles',
      image: ContactUsDetails02,
      contact: [
        '+1-888-988-NYFA',
        '+1-818-333-3558',
        '+1-818-333-3557 (Fax)',
        'la@nyfa.edu'
      ],
      address: [
        '3300 W Riverside Dr',
        'Burbank, CA 91505',
        'USA'
      ]
    },
    {
        type: 'CAMPUS',
        name: 'South Beach, Miami',
        image: ContactUsDetails03,
        contact: [
            '+1-305-534-6009',
            '+1-305-674-0740 (Fax)',
            'miami@nyfa.edu'
        ],
        address: [
            '1601 Washington Ave',
            'Miami Beach, FL 33139',
            'USA'
        ]
      },
      {
        type: 'CAMPUS',
        name: 'Florence, Italy',
        image: ContactUsDetails04,
        contact: [
          '+39 055 2699556',
          'italy@nyfa.edu'
        ],
        address: [
            'Via Chiantigiana, 60',
            '50012 Bagno a Ripoli FI',
            'Italy'
        ]
      },
      {
        type: 'OFFICE',
        name: 'Beijing, China',
        image: ContactUsDetails05,
        contact: [
          '+86 13826037841',
          '+86 18811454240',
          '+86 13811767275',
          'joyzhu@nyfa.edu'
        ],
        address: [
            'Room 306, 3/F',
            'No. 22, Bainaohui building',
            'Chaowai Street, Chaoyang District'
        ]
      },
      {
        type: 'OFFICE',
        name: 'Mexico, Spain & Central America',
        image: ContactUsDetails06,
        contact: [
          '+521 55 7464 2417',
          '+521 55 2736 5145',
          'mexico@nyfa.edu'
        ],
        address: [
            'Insurgentes Sur 670, Col del Valle Nte',
            'Benito Juárez, 03103',
            'Ciudad de México, CDMX, Mexico'
        ]
      },
  ];

const LocationCard = ({ type, name, image, contact, address }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <section className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative">
          <img alt={`${name} location`} className="w-full h-48 object-cover" src={image} />
          <span className="absolute top-4 left-4 bg-gray-900 bg-opacity-70 text-white text-xs font-bold px-3 py-1 tracking-widest rounded-full">
            {type}
          </span>
        </div>
        <div className="p-6">
          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            {name}
          </h3>
          <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <address className="mt-4 not-italic text-gray-600 text-sm space-y-2">
              <p className="font-semibold uppercase text-xs tracking-wider text-gray-800">Address</p>
              {address.map((line, index) => <p key={index}>{line}</p>)}
            </address>
          </div>
          <address className="mt-4 not-italic text-gray-600 text-sm space-y-2">
            <p className="font-semibold uppercase text-xs tracking-wider text-gray-800">Contact</p>
            {contact.map((line, index) => <p key={index}>{line}</p>)}
          </address>
          <button
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-sm font-bold text-pink-600 tracking-wider flex items-center space-x-2 hover:text-pink-800 transition-colors duration-200 focus:outline-none"
          >
            <span>
              {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
            </span>
            <FontAwesomeIcon icon={faChevronDown} className={`text-pink-600 text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>
    );
  };

const Details = () => {
  return (
    <div className="bg-gray-50 font-sans py-16">
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </main>
    </div>
  )
}

export default Details;