import React, { useEffect, useState } from "react";
import productsData from "./productsData";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"

const ImageGallery = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const location = useLocation();
  const navigate = useNavigate();

  // derive list of valid images once per render
  const allImages = productsData.filter((item) =>
    item.image.match(/\.(jpg|jpeg|png|webp)$/i)
  );

  // Sync URL -> state (supports direct links / back-forward)
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const s = p.get('search');
    const pageParam = parseInt(p.get('page'), 10);
    const perParam = parseInt(p.get('perPage'), 10);
    if (s !== null) setSearchTerm(s);
    if (!isNaN(pageParam) && pageParam > 0) setCurrentPage(pageParam);
    if (!isNaN(perParam) && perParam > 0) setPerPage(perParam);
  }, [location.search]);

  // Sync state -> URL (replace avoids history spam)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (searchTerm) params.set('search', searchTerm); else params.delete('search');
    if (currentPage && currentPage !== 1) params.set('page', String(currentPage)); else params.delete('page');
    if (perPage && perPage !== 20) params.set('perPage', String(perPage)); else params.delete('perPage');

    const newSearch = params.toString();
    const curSearch = location.search.replace(/^\?/, '');
    if (newSearch !== curSearch) {
      navigate(`${location.pathname}${newSearch ? `?${newSearch}` : ''}`, { replace: true });
    }
  }, [searchTerm, currentPage, perPage, location.pathname, location.search, navigate]);

  const urlEndpoint = "https://ik.imagekit.io/rfcon123/";
  const transform = "tr:w-300,q-40,f-webp";


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredImages = allImages.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination helpers
  const totalPages = Math.max(1, Math.ceil(filteredImages.length / perPage));
  const startIndex = (currentPage - 1) * perPage;
  const visibleImages = filteredImages.slice(startIndex, startIndex + perPage);

  const goToPage = (page) => {
    const p = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(p);
  };

  const prevPage = () => goToPage(currentPage - 1);
  const nextPage = () => goToPage(currentPage + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
  <title>Image Gallery | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Browse our RF and microwave product image gallery featuring antennas, cables, splitters, surge protectors, and more. Find visual references for all our products."
  />
  <meta
    name="keywords"
    content="RF product images, telecom components, microwave gallery, RF connector photos, antennas, cables, Synergy Telecom gallery"
  />
  <meta property="og:title" content="Image Gallery | RF Connector - Synergy Telecom" />
  <meta
    property="og:description"
    content="Explore our complete RF and microwave product image gallery including antennas, jumper cables, clamps, and test equipment."
  />
  <meta property="og:url" content="https://panaceaticsynergy.com/image-gallery" />
  <meta property="og:type" content="website" />
</Helmet>
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

      {/* 🔘 Pagination (compact) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 space-x-4">
          <div className="flex items-center space-x-2">
            <select
              value={perPage}
              onChange={(e) => { setPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="text-sm px-2 py-1 border rounded"
              aria-label="Per page"
            >
              <option value={12}>12</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-xs text-gray-500">/ {filteredImages.length} items</span>
          </div>

          <nav className="flex items-center space-x-1" aria-label="Compact pagination">
            <button onClick={() => goToPage(1)} disabled={currentPage === 1} className="px-2 py-1 text-sm rounded border" aria-label="First page">«</button>
            <button onClick={prevPage} disabled={currentPage === 1} className="px-2 py-1 text-sm rounded border" aria-label="Previous page">‹</button>

            {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
              const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
              const page = start + idx;
              if (page < 1 || page > totalPages) return null;
              return (
                <button key={page} onClick={() => goToPage(page)} className={`px-2 py-1 text-sm rounded border ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-white'}`}>{page}</button>
              );
            })}

            <button onClick={nextPage} disabled={currentPage === totalPages} className="px-2 py-1 text-sm rounded border" aria-label="Next page">›</button>
            <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} className="px-2 py-1 text-sm rounded border" aria-label="Last page">»</button>
          </nav>

          <div className="text-sm text-gray-600">Page {currentPage} of {totalPages}</div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
