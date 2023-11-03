import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function BackButton() {
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate('/');
    }

    return (
        <Button onClick={navigateToDetail}>
            ← Back
        </Button>
    );
}

export default BackButton;
