import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// pass favIcon
const FavBadge = (props) => {
  return (
    <div className="fav-badge">
      <FavIcon selected={props.liked} />
    </div>
  );
};

export default FavBadge;