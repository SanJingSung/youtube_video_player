import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';
import VideoTitle from '../VideoTitle/VideoTitle';
import DetailsButton from '../DetailsButton/DetailsButton';
import VideoCount from '../VideoCount/VideoCount';
import './VideoInfo.css';

function VideoInfo({ videos, videoCount, onVideoSelect, selectedVideo, handleVideoReady, loading, handlePlay }) {
    return (
        <div className="row h-100">
            <div className="col-md-7 d-flex flex-column h-100 order-1 order-md-1">
                <VideoPlayer selectedVideo={selectedVideo} handleVideoReady={handleVideoReady} loading={loading} handlePlay={handlePlay} />
            </div>
            <div className="col-3 mt-1 order-3 order-md-2 video-info-container">
                <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                <VideoCount count={videoCount} />
            </div>
            <div className="col-md-7 d-flex justify-content-between mt-3 order-2 order-md-2">
                <VideoTitle title={selectedVideo?.snippet?.title} />
                <div className="ml-auto">
                    <DetailsButton selectedVideo={selectedVideo} />
                </div>
            </div>
        </div>
    )
}

export default VideoInfo;