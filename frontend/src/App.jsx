import React from 'react';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
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
  } = useApplicationData(); // Use the custom hook here

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