import React, { useState, useEffect } from 'react';
import { FiSearch, FiFile, FiDownload, FiGrid, FiList, FiEye, FiX } from 'react-icons/fi';

const STKDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Track availability of document URLs (true = available, false = missing, undefined = unknown)
  const [availability, setAvailability] = useState({});

  // After documents load, probe URLs to mark unavailable PDFs and avoid showing 404 in iframe
  useEffect(() => {
    if (!documents || documents.length === 0) return;

    let mounted = true;

    const checkUrl = async (url) => {
      // For external links (absolute http(s)), assume available (or skip due to CORS)
      if (/^https?:\/\//i.test(url)) return true;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return res.ok;
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        return false;
      }
    };

    (async () => {
      const map = {};
      await Promise.all(
        documents.map(async (doc) => {
          const ok = await checkUrl(doc.url);
          if (!mounted) return;
          map[doc.url] = ok;
        })
      );
      if (mounted) setAvailability(map);
    })();

    return () => {
      mounted = false;
    };
  }, [documents]);

  // Example categories
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'manual', name: 'Manuals' },
    { id: 'spec', name: 'Specifications' },
    { id: 'drawing', name: 'Drawings' },
  ];

  // Fetch STK documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const response = await fetch('/STK_DOCUMENT/index.json');
        const data = await response.json();
        setDocuments(data.documents || []);
        setError(null);
      } catch (error) {
        console.error('Error loading STK documents:', error);
        setError('Failed to load documents. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Filtering + sorting
  const filteredDocuments = documents
    .filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((doc) =>
      selectedCategory === 'all' ? true : doc.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  // Preview handler
  const handlePreview = (url) => {
    if (availability[url] === false) {
      // Small UX guard: don't open iframe when file is missing
      // You could replace this with a nicer toast/notification
      alert('Document not available');
      return;
    }
    setPreviewUrl(url);
    setShowPreview(true);
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">STK Documents</h1>

      {/* Search, Filter, and View Controls */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* View Toggle */}
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${
              viewMode === 'grid'
                ? 'bg-white shadow text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            title="Grid View"
          >
            <FiGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${
              viewMode === 'list'
                ? 'bg-white shadow text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            title="List View"
          >
            <FiList size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 min-w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center text-red-600 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {/* Documents */}
      {!loading && !error && filteredDocuments.length > 0 && (
        <div
          className={`${
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'flex flex-col divide-y'
          }`}
        >
          {filteredDocuments.map((doc) => (
            <div
              key={doc.name}
              className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FiFile className="text-blue-500 mr-2" size={24} />
                  <h2 className="text-lg font-semibold text-gray-700">
                    {doc.name}
                  </h2>
                </div>
                <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                  {doc.type || 'Document'}
                </span>
              </div>

              {viewMode === 'grid' && (
                <p className="text-gray-600 text-sm mb-4">
                  {doc.description || 'No description available'}
                </p>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={() => handlePreview(doc.url)}
                  disabled={availability[doc.url] === false}
                  className={`flex-1 inline-flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg transition-colors ${availability[doc.url] === false ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                >
                  <FiEye className="mr-2" /> Preview
                </button>
                {availability[doc.url] === false ? (
                  <span className="flex-1 inline-flex items-center justify-center bg-gray-200 text-gray-500 px-4 py-2 rounded-lg">
                    Not available
                  </span>
                ) : (
                  <a
                    href={doc.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FiDownload className="mr-2" /> Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && filteredDocuments.length === 0 && (
        <p className="text-gray-600 text-center bg-gray-50 p-8 rounded-lg">
          No documents found matching your search.
        </p>
      )}

      {/* Document Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Document Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={previewUrl}
                title="Document Preview"
                className="w-full h-full rounded border"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default STKDocuments;
