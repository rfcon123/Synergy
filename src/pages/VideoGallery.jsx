import React, { useState } from 'react';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Intro to RF Technology' },
  { id: '3JZ_D3ELwOQ', title: 'Installing Antennas Efficiently' },
  { id: 'eVTXPUF4Oz4', title: 'IBS Overview and Setup' },
  { id: 'Zi_XLOBDo_Y', title: 'Optical Fiber Components' },
  { id: 'kXYiU_JCYtU', title: 'BTS Material Insights' },
  { id: 'fLexgOxsZu0', title: 'Synergy Telecom at Expo' },
  { id: '2vjPBrBU-TM', title: 'Microwave Component Showcase' },
  { id: 'uelHwf8o7_U', title: 'Live Cable Testing Demo' },
  { id: 'ScNNfyq3d_w', title: 'Advanced RF Training' },
  { id: 'ktvTqknDobU', title: 'Connector Compatibility Guide' },
  { id: 'lWA2pjMjpBs', title: 'Warehouse Tour' },
  { id: 'hLQl3WQQoQ0', title: 'Fiber Cable Making Process' },
  { id: 'hT_nvWreIhg', title: 'How to Assemble Jumpers' },
  { id: '09R8_2nJtjg', title: 'Meet Our Team' },
  { id: '60ItHLz5WEA', title: 'RF Load Testing' },
  { id: 'CevxZvSJLk8', title: 'Maintenance Tips' },
  { id: 'RgKAFK5djSk', title: 'Our Government Projects' },
  { id: 'fJ9rUzIMcZQ', title: 'Synergy Training Academy' },
  { id: '6Ejga4kJUts', title: 'FAQ Answered Live' },
  { id: 'y6Sxv-sUYtM', title: 'End-to-End Installation' },
];

const VideoGallery = () => {
  const [modal, setModal] = useState({ open: false, video: null });
  const [search, setSearch] = useState('');

  const filteredVideos = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <aside className="bg-white rounded-xl shadow-md p-6 w-full lg:w-1/4 sticky top-6">
          <div className="text-center">
            <img
              src="https://yt3.googleusercontent.com/ytc/APkrFKZAYZVW6A33ILQ_8Tx4gEQ4yAjbA-RarYCIYXurYQ=s176-c-k-c0x00ffffff-no-rj"
              alt="Synergy Telecom"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-blue-600 mb-3"
            />
            <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-1">Synergy Telecom Pvt. Ltd.</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">Official YouTube Channel</p>
            <a
              href="https://www.youtube.com/@synergytelecompvt.ltd.9887"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Subscribe
            </a>
          </div>

          <div className="mt-6">
            <h3 className="text-sm sm:text-md font-semibold text-blue-700 mb-2">Categories</h3>
            <ul className="text-gray-700 text-xs sm:text-sm space-y-1">
              <li>• RF Solutions</li>
              <li>• Fiber Optics</li>
              <li>• BTS Setup</li>
              <li>• Training</li>
              <li>• Events</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">🎬 Video Gallery</h1>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Video Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer group"
                onClick={() => setModal({ open: true, video })}
              >
                <div className="relative pb-[56.25%] overflow-hidden rounded-t-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 line-clamp-2">
                    {video.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <p className="text-center text-gray-600 mt-10">No videos match your search.</p>
          )}
        </main>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className=" fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-2xl relative">
            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${modal.video.id}?autoplay=1`}
                title={modal.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-base sm:text-lg font-bold">{modal.video.title}</h2>
              <button
                onClick={() => setModal({ open: false, video: null })}
                className="text-sm bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
