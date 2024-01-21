import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { portfolios } from '../../data/data';
import './ProfileSettingPortfolio.scss';

const ProfileSettingPortfolio = () => {
    
    return (
        <div className="profile-setting dashboard-card widget-item">
            <div className="dashboard-card__header d-flex flex-wrap justify-content-between align-items-center">
                <span className="widget-item__title text--heading fw-bolder">Portfolio</span>
                <button type="button" className='btn btn-info bg-info border-0 text-info bg-opacity-10 btn-sm'> <AddOutlinedIcon className='icon fs-16'/> Add New</button>
            </div>        
            <div className="dashboard-card__body">
                <ul className='portfolio-list'>
                    {
                        portfolios.map((portfolio, index) => {
                            return (
                                <li className='portfolio-list__item' key={index}>
                                    <span className={`portfolio-list__icon ${portfolio.text}`}> { portfolio.icon } </span>
                                    <input 
                                    type="text" 
                                    className='form-control' 
                                    placeholder={ portfolio.placeholder } 
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProfileSettingPortfolio;