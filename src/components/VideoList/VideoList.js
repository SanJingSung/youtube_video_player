import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import DefaultVideo from '../DefaultVideo/DefaultVideo';
import { VIDEO_DEFAULT_DISPLAY_AMOUNT } from '../../constants/Strings';
import './VideoList.css';

function VideoList({ videos, onVideoSelect }) {
    const renderVideoItems = () =>
        videos.slice(1, 4).map((video) => (
            <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />
        ));

    const renderDefaultThumbnails = () =>
        Array(VIDEO_DEFAULT_DISPLAY_AMOUNT).fill().map((_, index) => (
            <DefaultVideo key={index} />
        ));

    return (
        <div className="d-flex flex-column h-100 video-list">
            {videos && videos.length > 0 ? renderVideoItems() : renderDefaultThumbnails()}
        </div>
    );
}

export default VideoList;








