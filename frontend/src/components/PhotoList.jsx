import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map((photoData) => {
        const isLiked = props.likeStatusStorage.some((item) => item.itemId === photoData.id);
        const buttonVersion = isLiked ? 'liked' : 'normal';

        return (
          <li key={photoData.id} className="photo-list__item">
            <PhotoFavButton
              itemId={photoData.id}
              likeStatus={props.likeStatus}
              buttonVersion={buttonVersion}
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
        );
      })}
    </ul>
  );
};

export default PhotoList;