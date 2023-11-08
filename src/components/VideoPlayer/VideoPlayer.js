import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { YOUTUBE_VIDEO_BASE_URL, DUMMY_VIDEO_URL } from '../../constants/Strings';

function VideoPlayer({ selectedVideo, handleVideoReady, loading }) {
    const videoURL = selectedVideo ? `${YOUTUBE_VIDEO_BASE_URL}?v=${selectedVideo.id.videoId}` : DUMMY_VIDEO_URL;

    return (
        <div className="video-wrapper position-relative">
            {loading && (
                <div className="loading-indicator-center">
                    <LoadingIndicator />
                </div>
            )}
            <ReactPlayer
                className='react-player'
                width="100%"
                height="100%"
                url={videoURL}
                controls={true}
                onReady={handleVideoReady}
            />
        </div>
    );
}

export default VideoPlayer;
