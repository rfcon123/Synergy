import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet-async";


const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const VideoGallery = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
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
        let allFetchedVideos = [];

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

          allFetchedVideos = [...allFetchedVideos, ...videoItems];
          nextPageToken = playlistRes.data.nextPageToken;
        } while (nextPageToken);

        setAllVideos(allFetchedVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchAllVideos();
  }, []);

  const filteredVideos = allVideos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4">
      <Helmet>
  <title>Our Video Library | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Explore Panacea Telecom's video library featuring tutorials, product demos, and RF technology insights."
  />
  <meta
    name="keywords"
    content="Panacea Telecom videos, RF tutorials, product demos, YouTube video gallery"
  />
  <meta property="og:title" content="Our Video Library | Panacea Telecom" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://panaceaticsynergy.com/video-gallery" />
  <meta property="og:site_name" content="Panacea Telecom" />
</Helmet>
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
         <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Our Video Library
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>

        {/* Search Bar */}
        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full px-5 py-3 rounded-lg border border-blue-300 shadow-lg text-base transition focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none focus:shadow-xl"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(20); // Reset count on new search
            }}
          />
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setModal({ open: true, videoId: video.id, title: video.title })}
              className="cursor-pointer bg-white rounded-md border border-gray-300 shadow hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2 leading-snug tracking-tight">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredVideos.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">Loading Videos...</p>
        )}

        {/* Video Modal */}
        {modal.open && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden">
              <button
                onClick={() => setModal({ open: false, videoId: '', title: '' })}
                className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
              >
                ✖ Close
              </button>

              <div className="relative pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${modal.videoId}?autoplay=1`}
                  title={modal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-t-md"
                />
              </div>

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
