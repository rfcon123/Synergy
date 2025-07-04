import React from "react";
import StyledButton from "../components/StyledButton";

const Aboutus = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16 bg-gray-50">

      {/* 🖼️ Hero Section */}
      <section className="relative">
        <img
          src="https://www.pasternack.com/images/homebannersUIUX/24.webp"
          alt="Team collaborating"
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
        />
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-blue-500/70 text-white p-6 rounded-lg max-w-sm shadow-md">
          <h1 className="text-3xl font-bold mb-3">About Our Company</h1>
          <p className="text-md leading-relaxed">
            Synergy Telecom (P) Ltd., established in 2001, is a leading manufacturer and exporter of RF Connectors, Antennas, and Microwave Components.
            <br /><br />
            Known for quality, reliability, and large inventory, we’ve expanded from telecom to solar and renewable energy solutions.
          </p>
        </div>
      </section>

      {/* 🎯 Vision and Strength */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Vision */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Be the first choice for customers with a comprehensive stock of connectors, cables, and microwave components.</li>
            <li>Provide ready-to-ship solutions and expert technical support.</li>
            <li>Strive for total customer satisfaction through quality service.</li>
            <li>Uphold professionalism and strong ethical business practices.</li>
            <li>Lead growth in telecom and renewable energy sectors for a sustainable future.</li>
          </ul>
        </div>

        {/* Strengths */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Strengths</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li><strong>Ready Stock:</strong> Large inventory to meet diverse client needs with bulk order readiness.</li>
            <li><strong>Quality:</strong> International standard products from renowned manufacturers.</li>
            <li><strong>Logistic Support:</strong> Efficient delivery network ensuring timely dispatch.</li>
            <li><strong>Pricing:</strong> Competitive pricing with attractive discounts for bulk orders.</li>
          </ul>
        </div>
      </section>

      {/* 📑 Company Presentation */}
      <section className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Company Presentation</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <StyledButton
            label="View Company Profile Presentation"
            onClick={() =>
              window.open(
                'https://onedrive.live.com/:p:/g/personal/026AD11DECCE68B0/s!ArBozuwd0WoCikLC5DykK2mFGgA0?resid=26AD11DECCE68B0!1346&ithint=file%2Cpptx&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBckJvenV3ZDBXb0Npa0xDNUR5a0sybUZHZ0Ew',
                '_blank'
              )
            }
            icon={true}
          />
        </div>
      </section>

      {/* 🏢 Company Profile Table */}
      <section className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Company Profile</h2>
        <table className="w-full text-left border border-gray-300 text-sm">
          <tbody>
            {[
              ["Business Type", "Exporter, Importer, Manufacturer, Trader, Distributor"],
              ["Export Percentage", "25%"],
              ["Import Percentage", "70%"],
              ["Primary Competitive Advantages", "Highly qualified manpower with over a decade of experience."],
              ["Annual Sales Volume", "₹25 Crore"],
              ["Import Value", "₹9 Crore"],
              ["Number of Staff", "25"],
              ["Year of Establishment", "1994"],
              ["Number of Production Lines", "2"],
              ["Export Markets", "China, Sri Lanka, USA, Bangladesh, Myanmar, Indo Asia, Singapore, Nepal, Kuwait, France, Nigeria, South Korea, and others"],
              ["Import Markets", "China, Sri Lanka, USA, Bangladesh, Myanmar, Indo Asia, Singapore, and others"],
              ["Investment on Manufacturing Equipment", "₹15 Lakh"],
              ["QEM Service Provided", "Yes"],
              ["Production Type", "Automatic"],
              ["Number of Engineers", "7"],
              ["Monthly Production Capacity", "As per requirement"]
            ].map(([title, value], index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-2 px-4 font-medium text-gray-800 border border-gray-300 w-1/3">{title}</td>
                <td className="py-2 px-4 text-gray-700 border border-gray-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </main>
  );
};

export default Aboutus;
