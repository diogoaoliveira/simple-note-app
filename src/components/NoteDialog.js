import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import { getAllNotes } from '../selectors/notes';
import { addNote } from '../actions/notes';
import NoteList from './NoteList';

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

const FormContainer = styled.form`
    display: flex;
`;

const ListContainer = styled.div`
    /* background-color: ${props => props.theme.listItemColor}; */
    padding: 0 1rem 0 0;
    border-radius: 0.5rem;
    height: 20rem;
    overflow-y: scroll;
`;

const InputField = styled.input`
    border: none;
    height: 2.5rem;
    width: 17rem;
    margin: 0.5rem 0;
    border-radius: 2rem;
    padding: 0 1rem;
    outline: none;
`;

const AddButton = styled.button`
    margin: 0 10px;
    border: none;
    width: 3.7rem;
    border-radius: 2rem;
    color: white;
    background-color: ${props => props.theme.confirmButtonColor};
`;

const NoteDialog = ({ showDialog, notes, addNote }) => {
    const submitForm = e => {
        e.preventDefault();
        addNote({ title: e.target.note.value, id: e.target.note.value });
    };

    return (
        <PoseGroup>
            {showDialog && [
                <DialogContainer key="dialog">
                    <Container>
                        <ListContainer>
                            <NoteList notes={notes} />
                        </ListContainer>
                        <FormContainer onSubmit={submitForm}>
                            <InputField
                                name="note"
                                type="text"
                                placeholder="e.g. Remember to like the repo!"
                            />
                            <AddButton type="submit">Add</AddButton>
                        </FormContainer>
                    </Container>
                </DialogContainer>
            ]}
        </PoseGroup>
    );
};

NoteDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    notes: getAllNotes(state),
    showDialog: state.dialog.showDialog
});

const mapDispatchToProps = dispatch => ({
    addNote: newNote => dispatch(addNote(newNote))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteDialog);
