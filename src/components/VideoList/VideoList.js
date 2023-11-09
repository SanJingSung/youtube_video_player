import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import { VIDEO_DEFAULT_DISPLAY_AMOUNT, VIDEO_START_INDEX, VIDEO_END_INDEX } from '../../constants/Strings';
import VideoItemSkeleton from '../VideoItemSkeleton/VideoItemSkeleton';
import './VideoList.css';

function VideoList({ videos, onVideoSelect }) {
    const renderVideoItems = () =>
        videos.slice(VIDEO_START_INDEX, VIDEO_END_INDEX).map((video) => (
            <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />
        ));
    const renderSkeletonLoaders = () =>
        Array(VIDEO_DEFAULT_DISPLAY_AMOUNT).fill().map((_, index) => (
            <VideoItemSkeleton key={index} type="video-item" />
        ));

    return (
        <div className="d-flex flex-column h-100 video-list">
            {videos && videos.length > 0 ? renderVideoItems() : renderSkeletonLoaders()}
        </div>
    );
}

export default VideoList;








