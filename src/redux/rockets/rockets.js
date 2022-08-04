const GET_ROCKETS = 'GET_ROCKETS';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const LEAVE_ROCKET = 'LEAVE_ROCKET';

export const reserveRocket = (id) => ({ type: RESERVE_ROCKET, payload: id });
export const leaveRocket = (id) => ({ type: LEAVE_ROCKET, payload: id });

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        } return rocket;
      });
    case LEAVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.mission_id === action.payload) {
          return { ...rocket, reserved: false };
        } return rocket;
      });
    default:
      return state;
  }
};

export default rocketReducer;
