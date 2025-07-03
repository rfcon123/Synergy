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
  { name: 'BNC Connector Price List', image: bncconnector, pdf: '/assets/price-pdfs/bnc-connector.pdf' },
  { name: 'Cable Tie Price List', image: cabletie, pdf: '/assets/price-pdfs/cable-tie.pdf' },
  { name: 'Coupler Price List', image: feederclamp, pdf: '/assets/price-pdfs/coupler.pdf' },
  { name: 'Feeder Clamp Price List', image: feederclamp, pdf: '/assets/price-pdfs/feeder-clamp.pdf' },
  { name: 'N-Type Connector Price List', image: nconnector, pdf: '/assets/price-pdfs/n-connector.pdf' },
  { name: 'SMA Connector Price List', image: smaconnector, pdf: '/assets/price-pdfs/sma-connector.pdf' },
  { name: 'SMB Connector Price List', image: smbconnector, pdf: '/assets/price-pdfs/smb-connector.pdf' },
  { name: 'SMC Connector Price List', image: smcconnector, pdf: '/assets/price-pdfs/smc-connector.pdf' },
  { name: 'SMZ Connector Price List', image: smzconnector, pdf: '/assets/price-pdfs/smz-connector.pdf' },
  { name: 'SAA Connector Price List', image: saaconnector, pdf: '/assets/price-pdfs/saa-connector.pdf' },
  { name: 'Splitter Price List', image: splitter, pdf: '/assets/price-pdfs/splitter.pdf' },
  { name: 'Surge Arrester Price List', image: surgearrester, pdf: '/assets/price-pdfs/surge-arrester.pdf' },
  { name: 'TNC Connector Price List', image: tncconnector, pdf: '/assets/price-pdfs/tnc-connector.pdf' },
  { name: 'UHF Connector Price List', image: uhfconnector, pdf: '/assets/price-pdfs/uhf-connector.pdf' },
  { name: 'Attenuator Price List', image: feederclamp, pdf: '/assets/price-pdfs/connector-accessories.pdf' },
  { name: 'Balun Price List', image: balun, pdf: '/assets/price-pdfs/balun.pdf' },
  { name: 'RF Cable Assembly Price List', image: cableassembly, pdf: '/assets/price-pdfs/rf-cable-assembly.pdf' },
  { name: 'DIN Connector Price List', image: dinconnector, pdf: '/assets/price-pdfs/din-connector.pdf' },
  { name: 'L9 Connector Price List', image: l9connector, pdf: '/assets/price-pdfs/l9-connector.pdf' },
  { name: 'Optical Fiber Products Price List', image: opticalfiberproducts, pdf: '/assets/price-pdfs/optical-fiber-products.pdf' },
  { name: 'Antennas Price List', image: antenna, pdf: '/assets/price-pdfs/antennas.pdf' },
  { name: 'Earthing kit Price List', image: feederclamp, pdf: '/assets/price-pdfs/connector-accessories.pdf' },
  { name: 'Instrument and Microwave Price List', image: feederclamp, pdf: '/assets/price-pdfs/connector-accessories.pdf' },
  { name: 'Adaptors Price List', image: feederclamp, pdf: '/assets/price-pdfs/connector-accessories.pdf' },
  { name: 'Hand Tools Price List', image: feederclamp, pdf: '/assets/price-pdfs/connector-accessories.pdf' },
  { name: 'High Frequency Adapter Price List', image: highfrequencyadapter, pdf: '/assets/price-pdfs/high-frequency-adapter.pdf' },
  { name: 'Other Connectors Price List', image: otherconnector, pdf: '/assets/price-pdfs/other-connectors.pdf' },
];

const Productspricelist = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-blue-900">📄 Product Price Lists</h1>
          <p className="text-gray-700 text-lg">Browse & Download PDF price lists for all our product categories.</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search Products Price Lists..."
            className="w-full px-5 py-3 rounded-xl border border-blue-300 shadow-lg text-base transition focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none focus:shadow-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <a
              key={index}
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-blue-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-1">Click to Download PDF</p>
              </div>
            </a>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No matching products found.</p>
        )}

      </div>
    </section>
  );
};

export default Productspricelist;
