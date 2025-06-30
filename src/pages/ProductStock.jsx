import React from "react";

const productData = [
  {
    name: "BNC(F) TO BNC(F) 4H ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_F_BNC_F_ADAPTOR.pdf",
    quantity: "682 NOS",
  },
  {
    name: "BNC(F) TO BNC(F) BH ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_Female_to_BNc_Female_BH_Adaptor.pdf",
    quantity: "502 NOS",
  },
  {
    name: "BNC(F) TO SMA(M) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_F_SMA_M_ADAPTOR.pdf",
    quantity: "260 NOS",
  },
  {
    name: "BNC(M) TO BNC(F) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_M_BNC_F_ADAPTOR.pdf",
    quantity: "262 NOS",
  },
  {
    name: "BNC(M) TO BNC(M) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_M_BNC_M_ADAPTOR.pdf",
    quantity: "343 NOS",
  },
  {
    name: "BNC(M) TO F(F) ADAPTOR 3GHZ",
    link: "https://www.rfconnector.in/catalog/Connector_Adaptor/Coaxial_Adaptor/BNC_M_to_F_F.pdf",
    quantity: "101 NOS",
  },
  {
    name: "BNC(M) TO MINI UHF (F) ADAPTOR 3GHZ",
    link: "https://www.rfconnector.in/catalog/Connector_Adaptor/Coaxial_Adaptor/BNC_to_BNC_Adaptor/BNC_M_MINI_UHF_F_ADAPTOR.pdf",
    quantity: "95 NOS",
  },
  {
    name: "BNC(M) TO N(F) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/N_F_BNC_M_Adaptor.pdf",
    quantity: "108 NOS",
  },
  {
    name: "BNC(M) TO N(M) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/N_M_BNC_M_Adaptor.pdf",
    quantity: "374 NOS",
  },
  {
    name: "BNC(M) TO SMA(F) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_M_SMA_F_ADAPTOR.pdf",
    quantity: "143 NOS",
  },
  {
    name: "BNC(M) TO SMA(M) ADAPTOR 3GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/BNC_M_SMA_M_ST_ADAPTOR.pdf",
    quantity: "177 NOS",
  },
  {
    name: "BNC(M) TO TNC(F) ADAPTOR 3GHZ",
    link: "https://www.rfconnector.in/catalog/Connector_Adaptor/Coaxial_Adaptor/BNC_M_TNC_F_ADAPTOR.pdf",
    quantity: "375 NOS",
  },
  {
    name: "BNC(M) TO UHF(F) ADAPTOR 3GHZ",
    link: "https://www.rfconnector.in/catalog/Connector_Adaptor/Coaxial_Adaptor/BNC_to_BNC_Adaptor/BNC_M_UHF_F_ADAPTOR.pdf",
    quantity: "2964 NOS",
  },
  {
    name: "DIN(F) TO DIN(F) ADAPTOR 7.5GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/DIN_F_DIN_F_ADAPTOR.pdf",
    quantity: "73 NOS",
  },
  {
    name: "DIN(F) TO N(F) ADAPTOR 7.5GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/DIN_F_N_F.pdf",
    quantity: "815 NOS",
  },
  {
    name: "DIN(F) TO N(M) ADAPTOR 7.5GHZ",
    link: "http://www.rfconnector.in/catalog/adaptor/DIN_F_to_N_M.pdf",
    quantity: "395 NOS",
  },
];

const ProductStock = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">RF Adaptors Stock</h1>

      <div className="overflow-x-auto shadow rounded-xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="text-left px-4 py-3">Product Name</th>
              <th className="text-left px-4 py-3">Available Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {productData.map((item, index) => (
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
                <td className="px-4 py-3 font-semibold">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ProductStock;
