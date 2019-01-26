import dialogReducer, { INITIAL_STATE } from '../dialog';
import { TOGGLE_DIALOG } from '../../constants/actionTypes';

describe('Dialog Reducer', () => {
    it('should return the initial state', () => {
        expect(dialogReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle TOGGLE_DIALOG', () => {
        const action = { type: TOGGLE_DIALOG };
        expect(dialogReducer(INITIAL_STATE, action)).toEqual({
            showDialog: !INITIAL_STATE.showDialog
        });
    });
});
