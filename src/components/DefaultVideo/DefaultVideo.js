import React from 'react';
import DefaultThumbnail from '../../assets/images/default-thumbnail.png';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { DEFAULT_VIDEO_ALT_TEXT } from '../../constants/Strings';
import './DefaultVideo.css';

const DefaultVideo = () => (
  <div className="video-container mb-2 d-flex position-relative h-100 video-item">
    <div className="position-relative img-container">
      <img
        src={DefaultThumbnail}
        alt={DEFAULT_VIDEO_ALT_TEXT}
        className="img-fluid position-absolute"
      />
      <div className="position-absolute top-50 start-50 translate-middle">
        <LoadingIndicator />
      </div>
    </div>
  </div>
);

export default DefaultVideo;
