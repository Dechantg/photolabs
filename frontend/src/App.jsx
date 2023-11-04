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

  const modalClick = (data) => {
    console.log("app showing off modal data", data);
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      <HomeRoute photos={photos} topics={topics} clickForModal={modalClick} />
      {isModalOpen && <PhotoDetailsModal photos={photos} modalData={modalData} onModalClose={closeModal} />}

    </div>
  );
};

export default App;
