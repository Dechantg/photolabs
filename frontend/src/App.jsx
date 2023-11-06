import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
// import photos from "mocks/photos";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const Log = ({ data }) => {
  console.log("here is the data log from the begining of the app.jsx: ",data); // Log the data
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
    photos,
    topics,
  } = useApplicationData();

  console.log('isModalOpen:', isModalOpen);



  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        clickForModal={modalClick}
        likeDataModal={likeDataModal}
        onTopicSelect={handleTopicSelect}
      />


      {isModalOpen && <PhotoDetailsModal photos={photos} modalData={modalData} onModalClose={closeModal} onLikeStatusChange={handleLikeStatusChange}/>}
    </div>
  );
};

export default App;