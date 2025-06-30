import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DefenceandAerospace = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Carousel */}
      <div className="w-full">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showStatus={false}
          className="w-full"
        >
          {["Defence+Aerospace+1", "Defence+Aerospace+2", "Defence+Aerospace+3"].map((text, i) => (
            <div key={i}>
              <img
                src={`https://placehold.co/1600x500?text=${text}`}
                alt={`Defence ${i + 1}`}
                className="object-cover w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Description */}
       <section>
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 text-center">
    About Our Defence & Aerospace Division
  </h2>

  <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-700 mb-4">
    We are one of the growing companies in manufacturing Microwave components, IBS and BTS installation material across India.
    We also stock large quantities of RF connectors, cables, microwave components, and optical fiber products.
    As of today, we are among the largest stockists of RF components in India.
  </p>

  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md shadow-sm">
    <strong>Defence & Aerospace Leadership:</strong>  
    This division is proudly headed by <span className="font-bold">Mr. Krishnamurthy</span>, who brings years of expertise and leadership for Defence, Aerospace, and Paramilitary force products.
  </div>
</section>


        {/* Clients */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">Clients & Government Organisations</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {[
              "DRDO — PO. NO. EST24 20120011800101",
              "BEL Pune — PO. NO. PUR/PN/C1/513902",
              "BEL Bangalore — PO. NO. BEPO/N6/49001553854900155385",
              "ITI Mumbai — GSM/MTNL/MUMBAI/2012-13/2G/3G/SURGE ARRESTER/61/SYNERGY TELECOM(P) LTD/358",
              "Airports Authority of India — PO. NO. AAI/GMC/NR/DVOR-GWALIOR/981",
              "DRDO — PO. NO. ISGE 20120226560103",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ✅ Styled Vendor Registrations Table */}
        <section className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">Vendor Registrations</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="py-2 px-4 font-semibold border border-gray-300">Company Name</th>
                  <th className="py-2 px-4 font-semibold border border-gray-300">Vendor Registration Code</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["BEL Bangalore", "SA3409 (Authorised by Tech Global)"],
                  ["Tata Teleservices Ltd", "9000006"],
                  ["Tata Teleservices Ltd (Docomo)", "1229439"],
                  ["Idea Cellular Ltd", "132711"],
                  ["Bharti Airtel Ltd", "WO/DL/01/0288"],
                  ["Reliance Comm Ltd", "3054807"],
                  ["Vodafone", "3500 18026"],
                  ["Nokia Siemens Network", "152991"],
                  ["Ericsson", "20000664 / 2000066404"],
                  ["Wipro", "55000695"],
                  ["Freescale", "2.00962E+19"],
                  ["Bharti Airtel Ltd", "311029"],
                  ["L&T ED Vendor", "6857"],
                  ["L&T Heavy Engg.", "SY057"],
                  ["DGQA", "CQAV/P&C/VAC/GEN/IV-95"],
                  ["Bharti Int. Singapore", "311029"],
                  ["Alcatel", "5138719"],
                  ["ISRO Ahmedabad", "501008"],
                  ["ITER - India", "501734"],
                  ["Rajasthan Govt.", "-"],
                  ["CISCO", "479019"],
                  ["Aricent", "201013"],
                  ["Reliance RIL", "270744"],
                  ["RCI Research Centre", "RCI/DCMM/VR/2013-2895 (Valid 5 years)"],
                  ["ECIL HYD", "SY 250 32013"],
                  ["C-DAC", "Centre for Development of Advanced Computing (Govt. of India)"],
                  ["CAIR", "S348 Dated 1-10-13 to 30-9-2018"],
                  ["CABS", "CABS/MMG/E&C/10/13-14 DT 6-8-2013 TO 6-8-2018"]
                ].map(([company, code], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-2 px-4 text-gray-800 border border-gray-300">{company}</td>
                    <td className="py-2 px-4 text-gray-700 border border-gray-300">{code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DefenceandAerospace;
