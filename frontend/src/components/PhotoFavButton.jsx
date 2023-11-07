import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    const updatedIsLiked = !isLiked;
  
    if (!updatedIsLiked) {
      console.log("Button state changed from normal to liked");
    } else {
      console.log("Button state changed from liked to normal");
    }
  
    setIsLiked(updatedIsLiked);
    props.onLikeStatusChange(props.itemId, updatedIsLiked);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon button onClick={handleClick} selected={isLiked} />
      </div>
    </div>
  );
};

export default PhotoFavButton;