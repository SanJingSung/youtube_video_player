import React from 'react';
import './VideoItemSkeleton.css';
import '../VideoItem/VideoItem.css'; 

const VideoItemSkeleton = ({ type }) => (
    <div className={`skeleton-loader ${type} video-item mb-2`}></div>
);

export default VideoItemSkeleton;