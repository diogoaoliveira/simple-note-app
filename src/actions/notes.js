import {
    ADD_NOTE,
    ADD_NOTE_START,
    DELETE_NOTE
} from '../constants/actionTypes';

const addNote = (newNote, page) => ({
    type: ADD_NOTE,
    note: newNote,
    page
});

const deleteNote = noteIndex => ({
    type: DELETE_NOTE,
    noteIndex
});

const addNoteWithTimeout = newNote => ({
    type: ADD_NOTE_START,
    note: newNote
});

export { addNote, addNoteWithTimeout, deleteNote };
