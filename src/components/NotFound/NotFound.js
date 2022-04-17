import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='not-found d-flex align-items-center justify-content-center'>
            <div className='text-success error-text px-5 py-5'>
                <h1 className='text-center'>404 Error</h1>
                <h2 className='text-center'>Page Not Found</h2>
            </div>
        </div>
    );
};

export default NotFound;