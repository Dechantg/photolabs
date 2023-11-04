import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

const PhotoList = ({ photos, likeStatus, onClick }) => {

  console.log("here is the photos object from photolist", photos);
  
  const handleLikeStatusChange = (itemId, isLiked) => {
    const likeStatusData = { itemId, isLiked, photos };
    likeStatus(likeStatusData);
    console.log("in photo list checking for is liked", isLiked);
  };

  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <li key={photoData.id} className="photo-list__item">
          <PhotoFavButton
            itemId={photoData.id}
            onLikeStatusChange={handleLikeStatusChange}
          />
          <PhotoListItem
            {...photoData}
            onClick={(data) => {
              if (onClick) {
                onClick(data);
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
};


export default PhotoList;

