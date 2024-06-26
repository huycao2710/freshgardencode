import React from 'react';
import { useLocation } from 'react-router-dom';

const FailurePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const trans_id = queryParams.get('trans_id');

    return (
        <div>
            <h1>Payment Failed</h1>
            <p>Your transaction ID is {trans_id}</p>
        </div>
    );
};

export default FailurePage;