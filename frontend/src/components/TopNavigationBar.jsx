
import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

// { topics, isLiked, onTopicSelect, onFavIconClick   }

const TopNavigation = (props) => {


  // console.log("the in topnav liked check", props.isLiked);

 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} onItemClick={props.onTopicSelect} />
      <FavIcon selected={true} displayDot={props.isLiked} onClick={props.onFavIconClick} />

    </div>
  );
};

export default TopNavigation;