import React from 'react';
import { Button } from 'react-bootstrap';
import './VideoItem.css';

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-container mb-2 d-flex position-relative video-item">
      <div className="img-container">
        <Button className="overlay text-light justify-content-center align-items-center w-100 h-100 position-absolute top-0 start-0 bg-secondary bg-opacity-50 border-0"
          onClick={() => onVideoSelect(video)}
        >
          <h4><i className="fas fa-search-plus"></i></h4>
          <div className="overlay-text">
            <p>{video.snippet.title}</p>
          </div>
        </Button>
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          className="img-fluid position-absolute"
        />
      </div>
    </div>
  );
}

export default VideoItem;