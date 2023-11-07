import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({
  id,
  urls,
  user,
  location,
  onClick,
}) => {
  const handleArticleClick = () => {
    if (onClick) {
      onClick({ id, urls, user, location });
    }
  };

  return (
    <div  onClick={handleArticleClick}>
      <img
        src={urls.regular}
        alt="User's Image"
        className="photo-list__image"
      />
      <span className="photo-list__user-details">
        <span className="photo-list__user-info">
          <img src={user.profile} alt="Profile" className="photo-list__user-profile" />
          <p className="photo-list__username">{user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </span>
      </span>
    </div>
  );
};

export default PhotoListItem;
