import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import useHomeRouteHook from '../hooks/homeRouteHook';

import '../styles/HomeRoute.scss';


const HomeRoute = ({ photos, topics, clickForModal, likeDataModal, onTopicSelect }) => {
  const {
    isLiked,
    likeData,
    handleTopicSelection,
    handleArticleClick,
  } = useHomeRouteHook(photos, likeDataModal, onTopicSelect, clickForModal);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked} onTopicSelect={handleTopicSelection} />
      <PhotoList photos={photos} likeStatus={likeData} onClick={handleArticleClick} />
    </div>
  );
};

export default HomeRoute;




