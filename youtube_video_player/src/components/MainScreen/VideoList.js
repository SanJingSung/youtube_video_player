import React from 'react';

function VideoList({ videos }) {
    return (
        <div className="d-flex flex-column h-100">
            {(videos && videos.length) ? (
                videos.slice(1, 4).map((video, index) => (
                    <div key={index} className="mb-2 flex-grow-1">
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                            className="img-fluid h-100"
                        />
                    </div>
                ))
            ) : (
                Array(3).fill().map((_, index) => (
                    <div
                        key={index}
                        className="video-placeholder mb-2 bg-light flex-grow-1"
                    ></div>
                ))
            )}
        </div>
    );
}


export default VideoList;



