import React, { useState, useEffect } from 'react';
import { getVideoDetails } from '../../api/youtube';

function VideoDetails({ video }) {
    const [videoDetails, setVideoDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function obtainVideoData(videoId) {
            const videoData = await getVideoDetails(videoId);
            setVideoDetails(videoData);
            setLoading(false);
        }
        obtainVideoData(video.id.videoId);
    }, [video]);

    if (loading) {
        return <p>Loading data...</p>;
    }

    return (
        <div>
            <p><strong>Description:</strong> {video.snippet.description}</p>
            <p><strong>Published at:</strong> {video.snippet.publishedAt}</p>
            <p><strong>Channel:</strong> {video.snippet.channelTitle}</p>
            <p><strong>Views:</strong> {videoDetails.statistics.viewCount}</p>
            <p><strong>Likes:</strong> {videoDetails.statistics.likeCount}</p>
            <p><strong>Comments:</strong> {videoDetails.statistics.commentCount}</p>
        </div>
    );
}

export default VideoDetails;


