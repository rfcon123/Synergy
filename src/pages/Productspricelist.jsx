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
import testmeasurementequipment from '../assets/components/spectrumanalyszer.jpg';

import adaptor from '../assets/components/adaptorspricelist.jpg';
import coupler from '../assets/components/couplerpricelist.jpg';
import earthingkit from '../assets/components/earthingkitpricelist.jpg';
import handtools from '../assets/components/handtoolspricelist.jpg';
import instrumentandmicrowave from '../assets/components/instrumentandmicrowavepricelist.jpg';


const products = [
  { name: 'BNC Connector Price List', image: bncconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/bnc_connector.pdf' },
  { name: 'Cable Tie Price List', image: cabletie, pdf: 'https://rfconnector.in/sy/new_pricelist/CABLE_TIES.png' },
  { name: 'Coupler Price List', image: coupler, pdf: 'https://rfconnector.in/sy/new_pricelist/coupler.pdf' },
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
  { name: 'Earthing kit Price List', image: earthingkit, pdf: 'https://rfconnector.in/sy/new_pricelist/EARTHINGKIT.pdf' },
  { name: 'Instrument and Microwave Price List', image: instrumentandmicrowave, pdf: 'https://rfconnector.in/sy/new_pricelist/INSTRMENT%26MICROWAVE.pdf' },
  { name: 'Adaptors Price List', image: adaptor, pdf: 'https://rfconnector.in/sy/new_pricelist/ADAPTORS.pdf' },
  { name: 'Hand Tools Price List', image: handtools, pdf: 'https://rfconnector.in/sy/new_pricelist/Hand_tool_Price_List.pdf' },
  { name: 'High Frequency Adapter Price List', image: highfrequencyadapter, pdf: 'https://rfconnector.in/sy/new_pricelist/High_Frequency_Adaptor_Price.pdf' },
  { name: 'Other Connectors Price List', image: otherconnector, pdf: 'https://rfconnector.in/sy/new_pricelist/OTHER_CONNECTOR.PDF' },
];

const tableData = [
  {
  "RF TEST EQUIPMENT LIST": {
    "Site Master": [
      {
        "S. No.": 1,
        "ITEM NAME": "Bird Site Master SA-6000EX 25~6000Mhz",
        "UNIT PRICE INR": "₹ 1,50,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LEgeXL07ibqgzOueAp80b5nXvUfKA4fG?usp=sharing"
      },
      {
        "S. No.": 2,
        "ITEM NAME": "Bird Site Master SA-2500EX 780~2500Mhz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1KxC8icw4dn2V7mTojS4U3bisGKXy349V?usp=sharing"
      },
      {
        "S. No.": 3,
        "ITEM NAME": "Bird Site Master SA-2500A 780~2500Mhz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1Kzxt6mSr-sPhWykhNkzwkbvMv2l7egok?usp=sharing"
      },
      {
        "S. No.": 4,
        "ITEM NAME": "Bird Site Master SA-1700EX 25~1700Mhz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1L-wCV45a5Y6JM-py84bZ8dYY3Nly9LMG?usp=sharing"
      },
      {
        "S. No.": 5,
        "ITEM NAME": "Anritsu Site Master S325D 25~2500Mhz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1KW1sjhRUYyP7ydLjayJ90dnfu-WB_7mM?usp=sharing"
      },
      {
        "S. No.": 6,
        "ITEM NAME": "Anritsu Site Master S331D 25~4000Mhz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1KVOTVzYF6SVol6fECYa56fsehER4_KvR?usp=sharing"
      },
      {
        "S. No.": 7,
        "ITEM NAME": "Agilent Technologies N9330B 25~4000Mhz",
        "UNIT PRICE INR": "₹ 2,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1KWwRK-fu8tjeFoSowKAJPwVwyJadgJDy?usp=sharing"
      }
    ],
    "Power Meter": [
      {
        "S. No.": 1,
        "ITEM NAME": "Anritsu Power Meter ML2437A Single Port",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LR-y7M5iCPEpSmhbb4u7_bJ8ZKchOmSJ?usp=sharing"
      },
      {
        "S. No.": 2,
        "ITEM NAME": "Anritsu Power Meter ML2438A Dual Port",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LOLb0-lePl7podXtGl3H2742fjIzWhc8?usp=sharing"
      },
      {
        "S. No.": 3,
        "ITEM NAME": "Agilent E4418B EPM Series Power Meter 26.5Ghz",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LR7l2OyM9C9n-XAG4Wgm2JWzlt1hpSqv?usp=sharing"
      }
    ],
    "Power Sensor": [
      {
        "S. No.": 1,
        "ITEM NAME": "Anritsu Power Sensor MA2472D 10Mhz~18Ghz -70~+20dbm",
        "UNIT PRICE INR": "₹ 35,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LJIpuFPF_2u94BxeUx2zzq4qsxmDZOaI?usp=sharing"
      },
      {
        "S. No.": 2,
        "ITEM NAME": "Anritsu High Accuracy Sensor MA2444A 10Mhz~40Ghz -67~+20dbm",
        "UNIT PRICE INR": "₹ 1,25,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LLuNcrTtWhY6MEfvjmJK8Bw_oatC8MKA?usp=sharing"
      },
      {
        "S. No.": 3,
        "ITEM NAME": "HP Agilent Keysight Power Sensor 8485A 50MHz~26.5 GHz -30 to +20 dBm",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LFHGU3Y73_f6MuohlntatBPBNPZYt0Y-?usp=sharing"
      },
      {
        "S. No.": 4,
        "ITEM NAME": "HP Agilent Keysight Power Sensor 8481H 10MHz~18GHz -10 to +35 dBm",
        "UNIT PRICE INR": "₹ 35,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LF_n25rTCvrBLz1ktOYFLHxMSHTltZuH?usp=sharing"
      },
      {
        "S. No.": 5,
        "ITEM NAME": "HP Agilent Keysight Power Sensor 8481D 10MHz~18GHz -70 to -20 dBm",
        "UNIT PRICE INR": "₹ 65,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LFk4j_avfVezpfeYTkn7FIQf0KzCdSFQ?usp=sharing"
      }
    ],
    "Signal Generator": [
      {
        "S. No.": 1,
        "ITEM NAME": "HP Agilent 83630L Series Swept Generators 10MHz~26.5 GHz",
        "UNIT PRICE INR": "₹ 4,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1KPo8jp0lRGs3dn_3Q-iV4hPyUruE5ApF?usp=sharing"
      }
    ],
    "Spectrum Analyzer": [
      {
        "S. No.": 1,
        "ITEM NAME": "HP Agilent Spectrum Analyzer 8593E 9Khz~22Ghz",
        "UNIT PRICE INR": "₹ 2,50,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1NwPJi7YfBi3ww4_xk3ibvkM__252s08C?usp=sharing"
      }
    ],
    "Oscilloscope": [
      {
        "S. No.": 1,
        "ITEM NAME": "Tekhind 2465B 400Mhz 4 Channel Analog Oscilloscope",
        "UNIT PRICE INR": "₹ 45,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1LSKgzBp8McjurVIB7DVla2gZ8eV44FHz?usp=sharing"
      }
    ],
    "Frequency Counter": [
      {
        "S. No.": 1,
        "ITEM NAME": "Protek U3000A Universal Counter",
        "UNIT PRICE INR": "₹ 1,00,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1JrfgE5n-j3XK7KJfRgKUv0hL4gISyReG?usp=sharing"
      }
    ],
    "Watt Meter": [
      {
        "S. No.": 1,
        "ITEM NAME": "Bird 43 Watt Meter",
        "UNIT PRICE INR": "₹ 28,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1NwR3_HOLGs73tpp2yk4Rt170Bt3kma2K?usp=sharing"
      },
      {
        "S. No.": 2,
        "ITEM NAME": "SWR Power Meter",
        "UNIT PRICE INR": "₹ 6,500.00",
        "IMAGES": "https://drive.google.com/drive/folders/1NrqNnMDwewlTLWmrWdj4GeG-wxKQEhDR?usp=sharing"
      },
      {
        "S. No.": 3,
        "ITEM NAME": "ATU Antenna Tuning Unit HF",
        "UNIT PRICE INR": "₹ 15,000.00",
        "IMAGES": "https://drive.google.com/drive/folders/1Jv2jA450heBEaKH8Ctky3NExCA15AhIy?usp=sharing"
      }
    ]
  }
}
];

const Productspricelist = () => {
  const [search, setSearch] = useState('');
  const [showTable, setShowTable] = useState(false);

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
              <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-base font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-blue-500 mt-1">Click to Download PDF</p>
              </div>
            </a>
          ))}

          {/* Show Table Trigger Card */}
          <div
            onClick={() => setShowTable(!showTable)}
            className="cursor-pointer bg-white border border-gray-300 hover:border-blue-500 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={testmeasurementequipment}
                alt="Test & Measurement Equipment"
                className="w-full h-44 object-cover opacity-80"
              />
              <div className="mt-2 text-center">
                <h2 className="text-base font-semibold text-gray-800">Test & Measurement Equipment</h2>
                <p className="text-sm text-blue-500 mt-1">Click to {showTable ? 'Hide' : 'View'} Table</p>
              </div>
            </div>
          </div>
        </div>

        {/* RF Test Equipment Table */}
        {showTable && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 overflow-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">RF Test Equipment Price List</h3>
            {tableData.map((group, index) => {
              const categories = group["RF TEST EQUIPMENT LIST"];
              return Object.entries(categories).map(([categoryName, items], catIndex) => (
                <div key={`${index}-${catIndex}`} className="mb-10">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3 border-b pb-1">{categoryName}</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm text-left">
                      <thead className="bg-blue-100 text-blue-900">
                        <tr>
                          <th className="px-4 py-2 border">S. No.</th>
                          <th className="px-4 py-2 border">Item Name</th>
                          <th className="px-4 py-2 border">Unit Price (INR)</th>
                          <th className="px-4 py-2 border">Images</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, itemIndex) => (
                          <tr key={itemIndex} className="hover:bg-blue-50">
                            <td className="px-4 py-2 border">{item["S. No."]}</td>
                            <td className="px-4 py-2 border">{item["ITEM NAME"]}</td>
                            <td className="px-4 py-2 border">{item["UNIT PRICE INR"]}</td>
                            <td className="px-4 py-2 border">
                              <a
                                href={item["IMAGES"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                              >
                                View Images
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ));
            })}
          </div>
        )}

        {/* No Results */}
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