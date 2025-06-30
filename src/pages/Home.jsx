import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Calendar, MapPin } from 'lucide-react';
import hbg from '../assets/hbg.jpg';
import "../index.css";

// ✅ Import all client logos from assets/logos
import adani from '../assets/logos/adani.png';
import alibaba from '../assets/logos/alibaba.png';
import bel from '../assets/logos/bel.png';
import bsnl from '../assets/logos/bsnl.png';
import defense from '../assets/logos/defense.png';
import drdo from '../assets/logos/drdo.png';
import Ericsson from '../assets/logos/Ericsson.png';
import exportIndia from '../assets/logos/export-india.png';
import HUAWEI from '../assets/logos/HUAWEI.png';
import indiamart from '../assets/logos/indiamart.png';
import isro from '../assets/logos/isro.png';
import jd from '../assets/logos/jd.png';
import nokia from '../assets/logos/nokia.png';
import railways from '../assets/logos/railways.png';
import reliance from '../assets/logos/reliance.png';
import TradeIndia from '../assets/logos/TradeIndia.png';
import vi from '../assets/logos/vi.png';

// 🔥 Hot Products Carousel Items
const hotProducts = [
  {
    image: '/images/rf-cable.jpg',
    title: 'High-Performance RF Cables',
    description: 'Reliable signal transmission for all your telecom needs.',
  },
  {
    image: '/images/solar-inverter.jpg',
    title: 'Next-Gen Solar Inverters',
    description: 'Smart energy for sustainable infrastructure.',
  },
  {
    image: '/images/microwave-antenna.jpg',
    title: 'Precision Microwave Antennas',
    description: 'Designed for superior long-range communication.',
  },
];

// 🧾 Client Logos Array
const clientLogos = [
  { name: 'adani', image: adani },
  { name: 'bel', image: bel },
  { name: 'bsnl', image: bsnl },
  { name: 'defense', image: defense },
  { name: 'drdo', image: drdo },
  { name: 'Ericsson', image: Ericsson },
  { name: 'HUAWEI', image: HUAWEI },
  { name: 'isro', image: isro },
  { name: 'nokia', image: nokia },
  { name: 'railways', image: railways },
  { name: 'reliance', image: reliance },
  { name: 'vi', image: vi },
];

// 🌐 Platform Links
const platformLinks = [
  {
    name: 'Alibaba',
    logo: alibaba,
    url: 'https://rfconnector.trustpass.alibaba.com/',
  },
  {
    name: 'IndiaMART',
    logo: indiamart,
    url: 'https://www.indiamart.com/synergy-telecom/',
  },
  {
    name: 'Export India',
    logo: exportIndia,
    url: 'https://www.exportersindia.com/synergy-telecom-pvt-ltd/',
  },
  {
    name: 'JD Mart',
    logo: jd,
    url: 'https://www.justdial.com/Delhi/Synergy-Telecom-Pvt-Ltd--Vikaspuri/011PXX11-XX11-091009171841-P9X5_BZDET?ref=auto&searchfrom=auto|home',
  },
  {
    name: 'Trade India',
    logo: TradeIndia,
    url: 'https://www.tradeindia.com/synergy-telecom-pvt-ltd-1070132/',
  },
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for hot products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? hotProducts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotProducts.length);
  };

  return (
    <main className="text-gray-800 bg-white">

      {/* 🌐 Platform Links */}
<section  
        style={{ backgroundImage: `url(${hbg})` }}
 className="w-full bg-cover bg-center relative bg-gradient-to-r from-gray-100/70 via-white to-gray-100/70 py-4 px-6 flex justify-center items-center space-x-6 sm:space-x-10 overflow-x-auto shadow-inner backdrop-blur-sm">
  {platformLinks.map((platform, index) => (
    <a
      key={index}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110"
    >
      <img
        src={platform.logo}
        alt={platform.name}
        className="h-8 sm:h-10 object-contain hover:drop-shadow-lg transition duration-300"
      />
    </a>
  ))}
</section>



      {/* 🔥 Hot Products Carousel */}
      <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden">
        <img
          src={hotProducts[currentSlide].image}
          alt={`Slide ${currentSlide}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-end px-6 sm:px-12">
          <div className="text-white text-right max-w-sm sm:max-w-md backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {hotProducts[currentSlide].title}
            </h2>
            <p className="text-sm sm:text-base mb-4">
              {hotProducts[currentSlide].description}
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* 🏢 About Us */}
      <section
        className="py-16 px-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hbg})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-blue-600">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
            About SYNERGY TELECOM
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-blue-800">SYNERGY TELECOM PRIVATE LIMITED</span> is a leading provider of cutting-edge telecom infrastructure solutions.
            We specialize in <span className="font-medium text-blue-700">RF Products, Solar Equipment, Microwave Antennas, IBS & BTS installations, and Elcom technologies</span>.
            With decades of combined experience and a client-first mindset, we power connectivity across industries with efficiency and innovation.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Users className="mx-auto mb-3 text-blue-700" size={40} />
            <h3 className="text-3xl font-bold text-blue-900 mb-2">25+</h3>
            <p className="text-sm font-semibold text-gray-600">Employees</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <TrendingUp className="mx-auto mb-3 text-blue-700" size={40} />
            <h3 className="text-3xl font-bold text-blue-900 mb-2">₹25–50 Cr</h3>
            <p className="text-sm font-semibold text-gray-600">Annual Turnover</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Calendar className="mx-auto mb-3 text-blue-700" size={40} />
            <h3 className="text-3xl font-bold text-blue-900 mb-2">20+ Years</h3>
            <p className="text-sm font-semibold text-gray-600">Industry Experience</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <MapPin className="mx-auto mb-3 text-blue-700" size={40} />
            <h3 className="text-3xl font-bold text-blue-900 mb-2">PAN India</h3>
            <p className="text-sm font-semibold text-gray-600">Presence & Projects</p>
          </div>
        </div>
      </section>

      {/* 🤝 Clients Section */}
<section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-12 tracking-tight">
      Our Trusted Clients
    </h2>

    {/* Infinite Auto-Scrolling Logo Carousel */}
    <div className="relative overflow-hidden">
      <div
        className="inline-flex space-x-10 animate-scroll hover:[animation-play-state:paused]"
        style={{
          animation: 'scroll 25s linear infinite',
        }}
      >
      
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 sm:w-52 h-24 sm:h-28 flex justify-center items-center bg-white shadow-lg rounded-xl p-3 mx-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={client.image}
              alt={client.name}
              className="h-[60px] sm:h-[70px] object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    </main>
  );
};

export default Home;
