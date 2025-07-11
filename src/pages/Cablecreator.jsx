import React, { useState, useEffect } from "react";

const cableOptions = {
  cables: [
    { type: "RG142", code: "142", pricePerMeter: 4.5, compatibleConnectors: ["SMA Male", "N Male", "BNC Male"], impedance: "50", maxFrequency: "3000", maxLoss: "10.5", flexType: "Flexible", shields: "Double", color: "Silver", attenuationPerMeter: 0.910 },
    { type: "RG141", code: "141", pricePerMeter: 4.0, compatibleConnectors: ["SMA Male", "BNC Male"], impedance: "50", maxFrequency: "2500", maxLoss: "11.2", flexType: "Flexible", shields: "Double", color: "Silver", attenuationPerMeter: 0.910 },
    { type: "RG086", code: "086", pricePerMeter: 5.0, compatibleConnectors: ["MCX Male", "UFL Plug"], impedance: "50", maxFrequency: "6000", maxLoss: "18.0", flexType: "Ultra Thin", shields: "Single", color: "Gray", attenuationPerMeter: 0.915 },
    { type: "RG250", code: "250", pricePerMeter: 5.5, compatibleConnectors: ["SMP Male", "MCX Female"], impedance: "50", maxFrequency: "8000", maxLoss: "7.8", flexType: "Semi-Rigid", shields: "Double", color: "Copper", attenuationPerMeter: 0.03 },
    { type: "RG316", code: "316", pricePerMeter: 3.5, compatibleConnectors: ["SMA Male", "BNC Female", "UFL Plug"], impedance: "50", maxFrequency: "3000", maxLoss: "16.5", flexType: "Flexible", shields: "Single", color: "Beige", attenuationPerMeter: 0.2 },
  ],
  connectors: [
    { name: "SMA Male", code: "SM", price: 3, gender: "Male", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "SMA Female", code: "SF", price: 3, gender: "Female", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "N Male", code: "NM", price: 4, gender: "Male", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "N Female", code: "NF", price: 4, gender: "Female", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "BNC Male", code: "BM", price: 2.5, gender: "Male", body: "Right Angle", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "BNC Female", code: "BF", price: 2.5, gender: "Female", body: "Right Angle", polarity: "Standard", mounting: "None", attachment: "Crimp", impedance: "50" },
    { name: "MCX Male", code: "MM", price: 2, gender: "Male", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Solder", impedance: "50" },
    { name: "MCX Female", code: "MF", price: 2, gender: "Female", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Solder", impedance: "50" },
    { name: "UFL Plug", code: "UP", price: 1.5, gender: "Plug", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Snap-on", impedance: "50" },
    { name: "UFL Jack", code: "UJ", price: 1.5, gender: "Jack", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Snap-on", impedance: "50" },
    { name: "SMP Male", code: "SPM", price: 4, gender: "Male", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Push-on", impedance: "50" },
    { name: "SMP Female", code: "SPF", price: 4, gender: "Female", body: "Straight", polarity: "Standard", mounting: "None", attachment: "Push-on", impedance: "50" },
  ]
};

function Cablecreator() {
  const [connectorA, setConnectorA] = useState({});
  const [connectorB, setConnectorB] = useState({});
  const [cable, setCable] = useState({});
  const [length, setLength] = useState('');
  const [result, setResult] = useState(null);
  const [filteredCables, setFilteredCables] = useState(cableOptions.cables);

  useEffect(() => {
    if (connectorA.name && connectorB.name) {
      const compatible = cableOptions.cables.filter(
        (c) =>
          c.compatibleConnectors.includes(connectorA.name) &&
          c.compatibleConnectors.includes(connectorB.name)
      );
      setFilteredCables(compatible);
    } else {
      setFilteredCables(cableOptions.cables);
    }
  }, [connectorA, connectorB]);

  const isEmpty = (val) => !val || val.toString().trim() === '';

  const getFieldClass = (invalid) =>
    `w-full px-4 py-2 rounded-md border transition duration-300 outline-none
      ${invalid ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'}
     focus:ring-2 focus:ring-blue-400 focus:border-blue-500`;

  const handleSubmit = () => {
    if (cable.code && connectorA.code && connectorB.code && length) {
      const partNumber = `EZ-${cable.code}-${connectorA.code}-${connectorB.code}-${cable.impedance}OHM-${cable.shields}SH-${cable.flexType.toUpperCase()}-${cable.color.toUpperCase()}-${length}M`;
      const price =
        cable.pricePerMeter * parseFloat(length) +
        connectorA.price +
        connectorB.price;
      setResult({ partNumber, price: price.toFixed(2) });
    } else {
      setResult(null);
    }
  };

  const renderConnectorFields = (connector, setConnector, label) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition w-full flex flex-col items-center border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">{label}</h2>

      {label === 'End 2 Connector' && (
        <button
          onClick={() => setConnector({ ...connectorA })}
          className="mb-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Copy Connector 1
        </button>
      )}

      {Object.keys(cableOptions.connectors[0])
        .filter((key) => !['price', 'code', 'name'].includes(key))
        .map((key) => (
          <select
            key={key}
            value={connector[key] || ''}
            onChange={(e) =>
              setConnector((prev) => ({ ...prev, [key]: e.target.value }))
            }
            className={`mb-3 ${getFieldClass(isEmpty(connector[key]))}`}
          >
            <option value="">Select {key}</option>
            {[...new Set(cableOptions.connectors.map((c) => c[key]))].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        ))}

      <select
        value={connector.name || ''}
        onChange={(e) => {
          const selected = cableOptions.connectors.find(
            (c) => c.name === e.target.value
          );
          setConnector(selected || {});
        }}
        className={`mt-2 ${getFieldClass(isEmpty(connector.name))}`}
      >
        <option value="">Select Connector Type</option>
        {cableOptions.connectors.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );

  const renderCableFields = () => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition w-full flex flex-col items-center border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Cable</h2>
      {Object.keys(cableOptions.cables[0])
        .filter((key) =>
          !['pricePerMeter', 'code', 'type', 'compatibleConnectors'].includes(
            key
          )
        )
        .map((key) => (
          <select
            key={key}
            value={cable[key] || ''}
            onChange={(e) =>
              setCable((prev) => ({ ...prev, [key]: e.target.value }))
            }
            className={`mb-3 ${getFieldClass(isEmpty(cable[key]))}`}
          >
            <option value="">Select {key}</option>
            {[...new Set(cableOptions.cables.map((c) => c[key]))].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        ))}

      <select
        value={cable.type || ''}
        onChange={(e) => {
          const selected = filteredCables.find(
            (c) => c.type === e.target.value
          );
          setCable(selected || {});
        }}
        className={`mb-3 ${getFieldClass(isEmpty(cable.type))}`}
      >
        <option value="">Select Cable Type</option>
        {filteredCables.map((c) => (
          <option key={c.type} value={c.type}>
            {c.type}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Length (meters)"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className={`${getFieldClass(isEmpty(length))}`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-4 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-900">
        Custom RF Cable Assembly <span className="text-blue-600">Configurator</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {renderConnectorFields(connectorA, setConnectorA, 'End 1 Connector')}
        {renderCableFields()}
        {renderConnectorFields(connectorB, setConnectorB, 'End 2 Connector')}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition"
        >
          Generate Part Number & Price
        </button>
      </div>

      {result && (
        <div className="mt-12 mx-auto bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Configuration Summary</h3>
          <p className="mb-2"><strong>Part Number:</strong> {result.partNumber}</p>
          <p className="mb-2"><strong>Estimated Price:</strong> R {result.price}</p>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
            <p><strong>Cable Code:</strong> {cable.code}</p>
            <p><strong>Connector A:</strong> {connectorA.code} ({connectorA.name})</p>
            <p><strong>Connector B:</strong> {connectorB.code} ({connectorB.name})</p>
            <p><strong>Impedance:</strong> {cable.impedance} Ohm</p>
            <p><strong>Shields:</strong> {cable.shields}</p>
            <p><strong>Flex Type:</strong> {cable.flexType}</p>
            <p><strong>Color:</strong> {cable.color}</p>
            <p><strong>Length:</strong> {length} meters</p>
            <p><strong>Attenuation per Meter:</strong> {cable.attenuationPerMeter} dB/m</p>
            <p><strong>Total Attenuation:</strong> {(cable.attenuationPerMeter * length).toFixed(2)} dB</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cablecreator;