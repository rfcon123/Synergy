import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Helmet } from "react-helmet-async";

const ProductStock = () => {
  const [excelData, setExcelData] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const response = await fetch("/product-stock.xls");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length < 3) return;

        const firstRow = jsonData[0];
        const dateCell = firstRow[2];
        let parsedDate = "";

        if (typeof dateCell === "number") {
          const excelEpoch = new Date(1900, 0, dateCell - 1);
          parsedDate = excelEpoch.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
        } else {
          parsedDate = dateCell;
        }

        setDate(parsedDate || "No Date Found");

        const formatted = {};
        let currentCategory = "";

        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          if (!row || row.length === 0) continue;

          const [colA, , colC] = row;

          if (colA && !row[1] && !colC) {
            currentCategory = colA.trim();
            if (!formatted[currentCategory]) formatted[currentCategory] = [];
            continue;
          }

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

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  // ✅ Filter out products with empty or zero quantity
  const products = (excelData[selectedCategory] || []).filter((item) => {
    const qty = item.quantity?.toString().trim().toLowerCase();
    return qty && qty !== "0" && qty !== "0 nos";
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 sm:py-16 font-sans text-gray-900">
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
        <meta property="og:site_name" content="Panaceatic Synergy Telecom stock" />
        <meta property="og:url" content="https://panaceaticsynergy.com/product-stock" />
      </Helmet>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight">
          Product Stock Status
        </h1>
        <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        {date && (
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Data Last Updated: <span className="text-black font-bold">{date}</span>
          </p>
        )}
      </div>

      {/* Category Controls */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Search Input */}
        <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
          <label className="block text-lg font-bold text-gray-800 mb-2">
            🔍 Search Category
          </label>
          <input
            type="text"
            placeholder="e.g. CABLES, ANTENNAS..."
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold text-base shadow-sm"
          />
        </div>

        {/* Dropdown */}
        <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
          <label className="block text-lg font-bold text-gray-800 mb-2">
            📂 Select Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          >
            {filteredCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-x-auto border border-gray-200">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="text-left px-6 py-4 text-lg font-bold tracking-wide">📦 Product</th>
              <th className="text-left px-6 py-4 text-lg font-bold tracking-wide">📊 Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 text-base font-medium">
            {products.length === 0 ? (
              <tr>
                <td colSpan="2" className="px-6 py-6 text-center text-gray-500">
                  No products available in this category.
                </td>
              </tr>
            ) : (
              products.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-all duration-150`}
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 font-semibold text-blue-900">{item.quantity}</td>
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
