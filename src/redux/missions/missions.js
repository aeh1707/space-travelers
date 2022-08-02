import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'GET_MISSIONS';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MISSIONS/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export const fetchMissions = createAsyncThunk(
  GET_MISSIONS, async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const dataArr = [];
    data.forEach((mission) => {
      dataArr.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        joined: false,
      });
    });
    return dataArr;
  },
);

export default missionReducer;
