import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {


  const [favIconClicked, setFavIconClicked] = useState(false);


  const handleFavIconClick = () => {
    setFavIconClicked(!favIconClicked);
  };
 

  const filteredPhotos = favIconClicked
    ? props.photos.filter((photo) => props.likeStatusStorage.some((item) => item.itemId === photo.id))
    : props.photos;




  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        isLikedIcon={props.isLikedIcon}
        onTopicSelect={props.onTopicSelect}
        onFavIconClick={handleFavIconClick}
        favIconStatus={props.favIconStatus}
      />

      <PhotoList
        photos={filteredPhotos}
        likeStatus={props.likeStatus}
        onClick={props.handleArticleClick}
        likeStatusStorage={props.likeStatusStorage}
      />
    </div>
  );
};

export default HomeRoute;