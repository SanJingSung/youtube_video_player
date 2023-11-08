import React from 'react';
import { useVideo } from '../../contexts/VideoContext';
import Navbar from '../Navbar/Navbar';
import VideoInfo from '../VideoInfo/VideoInfo';

function MainScreen() {
    const { videos, videoCount, onVideoSelect, selectedVideo, handleSearch, searchTerm, handleInputChange, handleFormSubmit, handleVideoReady, loading} = useVideo();

    return (
        <div className="container-fluid mt-2">
            <Navbar handleSearch={handleSearch} searchTerm={searchTerm} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <VideoInfo videos={videos} videoCount={videoCount} onVideoSelect={onVideoSelect} selectedVideo={selectedVideo} handleVideoReady={handleVideoReady} loading={loading} />
        </div>
    );
}

export default MainScreen;





