import { ADD_NOTE, DELETE_NOTE } from '../constants/actionTypes';

const addNote = newNote => ({
    type: ADD_NOTE,
    note: newNote
});

const deleteNote = noteIndex => ({
    type: DELETE_NOTE,
    noteIndex
});

export { addNote, deleteNote };
