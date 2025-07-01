import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading images:", err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = images.filter((image) =>
      image.name.toLowerCase().includes(term)
    );
    setFilteredImages(filtered);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading image links...</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 underline decoration-blue-500">
        Image Names and Download Links
      </h1>

      {/* ✅ Centered Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search images by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* ✅ Image Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 bg-white"
            >
              <p className="font-medium text-gray-700 mb-2 truncate">{image.name}</p>
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm break-words"
              >
                {image.url}
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No images found.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
