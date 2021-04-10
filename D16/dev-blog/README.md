# Redux Setup

npm i --save react-redux redux redux-thunk

chrome extension Redux Devtools

Update:
index.js
store.js
reducer.js


# index.js
```
import { Provider } from 'react-redux'
import {store} from './store/store'; 

<Provider store={store}>
</Provider>
```

# store.js
```
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer';

const middleware = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

export const store = createStore(reducer, enhancer);
```

# reducer.js
```
const initialState = {
    appStore: true
}

function app(state= initialState, action){

    switch(action.type){
        default: return state;
    }
}

export default app;
```
