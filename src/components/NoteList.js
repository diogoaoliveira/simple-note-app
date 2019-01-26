import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import { deleteNote } from '../actions/notes';

import NoteItem from './NoteItem';

const ListContainer = posed.ul({
    open: {
        x: '0%',
        beforeChildren: true,
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { x: '-100%', delay: 300, afterChildren: true }
});

const StyledListContainer = styled(ListContainer)`
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 20rem;
`;

const NoteList = ({ notes, deleteNote }) => (
    <PoseGroup>
        <StyledListContainer key="notes-list">
            {notes.map((note, index) => (
                <NoteItem
                    deleteNote={() => deleteNote(index)}
                    key={note.id}
                    note={note}
                />
            ))}
        </StyledListContainer>
    </PoseGroup>
);

NoteList.defaultProps = {
    notes: []
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ),
    deleteNote: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    deleteNote: noteIndex => dispatch(deleteNote(noteIndex))
});

export default connect(
    null,
    mapDispatchToProps
)(NoteList);
