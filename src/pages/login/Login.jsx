import React from 'react';

import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';

const Login = () => {
    return (
        <div className='external-page'>
            <div className="page-card">
                <span className="page-card__top">
                    <h5 className="page-card__welcome text-info mb-0">Welcome Back!</h5>
                    <p className="page-card__desc fs-14">Sign in to continue to Admin Dashboard</p>
                </span>
                <div className="page-card__content">
                    <form action="#">
                        <div className="form-group mb-3">
                            <Input inputType="text" inputPlaceholder="Enter Username" labelText="Username" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="text-start d-block fw-semibold mb-1 fs-14"> Password</label>
                            <input type="password" className='form-control' placeholder="Enter Password" />
                        </div>
                        <Link to="/" className='btn btn-info bg-info border-0 text-info bg-opacity-10 fw-semibold'> Sign In </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;