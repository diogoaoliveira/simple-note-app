function getAllNotes(state) {
    return state.notes;
}

function checkNotesAvailable(state) {
    return state.notes.length > 0;
}

export { getAllNotes, checkNotesAvailable };
