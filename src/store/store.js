import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const reducer = combineReducers({});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancers);

export default store;
