import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import "../styles/PhotoList.scss";

const PhotoDetailsModal = ({ photos, modalData, onModalClose }) => {
  const [close, setClosed] = useState(false);

  const handleClick = () => {
    setClosed(!close);
    onModalClose(!close);
  };

  const similarPhotos = photos.find(photo => photo.id === modalData.id)?.similarPhotos;
  console.log('Similar Photos:', similarPhotos);

  const filteredSimilarPhotos = similarPhotos
    ? Object.values(similarPhotos).filter(photo => photo.id !== modalData.id)
    : [];
  console.log('Filtered Similar Photos:', filteredSimilarPhotos);


  console.log("here is the clicky click from modal data", modalData);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick} selected={close}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <span >


        <article >
          <img
            src={modalData.urls.full}
            alt="User's Image"
            className="photo-details-modal__image"
          />
          <span>
            <img
              src={modalData.user.profile}
              alt="User's Image"
              className="photo-details-modal__photographer-profile"
            />
            <p className="photo-list__username">{modalData.user.name}</p>
            <p className="photo-list__user-location">
              {modalData.location.city}, {modalData.location.country}
            </p>

            <div>
              <h1>Similar Photos:</h1>
              <ul>
                {filteredSimilarPhotos.map((photo, index) => (
                  <li key={index}>
                    <img src={photo.urls.regular} alt={`Similar Photo ${index}`} />
                  </li>
                ))}
              </ul>
            </div>
            

          </span>
        </article>
      </span>

    </div>
  );
};

export default PhotoDetailsModal;
