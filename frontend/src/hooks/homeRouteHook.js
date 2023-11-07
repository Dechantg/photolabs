import { useReducer, useEffect } from 'react';

const initialState = {
  likeResults: {},
  isLiked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_IS_LIKED':
    return { ...state, isLiked: action.payload };
  case 'SET_LIKE_DATA':
    return {
      ...state,
      likeResults: {
        ...state.likeResults,
        [action.payload.itemId]: action.payload.isLiked,
      },
    };
  default:
    return state;
  }
};

const useHomeRouteHook = (photos, likeDataModal, onTopicSelect, clickForModal) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTopicSelection = (topicData) => {
    onTopicSelect(topicData);
  };

  const handleArticleClick = (data) => {
    clickForModal(data);
  };

  useEffect(() => {
    const isLiked = Object.values(state.likeResults).some((liked) => liked === true);
    dispatch({ type: 'SET_IS_LIKED', payload: isLiked });
  }, [state.likeResults]);

  useEffect(() => {
    if (likeDataModal) {
      let processedData;
      if (likeDataModal.itemId && likeDataModal.isLiked) {
        processedData = {
          itemId: likeDataModal.itemId,
          isLiked: likeDataModal.isLiked,
        };
      } else if (likeDataModal.itemId && likeDataModal.itemId.itemId) {
        processedData = {
          itemId: likeDataModal.itemId.itemId,
          isLiked: likeDataModal.itemId.isLiked,
        };
      }

      dispatch({ type: 'SET_LIKE_DATA', payload: processedData });
    }
  }, [likeDataModal]);

  return {
    isLiked: state.isLiked,
    likeData: (data) => dispatch({ type: 'SET_LIKE_DATA', payload: data }),
    handleTopicSelection,
    handleArticleClick,
  };
};

export default useHomeRouteHook;