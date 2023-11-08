import React from 'react';
import DefaultThumbnail from '../../assets/images/default-thumbnail.png';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import {DEFAULT_VIDEO_ALT_TEXT} from '../../constants/Strings';

const DefaultVideo = () => (
  <div className="mb-2 flex-grow-1 d-flex justify-content-center position-relative">
    <img
      src={DefaultThumbnail}
      alt={DEFAULT_VIDEO_ALT_TEXT}
      className="img-fluid"
    />
    <div className="position-absolute top-50 start-50 translate-middle">
      <LoadingIndicator />
    </div>
  </div>
);

export default DefaultVideo;
