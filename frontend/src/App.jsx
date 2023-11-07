import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
// import photos from "mocks/photos";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const Log = ({ data }) => {
  return null; // Render nothing (null) in the actual DOM
};


const App = () => {

  const {
    modalData,
    isModalOpen,
    likeDataModal,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,
    handleFavIconClick,
    isLikedIcon,
    photos,
    topics,
    handleUpdateLikeResults,
  } = useApplicationData();




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