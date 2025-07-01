import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rfcable from '../assets/components/rfcable.jpg';
import jumpercable from '../assets/components/jumpercable.jpg';
import highfreqcable from '../assets/components/highfreqcable.jpg';
import fakraconnector from '../assets/components/fakraconnector.jpg';
// import 5gproduct from '../assets/components/5gproduct.jpg';
import sfptransceiver from '../assets/components/sfptransreceiver.jpg';
import helicalantenna from '../assets/components/helicalantenna.jpg';
import hfandvhfantenna from '../assets/components/hfandvhfantenna.jpg';
import fmeconnector from '../assets/components/fmeconnector.jpg';
import patanjalisolarproducts from '../assets/components/patanjalisolarprodcuts.jpg';
import highfrequencytermination from '../assets/components/highfrequencytermination.jpg';
import tetrabandproducts from '../assets/components/tetrabandproducts.jpg';
import cableassembly from '../assets/components/cableassembly.jpg';
import solartrackingsystem from '../assets/components/solartrackingsystem.jpg';
import elcomsolarproduct from '../assets/components/elcomsolarproducts.jpg';
import surveillancetools from '../assets/components/surveillancetools.jpg';
import telescopicmast from '../assets/components/telescopicmast.jpg';
import combinermxproduct from '../assets/components/mxproduct.jpg';
import amplifierandcombiner from '../assets/components/amplifier and combiner.jpg';
import rfcoupler from '../assets/components/rfcoupler.jpg';
import roxteccomsealbts from '../assets/components/roxteccomseal.jpg';
import voipphone from '../assets/components/voipphone.jpg';
import rfadapter from '../assets/components/rfadapter.jpg';
import kronehighfrequencyadapter from '../assets/components/krone.jpg';
import uyconnector from '../assets/components/uyconnector.jpg';
import andrewcutter from '../assets/components/andrewcutter.jpg';
import rfattenuator from '../assets/components/rfattenuator.jpg';
import highfreqattenuator from '../assets/components/highfreqattenuator.jpg';
import solarproduct from '../assets/components/solarproduct.jpg';
import rfconnector from '../assets/components/rfconnector.jpg';
import bmaconnector from '../assets/components/bmaconnector.jpg';
import bncconnector from '../assets/components/bncconnector.jpg';
import bqconnector from '../assets/components/bqconnector.jpg';
import c4connector from '../assets/components/c4connector.jpg';
import cconnector from '../assets/components/cconnector.jpg';
import crc9connector from '../assets/components/crc9connector.jpg';
import dinconnector from '../assets/components/dinconnector.jpg';
// import 4.3-1.0connector from '../assets/components/4310connector.jpg';
import ftypeconnector from '../assets/components/fconnector.jpg';
import hnconnector from '../assets/components/hnconnector.jpg';
import kmx3connector from '../assets/components/kmx3connector.jpg';
import l9connector from '../assets/components/l9connector.jpg';
import m4connector from '../assets/components/m4connector.jpg';
import mcxconnector from '../assets/components/mcxconnector.jpg';
import mmcxconnector from '../assets/components/mmcxconnector.jpg';
import ntypeconnector from '../assets/components/ntypeconnector.jpg';
import qmaconnector from '../assets/components/qmaconnector.jpg';
import qnconnector from '../assets/components/qnconnector.jpg';
import saaconnector from '../assets/components/saaconnector.jpg';
import smaconnector from '../assets/components/smaconnector.jpg';
import smbconnector from '../assets/components/smbconnector.jpg';
import smcconnector from '../assets/components/smcconnector.jpg';
import smpconnector from '../assets/components/smpconnector.jpg';
import smzconnector from '../assets/components/smzconnector.jpg';
import ssmbconnector from '../assets/components/ssmbconnector.jpg';
import tncconnector from '../assets/components/tncconnector.jpg';
import triaxialconnector from '../assets/components/triaxial connector.jpg';
import tqconnector from '../assets/components/tqconnector.jpg';
import uhfconnector from '../assets/components/uhfconnector.jpg';
import highfreqconnector from '../assets/components/highfreqconnector.jpg';
// import 1.85mmconnector from '../assets/components/185mmconnector.jpg';
// import 2.4mmconnector from '../assets/components/24mmconnector.jpg';
// import 2.92mmconnectors from '../assets/components/292mmconnectors.jpg';
// import 3.5mmconnector from '../assets/components/35mmconnector.jpg';
import circularconnector from '../assets/components/circularconnector.jpg';
// import allconnectorcatalogue from '../assets/components/allconnectorcatalogue.jpg';
import antennahornantenna from '../assets/components/hornantenna.jpg';
import balun from '../assets/components/balun.jpg';
import berylliumcopper from '../assets/components/berylliamcopper.jpg';
import biastee from '../assets/components/biastee.jpg';
import broadcastairgap from '../assets/components/broadcastairgapcablescatalogue.jpg';

