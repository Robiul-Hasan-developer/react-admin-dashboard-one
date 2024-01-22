import React, { useState } from 'react';
import { widgetContent } from '../../data/data';
import { Link } from 'react-router-dom';

const WidgetItem = () => {

    return (
       
        <div className="row gy-4 widget-item-wrapper">
            {
                widgetContent.map((widgetItem, index) => {
                    return (
                        <div className="col-xl-3 col-sm-6" key={index}>
                            <div className='widget-item'>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <span className="widget-item__title">{widgetItem.title}</span>
                                    {
                                        widgetItem.addedIcon ? (
                                            <span className="widget-item__calc text--success">
                                                {widgetItem.addedIcon} {widgetItem.added}
                                            </span>
                                        ) : (
                                            <span className="widget-item__calc text-danger">
                                                {widgetItem.minusIcon} {widgetItem.minus} 
                                            </span>
                                        ) 
                                    }
                                </div>
                                <h4 className="widget-item__amount">{widgetItem.amount}</h4>
                                <div className='d-flex justify-content-between align-items-end'>
                                    <Link to="/" className='widget-item__link'>{widgetItem.link}</Link>
                                    <span className="widget-item__icon"> {widgetItem.icon} </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    );
};

export default WidgetItem;
