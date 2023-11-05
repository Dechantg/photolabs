
import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = ({ topics, isLiked, onTopicSelect  }) => {


  console.log("the in topnav liked check", isLiked);

 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onItemClick={onTopicSelect} />
      <FavIcon selected={true} displayDot={isLiked}>

      </FavIcon>
    </div>
  );
};

export default TopNavigation;