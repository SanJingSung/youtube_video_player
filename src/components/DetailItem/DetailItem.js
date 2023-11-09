import React from 'react';

const DetailItem = ({ title, content }) => (
    <div className="card mb-3 mt-2">
        <div className="card-body">
            <h5 className="card-title fw-bold">{title}:</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
);

export default DetailItem;