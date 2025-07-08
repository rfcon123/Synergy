  import React, { useState } from 'react';


  const catalogueLinks = [
  {
    name: "3dbi Whip Antenna 2.4Ghz with UFL Cable 150mm",
    link: "https://www.rfconnector.in/catalog/IBS/WHIP_ANTENNA_RA_MOV_3DBI_2400Mhz_WITH_UFL.pdf",
  },
  {
    name: "Phoenix Contact Flashtrab (FLT N/PE CTRL -1.5)",
    link: "https://www.alibaba.com/product-detail/FLASHTRAB-FLT-100-N-PE-CTRL_50010804282.html",
  },
  {
    name: "Phoenix Contact Flashtrab (FLT 35 CTRL -1.5)",
    link: "https://www.alibaba.com/product-detail/FLT-35-CTRL-1-5_50010807454.html",
  },
  {
    name: "Phoenix Contact Valvetrab (VAL-MS 400 ST)",
    link: "https://www.alibaba.com/product-detail/VALVETRAB-VAL-MS-400-ST_50010807458.html",
  },
  {
    name: "Solar Panel Box (Flbox/All parts Enclosure)",
    link: "https://preview.alibaba.com/product/50010804268-100671662/SOLAR_PANEL_CONTROL_BOX.html",
  },
  {
    name: "Val MS 230 ST (Type 2 Surge protection Plug)",
    link: "https://www.alibaba.com/product-detail/VAL-MS-230-ST_50010754721.html",
  },
  {
    name: "Val MS 320 ST",
    link: "https://www.alibaba.com/product-detail/VAL-MS-320-ST_50010643684.html",
  },
  {
    name: "FMS - 12 ST",
    link: "https://preview.alibaba.com/product/50010643688-100671662/F_MS_12_ST.html",
  },
  {
    name: "FLT 100-260",
    link: "https://preview.alibaba.com/product/50010667007-100671662/FLT_100_260.html",
  },
  {
    name: "FLT 60-400",
    link: "https://www.alibaba.com/product-detail/FLT-60-400_50010643672.html",
  },
  {
    name: "32 mm HDPE Coupler",
    link: "https://preview.alibaba.com/product/50010642889-100671662/32_mm_HDPE_Coupler.html",
  },
  {
    name: "Feeder Clamp (HDG Telecom) 1 Way, 2 Way,3 Way, 6 Way for 1/2 inch and 7/8 inch",
    link: "https://rfconnector.in/showroom/feeder_clamp",
  },
  {
    name: "Huawei 16 port DDF MPX272-16 (Patch panel fully loaded)",
    link: "https://preview.alibaba.com/product/50010696517-100671662/HUAWEI_16_Port_DDF_MPX272_16.html",
  },
  {
    name: "CNT cable 15 cm (QMA(M) RA to QMA(M) RA with Rubber Boot)",
    link: "https://www.alibaba.com/product-detail/QMA-Male-Right-Angle-to-QMA_50010642871.html",
  },
  {
    name: "Old Test equipment Anritsu MS 710i 23 GHz spectrum Analyzer",
    link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/spectrum_analyzer.pdf",
  },
  {
    name: "Anritsu Ma247 A Power meter",
    link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/ML_2437A.pdf",
  },
  {
    name: "Anritsu Ma247X Diode sensor",
    link: "https://rfconnector.in/catalog/SOLAR_PRODUCT/STANDARD_DIODE_SENSORS.pdf",
  },
  {
    name: "Polyphase 400 MHz Surge Arrester NM-NF 60 Watts for VHF and UHF application",
    link: "https://rfconnector.in/catalog/IBS/Polyphaser_400mhz_surge_arrester_NM_NF_60WATTS_FOR_VHF_AND_UHF_Application.pdf",
  },
  {
    name: "Tilt Actuator factory set to AISG 2.0 Mode",
    link: "https://rfconnector.in/catalog/IBS/Teletilt_Actuator_Factory_set_to_AISG_2.0_Mode.pdf",
  },
  {
    name: "DCS-UMTS Diplexer",
    link: "https://rfconnector.in/catalog/IBS/DCS_UMTS_DIPLEXER.pdf",
  },
  {
    name: "RJ45 data canopy surge arrester",
    link: "https://rfconnector.in/catalog/Microwave_components/SURG_ARRESTER/DC1_Surge_suppressor_for_CMM5.pdf",
  },
  {
    name: '7/8" Feeder cable',
    link: "https://rfconnector.in/catalog/RF_Cable/7_8_LDF_Cable.pdf",
  },
  {
    name: "All Microwave IBS products",
    link: "https://rfconnector.in/catalog/RF_Cable/7_8_LDF_Cable.pdf",
  },
  {
    name: "Patch panel Antenna",
    link: "https://rfconnector.in/catalog/IBS/8DBI_PANEL_ANTENNA_700_3500MHz.pdf",
  },
  {
    name: "Omni Antenna",
    link: "https://rfconnector.in/catalog/IBS/Omni_Antenna_700-3500MHz.pdf",
  },
  {
    name: "2 Way Cavity Splitter",
    link: "https://rfconnector.in/catalog/IBS/2_way_cavity_splitter_700_3500_Mhz.pdf",
  },
  {
    name: "3 Way Cavity Splitter",
    link: "https://rfconnector.in/catalog/IBS/3_way_cavity_splitter_700_3500_Mhz.pdf",
  },
  {
    name: "4 Way Cavity Splitter",
    link: "https://rfconnector.in/catalog/IBS/4_way_cavity_splitter_700_3500_Mhz.pdf",
  },
  {
    name: "6 dB Coupler",
    link: "https://rfconnector.in/catalog/IBS/6db_cavity_directional_coupler_800-2500MHz.PDF",
  },
  {
    name: "10 dB Coupler",
    link: "https://rfconnector.in/catalog/IBS/10db_cavity_directional_coupler_800-2500MHz.PDF",
  },
  {
    name: "6 Way Feeder Clamp",
    link: "https://rfconnector.in/catalog/IBS/6_WAY_FEEDER_CLAMP_BS_7_8.pdf",
  },
  {
    name: "Surge Arrester",
    link: "https://rfconnector.in/catalog/IBS/Surge_Arrester.pdf",
  },
  {
    name: "Jumper Cable 1 Mtr (N-M to N-F, 1/4\" SF)",
    link: "https://rfconnector.in/catalog/IBS/N_M_N_F_1-4_SF_1MTR.pdf",
  },
  {
    name: "Jumper Cable 1 Mtr (N-M to N-M, 1/4\" SF)",
    link: "https://rfconnector.in/catalog/IBS/N_M_N_M_1-4_SF_1MTR.pdf",
  },
  {
    name: "Jumper Cable 1.5 Mtr (N-M to N-F, 1/4\" SF)",
    link: "https://rfconnector.in/catalog/IBS/N_M_N_F_1-4_SF_1.5MTR.pdf",
  },
  {
    name: "Jumper Cable 1.5 Mtr (N-M to N-M, 1/4\" SF)",
    link: "https://rfconnector.in/catalog/IBS/N_M_N_M_1-4_SF_1.5MTR.pdf",
  },
  {
    name: "Jumper Cable 1.5 Mtr (D-M to D-F, 1/2\" SF)",
    link: "https://rfconnector.in/catalog/IBS/D_M_D_F_1-2SF_1.5mtr.pdf",
  },
  {
    name: "Jumper Cable 2 Mtr (DIN-M to DIN-F, 1/2\" SF)",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2_S.F_2mtr.pdf",
  },
  {
    name: "Jumper Cable 2 Mtr (DIN-M RA to DIN-F, 1/2\" SF)",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_RA_DIN_F_1-2SF_3mtr.pdf",
  },
  {
    name: "Jumper Cable 2.5 Mtr (DIN-F 4H to N-M RA, 1/4\" SF)",
    link: "https://rfconnector.in/catalog/IBS/DIN_F_4H__N_M_RA_1-4_S.F_2.5mtr.pdf",
  },
  {
    name: "Jumper Cable 3 Mtr (DIN-M to DIN-M, 1/2\" SF)",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_3mtr.pdf",
  },
  {
    name: "Jumper Cable 3.5 Mtr",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2SF_3.5mtr.pdf",
  },
  {
    name: "Jumper Cable 4.5 Mtr (N-M to DIN-M)",
    link: "https://rfconnector.in/catalog/IBS/N_M_DIN_M_1-2SF_4.5mtr.pdf",
  },
  {
    name: "Jumper Cable 4.5 Mtr (N-M RA to DIN-M)",
    link: "https://rfconnector.in/catalog/IBS/N_M_RA_DIN_M_1-2SF_4.5mtr.pdf",
  },
  {
    name: "Jumper Cable 5 Mtr",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_5mtr.pdf",
  },
  {
    name: "Jumper Cable 7 Mtr",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_M_1-2SF_7mtr.pdf",
  },
  {
    name: "Jumper Cable 8 Mtr",
    link: "https://rfconnector.in/catalog/IBS/DIN_M_DIN_F_1-2SF_8mtr.pdf",
  },
  {
    name: "Waveguide",
    link: "https://rfconnector.in/catalog/IBS/F062MMS4.pdf",
  },
  {
    name: "S325D Cable Antenna Analyzers",
    link: "https://rfconnector.in/catalog/IBS/Anritsu_S325D.PDF",
  },
  {
    name: "MT822A Site Analyser",
    link: "https://rfconnector.in/catalog/IBS/MT8222A",
  },
  {
    name: "Calkit OSL N50-1",
    link: "https://rfconnector.in/catalog/IBS/Anritsu_OSLN50-1.PDF",
  },
  {
    name: "ICN50 Instacal Module",
    link: "https://rfconnector.in/catalog/IBS/Calibration-Accuracy.pdf",
  },
  {
    name: "15NNF50 -1.5C Testing Cable",
    link: "https://rfconnector.in/catalog/IBS/Calibration-Accuracy.pdf",
  },
  {
    name: "Power Sensor",
    link: "https://rfconnector.in/catalog/IBS/Anritsu_MA2472D_Data_Sheet.pdf",
  },
  {
    name: "RF Switch",
    link: "https://rfconnector.in/catalog/RF_Switch/RF_Switch_12V.pdf",
  },
  {
    name: "Bias Tee",
    link: "https://rfconnector.in/catalog/Microwave_components/Bias_T/DIN_M_DIN_F_WITH_SMA_F_BIAS_TEE.pdf",
  },
  {
    name: "GPS Amplifier",
    link: "https://rfconnector.in/catalog/IBS/GPS_Amplifier.PDF",
  },
  {
    name: "6 Way Feeder Clamp for 7/8\"",
    link: "https://rfconnector.in/catalog/Installation_Kit/Feeder_Clamp/6_Way_Feeder_Clamp_Double_Sided_for_7_8%2520Cable.pdf",
  },
  {
    name: "Power Meter",
    link: "https://rfconnector.in/catalog/IBS/Power_Meter.pdf",
  },
  {
    name: "Surge Protector 2.1~2.5Ghz",
    link: "https://rfconnector.in/catalog/Microwave_components/SURG_ARRESTER/T_Type/Surge_Protector_MHT-N5-2.pdf",
  },
  {
    name: "SFP",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "1.25 G - 1310 NM 10 KM SM (FINISAR + PDR CLASS)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "1.25 G - 850 NM 0.5 KM MM (JDSU)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "1.25 G - 850 NM 0.5 KM MM (SUMITOMO)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "2.125 G - 850 NM 0.5 KM MM (FINISAR)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "2.125 G - 850 NM 0.5 KM MM (JDSU)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "4.25 G - 850 NM 0.5 KM MM (FINISAR)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "4.25 G - 850 NM 0.5 KM MM (JDSU)",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP 10 G 1310 Nm 10KM LC CONNECTOR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP 1.25 G 1310 Nm 10KM LC CONNECTOR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP 155 M 1310 Nm 15 KM AND OTHER WITH LC CONNECTOR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP 2.5 G 1310 Nm 15KM/40 KM LC CONNECTOR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP 6 G 1310 Nm 2KM LC CONNECTOR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP RJ 45 1000 Base T",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  },
  {
    name: "SFP TO SFP CABLE 1 MTR",
    link: "https://rfconnector.in/catalog/IBS/SFP_2020.pdf",
  }
];// Assuming you want to import the links from a separate file

const HotProducts = () => {
  const [search, setSearch] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filteredLinks = catalogueLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading + CTA Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6">
          <h1 className="text-5xl font-extrabold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 animate-pulse">
            🔥 Hot Products
            <span className="block h-1 w-28 bg-gradient-to-r from-yellow-400 to-red-500 mt-4 rounded-full"></span>
          </h1>
          <a
            href="https://www.rfconnector.in/catalog/IBS/antenna/products2.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            View Full Products Table 🔗
          </a>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search hot products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-md shadow-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute left-4 top-3 text-xl text-red-500">🔥</span>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLinks.map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-xl hover:scale-105 transition-all duration-300 hover:border-red-400 group"
            >
              {/* HOT Badge */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                🔥 HOT
              </div>

              {/* Product Name */}
              <h2 className="text-xl font-bold text-red-600 mb-3 group-hover:text-red-700 transition">
                 {item.name}
              </h2>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition shadow-lg"
                >
                  View Datasheet
                </a>
                <button
                  onClick={() => handleCopy(item.link, index)}
                  className="text-sm text-gray-700 hover:text-red-500 transition"
                >
                  📋 {copiedIndex === index ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredLinks.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-20">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default HotProducts;