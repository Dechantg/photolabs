import React from 'react';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const {
    modalData,
    isModalOpen,
    likeDataModal,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,
    photos,
    topics,
  } = useApplicationData();

  
 
  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        clickForModal={modalClick}
        likeDataModal={likeDataModal}
        onTopicSelect={handleTopicSelect}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          photos={photos}
          modalData={modalData}
          onModalClose={closeModal}
          onLikeStatusChange={handleLikeStatusChange}
        />
      )}
    </div>
  );
};

export default App;