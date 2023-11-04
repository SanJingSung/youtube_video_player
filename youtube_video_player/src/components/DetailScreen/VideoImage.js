import React from 'react';

function VideoImage({ imageUrl }) {
    return (
        <img src={imageUrl} className="img-fluid h-100 w-100" alt="Video Thumbnail" />
    );
}

export default VideoImage;

