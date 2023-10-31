import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ videoURL }) {
    const defaultURL = "https://www.youtube.com/embed/dummyURL";
    const finalURL = videoURL || defaultURL;

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={finalURL}
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}

export default VideoPlayer;

