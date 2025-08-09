import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobeAmericas, faChevronDown, faBars, faTimes, faHistory } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import logo from '../assets/images/Logo.avif';

// --- Data (as requested) ---
const topBarLinks = [
    { href: '#', text: 'Current Students', className: 'font-semibold hover:text-white transition-colors duration-300' },
    { href: '#', text: 'Parents', className: 'hidden sm:inline font-semibold hover:text-white transition-colors duration-300' },
    { href: '#', text: 'Online Info Sessions', className: 'hidden md:inline text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300' },
];

const navLinks = [
    { href: '/',               text: 'HOME' },
    { href: '/about',          text: 'ABOUT US' },
    { href: '/programfinder',  text: 'PROGRAM FINDER' },
    { href: '/admissions',     text: 'ADMISSIONS' },
    { href: '/blog',           text: 'Blog' },            // keep your text label case
    { href: '/contact_us',     text: 'Contact Us' },
    { href: '/alumni',         text: 'Alumni' },
    { href: '/StudentResources', text: 'Student Resources' },
];

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Russian',
];

const quickSearches = ['Filmmaking', 'Acting', 'Animation', 'Photography', 'Workshops', 'BFA Programs'];
const recentSearches = ['3D Animation', 'Summer Camps', 'Los Angeles'];

// --- Custom Hook for "Click Outside" ---
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// --- Sub-components ---
const LanguageSelector = ({ isOpen, onToggle }) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => onToggle(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => onToggle(!isOpen)} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300">
        <FontAwesomeIcon icon={faGlobeAmericas} />
        <span className="text-xs font-semibold">ENGLISH</span>
        <FontAwesomeIcon icon={faChevronDown} className={`w-2 h-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-1 z-30 origin-top-right transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        {languages.map((lang) => (
          <a key={lang} href="/" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-200">{lang}</a>
        ))}
      </div>
    </div>
  );
};

const SearchModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-start pt-16 sm:pt-24 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}></div>
      <div ref={modalRef} className={`relative w-full max-w-2xl bg-gray-800 rounded-lg shadow-2xl transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="p-6">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="e.g., 'Filmmaking Workshops'" className="w-full bg-gray-700 text-white placeholder-gray-400 pl-12 pr-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-lg" />
          </div>
        </div>
        <div className="border-t border-gray-700 p-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Quick Searches</h4>
          <div className="flex flex-wrap gap-3">
            {quickSearches.map(term => (
              <button key={term} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full text-sm transition-colors duration-200">{term}</button>
            ))}
          </div>
        </div>
        {recentSearches.length > 0 && (
          <div className="border-t border-gray-700 p-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Recent Searches</h4>
            <ul className="space-y-3">
              {recentSearches.map(term => (
                <li key={term}>
                  <button className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200 w-full text-left">
                    <FontAwesomeIcon icon={faHistory} className="text-gray-500" />
                    <span>{term}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-60" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white"><FontAwesomeIcon icon={faTimes} size="lg" /></button>
        <ul className="flex flex-col gap-5 mt-12">
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.href}
                onClick={onClose}
                className="block py-2 text-xl font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className="border-gray-700 my-8"/>
      </div>
    </div>
  );
};


// --- Main Header Component ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <>
      <header className="headerFont bg-gray-900 text-white shadow-lg sticky top-0 z-20">
        {/* Top bar */}
        <div className="bg-black bg-opacity-30 border-b border-gray-800">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 text-xs">
            <div className="flex items-center gap-x-5 text-gray-400">
              {topBarLinks.map(link => (
                <a key={link.text} href={link.href} className={link.className}>{link.text}</a>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <span className="hidden lg:inline text-white font-semibold">1-800-611-FILM</span>
              <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
              <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="relative">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            <NavLink to='/' className="flex-shrink-0">
              <img alt="NYFA logo" className="h-12 w-auto" src={logo} />
            </NavLink>

            <ul className="hidden lg:flex items-center gap-x-7">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <NavLink
                    to={link.href}
                    className="relative block py-2 text-sm font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-4'>
              <button onClick={() => setIsMenuOpen(true)} aria-label="Toggle menu" className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modals are kept separate for clean code and proper z-index management */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
