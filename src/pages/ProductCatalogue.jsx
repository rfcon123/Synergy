import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiFileText } from "react-icons/fi";
import StyledButton from "../components/StyledButton";

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
  { name: "RF Test Measurement Equipment Stock", link: "https://www.rfconnector.in/Product/Product_Cataloge/RF_Test_Measurement_Equipment_Stock.pdf" },
  { name: "Equipment Photo And Price", link: "https://rfconnector.in/Product/EQUIPMENT%20PHOTO%20AND%20PRICE.pdf" },
  { name: "ST High Frequency Antenna", link: "https://rfconnector.in/Product/ST_HIGH%20_FREQUENCY_ANTENNA.pdf" },
    { name: "8 band Panel Antenna", link: "/Datasheets/8-BAND_ATENNA_PATCH-PANEL.pdf" },

];


const ProductCatalogue = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // This filter is for the main catalogue view
  const filteredLinks = catalogueLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // If a slug exists, we are on a single product's page.
  if (slug) {
    const product = catalogueLinks.find((item) => slugify(item.name) === slug);

    // If the product is not found, display a not-found message.
    if (!product) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
          <Helmet>
            <title>Product Not Found | Synergy Telecom</title>
          </Helmet>
          <h1 className="text-2xl font-bold text-gray-800">❌ Product Not Found</h1>
          <p className="mt-2 text-gray-500">The catalogue you requested does not exist.</p>
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => navigate("/product-catalogue")}
          >
            Back to Catalogue
          </button>
        </div>
      );
    }

    // Display the specific product's details in a centered and fuller layout.
    return (
     <div className="min-h-[80vh] flex items-center justify-center p-6">
  <Helmet>
    <title>{product.name} | Synergy Telecom</title>
  </Helmet>
  <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-xl p-8 text-center">
    <div className="mb-6 p-4 bg-blue-100 rounded-full text-blue-700 mx-auto w-20 h-20 flex items-center justify-center">
      <FiFileText size={48} />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
    <p className="text-lg text-gray-600 mb-8">
      Click the button below to view and download the product catalogue in PDF format.
    </p>
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
    >
      <FiFileText className="mr-3 h-6 w-6" />
      View PDF
    </a>
    <div className="mt-6">
      <button
        className="text-blue-600 hover:text-blue-800 hover:underline transition"
        onClick={() => navigate("/product-catalogue")}
      >
        ← Back to All Products
      </button>
    </div>
  </div>
</div>

    );
  }

  // If no slug is present, render the full catalogue with search functionality.
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Product Catalogue | Synergy Telecom</title>
      </Helmet>
      {/* Search Bar and Header */}
      <div className="max-w-xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalogue</h1>
        <p className="text-lg text-gray-600">
          Browse our comprehensive collection of product catalogues.
        </p>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search for a product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((item, index) => (
            <Link
              key={index}
              to={`/product-catalogue/${slugify(item.name)}`}
              className="group bg-white border border-gray-200 hover:border-blue-500 rounded-lg shadow-md hover:shadow-xl p-6 flex flex-col justify-between text-center transition-transform transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 p-4 bg-blue-100 rounded-full text-blue-700 group-hover:bg-blue-200 mx-auto">
                <FiFileText size={32} />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 leading-snug">
                {item.name}
              </h3>

              {/* Optional short description */}
              {item.description && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              )}

              {/* File info */}
              <div className="mt-4 text-xs text-gray-400">
                📄 PDF — {item.size || "View & Download"}
              </div>
            </Link>
          ))
        ) : (
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 text-center">
            <img
              src="/images/empty-search.svg"
              alt="No results"
              className="mx-auto w-40 mb-6 opacity-80"
            />
            <p className="text-gray-500 text-base mb-2">
              🚫 No matching catalogue found.
            </p>
            <p className="text-gray-400 text-sm">
              Try different keywords or browse all categories.
            </p>
          </div>
        )}
      </div>

      {/* Support Section */}
     <div className="mt-20 bg-white border border-gray-200 rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold text-blue-900 mb-3">
    Still can’t find what you’re looking for?
  </h2>
  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Our product experts are here to help you select the right solution for your
    needs. Get in touch and we’ll send you the exact specifications you require.
  </p>
  <div className="flex justify-center"> {/* Add this div */}
    <StyledButton
      label="Contact Support"
      icon={true}
      className=""
      onClick={() => (window.location.href = "mailto:info@synergytpl.com")}
    />
  </div> {/* Close this div */}
</div>
    </div>
  );
};

export default ProductCatalogue;