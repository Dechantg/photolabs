import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



const App = () => {
  //pass data from routes into hook for processing
  const {
    modalData,
    isModalOpen,
    likeDataModal,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,4
    handleFavIconClick,
    isLikedIcon,
    photos,
    topics,
    handleUpdateLikeResults,
  } = useApplicationData();



  // set react paths and pass variables in and out
  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        clickForModal={modalClick}
        likeDataModal={likeDataModal}
        onTopicSelect={handleTopicSelect}
        onFavIconClick={handleFavIconClick}
        onUpdateLikeResults={handleUpdateLikeResults}
        isLikedIcon={isLikedIcon}
      />


      {isModalOpen && <PhotoDetailsModal photos={photos} modalData={modalData} onModalClose={closeModal} onLikeStatusChange={handleLikeStatusChange}/>}
    </div>
  );
};

export default App;