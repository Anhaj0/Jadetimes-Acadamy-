import React from 'react';
import logo from '../assets/images/Logo.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faXTwitter, faYoutube, faSnapchat, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const topLinks = [
    { text: 'REQUEST INFO', href: '#', iconColor: 'text-sky-400' },
    { text: 'APPLY NOW', href: '#', iconColor: 'text-yellow-400' },
    { text: 'VISIT US', href: '#', iconColor: 'text-purple-400' },
];

const footerColumns = [
    {
        title: 'About',
        links: [
            { text: 'NYFA Brochures', href: '#' },
            { text: 'Faculty', href: '#' },
            { text: 'Alum Network', href: '#' },
            { text: 'Store', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Jobs', href: '#' },
            { text: 'Teach-Out Policy', href: '#' },
            { text: 'Privacy Policy', href: '#' },
            { text: 'BPPE', href: '#' },
        ],
    },
];

const socialIcons = [
    { icon: faInstagram, href: '#', label: 'Instagram' },
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faXTwitter, href: '#', label: 'X (Twitter)' },
    { icon: faYoutube, href: '#', label: 'YouTube' },
    { icon: faSnapchat, href: '#', label: 'Snapchat' },
    { icon: faPinterestP, href: '#', label: 'Pinterest' },
    { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
];

const FooterLink = ({ href, children, className = '' }) => (
    <a href={href} className={`text-gray-400 hover:text-white hover:underline transition-colors duration-300 ${className}`}>
        {children}
    </a>
);

const SocialIcon = ({ icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="text-gray-500 hover:text-white transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
    >
        <FontAwesomeIcon icon={icon} size="lg" />
    </a>
);

const FooterColumn = ({ title, links }) => (
    <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
            ))}
        </ul>
    </div>
);

const NewsletterForm = () => (
    <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">Stay Connected</h3>
        <p className="text-gray-400 mb-4 text-sm">Get the latest news and updates from NYFA.</p>
        <form className="flex">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                aria-label="Subscribe to newsletter"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    </div>
);


const Footer = () => {
    return (
        <div className="FooterFont bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Top nav section with full-width background */}
            <div className="bg-black bg-opacity-20 border-b border-gray-800">
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row text-xs font-bold tracking-widest uppercase">
                    {topLinks.map((link, index) => (
                        <a
                            key={index}
                            className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 ${index < topLinks.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-800' : 'border-b sm:border-b-0 border-gray-800'}`}
                            href={link.href}
                        >
                            {link.text}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={link.iconColor} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Main footer content with constrained width for readability */}
            <footer className="max-w-screen-xl mx-auto pt-16 pb-12 px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Logo & Socials */}
                    <div className="md:col-span-12 lg:col-span-3">
                        <img alt="New York Film Academy logo" className="h-16 w-auto mb-6" src={logo} />
                        <div className="flex flex-wrap gap-5 text-gray-500">
                            {socialIcons.map((social, index) => (
                                <SocialIcon key={index} {...social} />
                            ))}
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {footerColumns.map((column, index) => (
                        <div key={index} className="md:col-span-6 lg:col-span-2">
                            <FooterColumn {...column} />
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="md:col-span-12 lg:col-span-5">
                        <NewsletterForm />
                    </div>
                </div>
            </footer>

            {/* Divider and Bottom text section */}
            <div className="border-t border-gray-800">
                <div className="max-w-screen-xl mx-auto py-8 px-6 sm:px-8 text-gray-500 text-xs leading-relaxed space-y-4 text-center">
                    <p>
                        Copyright © 2025 New York Film Academy • <FooterLink href="#">Privacy Policy</FooterLink>
                    </p>
                    <p className="max-w-4xl mx-auto">
                        All programs and workshops are solely owned and operated by the New York Film Academy and are not affiliated with Universal Studios or Harvard University. GI Bill® is a registered trademark of the U.S. Department of Veterans Affairs (VA). More information about education benefits offered by VA is available at the official U.S. government website at{' '}
                        <a className="hover:underline text-gray-400" href="http://www.benefits.va.gov/gibill" rel="noopener noreferrer" target="_blank">http://www.benefits.va.gov/gibill</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;