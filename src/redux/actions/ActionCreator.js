import { ADD_NOTES } from './ActionsTypes';

// addNote function is excecuted when onClick action is triggered 
// in submit button of addNote Page
// Every action has a type and a payload
// All Action types are defined in ActionsTypes.js
// Action by default pass to reducers
let noteId = 2;
export const addNote = note => (
    {
        type: ADD_NOTES,
        id: noteId,
        note
    }
)