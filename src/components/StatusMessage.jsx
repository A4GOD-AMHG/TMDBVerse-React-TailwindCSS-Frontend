import React from 'react';

const StatusMessage = ({ type = 'empty', children }) => (
    <div
        role={type === 'error' ? 'alert' : 'status'}
        className={`status-message ${type === 'error' ? 'status-error' : ''}`}
    >
        <span aria-hidden="true" className="text-3xl">{type === 'error' ? '⚠️' : '🎬'}</span>
        <p>{children}</p>
    </div>
);

export default StatusMessage;
