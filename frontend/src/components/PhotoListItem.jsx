import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton itemId={props.id} />
      <img src={props.imageSource}
        alt="User's Image"
        className="photo-list__image"
      />

      <span className="photo-list__user-details">

        <span className="photo-list__user-info">
          <img src={props.profile} alt="Profile" className="photo-list__user-profile" />

          <p className="photo-list__username">{props.username}</p>
          
          <p className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </p>
        </span>
      </span>
    </article>
  );
};


export default PhotoListItem;
