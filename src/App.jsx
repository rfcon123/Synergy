import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

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

        {/* Old Pages (Currently Commented) */}
        {/*
        <Route path="/sub-home-2" element={<SubHome2 />} />
        <Route path="/sub-home-3" element={<SubHome3 />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-values" element={<OurValues />} />
        <Route path="/email" element={<Email />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/location" element={<Location />} />
        <Route path="/openings" element={<Openings />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/customer-reviews" element={<CustomerReviews />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/support" element={<Support />} />
        */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
