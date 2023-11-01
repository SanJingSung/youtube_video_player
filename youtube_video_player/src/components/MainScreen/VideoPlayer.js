import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ video }) {
    const videoURL = video ? `https://www.youtube.com/watch?v=${video.id.videoId}` : "https://www.youtube.com/embed/dummyURL";

    return (
        <div className='player-wrapper position-relative '>
            <ReactPlayer
                className='react-player'
                url={videoURL}
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}

export default VideoPlayer;

