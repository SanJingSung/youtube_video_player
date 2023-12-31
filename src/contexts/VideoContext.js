import React, { createContext, useState, useEffect, useContext } from 'react';
import youtube from '../api/youtube';

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [playedVideo, setPlayedVideo] = useState('');


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
    try {
      setLoading(true);
      const response = await youtube.get('/search', {
        params: {
          q: term,
          type: 'video',
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      handleError('Failed to fetch videos');
    } finally {
      setLoading(false);
      setSearchTerm('');
    }
  };

  const onVideoSelect = (video) => {
    onSearchSubmit(video.snippet.title);
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

  const handleVideoReady = () => {
    setLoading(false);
  };

  const handleError = (message) => {
    setError(message);
    setShowErrorModal(true);
    setTimeout(() => {
      setShowErrorModal(false);
      setError(null);
    }, 3000);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setError(null);
  };

  const handlePlay = (videoId) => {
    if (playedVideo !== videoId) {
      setVideoCount(videoCount + 1);
      setPlayedVideo(videoId);
    }
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
    setLoading,
    handleInputChange,
    handleFormSubmit,
    handleVideoReady,
    error,
    setError,
    handleError,
    showErrorModal,
    handleCloseErrorModal,
    handlePlay,
    playedVideo,
    setPlayedVideo
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};
