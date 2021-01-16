import authorizationReducer from "./authorizationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authorizationReducer: authorizationReducer
});

export default rootReducer;
