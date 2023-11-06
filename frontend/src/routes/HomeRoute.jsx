
import React, { useState, useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, clickForModal, likeDataModal, onTopicSelect }) => {
  const [likeResults, setLikeResults] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  // const [likeDataModalState, setLikeDataModalState] = useState(null);

  const handleTopicSelection = (topicData) => {
    // Do something with the selected topic data
    console.log("Selected topic:", topicData);
    onTopicSelect(topicData);
  };



  const handleArticleClick = (data) => {
    clickForModal(data);
    console.log("Article clicked up high with data:", data);
  };

  useEffect(() => {

    setIsLiked(Object.values(likeResults).some((liked) => liked === true));
  }, [likeResults]);

  useEffect(() => {
    if (likeDataModal) {
      let processedData;
      if (likeDataModal.itemId && likeDataModal.isLiked) {
        processedData = {
          itemId: likeDataModal.itemId,
          isLiked: likeDataModal.isLiked,
        };
      } else if (likeDataModal.itemId && likeDataModal.itemId.itemId) {
        processedData = {
          itemId: likeDataModal.itemId.itemId,
          isLiked: likeDataModal.itemId.isLiked,
        };
      }
    
      likeData(processedData);
    }
  }, [likeDataModal]);


  const likeData = (data) => {

    setLikeResults((prevLikeResults) => ({
      ...prevLikeResults,
      [data.itemId]: data.isLiked,
    }));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked} onTopicSelect={handleTopicSelection} />
      <PhotoList photos={photos} likeStatus={likeData} onClick={handleArticleClick} />
    </div>
  );
};


export default HomeRoute;
