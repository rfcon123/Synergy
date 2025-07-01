import React, { useState } from 'react';

const catalogueLinks = [
  { name: "Patch Panel Antenna", link: "https://www.rfconnector.in/Product/Patch_Panel_Antenna.pdf" },
  { name: "Omni Antenna", link: "https://www.rfconnector.in/Product/Omni_Antenna.pdf" },
  { name: "LPDA Antenna", link: "https://www.rfconnector.in/Product/LPDA_Antenna.pdf" },
  { name: "GSM Whip & Magnetic Base Antenna", link: "https://www.rfconnector.in/Product/GSM_Whip_Magnetic_Base_Antenna.pdf" },
  { name: "GPS Indoor & Outdoor Antenna", link: "https://www.rfconnector.in/Product/GPS_Indoor_Outdoor_Antenna.pdf" },
  { name: "Yagi Antenna", link: "https://www.rfconnector.in/Product/Yagi_Antenna.pdf" },
  { name: "HF VHF UHF Defence Required Antenna", link: "https://www.rfconnector.in/Product/HF_VHF_UHF_Defence_Required_Antenna.pdf" },
  { name: "Microwave Horn Antenna", link: "https://www.rfconnector.in/Product/Microwave_Horn_Antenna.pdf" },
  { name: "RG Cable", link: "https://www.rfconnector.in/Product/RG_Cable.pdf" },
  { name: "Feeder And Leaky Cable", link: "https://www.rfconnector.in/Product/Feeder_And_Leaky_Cable.pdf" },
  { name: "HLF & LMR Series Cable", link: "https://www.rfconnector.in/Product/HLF_LMR_Series_Cable.pdf" },
  { name: "High Frequency Test Cable Assembly", link: "https://www.rfconnector.in/Product/High_Frequency_Test_Cable_Assembly.pdf" },
  { name: "Jumper Cable", link: "https://www.rfconnector.in/Product/Jumper_Cable.pdf" },
  { name: "SMA Connector", link: "https://www.rfconnector.in/Product/SMA_Connector.pdf" },
  { name: "N Connector", link: "https://www.rfconnector.in/Product/N_Connector.pdf" },
  { name: "DIN Connector", link: "https://www.rfconnector.in/Product/DIN_Connector.pdf" },
  { name: "TNC Connector", link: "https://www.rfconnector.in/Product/TNC_Connector.pdf" },
  { name: "BNC Connector", link: "https://www.rfconnector.in/Product/BNC%20_Connector.pdf" },
  { name: "UHF Connector", link: "https://www.rfconnector.in/Product/UHF_Connector.pdf" },
  { name: "High Frequency Connector", link: "https://www.rfconnector.in/Product/High_Frequency_Connector.pdf" },
  { name: "Other Connector", link: "https://www.rfconnector.in/Product/Other_Connector.pdf" },
  { name: "Fixed Attenuator & Variable Attenuator", link: "https://www.rfconnector.in/Product/Fixed_Attenuator_Variable_Attenuator.pdf" },
  { name: "Dummy Load & Termination", link: "https://www.rfconnector.in/Product/Dummy_Load_Termination.pdf" },
  { name: "Power Splitter Cavity and Microstrip", link: "https://www.rfconnector.in/Product/Power_Splitter_Cavity_Microstrip.pdf" },
  { name: "Coupler & Combiners", link: "https://www.rfconnector.in/Product/Coupler_Combiners.pdf" },
  { name: "Duplexer_Triplexer_Quadplexer", link: "https://www.rfconnector.in/Product/Duplexer_Triplexer_Quadplexer.pdf" },
  { name: "RF Coaxial Adaptor", link: "https://www.rfconnector.in/Product/RF_Coaxial_Adaptor.pdf" },
  { name: "Rigid & Flexible Waveguide", link: "https://www.rfconnector.in/Product/Rigid_Flexible_Waveguide.pdf" },
  { name: "RF Shield Box/Shield Room", link: "https://www.rfconnector.in/Product/RF_Shield_Box1.pdf" },
  { name: "Test & Measurement Equipment", link: "https://www.rfconnector.in/Product/Test_&_Measurment_Euipment.pdf" },
  { name: "Tools", link: "https://www.rfconnector.in/Product/Tools.pdf" },
  { name: "Solar Products", link: "https://www.rfconnector.in/Product/Solar_Products.pdf" },
  { name: "Surge Arrestor", link: "https://www.rfconnector.in/Product/Surge_Arrestor.pdf" },
  { name: "Weather Proofing Kits", link: "https://www.rfconnector.in/Product/Weather_Proofing_Kits.pdf" },
  { name: "Feeder Clamp", link: "https://www.rfconnector.in/Product/Feeder_Clamp.pdf" },
  { name: "Earthing Kit", link: "https://www.rfconnector.in/Product/Earthing_Kit.pdf" },
  { name: "Telecom Antenna Mast", link: "https://www.rfconnector.in/Product/Telecom_Antenna_Mast.pdf" },
  { name: "Cirlculator & Isolator", link: "https://www.rfconnector.in/Product/Cirlculator_&_Isolator.pdf" },
  { name: "SFP Stock List 1", link: "https://www.rfconnector.in/Product/SFP_Stock_List_1.pdf" },
  { name: "SFP Stock List 2", link: "https://www.rfconnector.in/Product/SFP_Stock_List_2.pdf" },
  { name: "RF Filter", link: "https://www.rfconnector.in/Product/Cables/RF_Filter.pdf" },
  { name: "RF Balun", link: "https://www.rfconnector.in/Product/RF_Balun.pdf" },
  { name: "Jammer Modular", link: "https://www.rfconnector.in/Product/JAMMER_MODULAR.pdf" },
  { name: "ST-C2400M2483.5M-N", link: "https://www.rfconnector.in/Product/ST-C2400M2483.5M-N.pdf" },
  { name: "ST-C5150M5850M-N", link: "https://www.rfconnector.in/Product/ST-C5150M5850M-N.pdf" },
  { name: "SY QUASTAR SDRRF", link: "https://www.rfconnector.in/Product/SY_QUASTAR_SDRRF.pdf" },
  { name: "Waveguide Components", link: "https://www.rfconnector.in/Product/Waveguide_Components.pdf" },
  { name: "Waveguide Components WR137", link: "https://www.rfconnector.in/Product/Waveguide_Components_WR137.pdf" },
  { name: "SY25 OMNI ANTENNA", link: "https://www.rfconnector.in/Product/SY25_OMNI_ANTENNA.pdf" },
  { name: "tnms new", link: "https://www.rfconnector.in/Product/tnms new.pdf" },
  { name: "Antenna New Ver2022", link: "https://www.rfconnector.in/Product/Antenna_Catalouge_Ver2022.pdf" },
  { name: "5G Horn Antennas", link: "https://www.rfconnector.in/Product/Dual Rigid Horn Antenna 18~40Ghz.pdf" },
  { name: "All Types Of RF Antenna", link: "https://www.rfconnector.in/Product/All_Types_Of_Antennas.pdf" },
  { name: "High Frequency Product Catalogue", link: "https://www.rfconnector.in/Product/High_Frequency_Product_Catalouge.pdf" },
  { name: "High Frequency Product Catalogue 2nd", link: "https://www.rfconnector.in/Product/High_Frequency_Product_Catalouge_2nd.pdf" },
  { name: "High Frequency Test Cable Assemblies", link: "https://www.rfconnector.in/Product/High_Frequency_Test_Cable_Assemblies.pdf" },
  { name: "MM Wave & Microwave Components", link: "https://www.rfconnector.in/Product/MM_Wave_&_Microwave_Components.pdf" },
  { name: "MM Wave & Microwave Components 2nd", link: "https://www.rfconnector.in/Product/MM_Wave_&_Microwave_Components_2nd.pdf" },
  { name: "RF Products Broucher", link: "https://www.rfconnector.in/Product/RF_Products_Broucher.pdf" },
  { name: "RF Products Catalouge", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge.pdf" },
  { name: "RF Products Catalouge 2nd", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2nd.pdf" },
  { name: "RF Products Catalouge 2021", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2021.pdf" },
  { name: "RF Products Catalouge 2021 2nd", link: "https://www.rfconnector.in/Product/RF_Products_Catalouge_2021_2nd.pdf" },
  { name: "SYNERGY TELECOM PVT LTD NEW CATALOUGE (Bl Version)", link: "https://www.rfconnector.in/Synergy_Telecom_New_Version.pdf" },
  { name: "SFP Stock List 2022", link: "https://www.rfconnector.in/catalog/Optical_Test_Equipment/SFP_Stock_List.pdf" },
  { name: "Electronic Electrical Instruments Connectors", link: "https://www.rfconnector.in/Product/ELECTRONIC_ELECTRICAL_INSTRUMENTS_CONNECTORS.pdf" },
  { name: "Cable Terminal Brass Lugs Brass Sheet Terminal Jumper Cables Catalogue", link: "https://www.rfconnector.in/Product/Cable_Termincal_Brass_Lugs_Brass_Sheet_Terminal_Jumper_Cables_Catalogue.pdf" },
  { name: "Anti Drone Devices Antenna, Case Box, Drone Jammer", link: "https://www.rfconnector.in/Product/Product_Cataloge/Anti_Drone_Devices.pdf" },
  { name: "High Frequency Test Cables", link: "https://www.rfconnector.in/Product/Product_Cataloge/High_Frequency_Cables_DC_110Ghz.pdf" },
  { name: "Jammer Antenna Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/Jammer_Antenna_Catalogue_2024.pdf" },
  { name: "RF Components Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/RF_Components_Catalogue_2024.pdf" },
  { name: "Waveguide Catalogue 2024", link: "https://www.rfconnector.in/Product/Product_Cataloge/Waveguide_Catalogue_2024.pdf" },
  { name: "Electronic Switches Connector", link: "https://www.rfconnector.in/Product/Product_Cataloge/Electronic_Switches_Connector_2024.pdf" },
  { name: "Auto Electrical Connector", link: "https://www.rfconnector.in/Product/Product_Cataloge/Auto_Electrical_Connector_2024.pdf" },
  { name: "RF Test Measurement Equipment Stock", link: "https://www.rfconnector.in/Product/Product_Cataloge/RF_Test_Measurement_Equipment_Stock.pdf" }
];


const ProductCatalogue = () => {
  const [search, setSearch] = useState("");

  const filteredLinks = catalogueLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10 relative">
        Products Catalogue
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></span>
      </h1>

      {/* Search Bar */}
      <div className="mb-12 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search catalogue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-blue-300 shadow-lg text-base transition focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none focus:shadow-xl"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 hover:border-blue-500 rounded-2xl shadow-md hover:shadow-2xl p-6 flex items-center justify-center text-center h-28 sm:h-32 transition transform hover:-translate-y-1 hover:scale-[1.03] hover:bg-gradient-to-br from-blue-50 to-white duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-blue-800 leading-tight">
              {item.name}
            </h3>
          </a>
        ))}
      </div>

      {/* No Results */}
      {filteredLinks.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-base animate-pulse">
          🚫 No matching catalogue found.
        </p>
      )}
    </div>
  );
};

export default ProductCatalogue;
