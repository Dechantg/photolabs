import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation

{/* <PhotoDetailsModal /> */ }

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likeDataModal, setLikeDataModal] = useState(null);


  const modalClick = (data) => {
    console.log("app showing off modal data", data);
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLikeStatusChange = (itemId, isLiked) => {
    console.log('we are looking here this time Received id from PhotoDetailsModal:', itemId);
    setLikeDataModal({ itemId, isLiked });

    // Handle the like status change in your parent component
    // You can update your state or perform any other necessary actions here
  };

  return (
    <div>

      <HomeRoute photos={photos} topics={topics} clickForModal={modalClick} likeDataModal={likeDataModal}/>

      {isModalOpen && <PhotoDetailsModal photos={photos} modalData={modalData} onModalClose={closeModal} onLikeStatusChange={handleLikeStatusChange}/>}

    </div>
  );
};

export default App;
