import { useReducer, useEffect } from 'react';

const initialState = {
  modalData: null,
  isLikedIcon: undefined,
  isModalOpen: false,
  photos: [],
  topics: [],
  selectedTopicId: null,
  close: false,
  likedItems: [],
  likeStatusStorage: [],
  favIconStatus: false,
  favIconClick: false
};

const reducer = (state, action) => {
  
  switch (action.type) {
  case 'SET_MODAL_DATA':
    return { ...state, modalData: action.payload };
  case 'TOGGLE_FAV_ICON_CLICK':
    return { ...state, favIconClick: !state.favIconClick };
  case 'SET_FAV_ICON_STATUS':
    return { ...state, favIconStatus: action.payload };
  case 'OPEN_MODAL':
    return { ...state, isModalOpen: true };
  case 'CLOSE_MODAL':
    return { ...state, isModalOpen: false };
  case 'SET_PHOTO_FAV_BUTTON_LIKED':
    return { ...state, isLiked: action.payload };
  case 'SET_LIKE_DATA': {
    const { itemId, isLiked } = action.payload;

    
    const updatedLikedItems = isLiked
      ? [...state.likedItems, itemId]
      : state.likedItems.filter((id) => id !== itemId);

    return {
      ...state,
      likedItems: updatedLikedItems,
      likeStatusStorage: [...state.likeStatusStorage, { itemId, isLiked }],
    };
  }
  case 'SET_PHOTOS':
    return { ...state, photos: action.payload };
  case 'SET_TOPICS':
    return { ...state, topics: action.payload };
  case 'GET_PHOTOS_BY_TOPICS':
    return { ...state, topics: action.payload };
  case 'SET_SELECTED_TOPIC_ID':
    return { ...state, selectedTopicId: action.payload };
  case 'TOGGLE_CLOSE':
    return { ...state, close: !state.close };
  case 'SET_LIKED_ICON':
    return { ...state, isLikedIcon: action.payload };
  case 'REMOVE_TOPIC_FILTER':
    return {
      ...state,
      selectedTopicId: null,
    };
  default:
    return state;
  }
};
const useApplicationData = function(selectedTopicId, isLikedIcon) {
  const [state, dispatch] = useReducer(reducer, initialState);


  const modalClick = (data) => {
    dispatch({ type: 'SET_MODAL_DATA', payload: data });
    dispatch({ type: 'OPEN_MODAL' });
  };

  const toggleClose = () => {
    dispatch({ type: 'TOGGLE_CLOSE' });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLikeStatusChange = (itemId, isLiked) => {
    console.log('handleLikeStatusChange called with itemId:', itemId, 'isLiked:', isLiked);

    const updatedLikedItems = isLiked
      ? [...state.likedItems, itemId]
      : state.likedItems.filter((id) => id !== itemId);


    dispatch({ type: 'SET_LIKE_DATA', payload: { itemId, isLiked } });
    dispatch({ type: 'SET_LIKED_ICON', payload: isLiked });
    dispatch({ type: 'SET_FAV_ICON_STATUS', payload: isLiked });

  };

  const handleLogoClick = () => {
    // Add a new action to the dispatch to remove the topic filter
    dispatch({ type: 'REMOVE_TOPIC_FILTER' });
  };

  const handlePhotoFavButtonClick = (itemId) => {
    const updatedIsLiked = !state.isLiked;

    
    dispatch({ type: 'SET_PHOTO_FAV_BUTTON_LIKED', payload: updatedIsLiked });
    handleLikeStatusChange(itemId, updatedIsLiked);
  };


  const handleFavIconClick = () => {
    dispatch({ type: 'SET_FAV_ICON_CLICKED', payload: !state.favIconClicked });
  };

  const handleTopicSelect = (selectedTopic) => {
    dispatch({ type: 'SET_SELECTED_TOPIC_ID', payload: selectedTopic.id });
  };

  

  const handleUpdateLikeResults = (results) => {
    dispatch({ type: 'UPDATE_LIKE_RESULTS', payload: results });
  };

  useEffect(() => {
    const photosURL = state.selectedTopicId
      ? `/api/topics/photos/${state.selectedTopicId}`
      : `/api/photos`;
  
    fetch(photosURL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTOS', payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [state.selectedTopicId]);


  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPICS', payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics data:", error);
      });
  }, []);




  return {
    ...state,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,
    handleUpdateLikeResults,
    toggleClose,
    handlePhotoFavButtonClick,
    handleLogoClick,
    isLikedIcon,
    likeStatusStorage: state.likedItems.map(itemId => ({
      itemId,
      isLiked: true,
    })),
    favIconStatus: state.favIconStatus,
  };
};

export default useApplicationData;

