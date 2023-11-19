import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import "../styles/PhotoList.scss";
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  const modalPhotoData = props.photos.find(photo => photo.id === props.modalData.id);

  if (!modalPhotoData) {
    return null;
  }



  const similarPhotos = props.photos.find(item => item.id === props.modalData.id)?.similar_photos;
  const filteredSimilarPhotos = (similarPhotos || []).filter(filteredPhoto => filteredPhoto.id !== props.modalData.id).map(filteredPhoto => ({
    id: filteredPhoto.id,
    location: filteredPhoto.location,
    urls: filteredPhoto.urls,
    user: filteredPhoto.user,
  }));


  
  const isLiked = props.likeStatusStorage.some(item => item.itemId === props.modalData.id);
  const buttonVersion = isLiked ? 'liked' : 'normal';

  return (
    <div className="photo-details-modal">
      <span className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={props.onModalClose} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </span>
      <span>
        <article className='photo-details-modal__article'>
          <div className="photo-details-modal__photo-container">
            <PhotoFavButton
              itemId={props.modalData.id}
              likeStatus={props.likeStatus}
              buttonVersion={buttonVersion}
            />
            <img
              src={modalPhotoData.urls.full}
              alt="User's Image"
              className="photo-details-modal__image"
            />
          </div>
          <div>
            <p>
              <img
                src={modalPhotoData.user.profile}
                alt="User's Image"
                className="photo-details-modal__photographer-profile"
              />
            </p>
            <span>
              <p className="photo-list__username">{modalPhotoData.user.name}</p>
              <p className="photo-list__user-location">
                {modalPhotoData.location.city}, {modalPhotoData.location.country}
              </p>
            </span>
          </div>
        </article>
        <div>
          <span>
            <li className='photo-details-modal__images'>
              Similar Photos:
              <PhotoList
                photos={filteredSimilarPhotos}
                likeStatus={props.likeStatus}
                likeStatusStorage={props.likeStatusStorage}
              />
            </li>
          </span>
        </div>
      </span>
    </div>
  );
};

export default PhotoDetailsModal;