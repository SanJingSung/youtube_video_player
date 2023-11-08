import React from 'react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { VIDEO_IMAGE_ALT } from '../../constants/Strings';

const VideoImage = ({ imageUrl, loading }) => {
    if (loading) {
        return <LoadingIndicator />;
    }

    return <img src={imageUrl} className="img-fluid h-100 w-100" alt={VIDEO_IMAGE_ALT} />;
};

export default VideoImage;

