import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  const handleArticleClick = () => {
    if (props.onClick) {
      props.onClick({ id: props.id, urls: props.urls, user: props.user, location });
    }
  };

  return (
    <div  onClick={handleArticleClick}>
      <img
        src={props.urls.regular}
        alt="User's Image"
        className="photo-list__image"
      />
      <span className="photo-list__user-details">
       

        <span className="photo-list__user-info">
          <img src={props.user.profile} alt="Profile" className="photo-list__user-profile" />
          <p className="photo-list__username">{props.user.name}</p>
          <p className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </p>
        </span>
      </span>
    </div>
  );
};

export default PhotoListItem;
