// A store holds the whole state tree of your application.
// The only way to change the state inside it is to dispatch an action on it.

import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from '../reducers/MainReducer';

// Creating a store for the Application
// Reducers are combined in Main Reducers
export default createStore(MainReducer);