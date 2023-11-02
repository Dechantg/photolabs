import React from 'react';

import PhotoListItem from './components/PhotoListItem';

import './App.scss';

// Note: Rendering a single component to build components in isolation

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const sampleDataForPhotoListItemTwo = {
  id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const sampleDataForPhotoListItemThree = {
  id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const App = () => {

  const photoArray = [sampleDataForPhotoListItem, sampleDataForPhotoListItemTwo, sampleDataForPhotoListItemThree];


  return (
    <div>

      {photoArray.map((photoData) => (
        <PhotoListItem key={photoData.id} {...photoData} />
      ))}

    </div>
  );
};

export default App;
