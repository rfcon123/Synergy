import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Helmet } from "react-helmet-async";


const ProductStock = () => {
  const [excelData, setExcelData] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const response = await fetch("/product-stock.xls"); // ✅ Rename your file
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length < 3) return;

        // Extract date from first non-empty cell
const firstRow = jsonData[0];
const dateCell = firstRow[2]; // C column
let parsedDate = "";

if (typeof dateCell === "number") {
  // Excel date serial number -> JS Date
  const excelEpoch = new Date(1900, 0, dateCell - 1);
  parsedDate = excelEpoch.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // 👉 e.g. 16-Jun-2025
} else {
  parsedDate = dateCell;
}

setDate(parsedDate || "No Date Found");

        const formatted = {};
        let currentCategory = "";

        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];

          if (!row || row.length === 0) continue;

          const [colA, colB, colC] = row;

          // If a row has text in colA and colB/colC are empty => treat it as a section header
          if (colA && !colB && !colC) {
            currentCategory = colA.trim();
            if (!formatted[currentCategory]) formatted[currentCategory] = [];
            continue;
          }

          // If row is a product row (has name + quantity)
          if (currentCategory && colA && colC) {
            formatted[currentCategory].push({
              name: colA.trim(),
              quantity: colC.toString().replace(/NOS/i, "").trim(),
            });
          }
        }

        const allCategories = Object.keys(formatted);
        setExcelData(formatted);
        setCategories(allCategories);
        setSelectedCategory(allCategories[0] || "");

      } catch (err) {
        console.error("Error loading Excel:", err);
      }
    };

    fetchExcel();
  }, []);

  const products = excelData[selectedCategory] || [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      <Helmet>
  <title>Product Stock Status | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Check the latest stock status of RF components, cable assemblies, connectors, and more at Panacea Telecom."
  />
  <meta
    name="keywords"
    content="RF stock, connector availability, RF cable stock, Panacea Telecom stock list, telecom components"
  />
  <meta property="og:title" content="Product Stock Status | RF Connector - Synergy Telecom" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Panaceatic synergy Telecom stock" />
  <meta property="og:url" content="https://panaceaticsynergy.com/product-stock" />
</Helmet>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-4">
        Product Stock Status
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

      {date && (
        <div className="text-center text-gray-600 mb-8 font-medium text-lg">
          Data Last Updated: {date}
        </div>
      )}

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
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3 font-semibold">{item.quantity}</td>
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
