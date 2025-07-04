import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Calendar, MapPin } from 'lucide-react';
import StyledButton from '../components/StyledButton.jsx';
import hbg from '../assets/hbg.jpg';

// ✅ Product Images
import antenna from '../assets/components/antenna.jpg';
import rfCables from '../assets/components/cableassembly.jpg';
import balun from '../assets/components/balun.jpg';
import jumperCable from '../assets/components/broadcastairgapcablescatalogue.jpg';
import powerDividers from '../assets/components/combiner.jpg';
import terminations from '../assets/components/dummyload.jpg';
import switches from '../assets/components/diplexer.jpg';
import amplifiers from '../assets/components/amplifier and combiner.jpg';
import couplers from '../assets/components/combiner.jpg';
import waveguides from '../assets/components/bmaconnector.jpg';
import cablelugs from '../assets/components/cablelugs.jpg';
import arrowIcon from '../assets/components/arrow.png';

// ✅ Hot Products Carousel Images
import cables from '../assets/cables.jpg';
import connectors from '../assets/connectors.jpg';
import antennas from '../assets/antennas.jpg';

// ✅ Client Logos
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

// ✅ Image Map
const imageMap = {
  antenna,
  rfCables,
  balun,
  jumperCable,
  powerDividers,
  terminations,
  switches,
  amplifiers,
  couplers,
  waveguides,
  cablelugs,
  arrowIcon,
};

// ✅ Products Grid Data
const productsData = [
  { tag: "New", image: 'antenna', title: 'Microwave Antennas', link: "#" },
  { image: 'rfCables', title: 'RF Cable Assemblies', link: "#" },
  { image: 'balun', title: 'RF Baluns', link: "#" },
  { image: 'jumperCable', title: 'Broadcast Airgap Cables', link: "#" },
  { image: 'powerDividers', title: 'Power Dividers / Combiners', link: "#" },
  { image: 'terminations', title: 'Terminations', link: "#" },
  { image: 'switches', title: 'Diplexer Switches', link: "#" },
  { image: 'amplifiers', title: 'Amplifiers', link: "#" },
  { image: 'couplers', title: 'Couplers', link: "#" },
  { image: 'waveguides', title: 'Waveguide Components', link: "#" },
  { image: 'cablelugs', title: 'Cable Lugs', link: "#" },
  { image: 'arrowIcon', title: 'See All Categories', link: "/product-showroom" },
];

// ✅ Hot Products Carousel Items
const hotProducts = [
  {
    image: cables,
    title: 'Premium RF Cable Assemblies',
    description: 'Engineered for minimal signal loss and superior durability in high-frequency telecom and microwave applications.',
  },
  {
    image: connectors,
    title: 'High-Precision RF Connectors',
    description: 'Delivering seamless connectivity with low VSWR and excellent mechanical performance for critical RF systems.',
  },
  {
    image: antennas,
    title: 'High-Gain Microwave Antennas',
    description: 'Optimized for long-range signal transmission and enhanced coverage in demanding wireless and telecom networks.',
  },
];

// ✅ Platform Links
const platformLinks = [
  { name: 'Alibaba', logo: alibaba, url: 'https://rfconnector.trustpass.alibaba.com/' },
  { name: 'IndiaMART', logo: indiamart, url: 'https://www.indiamart.com/synergy-telecom/' },
  { name: 'Export India', logo: exportIndia, url: 'https://www.exportersindia.com/synergy-telecom-pvt-ltd/' },
  { name: 'JD Mart', logo: jd, url: 'https://www.justdial.com/Delhi/Synergy-Telecom-Pvt-Ltd--Vikaspuri/011PXX11-XX11-091009171841-P9X5_BZDET?ref=auto&searchfrom=auto|home' },
  { name: 'Trade India', logo: TradeIndia, url: 'https://www.tradeindia.com/synergy-telecom-pvt-ltd-1070132/' },
];

// ✅ Client Logos
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        className="w-full bg-cover bg-center parallax-effect bg-gradient-to-r from-gray-100/70 via-white to-gray-100/70 py-4 px-6 flex justify-center items-center space-x-6 sm:space-x-10 overflow-x-auto shadow-inner backdrop-blur-sm"
      >
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
        <div className="absolute inset-0 bg-black/30 flex items-center justify-end px-6 sm:px-12">
          <div className="text-white text-left max-w-sm sm:max-w-md backdrop-blur-md bg-black/40 sm:mr-16 px-6 py-5 sm:px-8 sm:py-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight tracking-wide">
              {hotProducts[currentSlide].title}
            </h2>
            <p className="text-sm sm:text-base mb-5 leading-relaxed text-gray-200">
              {hotProducts[currentSlide].description}
            </p>
            <StyledButton label="Learn More" onClick={() => window.location.href = "/product-showroom"} />
          </div>
        </div>
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

      {/* 🛒 Our Products Grid */}
<section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
       Our Products 
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>


    <div className="overflow-x-auto">
      <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-6 pb-4 mx-auto w-max">
        {productsData.map((product, index) => (
          <a
            key={index}
            href={product.link}
            className={`group relative w-44 bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-4 text-center transform hover:-translate-y-1 transition duration-300
              ${product.title === 'See All Categories' ? 'row-start-2' : ''}
            `}
          >
            {product.tag && (
              <span className="absolute top-2 left-2 text-md uppercase font-semibold bg-red-600 text-white px-2 py-0.5 rounded-md shadow">
                {product.tag}
              </span>
            )}
            <img
              src={imageMap[product.image]}
              alt={product.title}
              className="h-20 mx-auto object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700">
              {product.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* 🏢 About Us */}
      <section
        className="py-16 px-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hbg})` }}
      >
        <div className="absolute parallax-effect inset-0 bg-opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-blue-600">
           <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        About Synergy Telecom
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-blue-800">SYNERGY TELECOM PRIVATE LIMITED</span> is a leading provider of cutting-edge telecom infrastructure solutions.
            We specialize in <span className="font-medium text-blue-700">RF Products, Solar Equipment, Microwave Antennas, IBS & BTS installations, and Elcom technologies</span>.
            With decades of combined experience and a client-first mindset, we power connectivity across industries with efficiency and innovation.
          </p>
        </div>
      </section>

      {/* 🏆 Stats */}
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

      {/* 🤝 Clients */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Our Esteemed Clients
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

          <div className="relative overflow-hidden">
            <div
              className="inline-flex space-x-10 animate-scroll hover:[animation-play-state:paused]"
              style={{ animation: 'scroll 25s linear infinite' }}
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
