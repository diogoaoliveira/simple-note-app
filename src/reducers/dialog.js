import { TOGGLE_DIALOG } from '../constants/actionTypes';

const INITIAL_STATE = { showDialog: false };

function dialogReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return { ...state, showDialog: !state.showDialog };
        default:
            return state;
    }
}

export default dialogReducer;
