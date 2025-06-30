import React, { useState } from "react";

// ✅ Import all certificate images first
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
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
          Our Certifications
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cursor-pointer group flex flex-col items-center text-center"
              onClick={() => setSelectedImage(cert.src)}
            >
              <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-md">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-xs font-medium">
                  Click to Zoom
                </div>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-700">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl transition-transform duration-300 scale-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
