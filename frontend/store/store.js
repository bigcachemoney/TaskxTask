import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk.js';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)));

export default configureStore;