import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NoteForm from '../NoteForm';

afterEach(cleanup);

test('NoteForm should add new note and call addNote when clicked Add button', () => {
    const addNote = jest.fn();
    const { getByText, getByPlaceholderText } = render(
        <NoteForm addNote={addNote} />
    );

    const newNote = 'Like the repo';
    fireEvent.change(getByPlaceholderText(/e.g. Remember to like the repo!/i), {
        target: { value: newNote }
    });
    getByText(/add/i).click();

    expect(addNote).toBeCalledWith({ title: newNote, id: newNote, errors: [] });
    expect(addNote).toHaveBeenCalledTimes(1);
});
