import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { getAllNotes } from '../selectors/notes';

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

const NoteList = ({ notes }) => (
    <PoseGroup>
        <StyledListContainer key="notes-list">
            {notes.map(note => (
                <NoteItem key={note.id} note={note} />
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
    )
};

const mapStateToProps = state => ({
    notes: getAllNotes(state)
});

export default connect(
    mapStateToProps,
    null
)(NoteList);
