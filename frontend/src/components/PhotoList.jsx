import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

// { photos, likeStatus, onClick }

const PhotoList = (props) => {

  
  const handleLikeStatusChange = (itemId, isLiked) => {
    const likeStatusData = { itemId, isLiked, photos: props.photos };
    props.likeStatus(likeStatusData);
  };

  return (
    <ul className="photo-list">
      {props.photos.map((photoData) => (
        <li key={photoData.id} className="photo-list__item">
          <PhotoFavButton
            itemId={photoData.id}
            onLikeStatusChange={handleLikeStatusChange}
          />
          <PhotoListItem
            {...photoData}
            onClick={(data) => {
              if (props.onClick) {
                props.onClick(data);
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
};


export default PhotoList;