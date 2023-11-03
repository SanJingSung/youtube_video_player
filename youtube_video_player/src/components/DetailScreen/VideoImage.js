import React from 'react';

function VideoImage({ imageUrl }) {
    return (
        <div className="image-wrapper position-relative mb-2">
            <img src={imageUrl} className="img-fluid" alt="Video Thumbnail" />
        </div>
    );
}

export default VideoImage;

