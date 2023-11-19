import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    const updatedIsLiked = !isLiked;
  
      
    setIsLiked(updatedIsLiked);
    props.likeStatus(props.itemId, updatedIsLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon buttonVersion={props.buttonVersion}
          likeStatus={props.likeStatus}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;