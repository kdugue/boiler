export const initialState = {};

const rootReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