import cablelugs from '../assets/components/cablelugs.jpg';
import cabletie from '../assets/components/cabletie.jpg';
import networkconnector from '../assets/components/networkconnector.jpg';
import dcpowercable from '../assets/components/dc_powercable.jpg';
import dcblock from '../assets/components/dcblock.jpg';
import dctodcconverter from '../assets/components/dctodcconverter.jpg';
import diplexer from '../assets/components/diplexer.jpg';
import dummyload from '../assets/components/dummyload.jpg';
// import emiemcshieldingproduct from '../assets/components/emiemcshieldingproduct.jpg';
import environmentalchamber from '../assets/components/environmentalchamber.jpg';
import feederclamp from '../assets/components/feederclamp.jpg';
import feedthru from '../assets/components/feedthru.jpg';
import flangeconnector from '../assets/components/flangeconnector.jpg';
// import gpsgpsmodule from '../assets/components/gpsgpsmodule.jpg';
import highfrequencyproduct from '../assets/components/highfrequencyproduct.jpg';
import hoistinggrip from '../assets/components/hoistinggrip.jpg';
import ibsproduct from '../assets/components/ibsproduct.jpg';
import installationkit from '../assets/components/installationkit.jpg';
import microwavecomponent from '../assets/components/microwavecomponent.jpg';
import milgradecable from '../assets/components/milgradecable.jpg';
import opticalfiberproducts from '../assets/components/opticalfiberproducts.jpg';
import proskittoolkits from '../assets/components/proskittoolkits.jpg';
import protectivecap from '../assets/components/protectivecap.jpg';
import rechargeablebattery from '../assets/components/rechargeablebattery.jpg';
import rfswitch from '../assets/components/rfswitch.jpg';
import shieldbox from '../assets/components/shieldbox.jpg';
import splitter from '../assets/components/splitter.jpg';
import shrinkabletube from '../assets/components/shrinkabetube.jpg';
import surgearrester from '../assets/components/surgearrester.jpg';
import telecommunicationmast from '../assets/components/telecommunicationmast.jpg';
import testmeasurementequipment from '../assets/components/spectrumanalyszer.jpg';
import tools from '../assets/components/tools.jpg';
import waveguideadaptor from '../assets/components/waveguideadapter.jpg';
import waveguideflange from '../assets/components/waveguideflange.jpg';
import waveguidecomponent from '../assets/components/waveguidecomponent.jpg';
import j5gproduct from '../assets/components/j5gproduct.jpg';
import j4310connector from '../assets/components/j4.3-1.0connector.jpg';
import j185mmconnector from '../assets/components/j1.85mmconnector.jpg';
import j24mmconnector from '../assets/components/j2.4mmconnector.jpg';
import j292mmconnectors from '../assets/components/j2.92mmconnector.jpg';
import j35mmconnector from '../assets/components/j3.5mmconnector.jpg';
import antenna from '../assets/components/antenna.jpg';
import emi_emcshieldingproduct from '../assets/components/emi_emcshieldingproduct.jpg';
import gps_gpsmodule from '../assets/components/gps_gpsmodule.jpg';



