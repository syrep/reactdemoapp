import counterReducer from "./counter";
import loginReducer from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});
//what this does is to call the combineReducers function, and then pass in the
// data similar to an array, but we are naming the reducers in a way that lets
// us access them globally later on. Shorthand is just putting reducer name and
// calling that, but it's not as easy to remember later

export default allReducers;
