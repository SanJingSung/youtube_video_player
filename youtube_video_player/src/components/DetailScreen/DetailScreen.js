import React from 'react';
import BackButton from './BackButton';
import VideoTitle from './VideoTitle';
import VideoImage from './VideoImage';
import VideoDetails from './VideoDetails';
import { useLocation } from 'react-router-dom';

function DetailScreen() {
    const location = useLocation();
    const { video } = location.state || {};

    return (
        <div className="container-fluid">
            <BackButton/>
            <div className="row">
                <VideoTitle title={video.snippet.title} />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <VideoImage imageUrl={video.snippet.thumbnails.high.url} />
                </div>
                <div className="col-md-6">
                    <VideoDetails video={video} />
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;


