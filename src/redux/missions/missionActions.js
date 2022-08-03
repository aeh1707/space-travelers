import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'GET_MISSIONS';

const fetchMissions = createAsyncThunk(
  GET_MISSIONS, async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const dataArr = [];
    data.forEach((mission) => {
      dataArr.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      });
    });
    return dataArr;
  },
);
export default fetchMissions;
