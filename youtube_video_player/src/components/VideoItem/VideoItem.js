import React from 'react';
import { Button } from 'react-bootstrap';
import './VideoItem.css';

function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-container mb-2 flex-grow-1 d-flex justify-content-center position-relative">
      <Button className="overlay text-light d-flex justify-content-center align-items-center w-100 h-100 position-absolute top-0 left-0 bg-secondary bg-opacity-50 border-0"
        onClick={() => onVideoSelect(video)}
      >
        <h4><i className="fas fa-search-plus"></i></h4>
        <p>{video.snippet.title}</p>
      </Button>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        className="img-fluid"
      />
    </div>
  );
}

export default VideoItem;
