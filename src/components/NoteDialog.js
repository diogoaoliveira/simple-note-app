import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import {
    getAllNotesDialog,
    checkNotesDialogAvailable
} from '../selectors/notes';
import { addNoteWithTimeout } from '../actions/notes';

import NoteList from './NoteList';
import NoItemsMessage from './NoItemsMessage';
import NoteForm from './NoteForm';

const Dialog = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const DialogContainer = styled(Dialog)`
    position: fixed;
    background: ${props => props.theme.buttonColor};
    border-radius: 0.5rem;
    height: 28rem;
    width: 27rem;
    bottom: 8rem;
    right: 2rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 42px solid transparent;
        border-top-color: ${props => props.theme.buttonColor};
        border-bottom: 0;
        border-right: 0;
        margin-left: -21px;
        margin-bottom: -42px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    height: 24rem;
    justify-content: space-between;
`;

const ListContainer = styled.div`
    padding: 0 1rem 0 0;
    border-radius: 0.5rem;
    height: 20rem;
    overflow-y: scroll;
`;

const NoteDialog = ({ showDialog, notes, notesRemaining, addNote }) => (
    <PoseGroup>
        {showDialog && [
            <DialogContainer key="dialog">
                <Container>
                    <ListContainer>
                        {notesRemaining ? (
                            <NoteList notes={notes} />
                        ) : (
                            <NoItemsMessage />
                        )}
                    </ListContainer>
                    <NoteForm addNote={addNote} />
                </Container>
            </DialogContainer>
        ]}
    </PoseGroup>
);

NoteDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    notesRemaining: PropTypes.bool.isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ),
    addNote: PropTypes.func.isRequired
};

NoteDialog.defaultProps = {
    notes: []
};

const mapStateToProps = state => ({
    notes: getAllNotesDialog(state),
    notesRemaining: checkNotesDialogAvailable(state),
    showDialog: state.dialog.showDialog
});

const mapDispatchToProps = dispatch => ({
    addNote: newNote => dispatch(addNoteWithTimeout(newNote))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteDialog);
