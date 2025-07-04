import React, { useEffect, useState } from "react";
import productsData from "./productsData";

const ImageGallery = () => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const urlEndpoint = "https://ik.imagekit.io/hzvbqwpg8/";
  const transform = "tr:w-300,q-40,f-webp";

  useEffect(() => {
    const validImages = productsData.filter((item) =>
      item.image.match(/\.(jpg|jpeg|png|webp)$/i)
    );
    setFilteredImages(validImages);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = productsData
      .filter((image) =>
        image.image.match(/\.(jpg|jpeg|png|webp)$/i)
      )
      .filter((image) =>
        image.name.toLowerCase().includes(term)
      );

    setFilteredImages(filtered);
    setVisibleCount(20);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 🔤 Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Our Image Gallery
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

      {/* 🔍 Search */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search images by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-lg px-5 py-3 rounded-lg border border-blue-300 shadow text-base focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* 🖼️ Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleImages.length > 0 ? (
          visibleImages.map((image, index) => {
            const encodedImagePath = encodeURI(image.image);
            const thumbnailUrl = `${urlEndpoint}${transform}/${encodedImagePath}`;
            const fullImageUrl = `${urlEndpoint}${encodedImagePath}`;

            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-md shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={thumbnailUrl}
                  alt={image.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-800 truncate mb-2">
                    {image.name}
                  </p>
                  <a
                    href={fullImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Full Image
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">No images found.</p>
        )}
      </div>

      {/* 🔘 Load More */}
      {visibleCount < filteredImages.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
