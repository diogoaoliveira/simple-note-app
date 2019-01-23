import { combineReducers } from 'redux';
import notesReducer from './notes';
import dialogReducer from './dialog';

const rootReducer = combineReducers({
    notes: notesReducer,
    dialog: dialogReducer
});

export default rootReducer;
