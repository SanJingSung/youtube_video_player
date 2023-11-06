import React, { useContext } from 'react';
import { VideoContext } from '../../contexts/VideoContext';

function VideoDetails({ video }) {
    const { videoDetails, loading } = useContext(VideoContext);

    if (loading || !videoDetails) {
        return <p>Loading data...</p>;
      }

    return (
        <div>
            <p className="fw-bold">Description:</p>
            <p>{video.snippet.description}</p>
            <p className="fw-bold">Published at:</p>
            <p>{video.snippet.publishedAt}</p>
            <p className="fw-bold">Channel:</p>
            <p>{video.snippet.channelTitle}</p>
            <p className="fw-bold">Views:</p>
            <p>{videoDetails.statistics.viewCount}</p>
            <p className="fw-bold">Likes:</p>
            <p>{videoDetails.statistics.likeCount}</p>
            <p className="fw-bold">Comments:</p>
            <p>{videoDetails.statistics.commentCount}</p>
        </div>
    );
}

export default VideoDetails;



