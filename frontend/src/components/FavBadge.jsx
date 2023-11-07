import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// pass favIcon
const FavBadge = ({ liked }) => {
  return (
    <div className="fav-badge">
      <FavIcon selected={liked} />
    </div>
  );
};

export default FavBadge;