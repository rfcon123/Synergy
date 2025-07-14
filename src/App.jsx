import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Helmet } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Productshowroom from './pages/Productshowroom';
import ProductDetail from './pages/ProductDetail';
import DefenceandAerospace from './pages/DefenceandAerospace';
import VideoGallery from './pages/VideoGallery';
import ProductCatalogue from './pages/ProductCatalogue';
import LiionBattery from './pages/LiionBattery';
import Certificates from './pages/Certificates';
import ImageGallery from './pages/ImageGallery';
import Products from './pages/Products';
import ProductStock from './pages/ProductStock';
import HotProducts from './pages/HotProducts';
import Career from './pages/Career';
import Productpricelist from './pages/Productspricelist';
import Groupproductdatasheet from './pages/Groupproductdatasheet';
import Feedback from './pages/Feedback' 
import Cablecreator from './pages/Cablecreator'; 

import Notfound from './pages/Notfound'; 

function App() {
  return (

    <Router>
       <Helmet>
        <title>Panacea Telecom</title>
        <meta name="description" content="Welcome to Panacea Telecom's official website." />
        <meta name="keywords" content="RF components, telecom solutions, Panacea Synergy" />
        <meta name="author" content="Panacea Telecom" />
      </Helmet>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about-us" element={<Aboutus />} />

        {/* Contact */}
        <Route path="/contact-us" element={<Contactus />} />

        {/* Products */}
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/product-showroom" element={<Productshowroom />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetail />} /> {/* ✅ Dynamic Product Detail Page */}
        <Route path="/product-stock" element={<ProductStock />} />
        <Route path="/-hot-products" element={<HotProducts />} />
        <Route path="/product-price-list" element={<Productpricelist />} />
        <Route path="/group-product-data-sheet" element={<Groupproductdatasheet />} /> {/* ✅ Product Price List Page */}

        {/* Categories */}
        <Route path="/defence-and-aerospace" element={<DefenceandAerospace />} />
        <Route path="/li-ion-battery" element={<LiionBattery />} />

        {/* Resources */}
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />

        {/* Careers */}
        <Route path="/career" element={<Career />} /> 
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/customer-feedback" element={<Feedback />} /> {/* ✅ Career Page */}

        <Route path="*" element={<Notfound />} />
        <Route path="/cable-creator" element={<Cablecreator />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
