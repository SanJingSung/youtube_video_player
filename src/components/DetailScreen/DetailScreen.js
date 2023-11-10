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
        <div className="container mt-5">
            <BackButton />
            <div className="card mt-3 mb-3">
                <div className="card-body">
                    <VideoTitle title={selectedVideo.snippet.title} />
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <VideoImage imageUrl={selectedVideo.snippet.thumbnails.high.url} loading={loading} />
                        </div>
                        <div className="col-lg-6">
                            <VideoDetails video={selectedVideo} videoDetails={videoDetails} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;


