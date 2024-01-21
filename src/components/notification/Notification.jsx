import React from 'react';
import { notificationItem } from "../../data/data";

const Notification = () => {
    return (
        <div className="notification-dropdown">
            <div className="notification-dropdown__header">
                <h6 className="notification-dropdown__title mb-0">Notifications</h6>
            </div>
            <div className="notification-dropdown__body">
                {
                    notificationItem.map((ntItem, index) => (
                    <div className="notification-dropdown__item d-flex gap-2" key={index}>
                        <div className="notification-dropdown__thumb">
                            <img src={ntItem.image} alt="" />
                        </div>
                        <div className="notification-dropdown__content">
                            <h6 className="notification-dropdown__name"> {ntItem.name} <span className="notification-dropdown__desc">{ntItem.desc}</span> </h6>
                            <span className="notification-dropdown__time">{ntItem.time}</span>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Notification;