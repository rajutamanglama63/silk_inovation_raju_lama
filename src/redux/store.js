import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer } from './reducers/authReducers'

const middleware = [thunk];

const reducers = combineReducers({
    auth : authReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;