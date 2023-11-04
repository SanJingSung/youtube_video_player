import React, { useState, useEffect } from 'react';
import { getVideoDetails } from '../../api/youtube';

function VideoDetails({ video }) {
    const [videoDetails, setVideoDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function obtenerDetallesDeVideo(videoId) {
            const videoData = await getVideoDetails(videoId);
            setVideoDetails(videoData);
            setLoading(false);
        }
        obtenerDetallesDeVideo(video.id.videoId);
    }, [video]);

    if (loading) {
        return <p>Cargando datos...</p>;
    }

    return (
        <div>
            <p><strong>Descripción:</strong> {video.snippet.description}</p>
            <p><strong>Publicado el:</strong> {video.snippet.publishedAt}</p>
            <p><strong>Canal:</strong> {video.snippet.channelTitle}</p>
            <p><strong>Visitas:</strong> {videoDetails.statistics.viewCount}</p>
            <p><strong>Likes:</strong> {videoDetails.statistics.likeCount}</p>
            <p><strong>Comentarios:</strong> {videoDetails.statistics.commentCount}</p>
        </div>
    );
}

export default VideoDetails;


