import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsWithSlugs as productsData } from './Productshowroom';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return <div className="text-center text-red-500 mt-20 text-xl">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
        <h1 className="text-2xl font-bold text-blue-700 mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">
          Description coming soon. This page is a template for product detail. You can add more fields like datasheets, specs, price, etc.
        </p>
        <Link to="/product-showroom" className="text-blue-600 hover:underline">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
