import React from 'react';
import { useVideo } from '../../contexts/VideoContext';
import Navbar from '../Navbar/Navbar';
import VideoInfo from '../VideoInfo/VideoInfo';
import ErrorModal from '../ErrorModal/ErrorModal';
import './MainScreen.css';


function MainScreen() {
    const { videos,
        videoCount,
        onVideoSelect,
        selectedVideo,
        handleSearch,
        searchTerm,
        handleInputChange,
        handleFormSubmit,
        handleVideoReady,
        loading,
        error,
        handleCloseErrorModal,
        showErrorModal,
        handlePlay
    } = useVideo();

    return (
        <div className="MainScreen-container container mt-5 d-flex flex-column justify-content-center">
            <Navbar
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <VideoInfo
                videos={videos}
                videoCount={videoCount}
                onVideoSelect={onVideoSelect}
                selectedVideo={selectedVideo}
                handleVideoReady={handleVideoReady}
                loading={loading}
                handlePlay={handlePlay}
            />
            <ErrorModal
                showErrorModal={showErrorModal}
                error={error}
                handleClose={handleCloseErrorModal}
            />
        </div>
    );
}

export default MainScreen;





