import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import { ADD_NOTE_START } from '../constants/actionTypes';
import { addNote } from '../actions/notes';

function* addNoteWithTimeout(action) {
    yield delay(1000);
    yield put(addNote(action.note, 'DIALOG'));
    yield delay(2000);
    yield put(addNote(action.note, 'MAIN'));
}

function* watchAll() {
    yield all([takeEvery(ADD_NOTE_START, addNoteWithTimeout)]);
}

export default watchAll;
