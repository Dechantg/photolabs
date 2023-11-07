import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {

  const handleItemClick = (topicData) => {
    // Pass the clicked topic data up to the parent component
    props.onItemClick(topicData);
  };


  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topicData) => (
        // Wrap the TopicListItem with a clickable element
        <div key={topicData.id} onClick={() => handleItemClick(topicData)}>
          <TopicListItem {...topicData} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
