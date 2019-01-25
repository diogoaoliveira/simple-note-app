function getAllNotesMainPage(state) {
    return state.notes.MAIN;
}

function getAllNotesDialog(state) {
    return state.notes.DIALOG;
}

function checkNotesMainPageAvailable(state) {
    return state.notes.MAIN.length > 0;
}

function checkNotesDialogAvailable(state) {
    return state.notes.DIALOG.length > 0;
}

export {
    getAllNotesDialog,
    getAllNotesMainPage,
    checkNotesMainPageAvailable,
    checkNotesDialogAvailable
};
