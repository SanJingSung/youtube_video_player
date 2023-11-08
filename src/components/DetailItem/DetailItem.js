import React from 'react';

const DetailItem = ({ title, content }) => (
    <div>
        <p className="fw-bold">{title}:</p>
        <p>{content}</p>
    </div>
);

export default DetailItem;