const productsData = [
  { name: "RF Cable", image: rfcable },
  { name: "Jumper Cable", image: jumpercable },
  { name: "High Freq Cable", image: highfreqcable },
  { name: "Fakra Connector", image: fakraconnector },
  { name: "SFP Transceiver", image: sfptransceiver },
  { name: "5G Product", image: j5gproduct },
  { name: "Helical Antenna", image: helicalantenna },
  { name: "HF and VHF Antenna", image: hfandvhfantenna },
  { name: "FME Connector", image: fmeconnector },
  { name: "Patanjali Solar Products", image: patanjalisolarproducts },
  { name: "High Frequency Termination", image: highfrequencytermination },
  { name: "Tetra Band Products", image: tetrabandproducts },
  { name: "Cable Assembly", image: cableassembly },
  { name: "Solar Tracking System", image: solartrackingsystem },
  { name: "Elcom Solar Product", image: elcomsolarproduct },
  { name: "Surveillance Tools", image: surveillancetools },
  { name: "Telescopic Mast", image: telescopicmast },
  { name: "Combiner MX Product", image: combinermxproduct },
  { name: "Amplifier and Combiner", image: amplifierandcombiner },
  { name: "RF Coupler", image: rfcoupler },
  { name: "Roxtec Comseal ", image: roxteccomsealbts },
  { name: "VoIP Phone", image: voipphone },
  { name: "RF Adapter", image: rfadapter },
  { name: "Krone High Frequency Adapter", image: kronehighfrequencyadapter },
  { name: "UY Connector", image: uyconnector },
  { name: "Andrew Cutter", image: andrewcutter },
  { name: "RF Attenuator", image: rfattenuator },
  { name: "High Freq Attenuator", image: highfreqattenuator },
  { name: "Solar Product", image: solarproduct },
  { name: "RF Connector", image: rfconnector },
  { name: "BMA Connector", image: bmaconnector },
  { name: "BNC Connector", image: bncconnector },
  { name: "BQ Connector", image: bqconnector },
  { name: "C4 Connector", image: c4connector },
  { name: "C Connector", image: cconnector },
  { name: "CRC9 Connector", image: crc9connector },
  { name: "DIN Connector", image: dinconnector },
  { name: "4.3-1.0 Connector", image: j4310connector }, 
  { name: "F Type Connector", image: ftypeconnector },
  { name: "HN Connector", image: hnconnector },
  { name: "KMX3 Connector", image: kmx3connector },
  { name: "L9 Connector", image: l9connector },
  { name: "M4 Connector", image: m4connector },
  { name: "MCX Connector", image: mcxconnector },
  { name: "MMCX Connector", image: mmcxconnector },
  { name: "N Type Connector", image: ntypeconnector },
  { name: "QMA Connector", image: qmaconnector },
  { name: "QN Connector", image: qnconnector },
  { name: "SAA Connector", image: saaconnector },
  { name: "SMA Connector", image: smaconnector },
  { name: "SMB Connector", image: smbconnector },
  { name: "SMC Connector", image: smcconnector },
  { name: "SMP Connector", image: smpconnector },
  { name: "SMZ Connector", image: smzconnector },
  { name: "SSMB Connector", image: ssmbconnector },
  { name: "TNC Connector", image: tncconnector },
  { name: "Triaxial Connector", image: triaxialconnector },
  { name: "TQ Connector", image: tqconnector },
  { name: "UHF Connector", image: uhfconnector },
  { name: "High Freq Connector", image: highfreqconnector },
  { name: "1.85mm Connector", image: j185mmconnector },
  { name: "2.4mm Connector", image: j24mmconnector },
  { name: "2.92mm Connectors", image: j292mmconnectors },
  { name: "3.5mm Connector", image: j35mmconnector },
  { name: "Circular Connector", image: circularconnector },
  { name: "Antenna", image: antenna },
  { name: "Horn Antenna", image: antennahornantenna },
  { name: "Balun", image: balun },
  { name: "Beryllium Copper", image: berylliumcopper },
  { name: "Bias Tee", image: biastee },
  { name: "Broadcast Air Gap", image: broadcastairgap },
  { name: "Cable Lugs", image: cablelugs },
  { name: "Cable Tie", image: cabletie },
  { name: "Network Connector", image: networkconnector },
  { name: "DC Power Cable", image: dcpowercable },
  { name: "DC Block", image: dcblock },
  { name: "DC to DC Converter", image: dctodcconverter },
  { name: "Diplexer", image: diplexer },
  { name: "Dummy Load", image: dummyload },
  { name: "EMI/EMC Shielding Product", image: emi_emcshieldingproduct },
  { name: "Environmental Chamber", image: environmentalchamber },
  { name: "Feeder Clamp", image: feederclamp },
  { name: "Feed Thru", image: feedthru },
  { name: "Flange Connector", image: flangeconnector },
  { name: "GPS/GPS Module", image: gps_gpsmodule },
  { name: "High Frequency Product", image: highfrequencyproduct },
  { name: "Hoisting Grip", image: hoistinggrip },
  { name: "IBS Product", image: ibsproduct },
  { name: "Installation Kit", image: installationkit },
  { name: "Microwave Component", image: microwavecomponent },
  { name: "Mil Grade Cable", image: milgradecable },
  { name: "Optical Fiber Products", image: opticalfiberproducts },
  { name: "Proskit Toolkits", image: proskittoolkits },
  { name: "Protective Cap", image: protectivecap },
  { name: "Rechargeable Battery", image: rechargeablebattery },
  { name: "RF Switch", image: rfswitch },
  { name: "Shield Box", image: shieldbox },
  { name: "Splitter", image: splitter },
  { name: "Shrinkable Tube", image: shrinkabletube },
  { name: "Surge Arrester", image: surgearrester },
  { name: "Telecommunication Mast", image: telecommunicationmast },
  { name: "Test Measurement Equipment", image: testmeasurementequipment },
  { name: "Tools", image: tools },
  { name: "Waveguide Adaptor", image: waveguideadaptor },
  { name: "Waveguide Flange", image: waveguideflange },
  { name: "Waveguide Component", image: waveguidecomponent },

].map(product => ({
  ...product,
  slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
}));

export const productsWithSlugs = productsData; // Export for use in ProductDetail.jsx

const ProductShowroom = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto">
            Discover a wide range of high-quality products tailored to your telecom and RF needs.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                to={`/product/${product.slug}`}
                key={index}
                className="bg-white shadow-md p-4 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center text-center border border-gray-200 hover:border-blue-400"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-45 h-auto object-contain p-3 bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold text-black leading-snug">
                    {product.name}
                  </h3>
                </div>
                <div className="pb-4">
                  <span className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    Explore
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No products found.</p>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Need help finding the right product? <a href="/contact" className="text-blue-600 underline">Contact our team</a> for personalized assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowroom;

