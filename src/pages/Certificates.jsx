import React, { useState } from "react";

// ✅ Import Certificate Images
import cert1 from "../assets/certificate/cert1.png";
import cert2 from "../assets/certificate/cert2.png";
import cert3 from "../assets/certificate/cert3.png";
import cert4 from "../assets/certificate/cert4.png";
import cert5 from "../assets/certificate/cert5.png";
import cert6 from "../assets/certificate/cert6.png";
import cert7 from "../assets/certificate/cert7.png";
import cert8 from "../assets/certificate/cert8.png";
import cert9 from "../assets/certificate/cert9.png";
import cert10 from "../assets/certificate/cert10.png";
import cert11 from "../assets/certificate/cert11.png";
import cert12 from "../assets/certificate/cert12.png";
import cert13 from "../assets/certificate/cert13.png";
import cert14 from "../assets/certificate/cert14.png";
import cert15 from "../assets/certificate/cert15.png";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { src: cert1, title: "Agreement between SAC DOS and INSP" },
    { src: cert2, title: "ISRO Certification" },
    { src: cert3, title: "Defence Certification" },
    { src: cert4, title: "DRDO Certification" },
    { src: cert5, title: "Certification for E-Waste Management" },
    { src: cert6, title: "Certificate of Incorporation" },
    { src: cert7, title: "ISO 9001:2015 Certification" },
    { src: cert8, title: "Agreement between SAC DOS and INSP" },
    { src: cert9, title: "MSME Registration" },
    { src: cert10, title: "ZED Listing" },
    { src: cert11, title: "DRDO Approved Vendor" },
    { src: cert12, title: "Government Trade Mark Registration" },
    { src: cert13, title: "UDYAM Registration" },
    { src: cert14, title: "Trade Mark Registration" },
    { src: cert15, title: "MSME Sustainable ZED Certification" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
         <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Our Certificates
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(cert.src)}
              className="cursor-pointer group flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-xl shadow-md hover:shadow-lg">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-xs font-medium rounded-xl">
                  Click to Zoom
                </div>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Modal View for Zoom */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl transition duration-300 scale-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
