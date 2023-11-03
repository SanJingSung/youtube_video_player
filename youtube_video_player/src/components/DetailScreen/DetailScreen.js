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
        <div className="container-fluid mt-3 mb-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-4">
                        <BackButton />
                    </div>
                    <div>
                        <VideoTitle title={video.snippet.title}/>
                    </div>
                    <div>
                        <VideoImage imageUrl={video.snippet.thumbnails.high.url}/>
                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <VideoDetails details={video.snippet.description}/>
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;

