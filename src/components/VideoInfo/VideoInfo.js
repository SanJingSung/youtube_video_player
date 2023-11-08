import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';
import VideoTitle from '../VideoTitle/VideoTitle';
import DetailsButton from '../DetailsButton/DetailsButton';
import VideoCount from '../VideoCount/VideoCount';


function VideoInfo({ videos, videoCount, onVideoSelect, selectedVideo, handleVideoReady, loading }) {
    return (
        <div className="row h-100">
            <div className="col-md-7 d-flex flex-column h-100 order-1">
                <VideoPlayer selectedVideo={selectedVideo} handleVideoReady={handleVideoReady} loading={loading} />
            </div>
            <div className="col-md-5 mt-1 order-4 order-md-2">
                <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
            <div className="col-md-7 d-flex justify-content-between align-items-center mt-3 order-2">
                <VideoTitle title={selectedVideo?.snippet?.title} />
                <DetailsButton selectedVideo={selectedVideo} />
            </div>
            <div className="col-md-5 order-5 order-md-3">
                <VideoCount count={videoCount} />
            </div>
        </div>
    )
}

export default VideoInfo;