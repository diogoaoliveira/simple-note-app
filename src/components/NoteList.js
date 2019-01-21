import React from 'react';
import styled from 'styled-components';
import NoteItem from './NoteItem';

const ListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 20rem;
`;

const notes = [{ title: 'Note 1', id: 1 }, { title: 'Note 2', id: 2 }];

const NoteList = () => {
    return (
        <ListContainer>
            {notes.map(note => (
                <NoteItem key={note.id} note={note} />
            ))}
        </ListContainer>
    );
};

export default NoteList;
