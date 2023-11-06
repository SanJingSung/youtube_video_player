import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function BackButton() {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <Button className="mt-1 px-5" onClick={navigateBack}>
            ← Back
        </Button>
    );
}

export default BackButton;
