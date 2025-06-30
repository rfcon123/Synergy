import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample product data with reliable placeholder images
const productsData = [
  { name: "RF Cable", image: "https://placehold.co/600x400?text=RF+Cable" },
  { name: "Jumper Cable", image: "https://placehold.co/600x400?text=Jumper+Cable" },
  { name: "High Freq Cable", image: "https://placehold.co/600x400?text=High+Freq+Cable" },
  { name: "FAKRA CONNECTOR", image: "https://placehold.co/600x400?text=FAKRA+CONNECTOR" },
  { name: "5G PRODUCT", image: "https://placehold.co/600x400?text=5G+PRODUCT" },
  { name: "SFP TRANSCEIVER", image: "https://placehold.co/600x400?text=SFP+TRANSCEIVER" },
  { name: "Helical Antenna", image: "https://placehold.co/600x400?text=Helical+Antenna" },
  { name: "HF AND VHF ANTENNA", image: "https://placehold.co/600x400?text=HF+VHF+ANTENNA" },
  { name: "FME CONNECTOR", image: "https://placehold.co/600x400?text=FME+CONNECTOR" },
  { name: "Patanjali Solar Products", image: "https://placehold.co/600x400?text=Solar+Products" },
  { name: "High Frequency Termination", image: "https://placehold.co/600x400?text=HF+Termination" },
  { name: "TETRA BAND PRODUCTS", image: "https://placehold.co/600x400?text=TETRA+Products" },
  { name: "Cable Assembly", image: "https://placehold.co/600x400?text=Cable+Assembly" },
  { name: "SOLAR TRACKING SYSTEM", image: "https://placehold.co/600x400?text=Solar+Tracker" },
  { name: "ELCOM SOLAR PRODUCT", image: "https://placehold.co/600x400?text=ELCOM+Solar" },
  { name: "Surveillance Tools", image: "https://placehold.co/600x400?text=Surveillance" },
  { name: "TELESCOPIC MAST", image: "https://placehold.co/600x400?text=Telescopic+Mast" },
  { name: "COMBINER MX PRODUCT", image: "https://placehold.co/600x400?text=Combiner+MX" },
  { name: "Amplifier and combiner", image: "https://placehold.co/600x400?text=Amplifier" },
  { name: "RF Coupler", image: "https://placehold.co/600x400?text=RF+Coupler" },
  { name: "Roxtec Comseal BTS", image: "https://placehold.co/600x400?text=Roxtec+BTS" },
  { name: "VoIP Phone", image: "https://placehold.co/600x400?text=VoIP+Phone" },
  { name: "RF Adapter", image: "https://placehold.co/600x400?text=RF+Adapter" },
  { name: "Krone High Frequency Adapter", image: "https://placehold.co/600x400?text=Krone+HF" },
  { name: "UY Connector", image: "https://placehold.co/600x400?text=UY+Connector" },
  { name: "Andrew cutter", image: "https://placehold.co/600x400?text=Andrew+Cutter" },
  { name: "RF Attenuator", image: "https://placehold.co/600x400?text=RF+Attenuator" },
  { name: "High Freq Attenuator", image: "https://placehold.co/600x400?text=HF+Attenuator" },
  { name: "Solar Product", image: "https://placehold.co/600x400?text=Solar+Product" },
  { name: "RF Connector", image: "https://placehold.co/600x400?text=RF+Connector" },
  { name: "BMA CONNECTOR", image: "https://placehold.co/600x400?text=BMA+Connector" },
  { name: "BNC CONNECTOR", image: "https://placehold.co/600x400?text=BNC+Connector" },
  { name: "BQ CONNECTOR", image: "https://placehold.co/600x400?text=BQ+Connector" },
  { name: "C4 CONNECTOR", image: "https://placehold.co/600x400?text=C4+Connector" },
  { name: "C CONNECTOR", image: "https://placehold.co/600x400?text=C+Connector" },
  { name: "CRC9 CONNECTOR", image: "https://placehold.co/600x400?text=CRC9+Connector" },
  { name: "DIN CONNECTOR", image: "https://placehold.co/600x400?text=DIN+Connector" },
  { name: "4.3 - 1.0 CONNECTOR", image: "https://placehold.co/600x400?text=4.3-1.0+Connector" },
  { name: "F TYPE CONNECTOR", image: "https://placehold.co/600x400?text=F+Type+Connector" },
  { name: "HN CONNECTOR", image: "https://placehold.co/600x400?text=HN+Connector" },
  { name: "KMX3 CONNECTOR", image: "https://placehold.co/600x400?text=KMX3+Connector" },
  { name: "L9 CONNECTOR", image: "https://placehold.co/600x400?text=L9+Connector" },
  { name: "M4 CONNECTOR", image: "https://placehold.co/600x400?text=M4+Connector" },
  { name: "MCX CONNECTOR", image: "https://placehold.co/600x400?text=MCX+Connector" },
  { name: "MMCX CONNECTOR", image: "https://placehold.co/600x400?text=MMCX+Connector" },
  { name: "N TYPE CONNECTOR", image: "https://placehold.co/600x400?text=N+Type+Connector" },
  { name: "QMA CONNECTOR", image: "https://placehold.co/600x400?text=QMA+Connector" },
  { name: "QN CONNECTOR", image: "https://placehold.co/600x400?text=QN+Connector" },
  { name: "SAA CONNECTOR", image: "https://placehold.co/600x400?text=SAA+Connector" },
  { name: "SMA CONNECTOR", image: "https://placehold.co/600x400?text=SMA+Connector" },
  { name: "SMB CONNECTOR", image: "https://placehold.co/600x400?text=SMB+Connector" },
  { name: "SMC CONNECTOR", image: "https://placehold.co/600x400?text=SMC+Connector" },
  { name: "SMP CONNECTOR", image: "https://placehold.co/600x400?text=SMP+Connector" },
  { name: "SMZ CONNECTOR", image: "https://placehold.co/600x400?text=SMZ+Connector" },
  { name: "SSMB CONNECTOR", image: "https://placehold.co/600x400?text=SSMB+Connector" },
  { name: "TNC CONNECTOR", image: "https://placehold.co/600x400?text=TNC+Connector" },
  { name: "TRIAXIAL CONNECTOR", image: "https://placehold.co/600x400?text=Triaxial+Connector" },
  { name: "TQ CONNECTOR", image: "https://placehold.co/600x400?text=TQ+Connector" },
  { name: "UHF CONNECTOR", image: "https://placehold.co/600x400?text=UHF+Connector" },
  { name: "High Freq Connector", image: "https://placehold.co/600x400?text=HF+Connector" },
  { name: "1.85mm Connector", image: "https://placehold.co/600x400?text=1.85mm+Connector" },
  { name: "2.4mm Connector", image: "https://placehold.co/600x400?text=2.4mm+Connector" },
  { name: "2.92mm Connectors", image: "https://placehold.co/600x400?text=2.92mm+Connector" },
  { name: "3.5mm Connector", image: "https://placehold.co/600x400?text=3.5mm+Connector" },
  { name: "CIRCULAR CONNECTOR", image: "https://placehold.co/600x400?text=Circular+Connector" },
  { name: "All Connector Catalogue", image: "https://placehold.co/600x400?text=Connector+Catalog" },
  { name: "Antenna Horn Antenna", image: "https://placehold.co/600x400?text=Horn+Antenna" },
  { name: "Balun", image: "https://placehold.co/600x400?text=Balun" },
  { name: "Beryllium Copper", image: "https://placehold.co/600x400?text=Beryllium+Copper" },
  { name: "Bias Tee", image: "https://placehold.co/600x400?text=Bias+Tee" },
  { name: "Broadcast Air Gap", image: "https://placehold.co/600x400?text=Air+Gap" },
  { name: "Cables Catalogue", image: "https://placehold.co/600x400?text=Cables+Catalog" },
  { name: "Cable Lugs", image: "https://placehold.co/600x400?text=Cable+Lugs" },
  { name: "Cable Tie", image: "https://placehold.co/600x400?text=Cable+Tie" },
  { name: "Network Connector", image: "https://placehold.co/600x400?text=Network+Connector" },
  { name: "DC/Power Cable", image: "https://placehold.co/600x400?text=DC+Cable" },
  { name: "DC Block", image: "https://placehold.co/600x400?text=DC+Block" },
  { name: "DC TO DC CONVERTER", image: "https://placehold.co/600x400?text=DC+Converter" },
  { name: "Diplexer", image: "https://placehold.co/600x400?text=Diplexer" },
  { name: "Dummy load", image: "https://placehold.co/600x400?text=Dummy+Load" },
  { name: "EMI/EMC Shielding Product", image: "https://placehold.co/600x400?text=EMI+Shielding" },
  { name: "ENVIRONMENTAL CHAMBER", image: "https://placehold.co/600x400?text=Env+Chamber" },
  { name: "Feeder Clamp", image: "https://placehold.co/600x400?text=Feeder+Clamp" },
  { name: "Feed Thru", image: "https://placehold.co/600x400?text=Feed+Thru" },
  { name: "Flange Connector", image: "https://placehold.co/600x400?text=Flange+Connector" },
  { name: "GPS/GPS Module", image: "https://placehold.co/600x400?text=GPS+Module" },
  { name: "High Frequency Product", image: "https://placehold.co/600x400?text=HF+Product" },
  { name: "Hoisting Grip", image: "https://placehold.co/600x400?text=Hoisting+Grip" },
  { name: "IBS Product", image: "https://placehold.co/600x400?text=IBS+Product" },
  { name: "Installation Kit", image: "https://placehold.co/600x400?text=Installation+Kit" },
  { name: "Microwave Component", image: "https://placehold.co/600x400?text=Microwave" },
  { name: "MILGRADE CABLE", image: "https://placehold.co/600x400?text=MIL+Cable" },
  { name: "Optical Fiber Products", image: "https://placehold.co/600x400?text=Fiber+Optic" },
  { name: "Proskit Toolkits", image: "https://placehold.co/600x400?text=Proskit+Tools" },
  { name: "Protective Cap", image: "https://placehold.co/600x400?text=Protective+Cap" },
  { name: "Rechargeble Battery", image: "https://placehold.co/600x400?text=Battery" },
  { name: "RF Switch", image: "https://placehold.co/600x400?text=RF+Switch" },
  { name: "Shield Box", image: "https://placehold.co/600x400?text=Shield+Box" },
  { name: "Splitter", image: "https://placehold.co/600x400?text=Splitter" },
  { name: "Shrinkable Tube", image: "https://placehold.co/600x400?text=Shrink+Tube" },
  { name: "Surge Arrester", image: "https://placehold.co/600x400?text=Surge+Arrester" },
  { name: "TELECOMMUNICATION MAST", image: "https://placehold.co/600x400?text=Telecom+Mast" },
  { name: "Test & Measurement Equipment", image: "https://placehold.co/600x400?text=Test+Equipment" },
  { name: "Tools", image: "https://placehold.co/600x400?text=Tools" },
  { name: "WAVEGUIDE ADAPTOR", image: "https://placehold.co/600x400?text=Waveguide" },
  { name: "Waveguide Flange", image: "https://placehold.co/600x400?text=Waveguide+Flange" },
  { name: "Waveguide component", image: "https://placehold.co/600x400?text=Waveguide" }
].map(product => ({
  ...product,
  slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
}));

export const productsWithSlugs = productsData; // Export for use in ProductDetail.jsx

const ProductShowroom = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto">
            Discover a wide range of high-quality products tailored to your telecom and RF needs.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                to={`/product/${product.slug}`}
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center text-center border border-gray-200 hover:border-blue-400"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain p-3 bg-gray-50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-sm font-semibold text-blue-700 leading-snug">
                    {product.name}
                  </h3>
                </div>
                <div className="pb-4">
                  <span className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    Explore
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No products found.</p>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Need help finding the right product? <a href="/contact" className="text-blue-600 underline">Contact our team</a> for personalized assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowroom;

