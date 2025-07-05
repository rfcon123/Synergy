import React, { useState } from 'react';
import liion from '../assets/liion.jpg';
import StyledButton  from '../components/StyledButton'; 

const LiionBattery = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    productRequested: '',
    schedule: '',
    specifications: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      productRequested: '',
      schedule: '',
      specifications: '',
    });
  };

  const specificationDetails = [
    "LITHIUM BATTERY TYPE",
    "PACK VOLTAGE (V)",
    "PACK CAPACITY IN Ah",
    "PACK DISCHARGING CURRENT (A) (Normal/Peak)",
    "PACK DISCHARGING CUTOFF VOLTAGE (V)",
    "PACK CHARGING CURRENT (A) (Normal/Peak)",
    "PACK CHARGING CUTOFF VOLTAGE (V)",
    "PACK DIMENSION (L × W × H) mm",
    "PROTECTION REQUIREMENTS (PCB/BMS) WITH OR WITHOUT",
    "BATTERY CASE REQUIREMENT",
    "PCB OVER CHARGING PROTECTION VOLTAGE (V)",
    "PCB OVER CHARGING RECOVERY VOLTAGE (V)",
    "PCB OVER DISCHARGING PROTECTION VOLTAGE (V)",
    "PCB OVER DISCHARGING RECOVERY VOLTAGE (V)",
    "DISCHARGE TIME PER DAY (Hrs)",
    "Solar Panel W",
    "Load details in Wattage (LED)",
    "WITH CONNECTOR OR WITHOUT (SPECIFY)",
    "WIRE HARNESS LENGTH",
    "WIRE DIAMETER",
    "WARRANTY REQUIREMENT (Years)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-100 py-10 px-4">
      {/* Top Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Li-Ion Battery Solutions
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>
      {/* Top Image */}
      <div className="flex justify-center items-center bg-gradient-to-b from-blue-50 to-white py-6 px-4 mb-8">
        <img
          src={liion}
          alt="Li-Ion Battery"
          className="w-full max-w-5xl h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left - Specification Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Specification Details</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50 text-gray-700">
                <th className="py-2 px-3">S.No</th>
                <th className="py-2 px-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {specificationDetails.map((detail, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-1 px-3">{index + 1}</td>
                  <td className="py-1 px-3">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right - Inquiry Form */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Battery Inquiry Form</h2>
         <form
      action="https://formsubmit.co/33c86efad5e4f7feaab2530deeffed42"
      method="POST"
      className="space-y-5 text-sm bg-white p-6 rounded-xl shadow-xl"
      onSubmit={(e) => {alert('Thank you for your inquiry! We will get back to you soon.'); }}
    >
      {/* FormSubmit Hidden Config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Product Inquiry Submission" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_autoresponse" value="Thank you for your inquiry. Our team will reach out shortly." />
      <input type="hidden" name="_next" value="https://refec.netlify.app/" />
      <input type="text" name="_honey" style={{ display: 'none' }} />

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="First Name"
          placeholder="First Name *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <input
          type="text"
          name="Last Name"
          placeholder="Last Name *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
      </div>

      {/* Contact Info */}
      <input
        type="email"
        name="Email"
        placeholder="Email *"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        type="tel"
        name="Phone"
        placeholder="Mobile Phone *"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      {/* Product Info */}
      <input
        type="text"
        name="Product Requested"
        placeholder="Product Requested *"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      <div>
        <label className="block mb-1 font-medium text-gray-700">Required Date</label>
        <input
          type="date"
          name="Schedule"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
      </div>

      {/* Specs */}
      <textarea
        name="Specifications"
        placeholder="Product Specifications"
        rows="4"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
      ></textarea>

      {/* Button */}
      <div className="pt-2">
        <StyledButton
          label="Submit Inquiry"
          icon={true}
          type="submit"
        />
      </div>
    </form>
        </div>
      </div>
    </div>
  );
};

export default LiionBattery;
