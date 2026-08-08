import React from 'react';
import ProductCatalogue from './ProductCatalogue';

const belApprovedProducts = [
  { name: 'series approved as on 08 JAN 2026', link: '/BEL Approved Products/STK- series approved as on 08 JAN 2026.pdf' },
  { name: 'Synergy_approved_parts_in_BEL_as_onI_27_JUL_2026', link: '/BEL Approved Products/Synergy_approved_parts_in_BEL_as_onI_27_JUL_2026.pdf' }







];

const belDiagramImages = [
  { title: 'CON CO-AXIAL 50 OHMS-1', src: '/BEL Approved Products/DIAGRAM IMAGE/CON CO-AXIAL 50 OHMS-1.webp' },
  { title: '290-02G', src: '/BEL Approved Products/DIAGRAM IMAGE/290-02G.jpg' },
  { title: '290-06G', src: '/BEL Approved Products/DIAGRAM IMAGE/290-06G.jpg' },
  { title: '290-07G', src: '/BEL Approved Products/DIAGRAM IMAGE/290-07G.jpg' },
  { title: '490-00G', src: '/BEL Approved Products/DIAGRAM IMAGE/490-00G.jpg' },
  { title: '2HOLESFLANGEJACKRECEPTACLE WITHSHOULDERCONTACT', src: '/BEL Approved Products/DIAGRAM IMAGE/2HOLESFLANGEJACKRECEPTACLE WITHSHOULDERCONTACT.jpg' }











];

const BelApprovedProducts = () => (
  <ProductCatalogue
    pageTitle="BEL Approved Products"
    pageDescription="Browse approved BEL product catalogues and downloadable documents."
    metaTitle="BEL Approved Products | Synergy Telecom"
    routeBase="/bel-approved-products"
    links={belApprovedProducts}
    backLabel="Back to BEL Products"
    diagramImages={belDiagramImages}
    diagramTitle="BEL Diagram Images"
    diagramDescription="View the BEL-approved diagram images available for these documents."
  />
);

export default BelApprovedProducts;
