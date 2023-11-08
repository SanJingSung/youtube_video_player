import React from 'react';
import BackButton from '../BackButton/BackButton';
import VideoTitle from '../VideoTitle/VideoTitle';
import VideoImage from '../VideoImage/VideoImage';
import VideoDetails from '../VideoDetails/VideoDetails';
import { useVideo } from '../../contexts/VideoContext';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

function DetailScreen() {
    const { selectedVideo, videoDetails, loading } = useVideo();

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <div className="container-fluid">
            <BackButton />
            <VideoTitle title={selectedVideo.snippet.title} />
            <div className="row">
                <div className="col-md-5">
                    <VideoImage imageUrl={selectedVideo.snippet.thumbnails.high.url} loading={loading} />
                </div>
                <div className="col-md-6">
                    <VideoDetails video={selectedVideo} videoDetails={videoDetails} loading={loading} />
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;


