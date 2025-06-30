import React, { useState } from 'react';

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

      {/* Top Image Banner */}
      <div className="w-full mb-8">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b1904182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Li-Ion Battery"
          className="w-full max-h-[250px] sm:max-h-[300px] object-cover rounded-lg shadow"
        />
      </div>

      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8">
        Li-Ion Battery Solutions
      </h1>

      {/* Responsive Grid - Stack on mobile, side by side on large */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Left - Specifications Table */}
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

            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={() => setFormData({
                  firstName: '', lastName: '', email: '', phone: '', productRequested: '', schedule: '', specifications: ''
                })}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded font-medium transition"
              >
                Reset
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default LiionBattery;
