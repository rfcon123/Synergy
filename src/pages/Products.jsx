import React from "react";

const upcomingProducts = [
  {
    name: "Microwave Components",
    link: "https://www.rfconnector.in/catalog/UpCommingProducts/PRODUCTS_INTRODUCTION.pdf"
  },
  {
    name: "Digital Control RF Switches",
    link: "https://www.rfconnector.in/catalog/UpCommingProducts/RF_Switches.pdf"
  },
  {
    name: "Digital Control Phase Shifter",
    link: "https://www.rfconnector.in/catalog/UpCommingProducts/Phase_shifters.pdf"
  },
  {
    name: "TCF Series - Flexible Microwave Cable Assemblies",
    link: "https://www.rfconnector.in/catalog/UpCommingProducts/TFC_Series.pdf"
  },
  {
    name: "TCF 110GHz Flexible Microwave Coaxial Cable Assemblies",
    link: "https://www.rfconnector.in/catalog/UpCommingProducts/TCF_110GHz.pdf"
  },
  {
    name: "Electronic Cable and Connectors",
    link: "#"
  },
  {
    name: "Color Coding using Light Emitting Diodes",
    link: "#"
  }
];


const Products = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16 text-gray-800">

      {/* Intro Section */}
      <section>
         <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Synergy Telecom Products
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 p-8 rounded-2xl shadow-md">
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-justify text-gray-800">
            We are one of the fastest-growing companies in North India specializing in the manufacturing of microwave components, IBS, and BTS installation materials. With massive stocks of RF connectors, cables, and microwave parts, we’re proud to be one of the largest RF component stockists in India. As authorized distributors of Professional Taiwan, we serve major clients like Ericsson, Nokia/Siemens, Alcatel/Lucent, Bharti, Vodafone, Idea, HFCL, Tellabs, Aricent, ITI, BSNL, Power Grid Corporation, and all OEMs and telecom operators.
          </p>
          <p className="mt-4 text-blue-700 font-bold text-lg">
            Need urgent supply? Check our live stock and send us your enquiry for the best prices!
          </p>
        </div>
      </section>

      {/* Product Line Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-900 mb-6 tracking-tight">Product Line</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Coaxial Cables",
              desc: `7/8", 1/2", 1/4", RG316, RG174, RG179, RG196, RG187, BT3002, Suco FORM Cable, RG213, RG214, RG217, RG58, RG59, RG402, RG400, LMR-200, LMR-400, LMR-600, Leaky Cable etc.`,
            },
            {
              title: "Antennas",
              desc: `Magnetic, Patch Panel, Omni, Yagi, Ceiling, Indoor/Outdoor, Broadband 2.4GHz, 5.8GHz, WiFi/WiMax, Vsat, GPRS, GPS, GSM/CDMA/3G, Tracking Radio VHF/UHF/HF, Microwave Antennas.`,
            },
            {
              title: "RF Components",
              desc: `Power Dividers, Matching Transformers (120E to 75E BalUN), Dummy Loads (5W-200W), DC Blocks, Couplers, Attenuators, Splitters, Combiners, Duplexers, BPF, LPF, IBS/BTS parts, Lightning Arresters, DDF.`,
            },
            {
              title: "Connectors & Adapters",
              desc: `7/16DIN, N, SMA, TNC, BNC, SMZ, SMB, SSMB, SMC, FME, UHF, Mini BNC, QSMA, QMA, Type 43, Twin, Custom Coaxial Jumper Cables for all cable types.`,
            },
            {
              title: "Optical Fiber Products",
              desc: `Optical Splitters, FDF, FDMS, Patch Cords (SC, ST, FCPC, FC APC, LC, MRTJ, L2000), Attenuators, Adaptors, SFPs, Media Converters (E1, V.35, RS232, RS485, LAN Extenders).`,
            },
            {
              title: "Heat Sink Products",
              desc: `BTS & IBS Installation materials like Hutch Plates, Cable Entry Plates, Sleeves, Boots, End Caps, Termination Kits, Feeder Clamps, Earthing Kits, Weather Proofing Kits.`,
            },
            {
              title: "Earthing Kits & Tools",
              desc: `Spanners, Torque Wrenches, Panel Jack Receptacle Tools, Wire Wrapping, Cutting, Crimping, Stripping Tools, Waterproofing Kits.`,
            },
            {
              title: "Radio Equipments",
              desc: `GSM/CDMA Repeaters, Military Jammers, Wave Guides, LNAs, Repeaters, Jammers.`,
            },
            {
              title: "Test Equipment",
              desc: `Through-Line Digital RF Power Meters (up to 2500MHz by Schomandl), Calibration Kits, Site Masters, Frequency Counters, BER Testers, Repair Services.`,
            },
            {
              title: "Power Supplies",
              desc: `DC-DC Converters, AC-DC Converters, PCB-type PSUs, GPS and Accessories.`,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
              <p className="text-gray-700 leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Products Section */}
     <section className="mt-20">
  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center tracking-tight">
     Upcoming Products
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {upcomingProducts.map((product, index) => (
      <a
        key={index}
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-center"
      >
        <span className="text-lg font-semibold text-blue-900 tracking-wide">
          {product.name}
        </span>
        <span className="block mt-2 text-sm text-blue-600 font-medium">Coming Soon 🔒</span>
      </a>
    ))}
  </div>
</section>

    </main>
  );
};

export default Products;
