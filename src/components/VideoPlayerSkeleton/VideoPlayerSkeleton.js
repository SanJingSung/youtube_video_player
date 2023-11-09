import React from 'react';
import './VideoPlayerSkeleton.css';

function VideoPlayerSkeleton() {
    return (
        <div className="video-wrapper position-relative">
            <div className="react-player skeleton-loader">
            </div>
        </div>
    );
}

export default VideoPlayerSkeleton;