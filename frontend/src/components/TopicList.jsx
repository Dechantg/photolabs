import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics, onItemClick}) => {

  const handleItemClick = (topicData) => {
    // Pass the clicked topic data up to the parent component
    onItemClick(topicData);
  };


  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        // Wrap the TopicListItem with a clickable element
        <div key={topicData.id} onClick={() => handleItemClick(topicData)}>
          <TopicListItem {...topicData} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
