import React, { createContext, useState, useEffect } from 'react';
import youtube from '../api/youtube';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideoDetails(videoId) {
      const videoData = await youtube.get('/videos', {
        params: {
          id: videoId,
          part: 'snippet,statistics',
        },
      });
      setVideoDetails(videoData.data.items[0]);
      setLoading(false);
    }
    if (selectedVideo && selectedVideo.id) {
      getVideoDetails(selectedVideo.id.videoId);
    }
  }, [selectedVideo]);

  const onSearchSubmit = async (term) => {
    setSearchTerm(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
    setVideoCount(prevCount => prevCount + 1);
    setSearchTerm('');
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoCount(prevCount => prevCount + 1);
  };

  const handleSearch = () => {
    onSearchSubmit(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleFormSubmit = async (event) => {
    event.preventDefault();
    await onSearchSubmit(searchTerm);
    setSearchTerm('');
};


  const value = {
    videos,
    setVideos,
    videoCount,
    onVideoSelect,
    searchTerm,
    setSearchTerm,
    selectedVideo,
    setSelectedVideo,
    onSearchSubmit,
    handleSearch,
    videoDetails,
    setVideoDetails,
    loading,
    handleInputChange,
    handleFormSubmit,
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};
