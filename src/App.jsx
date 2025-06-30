// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './App.css';

// // Pages
// import Home from './pages/Home';
// import Contactus from './pages/Contactus';
// // import SubHome2 from './pages/SubHome2';
// // import SubHome3 from './pages/SubHome3';

// import Aboutus from './pages/Aboutus';
// import Productshowroom from './pages/Productshowroom';
// // import OurStory from './pages/OurStory';
// // import OurTeam from './pages/OurTeam';
// // import OurValues from './pages/OurValues';

// // import ContactUs from './pages/ContactUs';
// // import Email from './pages/Email';
// // import Phone from './pages/Phone';
// // import Location from './pages/Location';

// // import Career from './pages/Career';
// // import Openings from './pages/Openings';
// // import Internships from './pages/Internships';
// // import Culture from './pages/Culture';

// // import Feedback from './pages/Feedback';
// // import CustomerReviews from './pages/CustomerReviews';
// // import Suggestions from './pages/Suggestions';
// // import Support from './pages/Support';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />
 
//         {/* <Route path="/sub-home-2" element={<SubHome2 />} />
//         <Route path="/sub-home-3" element={<SubHome3 />} /> */}

 
//         <Route path="/about-us" element={<Aboutus />} />
//         <Route path="/product-showroom" element={<Productshowroom />} />
//         {/* <Route path="/our-story" element={<OurStory />} />
//         <Route path="/our-team" element={<OurTeam />} />
//         <Route path="/our-values" element={<OurValues />} /> */}


//         <Route path="/contact-us" element={<Contactus />} />
//         {/* <Route path="/email" element={<Email />} />
//         <Route path="/phone" element={<Phone />} />
//         <Route path="/location" element={<Location />} />

  
//         <Route path="/career" element={<Career />} />
//         <Route path="/openings" element={<Openings />} />
//         <Route path="/internships" element={<Internships />} />
//         <Route path="/culture" element={<Culture />} />

//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/customer-reviews" element={<CustomerReviews />} />
//         <Route path="/suggestions" element={<Suggestions />} />
//         <Route path="/support" element={<Support />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

// Pages
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Productshowroom from './pages/Productshowroom';
import ProductDetail from './pages/ProductDetail';
import DefenceandAerospace from './pages/DefenceandAerospace';
import VideoGallery from './pages/VideoGallery'; 
import ProductCatalogue from './pages/ProductCatalogue';
import LiionBattery from './pages/LiionBattery';
import Certificates from './pages/Certificates';
import ImageGallery from './pages/ImageGallery';
import Products from './pages/Products'
import ProductStock from './pages/ProductStock.jsx'
import HotProducts from "./pages/HotProducts.jsx" // ✅ import this page
// ✅ import this page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/-hot-products" element={<HotProducts />} />
        <Route path="/product-stock" element={<ProductStock />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/product-showroom" element={<Productshowroom />} />
        <Route path="/defence-and-aerospace" element={<DefenceandAerospace />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
        <Route path="/li-ion-battery" element={<LiionBattery />} />

        {/* ✅ Dynamic Product Detail Page */}
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
