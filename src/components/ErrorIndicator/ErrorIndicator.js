import React from 'react';
import './ErrorIndicator.scss';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom"> Boom! </span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                ( but we already send droids to fix it )
            </span>
        </div>
    );
};

export default ErrorIndicator;