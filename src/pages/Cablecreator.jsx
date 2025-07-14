import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

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

  // Enhanced getFieldClass for a bold, edgy look
  const getFieldClass = (invalid) =>
    `w-full px-5 py-3 rounded-lg border-2 transition duration-300 outline-none text-gray-100 placeholder-gray-400
    ${invalid ? 'border-red-600 bg-red-950 focus:ring-red-700' : 'border-gray-700 bg-gray-800 focus:ring-blue-600 focus:border-blue-700'}
    focus:shadow-lg focus:shadow-blue-900`;

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
    <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out w-full flex flex-col items-center border border-gray-700 transform hover:-translate-y-2">
      <h2 className="text-2xl font-extrabold mb-6 text-blue-400 tracking-wider uppercase border-b-2 border-blue-600 pb-3 w-full text-center">
        {label}
      </h2>

      {label === 'End 2 Connector' && (
        <button
          onClick={() => setConnector({ ...connectorA })}
          className="mb-6 px-6 py-2 text-sm bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-600"
        >
          <i className="fas fa-copy mr-2"></i> Copy Connector 1
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
            className={`mb-4 ${getFieldClass(isEmpty(connector[key]))} appearance-none cursor-pointer`}
          >
            <option value="">Select {key.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</option>
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
        className={`mt-4 ${getFieldClass(isEmpty(connector.name))} appearance-none cursor-pointer`}
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
    <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out w-full flex flex-col items-center border border-gray-700 transform hover:-translate-y-2">
      <h2 className="text-2xl font-extrabold mb-6 text-blue-400 tracking-wider uppercase border-b-2 border-blue-600 pb-3 w-full text-center">
        Cable
      </h2>
      {Object.keys(cableOptions.cables[0])
        .filter((key) =>
          !['pricePerMeter', 'code', 'type', 'compatibleConnectors', 'attenuationPerMeter'].includes(
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
            className={`mb-4 ${getFieldClass(isEmpty(cable[key]))} appearance-none cursor-pointer`}
          >
            <option value="">Select {key.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</option>
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
        className={`mb-4 ${getFieldClass(isEmpty(cable.type))} appearance-none cursor-pointer`}
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
        className={`${getFieldClass(isEmpty(length))} mt-2`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-black py-16 px-4 font-sans antialiased text-gray-100">

<Helmet>
  <title>Custom RF Cable Assembly Configurator | Panaceatic Telecom Synergy</title>
  <meta
    name="description"
    content="Use our smart cable configurator to generate part numbers and pricing for custom RF cable assemblies using real-world connector and cable data."
  />
  <meta
    name="keywords"
    content="RF cable configurator, custom RF assembly, RF connector tool, cable part number generator, SMA N BNC cable builder"
  />
  <meta property="og:title" content="Custom RF Cable Assembly Configurator | Panacea Telecom Synergy" />
  <meta
    property="og:description"
    content="Instantly generate part numbers and prices for your RF cable assemblies. Choose connectors, cable type, and length with ease."
  />
  <meta property="og:url" content="https://panaceaticsynergy.com/cable-creator" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://panaceaticsynergy.com/meta/cable-configurator-preview.png" />
</Helmet>


      <h1 className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
        Custom RF Cable Assembly <span className="text-blue-500">Configurator</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {renderConnectorFields(connectorA, setConnectorA, 'End 1 Connector')}
        {renderCableFields()}
        {renderConnectorFields(connectorB, setConnectorB, 'End 2 Connector')}
      </div>

      <div className="flex justify-center mt-16">
       <button
          onClick={handleSubmit}
          className="
            cursor-pointer
            border-4 border-green-700
            bg-green-600
            text-white
            font-semibold
            px-8 py-4
            rounded-xl
            shadow-md
            select-none
            transition-all duration-150 ease-in-out
            hover:bg-green-700
            hover:shadow-lg
            active:translate-y-[6px]
            active:mb-[6px]
            active:shadow-sm
          "
        >
          <span className="text-lg tracking-wide">Generate Part Number & Price</span>
        </button>
      </div>

      {result && (
        <div className="mt-16 mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-3xl border border-gray-700 animate-fade-in-up">
          <h3 className="text-3xl font-extrabold mb-6 text-blue-400 border-b-2 border-blue-600 pb-3 uppercase tracking-wide">
            Configuration Summary
          </h3>
          <p className="mb-3 text-lg">
            <strong className="text-gray-300">Part Number:</strong>{' '}
            <span className="text-green-400 font-mono break-words">{result.partNumber}</span>
          </p>
          <p className="mb-4 text-lg">
            <strong className="text-gray-300">Estimated Price:</strong>{' '}
            <span className="text-green-400 font-bold text-2xl">R {result.price}</span>
          </p>
          <hr className="my-6 border-gray-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-base">
            <p><strong>Cable Code:</strong> <span className="font-medium">{cable.code}</span></p>
            <p><strong>Connector A:</strong> <span className="font-medium">{connectorA.code} ({connectorA.name})</span></p>
            <p><strong>Connector B:</strong> <span className="font-medium">{connectorB.code} ({connectorB.name})</span></p>
            <p><strong>Impedance:</strong> <span className="font-medium">{cable.impedance} Ohm</span></p>
            <p><strong>Shields:</strong> <span className="font-medium">{cable.shields}</span></p>
            <p><strong>Flex Type:</strong> <span className="font-medium">{cable.flexType}</span></p>
            <p><strong>Color:</strong> <span className="font-medium">{cable.color}</span></p>
            <p><strong>Length:</strong> <span className="font-medium">{length} meters</span></p>
            <p><strong>Attenuation per Meter:</strong> <span className="font-medium">{cable.attenuationPerMeter} dB/m</span></p>
            <p><strong>Total Attenuation:</strong> <span className="font-medium">{(cable.attenuationPerMeter * length).toFixed(2)} dB</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cablecreator;