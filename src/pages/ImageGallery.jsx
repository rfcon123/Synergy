import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://corsproxy.io/?${encodeURIComponent('https://script.google.com/macros/s/AKfycbwUmgvSN5-eZ6r7uuOWh75Zfq-grckGz-PlkOK0tcYAL8wJVLMyZ-dG6PG2SmoCPeg5/exec')}`)
      .then(response => response.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images through CORS proxy:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <p className="text-blue-700 text-lg">Loading gallery...</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-xl shadow-inner">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
        Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md bg-white group hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image.url}
              alt={image.name || `Gallery Image ${index + 1}`}
              className="object-cover w-full h-64 sm:h-72 md:h-80 rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageGallery;
