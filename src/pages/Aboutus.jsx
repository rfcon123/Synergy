import React from "react";

const Aboutus = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16 bg-gray-50">

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://www.pasternack.com/images/homebannersUIUX/24.webp"
          alt="Team collaborating"
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
        />
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-sm shadow-md">
          <h1 className="text-3xl font-bold mb-3">About Our Company</h1>
          <p className="text-md leading-relaxed">
            Synergy Telecom (P) Ltd., established in 2001, is a leading manufacturer and exporter of RF Connectors, Antennas, and Microwave Components.
            <br /><br />
            Known for quality, reliability, and large inventory, we’ve expanded from telecom to solar and renewable energy solutions.
          </p>
        </div>
      </section>

      {/* Vision and Strength */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Vision */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Be the first choice for customers with a comprehensive stock of connectors, cables, and microwave components.</li>
            <li>Provide ready-to-ship solutions and expert technical support.</li>
            <li>Strive for total customer satisfaction through quality service.</li>
            <li>Uphold professionalism and strong ethical business practices.</li>
            <li>Lead growth in telecom and renewable energy sectors for a sustainable future.</li>
          </ul>
        </div>

        {/* Strength */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Strengths</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Ready Stock:</strong> Large inventory to meet diverse client needs with bulk order readiness.</li>
            <li><strong>Quality:</strong> International standard products from renowned manufacturers.</li>
            <li><strong>Logistic Support:</strong> Efficient delivery network ensuring timely dispatch.</li>
            <li><strong>Pricing:</strong> Competitive pricing with attractive discounts for bulk orders.</li>
          </ul>
        </div>
      </section>

      {/* ✅ Company Presentation Link */}
      <section className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Company Presentation</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://onedrive.live.com/personalhttps://onedrive.live.com/personal/026ad11decce68b0/_layouts/15/Doc.aspx?sourcedoc=%7Becce68b0-d11d-206a-8002-420500000000%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBckJvenV3ZDBXb0Npa0xDNUR5a0sybUZHZ0Ew&slrid=1a79ada1-e0db-8000-2173-eb2f7cf3de69&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8wMjZhZDExZGVjY2U2OGIwL1FiQm96dXdkMFdvZ2dBSkNCUUFBQUFBQXd1UThwQ3RwaFJvQU5BP3J0aW1lPVpRMUx0WVM0M1Vn&CID=83692a58-ce24-498a-b885-cf6eba14b705&_SRM=0%3AG%3A106&file=SynergyTelecomPrivateLimited.pptx/026ad11decce68b0/_layouts/15/Doc.aspx?sourcedoc=%7Becce68b0-d11d-206a-8002-420500000000%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBckJvenV3ZDBXb0Npa0xDNUR5a0sybUZHZ0Ew&slrid=8828aca1-508a-8000-2173-e1085516c0f7&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8wMjZhZDExZGVjY2U2OGIwL1FiQm96dXdkMFdvZ2dBSkNCUUFBQUFBQXd1UThwQ3RwaFJvQU5BP3J0aW1lPXZzVmxKVS0xM1Vn&CID=679acdd1-a8ac-4fcd-b47d-d7a4f0ec8680&_SRM=0%3AG%3A159&file=SynergyTelecomPrivateLimited.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md"
          >
            View Company Profile Presentation
          </a>
        </div>
      </section>

      {/* Company Profile */}
      <section className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Company Profile</h2>
        <table className="w-full text-left border border-gray-300">
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
                <td className="py-2 px-4 font-medium text-gray-800 border border-gray-300">{title}</td>
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
