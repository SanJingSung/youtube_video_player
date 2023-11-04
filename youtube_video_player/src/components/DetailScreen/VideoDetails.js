import React, { useState, useEffect } from 'react';
import youtube from '../../api/youtube';

function VideoDetails({ video }) {
    const [videoDetails, setVideoDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getVideoDetails(videoId) {
            const videoData = await youtube.get('/videos', {
                params: {
                    id: videoId,
                    part: 'snippet,statistics',
                },
            });
            setVideoDetails(videoData.data.items[0]);
            setLoading(false);
        }
        getVideoDetails(video.id.videoId);
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



