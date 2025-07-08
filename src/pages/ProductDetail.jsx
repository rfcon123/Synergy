import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsWithSlugs } from './Productshowroom';
import productLinks from './Productlinks';
import StyledButton from '../components/StyledButton';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsWithSlugs.find(p => p.slug === slug);
  const allLinks = productLinks[slug] || [];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredLinks = allLinks.filter(linkObj =>
    linkObj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    linkObj.link.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!product) {
    return <div className="p-10 text-center text-red-600">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Centered Product Name */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-10">
          {product.name}
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </h1>

        {/* Content Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0 text-center md:text-left w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md mx-auto rounded-xl shadow-lg object-contain mb-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x300?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Right: Description and Link Search */}
          <div className="flex-1">
            <p className="text-gray-700 mb-6">
              Explore all technical documents, datasheets, and installation resources related to <strong>{product.name}</strong>. You can also get in touch with us for bulk orders, procurement assistance, or customized technical advice.
            </p>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search product links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />

            {/* Product Links */}
            <div className="max-h-96 overflow-y-auto pr-2">
              {filteredLinks.length > 0 ? (
                <ul className="space-y-3">
                  {filteredLinks.map((linkObj, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 border border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition rounded-lg px-4 py-3"
                    >
                      <a
                        href={linkObj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-medium hover:underline break-all"
                      >
                        {linkObj.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No links available for this product.</p>
              )}
            </div>

            <div className="mt-10 text-center">
              <Link to="/product-showroom" className="text-blue-500 hover:underline">← Back to Showroom</Link>
            </div>
          </div>
        </div>

        {/* CTA Button Below the Section - Centered Horizontally */}
        <div className="mt-16 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interested in purchasing this product?</h2>
          <StyledButton
            label="Get a Quote or Make an Inquiry"
            icon={true}
            onClick={() => window.location.href = 'mailto:sales@synergytelecom.com?subject=Product Inquiry: ' + product.name}
          />
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            Let us know your quantity requirements, delivery location, and any technical specs you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
