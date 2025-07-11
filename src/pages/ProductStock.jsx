import React, { useState } from "react";
import allProductData from "./output_data.json"; 

const ProductStock = () => {
const categories = [
  "ANTENNAS",
  "ATTENUATORS",
  "BALUNS",
  "CABLES",
  "RF CABLES",
  "CABLE TIE",
  "COMBINERS",
  "CONNECTORS",
  "C4 CONNECTOR",
  "DIN CONNECTOR",
  "L9 CONNECTOR",
  "N CONNECTOR",
  "QMA CONNECTOR",
  "SAA CONNECTOR",
  "SMA CONNECTOR",
  "SMB CONNECTOR",
  "SMC CONNECTOR",
  "SMZ CONNECTOR",
  "SOLAR CONNECTOR",
  "TNC CONNECTOR",
  "UHF CONNECTOR",
  "COUPLERS",
  "DUMMYLOADS",
  "EARTHING KITS",
  "FEEDER CLAMP",
  "SPLITERS",
  "SURGE ARRESTORS",
  "TOOLS",
  "VARRIABLE ATTENUATORS"
];


  const [selectedCategory, setSelectedCategory] = useState("ANTENNAS");
  const products = allProductData[selectedCategory] || [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
       <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Product Stock Status
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

      {/* Category Dropdown */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
          Select Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="text-left px-4 py-3">Product Name</th>
              <th className="text-left px-4 py-3">Available Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {products.length === 0 ? (
              <tr>
                <td className="px-4 py-4" colSpan="2">
                  No data available for this category.
                </td>
              </tr>
            ) : (
              products.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {item.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {item.NOS || item.quantity || "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ProductStock;
