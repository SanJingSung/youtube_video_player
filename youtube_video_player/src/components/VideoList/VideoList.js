import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import DefaultVideo from '../DefaultVideo/DefaultVideo';

function VideoList({ videos, onVideoSelect }) {
    const renderVideoItems = () =>
        videos.slice(1, 4).map((video) => (
            <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />
        ));

    const renderDefaultThumbnails = () =>
        Array(3).fill().map((_, index) => (
            <DefaultVideo key={index} />
        ));

    return (
        <div className="d-flex flex-column h-100">
            {videos && videos.length > 0 ? renderVideoItems() : renderDefaultThumbnails()}
        </div>
    );
}

export default VideoList;








