import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceCheckout = () => {
    const {id} = useParams();

    return (
        <div>
            checkout {id}
        </div>
    );
};

export default ServiceCheckout;