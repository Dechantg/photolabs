import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = ({ itemId }) => {

  const [isLiked, setIsLiked] = useState(false);


  const handleClick = () => {

    console.log(`Button clicked for article with ID ${itemId}`);

    if (!isLiked) {
      console.log("Button state changed from normal to liked");
    } else if (isLiked) {
      console.log("Button state changed from liked to normal");
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);

  };


  return (
    <div className={`photo-list__fav-icon ${isLiked ? 'photo-list__fav-icon-liked' : ''}`}>
      <div className="photo-list__fav-icon-svg">

        <FavIcon button onClick={handleClick} />
        {/* Insert React */}
      </div>
    </div>
  );
};

export default PhotoFavButton;