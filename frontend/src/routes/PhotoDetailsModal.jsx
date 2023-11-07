import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import "../styles/PhotoList.scss";
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ photos, modalData, onModalClose, onLikeStatusChange }) => {

  // pull similar photos from modalData id
  const similarPhotos = photos.find(item => item.id === modalData.id)?.similar_photos;
  // filter out the modalData id from the list of similar photos to prevent repitition
  const filteredSimilarPhotos = (similarPhotos || []).filter(filteredPhoto => filteredPhoto.id !== modalData.id).map(filteredPhoto => ({
    id: filteredPhoto.id,
    location: filteredPhoto.location,
    urls: filteredPhoto.urls,
    user: filteredPhoto.user,
  }));


  const handleLikeStatusChange = (itemId, isLiked) => {
    const id = itemId.id || itemId;

    // Pass the id back to the parent component
    if (id) {
      onLikeStatusChange(id, isLiked);
    }
  };

  return (
    <div className="photo-details-modal">
      <span className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={onModalClose} selected={close}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </span>
      <span >


        <article className='photo-details-modal__article'>
          <div className="photo-details-modal__photo-container">
            <PhotoFavButton
              itemId={modalData.id}
              onLikeStatusChange={handleLikeStatusChange}
            />
            <img
              src={modalData.urls.full}
              alt="User's Image"
              className="photo-details-modal__image"
            />
          </div>
          <p>
            <img
              src={modalData.user.profile}
              alt="User's Image"
              className="photo-details-modal__photographer-profile"
            />
          </p>
          <p className="photo-list__username">{modalData.user.name}</p>
          <p className="photo-list__user-location">
            {modalData.location.city}, {modalData.location.country}
          </p>
        </article>
        <div>
          <span >
            <li className='photo-details-modal__images'>
              Similar Photos:


              <PhotoList photos={filteredSimilarPhotos} likeStatus={handleLikeStatusChange} />
            </li>
          </span>
        </div>

      </span>

    </div>
  );
};

export default PhotoDetailsModal;