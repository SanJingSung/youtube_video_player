import React from 'react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { VIDEO_IMAGE_ALT } from '../../constants/Strings';
import './VideoImage.css';

const VideoImage = ({ imageUrl, loading }) => {
    if (loading) {
        return <LoadingIndicator />;
    }

    return <img src={imageUrl} className="img-fluid video-image w-100 rounded-4" alt={VIDEO_IMAGE_ALT} />;
};

export default VideoImage;

