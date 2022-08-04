import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'GET_ROCKETS';

const fetchRockets = createAsyncThunk(
  GET_ROCKETS, async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const RocketsList = [];
    data.forEach((rocket) => {
      RocketsList.push({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
        reserved: false,
      });
    });
    return RocketsList;
  },
);

export default fetchRockets;
