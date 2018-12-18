import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import axios from "axios";

let initialState = {};

const reducer = (prevState = initialState, action) => {
  let newState = Object.assign({}, prevState);

  switch (action.type) {
    default:
      return prevState;
  }
};

export default createStore(
  rootReducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);
