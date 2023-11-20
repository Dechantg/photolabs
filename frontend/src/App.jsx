import React from "react";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    modalData,
    isModalOpen,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,
    isLikedIcon,
    favIconStatus,
    photos,
    topics,
    likeStatusStorage,
    handleLogoClick,
  } = useApplicationData();
  

 

  const handleArticleClick = (data) => {
    // Handle article click
    modalClick(data);
  };

 

  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        onTopicSelect={handleTopicSelect}
        isLikedIcon={isLikedIcon}
        handleArticleClick={handleArticleClick}
        likeStatus={handleLikeStatusChange}
        likeStatusStorage={likeStatusStorage}
        favIconStatus={favIconStatus}
        handleLogoClick={handleLogoClick}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          photos={photos}
          modalData={modalData}
          onModalClose={closeModal}
          likeStatus={handleLikeStatusChange}
          likeStatusStorage={likeStatusStorage}

        />
      )}
    </div>
  );
};

export default App;