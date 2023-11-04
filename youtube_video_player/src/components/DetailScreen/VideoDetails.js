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



