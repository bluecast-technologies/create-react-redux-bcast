import { ADD_NOTES } from '../actions/ActionsTypes';

const initialStates = {
    notesArray: [
        {
            id: 1,
            note: 'This note is created by default. You can add more notes by clicking add note button and delete notes by clicking delete note button.'
        }
    ]
}
// Reducers specify how the applicatons state changes in response to action sent to the store
// Actions only described what happened, but dont describe how the applications state changes
const addNoteReducer = (state = initialStates, action) => {
    switch (action.type) {
        case ADD_NOTES:
            let currentNotes = state.notesArray;
            currentNotes.push({
                id: action.id,
                note: action.note
            })
            state = {
                ...state,
                notesArray: currentNotes
            }
            return state;

        default:
            return state;
    }
}
export default addNoteReducer;