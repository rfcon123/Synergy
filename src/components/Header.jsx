import React, { useState, useEffect } from 'react';
import { Menu, X, Info, Phone, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hbg from '../assets/hbg.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
        'Group Product Data Sheet',
        'Defence and Aerospace',
      ],
    },
    { title: 'Cable Creator' },
    { title: 'Gallery', subHeaders: ['Video Gallery', 'Image Gallery'] },
    { title: 'Feedback', subHeaders: ['Customer Feedback', 'Career'] },
  ];

  const formatPath = (text) =>
    `/${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
  const getSubPath = (sub) => formatPath(sub);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🔴 Red Banner */}
     <section className="bg-blue-700 text-white text-sm py-2 overflow-hidden">
  <marquee behavior="scroll" direction="left" scrollamount="15">
    Introducing our fiber optic cable assemblies — available for same-day shipping in standard and custom lengths. | 
    Same-day shipping if you order in the next 00:00 hours! | 
    Tariff Information | 
    U.S. and Canada: (866) 952-4771 | 
    International: +1 (949) 261-1920 | 
    Quick Order | 
    Live Chat
  </marquee>
</section>


      {/* 🟦 Logo + Name + Sticky Navbar */}
      <header
        className="sticky top-0 z-50 w-full text-black shadow-lg"
        style={{ backgroundImage: `url(${hbg})`, backgroundSize: 'cover' }}
      >
        {/* 🔷 Logo and Company Name */}
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-4 md:gap-6 py-3">
          <div className="flex items-center justify-center w-full  flex-wrap md:flex-nowrap text-center gap-6">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/image.png"
                alt="Logo"
                className="w-24 h-12 md:w-40 md:h-20 hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </Link>
            <div className="text-center flex-grow">
              <h1 className="font-bold text-blue-900 leading-snug text-lg md:text-5xl">
                SYNERGY TELECOM PRIVATE LIMITED
              </h1>
              <p className="hidden md:block font-bold text-red-600 max-w-xs md:max-w-3xl text-base">
                SOLAR PRODUCT | RF PRODUCT | MICROWAVE PRODUCT | ELCOM PRODUCT
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Sticky Navbar */}
        <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg shadow-md select-none">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center space-x-16 py-3">
              {headers.map((header, index) => (
                <li key={index} className="relative group">
                  <div className="relative inline-block">
                    <Link
                      to={header.title === 'Home' ? '/' : formatPath(header.title)}
                      className="px-4 py-2 hover:text-yellow-200 rounded transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    >
                      {header.title}
                    </Link>
                    {Array.isArray(header.subHeaders) && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white text-black shadow-xl rounded-lg min-w-[240px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <ul className="flex flex-col px-4 py-3 space-y-2">
                          {header.subHeaders.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={getSubPath(sub)}
                                className={`block text-sm font-medium px-3 py-2 rounded transition focus:outline-none focus:ring-2 ${
                                  sub.includes('Hot Products')
                                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold animate-pulse hover:scale-105'
                                    : 'hover:bg-gray-100 hover:text-blue-600'
                                }`}
                              >
                                {sub}
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

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex justify-end py-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <nav className="flex flex-col space-y-3 text-left bg-blue-600 text-white font-medium rounded-xl p-5 md:hidden">
                {headers.map((header, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <Link
                        to={header.title === 'Home' ? '/' : formatPath(header.title)}
                        className="py-3 px-4 hover:text-yellow-200 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {header.title}
                      </Link>
                      {Array.isArray(header.subHeaders) && (
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(openMobileDropdown === index ? null : index)
                          }
                          className="text-xl pr-2"
                        >
                          {openMobileDropdown === index ? '−' : '+'}
                        </button>
                      )}
                    </div>
                    {Array.isArray(header.subHeaders) && openMobileDropdown === index && (
                      <ul className="pl-6 mt-2 space-y-2 text-sm">
                        {header.subHeaders.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={getSubPath(sub)}
                              className={`block py-2 px-4 rounded-md ${
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
        </nav>
      </header>
    </>
  );
};

export default Header;
