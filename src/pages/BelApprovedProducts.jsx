import React from 'react';
import ProductCatalogue from './ProductCatalogue';

const belApprovedProducts = [
  { name: 'series approved as on 08 JAN 2026', link: '/BEL Approved Products/STK- series approved as on 08 JAN 2026.pdf' },







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
