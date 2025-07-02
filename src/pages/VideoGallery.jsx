import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyC8dDxqmC5YJ28Pxf0QJGtGmv7xaIXtTVU';
const CHANNEL_ID = 'UC-iHA_voe080R3VJGCO0NuA';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState({ open: false, videoId: '', title: '' });

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: {
            part: 'contentDetails',
            id: CHANNEL_ID,
            key: API_KEY,
          },
        });

        const uploadPlaylistId = channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

        let nextPageToken = '';
        let allVideos = [];

        do {
          const playlistRes = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              part: 'snippet',
              maxResults: 50,
              playlistId: uploadPlaylistId,
              pageToken: nextPageToken,
              key: API_KEY,
            },
          });

          const videoItems = playlistRes.data.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }));

          allVideos = [...allVideos, ...videoItems];
          nextPageToken = playlistRes.data.nextPageToken;
        } while (nextPageToken);

        setVideos(allVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchAllVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">🎥 Synergy Telecom Video Library</h1>

        {/* Search Bar */}
        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="🔍 Search videos..."
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setModal({ open: true, videoId: video.id, title: video.title })}
              className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 group"
            >
              <div className="relative rounded-t-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 line-clamp-2">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">Loading Videos...</p>
        )}

        {/* Video Modal */}
        {modal.open && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setModal({ open: false, videoId: '', title: '' })}
                className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
              >
                ✖ Close
              </button>

              {/* Video Iframe */}
              <div className="relative pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${modal.videoId}?autoplay=1`}
                  title={modal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-t-2xl"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h2 className="text-base font-bold">{modal.title}</h2>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VideoGallery;
