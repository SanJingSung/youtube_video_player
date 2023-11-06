import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ video }) {
    const videoURL = video ? `https://www.youtube.com/watch?v=${video.id.videoId}` : "https://www.youtube.com/embed/dummyURL";

    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <ReactPlayer
                style={{ position: 'absolute', top: 0, left: 0 }}
                className='react-player'
                width="100%"
                height="100%"
                url={videoURL}
                controls={true}
            />
        </div>
    );
}

export default VideoPlayer;
