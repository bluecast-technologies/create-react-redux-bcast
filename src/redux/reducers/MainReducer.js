import { combineReducers } from 'redux';
import addNoteReducer from './NotesReducer';

// This method combines all the reducers into one list of reducers 
// where every reducer handles its part of the app’s state
export default combineReducers({
    addNoteReducer
})