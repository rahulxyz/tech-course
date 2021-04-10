import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer';

const middleware = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

export const store = createStore(reducer, enhancer);
