import React, { useState } from 'react';

const catalogueLinks = [
  "Patch Panel Antenna", "Omni Antenna", "LPDA Antenna", "GSM Whip & Magnetic Base Antenna",
  "GPS Indoor & Outdoor Antenna", "Yagi Antenna", "HF VHF UHF Defence Required Antenna",
  "Microwave Horn Antenna", "RG Cable", "Feeder and Leaky Cable", "HLF and LMR Series Cable",
  "High Frequency Test Cable Assembly", "Jumper Cable", "SMA Connector", "N Connector",
  "DIN Connector", "TNC Connector", "BNC Connector", "UHF Connector", "High Frequency Connector",
  "Other Connector", "Fixed Attenuator and Variable Attenuator", "Dummy Load and Termination",
  "Power Splitter Cavity and Microstrip", "Coupler and Combiners", "Duplexer Triplexer Quadplexer",
  "RF Coaxial Adaptor", "Rigid and Flexible Waveguide", "RF Shield Box / Shield Room",
  "Test and Measurement Equipment", "Tools", "Solar Products", "Surge Arrestor",
  "Weather Proofing Kits", "Feeder Clamp", "Earthing Kit", "Telecom Antenna Mast",
  "Circulator and Isolator", "SFP Stock List 1", "SFP Stock List 2", "RF Filter", "RF Balun",
  "Jammer Modular", "ST-C2400M2483.5M-N", "ST-C5150M5850M-N", "SY Quastar SDRRF",
  "Waveguide Components", "Waveguide Components WR137", "SY25 Omni Antenna Catalogue",
  "Antenna New Ver 2022", "5G Horn Antennas", "All Types of RF Antenna",
  "High Frequency Product Catalogue", "High Frequency Product Catalogue 2nd",
  "High Frequency Test Cable Assemblies", "MM Wave and Microwave Components",
  "MM Wave and Microwave Components 2nd", "RF Products Brochure", "RF Products Catalogue",
  "RF Products Catalogue 2nd", "RF Products Catalogue 2021", "RF Products Catalogue 2021 2nd",
  "Synergy Telecom Pvt Ltd New Catalogue (BL Version)", "SFP Stock List 2022",
  "Electronic Electrical Instruments Connectors",
  "Cable Terminal Brass Lugs Brass Sheet Terminal Jumper Cables Catalogue",
  "Anti Drone Devices Antenna Case Box Drone Jammer", "High Frequency Test Cables",
  "Jammer Antenna Catalogue 2024", "RF Components Catalogue 2024", "Waveguide Catalogue 2024",
  "Electronic Switches Connector", "Auto Electrical Connector", "RF Test Measurement", "Equipment Stock"
];

const ProductCatalogue = () => {
  const [search, setSearch] = useState('');

  const filteredLinks = catalogueLinks.filter(link =>
    link.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-8 border-b-4 border-blue-200 pb-4">
        Products Catalogue
      </h1>

      {/* Search Bar */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search catalogue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-blue-300 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredLinks.map((title, index) => {
          const fileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <a
              key={index}
              href={`#`} // Placeholder for PDF link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-xl shadow transition duration-300 p-5 flex items-center justify-center text-center h-24 sm:h-28"
            >
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 leading-snug">
                {title}
              </h3>
            </a>
          );
        })}
      </div>

      {/* No result message */}
      {filteredLinks.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-sm">
          No matching catalogue found.
        </p>
      )}
    </div>
  );
};

export default ProductCatalogue;
