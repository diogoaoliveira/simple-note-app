import notesReducer, { INITIAL_STATE } from '../notes';
import { ADD_NOTE, DELETE_NOTE } from '../../constants/actionTypes';

describe('Notes Reducer', () => {
    it('should return the initial state', () => {
        expect(notesReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle ADD_NOTE for the MAIN page', () => {
        const action = {
            type: ADD_NOTE,
            note: { title: 'New note', id: 'New note', errors: [] },
            page: 'MAIN'
        };
        expect(notesReducer(INITIAL_STATE, action)).toEqual({
            ...INITIAL_STATE,
            MAIN: [
                ...INITIAL_STATE.MAIN,
                { title: 'New note', id: 'New note', errors: [] }
            ]
        });
    });

    it('should handle ADD_NOTE for the DIALOG page', () => {
        const action = {
            type: ADD_NOTE,
            note: { title: 'New note', id: 'New note', errors: [] },
            page: 'DIALOG'
        };
        expect(notesReducer(INITIAL_STATE, action)).toEqual({
            ...INITIAL_STATE,
            DIALOG: [
                ...INITIAL_STATE.DIALOG,
                { title: 'New note', id: 'New note', errors: [] }
            ]
        });
    });

    it('should handle DELETE_NOTE', () => {
        const action = {
            type: DELETE_NOTE,
            noteIndex: 0
        };
        expect(notesReducer(INITIAL_STATE, action)).toEqual({
            MAIN: [{ title: 'Note 2', id: 2 }],
            DIALOG: [{ title: 'Note 2', id: 2 }]
        });
    });
});
