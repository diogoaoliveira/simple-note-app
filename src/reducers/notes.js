import { ADD_NOTE, DELETE_NOTE } from '../constants/actionTypes';

const INITIAL_STATE = {
    MAIN: [{ title: 'Note 1', id: 1 }, { title: 'Note 2', id: 2 }],
    DIALOG: [{ title: 'Note 1', id: 1 }, { title: 'Note 2', id: 2 }]
};

function noteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_NOTE: {
            return {
                ...state,
                [action.page]: [...state[action.page], action.note]
            };
        }
        case DELETE_NOTE: {
            return {
                MAIN: state.MAIN.filter(
                    (note, index) => index !== action.noteIndex
                ),
                DIALOG: state.DIALOG.filter(
                    (note, index) => index !== action.noteIndex
                )
            };
        }
        default: {
            return state;
        }
    }
}

export default noteReducer;
