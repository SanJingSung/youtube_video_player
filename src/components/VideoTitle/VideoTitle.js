import React from 'react';
import VideoTitleSkeleton from '../VideoTitleSkeleton/VideoTitleSkeleton';
import './VideoTitle.css';

function VideoTitle({ title }) {
    if (!title) {
        return <VideoTitleSkeleton />;
    }

    return <div className="text-left h2 video-title">{title}</div>;
}

export default VideoTitle;
