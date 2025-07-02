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
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8">
        Li-Ion Battery Solutions
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
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="text"
              name="productRequested"
              placeholder="Product Requested *"
              value={formData.productRequested}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="date"
              name="schedule"
              placeholder="Schedule of Product Requirement *"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              name="specifications"
              placeholder="Product Specifications"
              value={formData.specifications}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
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
