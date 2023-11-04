import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


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
      console.log("Article clicked with id:", id);
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
          <p className="photo-list__username">{user.username}</p>
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
