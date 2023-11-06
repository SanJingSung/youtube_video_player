import React, { useContext } from 'react';
import BackButton from './BackButton';
import VideoTitle from './VideoTitle';
import VideoImage from './VideoImage';
import VideoDetails from './VideoDetails';
import { VideoContext } from '../../contexts/VideoContext';

function DetailScreen() {
    const { selectedVideo } = useContext(VideoContext);

    return (
        <div className="container-fluid">
            <BackButton/>
            <div className="row">
                <VideoTitle title={selectedVideo.snippet.title} />
            </div>
            <div className="row">
                <div className="col-md-5">
                    <VideoImage imageUrl={selectedVideo.snippet.thumbnails.high.url} />
                </div>
                <div className="col-md-6">
                    <VideoDetails video={selectedVideo} />
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;


