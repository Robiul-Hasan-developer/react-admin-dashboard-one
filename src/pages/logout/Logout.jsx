import React from 'react';
import logoutIcon from '../../assets/icons/log-out.png';

import './external-card.scss';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <div className='external-page'>
            <div className="page-card">
                <span className="page-card__icon">
                    <img src={logoutIcon} alt="" />
                </span>
                <div className="page-card__content">
                    <h5 className="page-card__title mb-1">You are Logged Out</h5>
                    <p className="page-card__desc mb-4">Thank you for using <strong className='fs-14'>React Admin Dashboard</strong> </p>
                    <Link to="/login" className='btn btn-info bg-info border-0 text-info bg-opacity-10 fw-semibold'> Sign In </Link>
                </div>
            </div>
        </div>
    );
};

export default Logout;