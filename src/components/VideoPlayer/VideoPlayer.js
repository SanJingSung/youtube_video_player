import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { YOUTUBE_VIDEO_BASE_URL } from '../../constants/Strings';
import VideoPlayerSkeleton from '../VideoPlayerSkeleton/VideoPlayerSkeleton';

function VideoPlayer({ selectedVideo, handleVideoReady, loading, handlePlay }) {
    if (!selectedVideo) {
        return <VideoPlayerSkeleton />;
    }

    const videoURL = `${YOUTUBE_VIDEO_BASE_URL}?v=${selectedVideo.id.videoId}`;

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
                onPlay={() => handlePlay(selectedVideo.id.videoId)}
            />
        </div>
    );
}

export default VideoPlayer;
