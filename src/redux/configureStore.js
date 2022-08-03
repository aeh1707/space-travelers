import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missionsReducers';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
