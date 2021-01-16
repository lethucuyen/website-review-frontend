import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const store = createStore(
	rootReducer,
	applyMiddleware(
		promise,
		thunk, // neat middleware that logs actions
		logger // lets us dispatch() functions
	)
);

export default store;
