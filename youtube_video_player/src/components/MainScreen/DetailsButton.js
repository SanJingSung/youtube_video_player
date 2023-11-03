import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DetailsButton() {
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate('/video');
    }

    return (
        <Button onClick={navigateToDetail} className="ml-2 pl-5 pr-5">
            Video Details
        </Button>
    );
}

export default DetailsButton;