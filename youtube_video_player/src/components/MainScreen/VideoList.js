import React from 'react';
import DefaultThumbnail from '../../img/default-thumbnail.png';

function VideoList({ videos, onVideoSelect }) {
    return (
        <div className="d-flex flex-column h-100">
            {(videos && videos.length) ? (
                videos.slice(1, 4).map((video, index) => (
                    <div key={index} className="video-container mb-2 flex-grow-1 d-flex justify-content-center position-relative">
                        <a href="#" className="overlay text-light d-flex justify-content-center align-items-center w-100 h-100 position-absolute top-0 left-0"
                            onClick={() => onVideoSelect(video)}
                        >
                            <h4><i className="fas fa-search-plus"></i></h4>
                            <p>{video.snippet.title}</p>
                        </a>
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                            className="img-fluid"
                        />
                    </div>
                ))
            ) : (
                Array(3).fill().map((_, index) => (
                    <div key={index} className="mb-2 flex-grow-1 d-flex justify-content-center position-relative">
                        <img
                            src={DefaultThumbnail}
                            alt="Default-Thumbnail"
                            className="img-fluid"
                        />
                    </div>
                ))
            )}
            <style jsx>{`
                .video-container {
                    position: relative;
                }
                .overlay {
                    background-color: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .video-container:hover .overlay {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}

export default VideoList;







