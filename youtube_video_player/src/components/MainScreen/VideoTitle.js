import React from 'react';

function VideoTitle({ video }) {
  return (
    <h1>{video ? video.snippet.title : "Video title"}</h1>
  );
}

export default VideoTitle;
