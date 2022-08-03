import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsReducers';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
