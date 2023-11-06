import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DetailsButton({ video, isVideoSelected, videos, videoCount }) {
    const navigate = useNavigate();

    const navigateToDetail = () => {
        sessionStorage.setItem('selectedVideo', JSON.stringify(video));
        sessionStorage.setItem('videoCount', JSON.stringify(videoCount));
        sessionStorage.setItem('videos', JSON.stringify(videos));
        navigate('/video', { state: { video } });
    }

    return (
        <Button onClick={navigateToDetail} className="ml-2 pl-5 pr-5" disabled={!isVideoSelected}>
            Video Details
        </Button>
    );
}

export default DetailsButton;