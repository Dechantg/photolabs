import React from 'react';
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
  } = useHomeRouteHook(props.photos, props.likeDataModal, props.onTopicSelect, props.clickForModal);

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isLiked={isLiked} onTopicSelect={handleTopicSelection} />
      <PhotoList photos={props.photos} likeStatus={likeData} onClick={handleArticleClick} />
    </div>
  );
};

export default HomeRoute;




