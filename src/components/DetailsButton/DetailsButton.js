import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DETAILS_BUTTON_TEXT, VIDEO_DETAIL_PATH } from '../../constants/Strings';

function DetailsButton({ selectedVideo }) {
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate(VIDEO_DETAIL_PATH, { state: { video: selectedVideo } });
    }

    return (
        <Button onClick={navigateToDetail} className="mb-2 ml-2 pl-5 pr-5" disabled={!selectedVideo}>
            {DETAILS_BUTTON_TEXT}
        </Button>
    );
}

export default DetailsButton;
