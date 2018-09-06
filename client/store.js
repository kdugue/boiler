import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

let initialState = {};

const reducer = (prevState = initialState, action) => {
  let newState = Object.assign({}, prevState);

  switch (action.type) {
    default:
      return prevState;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
