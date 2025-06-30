import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import hbg from '../assets/hbg.png'; // Ensure this path is correct

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const headers = [
    { title: 'Home', subHeaders: ['About Us', 'Contact Us', 'Certificates'] },
    {
      title: 'Products',
      subHeaders: [
        'Product Showroom',
        'Product Catalogue',
        '🔥 Hot Products',
        'Li-ion Battery',
        'Product Stock',
        'Product Price list',
        'Group Products Data Sheet',
      ],
    },
    { title: 'Defence and Aerospace', subHeaders: ['Company Representation'] },
    { title: 'Gallery', subHeaders: ['Video Gallery', 'Image Gallery'] },
    { title: 'Feedback', subHeaders: ['Career', 'Support'] },
  ];

  const formatPath = (text) =>
    `/${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

  const getSubPath = (sub) => formatPath(sub);

  return (
    <header
      className="bg-white text-black shadow-md sticky top-0 z-50"
      style={{ backgroundImage: `url(${hbg})` }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col items-center gap-4 md:gap-6">
        {/* Logo + Company Info */}
        <div className="flex flex-col items-center text-center space-y-2">
          <Link to="/">
            <img
              src="/image.png"
              alt="Logo"
              className="w-24 h-12 md:w-28 md:h-14 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900">
            SYNERGY TELECOM PRIVATE LIMITED
          </h1>
          <p className="text-xs md:text-sm font-bold text-red-600 max-w-xs md:max-w-3xl">
            DEALS IN: SOLAR PRODUCT, RF PRODUCT, MICROWAVE PRODUCT, IBS AND BTS PRODUCT, ELCOM PRODUCT
          </p>
        </div>

        {/* Navigation */}
        <div className="w-full">
          {/* Mobile Hamburger */}
          <div className="flex justify-end items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center bg-gradient-to-r -mt-3 from-blue-500 to-blue-700 rounded-xl shadow-lg py-3 text-white font-semibold text-lg select-none">
            <ul className="flex space-x-16">
              {headers.map((header, index) => (
                <li key={index} className="relative group">
                  <div className="relative inline-block">
                    <Link
                      to={header.title === 'Home' ? '/' : formatPath(header.title)}
                      className="px-4 py-2 hover:text-yellow-200 rounded transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    >
                      {header.title}
                    </Link>

                    {/* Dropdown */}
                    {header.subHeaders.length > 0 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white text-black shadow-xl rounded-lg min-w-[240px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <ul className="flex flex-col px-4 py-3 space-y-2">
                          {header.subHeaders.map((subHeader, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={getSubPath(subHeader)}
                                className={`block text-sm font-medium px-3 py-2 rounded transition focus:outline-none focus:ring-2 ${
                                  subHeader.includes('Hot Products')
                                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold animate-pulse hover:scale-105'
                                    : 'hover:bg-gray-100 hover:text-blue-600'
                                }`}
                              >
                                {subHeader}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-3 text-left bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-xl p-5 md:hidden">
              {headers.map((header, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <Link
                      to={header.title === 'Home' ? '/' : formatPath(header.title)}
                      className="py-3 px-4 hover:text-yellow-200 rounded-md transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {header.title}
                    </Link>
                    {header.subHeaders.length > 0 && (
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(openMobileDropdown === index ? null : index)
                        }
                        aria-expanded={openMobileDropdown === index}
                        aria-controls={`mobile-submenu-${index}`}
                        className="text-xl pr-2 focus:outline-none"
                      >
                        {openMobileDropdown === index ? '−' : '+'}
                      </button>
                    )}
                  </div>

                  {openMobileDropdown === index && header.subHeaders.length > 0 && (
                    <ul
                      id={`mobile-submenu-${index}`}
                      className="pl-6 mt-2 space-y-2 text-sm"
                    >
                      {header.subHeaders.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={getSubPath(sub)}
                            className={`block py-2 px-4 rounded-md transition focus:outline-none ${
                              sub.includes('Hot Products')
                                ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold animate-pulse hover:scale-105'
                                : 'bg-white text-blue-700 hover:bg-yellow-300 hover:text-black'
                            }`}
                            onClick={() => {
                              setOpenMobileDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
