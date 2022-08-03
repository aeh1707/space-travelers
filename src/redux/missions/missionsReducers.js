import { RESERVE, LEAVE } from './missionActions';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MISSIONS/fulfilled':
      return action.payload;
    case RESERVE:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        } return mission;
      });
    case LEAVE:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        } return mission;
      });
    default:
      return state;
  }
};

export default missionReducer;
