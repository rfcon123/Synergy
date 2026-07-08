import React from 'react';
import ProductCatalogue from './ProductCatalogue';

const belApprovedProducts = [
  { name: 'BEL Approved Product 1', link: '/pdfs/ST- Antenna Catalog.pdf' },
  { name: 'BEL Approved Product 2', link: '/pdfs/ST-Technology  product catalog6.9.pdf' },
  { name: 'BEL Approved Product 3', link: '/pdfs/HIGH PERFORMANCE DISH ANTENNA.pdf' },
  { name: 'BEL Approved Product 4', link: '/pdfs/Power supply.pdf' },
  { name: 'BEL Approved Product 5', link: '/pdfs/RF COAXIAL.pdf' },
  { name: 'BEL Approved Product 6', link: '/pdfs/5G INDOOR DIRECTIONAL PANEL ANTENNA.pdf' },
];

const BelApprovedProducts = () => (
  <ProductCatalogue
    pageTitle="BEL Approved Products"
    pageDescription="Browse approved BEL product catalogues and downloadable documents."
    metaTitle="BEL Approved Products | Synergy Telecom"
    routeBase="/bel-approved-products"
    links={belApprovedProducts}
    backLabel="Back to BEL Products"
  />
);

export default BelApprovedProducts;
