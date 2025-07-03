import React, { useState } from "react";
import StyledButton from "../components/StyledButton";

const groupProductLinks =
[
  { "name": "Full Line Catalogue", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/Full_Line_Catalog.pdf" },
  { "name": "All Connector Catalogue", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/All_Connector_Catalogue.pdf" },
  { "name": "Hand Formable (Semi-Flexible) Coaxial Cable Product", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/Hand-Formable_Semi-Flexible_Coaxial_Cable_BRV_MHDCable.pdf" },
  { "name": "Teflon RF Cable Series", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/RF_CAble_Series.pdf" },
  { "name": "Splitter", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/Splitter.pdf" },
  { "name": "F And BNC Connector", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/F_N_BNC_Connector.pdf" },
  { "name": "YL1 Round Connector", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/YL1_Round_Connector.pdf" },
  { "name": "Microwave Passive Component", "link": "http://www.rfconnector.in/catalog/Group_Data_Sheet/Microwave_Passive_Component.pdf" },
  { "name": "Advanced Antenna Wireless Trainer ST 2012", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Advanced_Antenna_Wireless_Trainer_ST-2012.pdf" },
  { "name": "Advanced Microstrip Trainer ST 2012", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Advanced_microstrip_Trainer_ST-2012.pdf" },
  { "name": "Coaxial Slotted Section", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Coaxial_Slotted_Section.pdf" },
  { "name": "Coaxial to Rectangular Waveguide", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/COAXIAL_TO_RECTANGULAR_WAVEGUIDE.pdf" },
  { "name": "Cross Directional Waveguide Coupler", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Cross_Directional_Waveguide_Coupler.pdf" },
  { "name": "Flanges for Waveguide", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/flanges-for-waveguide.pdf" },
  { "name": "Frequency Meter Micrometer Type", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Frequency_Meter_Micrometer_type.pdf" },
  { "name": "Frequency Meters Waveguide Direct Reading Type", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Frequency_Meters_waveguide_Direct_Reading_type.pdf" },
  { "name": "Gun Power Supply X 110", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Gun_Power_Supply_X-110.pdf" },
  { "name": "Gunn Power Supply X 111", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Gunn_Power_Supply_X-111.pdf" },
  { "name": "Klystron", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Klystron.pdf" },
  { "name": "Klystron Mount", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Klystron_Mount.pdf" },
  { "name": "Microwave Power Meter 0-18GHz", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Microwave_Power_Meter_0-18GHz.pdf" },
  { "name": "Rigid Rectangular", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/rigid-rectangular.pdf" },
  { "name": "Rigid Round", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/rigid-round.pdf" },
  { "name": "Solid State VSWR Deluxe Meter", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Solid_State_VSWR_Deluxe_Meter.pdf" },
  { "name": "Solid State VSWR Meter", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Solid_State_VSWR_Meter.pdf" },
  { "name": "ST 2001 Microwave Labkit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2001_Microwave_Labkit.pdf" },
  { "name": "ST 2002 Lab Kit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2002_Lab_kit.pdf" },
  { "name": "ST 2003 Microwave Labkit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2003_Microwave_Labkit.pdf" },
  { "name": "ST 2003m Microwave Kit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2003m_Microwave_Kit.pdf" },
  { "name": "ST 2004 Microwave Labkit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2004_Microwave_Labkit.pdf" },
  { "name": "ST 2005 Lab Kit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2005_lab_Kit.pdf" },
  { "name": "ST 2006 Microwave Labkit Faraday Effect", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2006_MICROWAVE_LABKIT_FARADAY_EFFECT.pdf" },
  { "name": "ST 2007 Microwave Labkit Bragg's Law", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2007_MICROWAVE_LABKIT_BRAGG'S_LAW.pdf" },
  { "name": "ST 2010 Lab Kit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2010_lab_Kit.pdf" },
  { "name": "ST 2013 Microwave Labkit", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/ST-2013_Microwave_Labkit.pdf" },
  { "name": "Tapered Waveguide", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Tapered_Waveguide.pdf" },
  { "name": "Tunable Probe", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/TUNABLE_PROBE.pdf" },
  { "name": "Waveguide E H Plane TEE", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_E_H_Plane_TEE.pdf" },
  { "name": "Waveguide E Plane Bend", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_E_Plane_Bend.pdf" },
  { "name": "Waveguide E Plane TEE", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_E_Plane_TEE.pdf" },
  { "name": "Waveguide H Plane Bend", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_H_Plane_Bend.pdf" },
  { "name": "Waveguide H Plane TEE", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_H_Plane_TEE.pdf" },
  { "name": "Waveguide Multihole Directional Coupler", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Multihole_Directional_Coupler.pdf" },
  { "name": "Waveguide Phase Shifter", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Phase_Shifter.pdf" },
  { "name": "Waveguide Rotary Joints", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Rotary_Joints.pdf" },
  { "name": "Waveguide Rotary SPDT", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Rotary_SPDT.pdf" },
  { "name": "Waveguide Slotted Section With Probe Carrier", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide_Slotted_Section_With_Probe_Carrier.pdf" },
  { "name": "Waveguide Tripod", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Tripod.pdf" },
  { "name": "Waveguide Tuner E H Type", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_tuner_E_H_Type.pdf" },
  { "name": "Waveguide Tuner Precision E H Type", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Tuner_Precision_E_H_Type.pdf" },
  { "name": "Waveguide Turn Table", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/Waveguide_Turn_table.pdf" },
  { "name": "Waveguide Twist", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/WaveGuide_Twist.pdf" },
  { "name": "Waveguide Adjustable", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-adjustable.pdf" },
  { "name": "Waveguide Fixed", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-fixed.pdf" },
  { "name": "Waveguide Matched Detector Mount Fixed", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-matched_detector_Mount-fixed.pdf" },
  { "name": "Waveguide Precision Rotary Vane Type", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-precision-rotary-vane-type.pdf" },
  { "name": "Waveguide Tunable", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-tunable.pdf" },
  { "name": "Waveguide Variable", "link": "http://www.rfconnector.in/catalog/UpCommingProducts/Wave_Guides/waveguide-variable.pdf" }
]

const Groupproductdatasheet = () => {
  const [search, setSearch] = useState("");

  const filteredLinks = groupProductLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10 relative">
        Group Product Datasheets
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></span>
      </h1>

      {/* Search Bar */}
      <div className="mb-12 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Datasheets..."
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
          🚫 No matching datasheet found.
        </p>
      )}

      {/* Contact Support Button */}
      <div className="mt-16 flex justify-center">
        <StyledButton
          label="Contact Support"
          icon={true}
          onClick={() => window.location.href = 'mailto:support@synergytelecom.com'}
        />
      </div>
    </div>
  );
};

export default Groupproductdatasheet;