import { useReducer, useEffect } from 'react';

const initialState = {
  modalData: null,
  isModalOpen: false,
  likeDataModal: null,
  photos: [],
  topics: [],
  selectedTopicId: null,
  close: false,
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_MODAL_DATA':
    return { ...state, modalData: action.payload };
  case 'OPEN_MODAL':
    return { ...state, isModalOpen: true };
  case 'CLOSE_MODAL':
    return { ...state, isModalOpen: false };
  case 'SET_LIKE_DATA':
    return { ...state, likeDataModal: action.payload };
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
    dispatch({ type: 'SET_LIKE_DATA', payload: { itemId, isLiked } });
    dispatch({ type: 'SET_LIKED_ICON', payload: isLiked });
  };

  const handleTopicSelect = (selectedTopic) => {
    dispatch({ type: 'SET_SELECTED_TOPIC_ID', payload: selectedTopic.id });
  };

  

  const handleUpdateLikeResults = (results) => {
    dispatch({ type: 'UPDATE_LIKE_RESULTS', payload: results });
  };

  useEffect(() => {
    const photosURL = state.selectedTopicId
      ? `${process.env.REACT_APP_API_BASE_URL}/api/topics/photos/${state.selectedTopicId}`
      : `${process.env.REACT_APP_API_BASE_URL}/api/photos`;
  
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
    fetch('${process.env.REACT_APP_API_BASE_URL}/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPICS', payload: data });
        console.log("Fetched topics data:", data);
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
    isLikedIcon,
  };
};

export default useApplicationData;

