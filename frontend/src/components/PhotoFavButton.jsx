import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = ({ itemId }) => {

  const handleClick = () => {
    // Use the itemId to identify the clicked article
    console.log(`Button clicked for article with ID ${itemId}`);
  };


  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">

        <FavIcon button onClick={handleClick} />
        {/* Insert React */}
      </div>
    </div>
  );
};

export default PhotoFavButton;