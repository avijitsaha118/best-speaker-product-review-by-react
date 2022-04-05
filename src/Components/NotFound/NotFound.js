import React from 'react';
import ErrorImage from '../../Images/404error.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>OPPS! 404 Error </h1>
            <img src={ErrorImage} alt='error'></img>
        </div>
    );
};

export default NotFound;