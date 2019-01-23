import { ADD_NOTE } from '../constants/actionTypes';

const addNote = newNote => ({
    type: ADD_NOTE,
    note: newNote
});

export { addNote };
