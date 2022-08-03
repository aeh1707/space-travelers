const missionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MISSIONS/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
