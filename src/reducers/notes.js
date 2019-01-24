import { ADD_NOTE, DELETE_NOTE } from '../constants/actionTypes';

const INITIAL_STATE = [{ title: 'Note 1', id: 1 }, { title: 'Note 2', id: 2 }];

function noteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_NOTE: {
            return [...state, action.note];
        }
        case DELETE_NOTE: {
            return state.filter((note, index) => index !== action.noteIndex);
        }
        default: {
            return state;
        }
    }
}

export default noteReducer;
