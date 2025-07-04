import React, { useState } from 'react';

import bncconnector from '../assets/components/bncconnector.jpg';
import cabletie from '../assets/components/cabletie.jpg';
import feederclamp from '../assets/components/feederclamp.jpg';
import nconnector from '../assets/components/ntypeconnector.jpg';
import saaconnector from '../assets/components/saaconnector.jpg';
import smaconnector from '../assets/components/smaconnector.jpg';
import smbconnector from '../assets/components/smbconnector.jpg';
import smcconnector from '../assets/components/smcconnector.jpg';
import smzconnector from '../assets/components/smzconnector.jpg';
import splitter from '../assets/components/splitter.jpg';
import surgearrester from '../assets/components/surgearrester.jpg';
import tncconnector from '../assets/components/tncconnector.jpg';
import uhfconnector from '../assets/components/uhfconnector.jpg';
import balun from '../assets/components/balun.jpg';
import cableassembly from '../assets/components/cableassembly.jpg';
import dinconnector from '../assets/components/dinconnector.jpg';
import l9connector from '../assets/components/l9connector.jpg';
import opticalfiberproducts from '../assets/components/opticalfiberproducts.jpg';
import antenna from '../assets/components/antenna.jpg';
import highfrequencyadapter from '../assets/components/highfrequencyadapter.jpg';
import otherconnector from '../assets/components/hnconnector.jpg';

const products = [
  { name: 'BNC Connector Price List', image: bncconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/bnc_connector.pdf' },
  { name: 'Cable Tie Price List', image: cabletie, pdf: 'https://rfconnector.in/sy/new_pricelist/CABLE_TIES.png' },
  { name: 'Coupler Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/coupler.pdf' },
  { name: 'Feeder Clamp Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/feederclamp.pdf' },
  { name: 'N-Type Connector Price List', image: nconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/N_CONNECTOR.pdf' },
  { name: 'SMA Connector Price List', image: smaconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/SMA.pdf' },
  { name: 'SMB Connector Price List', image: smbconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/SMB.pdf' },
  { name: 'SMC Connector Price List', image: smcconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/SMC.pdf' },
  { name: 'SMZ Connector Price List', image: smzconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/SMZ.pdf' },
  { name: 'SAA Connector Price List', image: saaconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/SAA.pdf' },
  { name: 'Splitter Price List', image: splitter, pdf: 'https://rfconnector.in/sy/new_pricelist/splitter.pdf' },
  { name: 'Surge Arrester Price List', image: surgearrester, pdf: 'https://rfconnector.in/sy/new_pricelist/surgearrestor.pdf' },
  { name: 'TNC Connector Price List', image: tncconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/TNC.pdf' },
  { name: 'UHF Connector Price List', image: uhfconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/UHF.pdf' },
  { name: 'Attenuator Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/ATTANUTERS.pdf' },
  { name: 'Balun Price List', image: balun, pdf: 'https://rfconnector.in/sy/new_pricelist/BALUN.pdf' },
  { name: 'RF Cable Assembly Price List', image: cableassembly, pdf: 'https://rfconnector.in/sy/new_pricelist/RFCABLE.pdf' },
  { name: 'DIN Connector Price List', image: dinconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/DIN.pdf' },
  { name: 'L9 Connector Price List', image: l9connector, pdf: 'https://rfconnector.in/sy/new_pricelist/L9.pdf' },
  { name: 'Optical Fiber Products Price List', image: opticalfiberproducts, pdf: 'https://rfconnector.in/sy/new_pricelist/OPTICALPRICELIST.pdf' },
  { name: 'Antennas Price List', image: antenna, pdf: 'https://rfconnector.in/sy/new_pricelist/Antenna_Price.pdf' },
  { name: 'Earthing kit Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/EARTHINGKIT.pdf' },
  { name: 'Instrument and Microwave Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/INSTRMENT%26MICROWAVE.pdf' },
  { name: 'Adaptors Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/ADAPTORS.pdf' },
  { name: 'Hand Tools Price List', image: feederclamp, pdf: 'https://rfconnector.in/sy/new_pricelist/Hand_tool_Price_List.pdf' },
  { name: 'High Frequency Adapter Price List', image: highfrequencyadapter, pdf: 'https://rfconnector.in/sy/new_pricelist/High_Frequency_Adaptor_Price.pdf' },
  { name: 'Other Connectors Price List', image: otherconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/OTHER_CONNECTOR.PDF' },
];


const Productspricelist = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
           <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Products Price List
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>
          <p className="text-gray-600 mt-2 text-base">Browse & Download PDF price lists by category</p>
          
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search product price lists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border border-blue-300 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <a
              key={index}
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:border-blue-500 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-base font-semibold text-gray-800 group-hover:text-blue-800">
                  {product.name}
                </h2>
                <p className="text-sm text-blue-500 mt-1">Click to Download PDF</p>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 mt-10 text-base animate-pulse">
            No matching products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Productspricelist;

