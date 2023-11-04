
import React, { useState, useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, clickForModal }) => {
  const [likeResults, setLikeResults] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  const handleArticleClick = (data) => {
    clickForModal(data);
    console.log("Article clicked up high with data:", data);
  };

  useEffect(() => {
    setIsLiked(Object.values(likeResults).some((liked) => liked === true));
  }, [likeResults]);

  const likeData = (data) => {
    console.log("Like data received in HomeRoute:", data); // Add this log statement

    setLikeResults((prevLikeResults) => ({
      ...prevLikeResults,
      [data.itemId]: data.isLiked,
    }));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked} />
      <PhotoList photos={photos} likeStatus={likeData} onClick={handleArticleClick} />
    </div>
  );
};


export default HomeRoute;
