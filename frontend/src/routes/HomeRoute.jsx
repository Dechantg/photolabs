import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import useHomeRouteHook from '../hooks/homeRouteHook';

import '../styles/HomeRoute.scss';

//{ photos, topics, clickForModal, likeDataModal, onTopicSelect }

const HomeRoute = (props) => {
  const {
    isLiked,
    likeData,
    handleTopicSelection,
    handleArticleClick,
    likeResults,
  } = useHomeRouteHook(props.photos, props.likeDataModal, props.onTopicSelect, props.clickForModal);

  const [favIconClicked, setFavIconClicked] = useState(false);


  console.log("is liked from homeroute", isLiked);
  console.log("likeresults from inside the homeroute but i am serious", likeResults);
  // console.log("like status/data from home route", likeData);

  const handleFavIconClick = () => {
    console.log("FavIcon button was clicked");
    console.log("photos object", props.photos);
    setFavIconClicked(!favIconClicked);
  };

  const filteredPhotos = favIconClicked ? props.photos.filter((photo) => photo.id in likeResults) : props.photos;


  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        isLiked={isLiked}
        onTopicSelect={handleTopicSelection}
        onFavIconClick={handleFavIconClick}
      />

      <PhotoList
        photos={filteredPhotos}
        likeStatus={likeData}
        onClick={handleArticleClick}
      />
    </div>
  );
};

export default HomeRoute;




