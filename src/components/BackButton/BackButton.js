import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BACK_BUTTON } from '../../constants/Strings';

function BackButton() {
    const navigate = useNavigate();

    return (
        <Button className="btn-danger mt-1 px-5" onClick={() => navigate(-1)}>
            {BACK_BUTTON}
        </Button>
    );
}

export default BackButton;

