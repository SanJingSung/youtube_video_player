import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { VideoContext } from '../../contexts/VideoContext';

function DetailsButton() {
    const { selectedVideo } = useContext(VideoContext);
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate('/video', { state: { video: selectedVideo } });
    }

    return (
        <Button onClick={navigateToDetail} className="ml-2 pl-5 pr-5" disabled={!selectedVideo}>
            Video Details
        </Button>
    );
}

export default DetailsButton;
