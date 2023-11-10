import React from 'react';
import { Spinner } from 'react-bootstrap';
import { LOADING_INDICATOR_TEXT } from '../../constants/Strings';

const LoadingIndicator = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">{LOADING_INDICATOR_TEXT}</span>
        </Spinner>
    </div>
);

export default LoadingIndicator;
