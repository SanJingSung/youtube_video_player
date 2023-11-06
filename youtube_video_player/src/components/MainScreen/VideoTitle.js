import React from 'react';

function VideoTitle({ video }) {
  return (
    <div className="text-left h2">{video ? video.snippet.title : "Video title"}</div>
  );
}

export default VideoTitle;
