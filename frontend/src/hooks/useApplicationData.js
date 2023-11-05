import { useReducer } from 'react';

const initialState = {
  modalData: null,
  isModalOpen: false,
  likeDataModal: null,
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
  default:
    return state;
  }
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalClick = (data) => {
    dispatch({ type: 'SET_MODAL_DATA', payload: data });
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLikeStatusChange = (itemId, isLiked) => {
    dispatch({ type: 'SET_LIKE_DATA', payload: { itemId, isLiked } });
  };

  const handleTopicSelect = (selectedTopic) => {
    console.log("Topic selected in App:", selectedTopic);
  };

  return {
    ...state,
    modalClick,
    closeModal,
    handleLikeStatusChange,
    handleTopicSelect,
  };
};

export default useApplicationData;