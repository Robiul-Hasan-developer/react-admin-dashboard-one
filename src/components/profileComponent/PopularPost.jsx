import React from "react";
import { popularPosts } from "../../data/data";
import "./popularPost.scss";

const PopularPost = () => {
  return (
    <div className="dashboard-card widget-item">
      <div className="dashboard-card__header text-start">
        <span className="widget-item__title text--heading fw-bolder">
          User Info
        </span>
      </div>
      <div className="dashboard-card__body">
        {
          popularPosts.map((popularPost, index) => {
            return (
              <div className="popular-post d-flex gap-2" key={index}>
                <div className="popular-post__thumb">
                  <img src={popularPost.image} alt="" />
                </div>
                <div className="popular-post__content">
                  <h6 className="popular-post__title mb-1">{popularPost.title}</h6>
                  <span className="popular-post__date fs-14">{popularPost.date}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PopularPost;
