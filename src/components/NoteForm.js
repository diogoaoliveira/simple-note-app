import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import validateInput from '../utils';
import { Button } from './AnimatedComponents';

const FormContainer = styled.form`
    display: flex;
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

const AddButton = styled(Button)`
    margin: 0 10px;
    border: none;
    width: 3.7rem;
    border-radius: 2rem;
    color: white;
    background-color: ${props => props.theme.confirmButtonColor};
    outline: none;
    cursor: pointer;
`;

class NoteForm extends Component {
    state = {
        note: ''
    };

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const { addNote } = this.props;
        const { note } = this.state;
        const errors = validateInput(note);
        addNote({ title: note, id: note, errors });
        this.setState({ note: '' });
    };

    render() {
        const { note } = this.state;
        return (
            <FormContainer onSubmit={this.submitForm} autoComplete="off">
                <InputField
                    name="note"
                    type="text"
                    value={note}
                    onChange={this.onInputChange}
                    placeholder="e.g. Remember to like the repo!"
                />
                <AddButton type="submit">Add</AddButton>
            </FormContainer>
        );
    }
}

NoteForm.propTypes = {
    addNote: PropTypes.func.isRequired
};

export default NoteForm;
