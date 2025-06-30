import React from 'react';

const hotProductsData = [
  {
    id: 1,
    name: 'High Gain RF Antenna',
    description: 'Boost your signal with our premium RF antenna for telecom infrastructure.',
    image: 'https://via.placeholder.com/300x200.png?text=High+Gain+RF+Antenna',
  },
  {
    id: 2,
    name: 'Solar Power Unit',
    description: 'Efficient solar solution for powering remote telecom sites and base stations.',
    image: 'https://via.placeholder.com/300x200.png?text=Solar+Power+Unit',
  },
  {
    id: 3,
    name: 'Microwave Dish Antenna',
    description: 'Compact and weather-resistant, ideal for long-distance point-to-point links.',
    image: 'https://via.placeholder.com/300x200.png?text=Microwave+Dish+Antenna',
  },
  {
    id: 4,
    name: 'Li-ion Battery Pack',
    description: 'Long-lasting battery backup for uninterrupted telecom operations.',
    image: 'https://via.placeholder.com/300x200.png?text=Li-ion+Battery+Pack',
  },
];

const HotProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Heading */}
      <h1 className="text-4xl font-extrabold text-red-600 text-center mb-10 relative">
        🔥 Hot Products
        <span className="block h-1 w-24 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mt-3 rounded-full"></span>
      </h1>

      {/* Grid of Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotProductsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
              <button
                className="mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white text-sm font-semibold py-2 px-4 rounded hover:scale-105 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotProducts;
