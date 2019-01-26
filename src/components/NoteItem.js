import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import styled from 'styled-components';

import { Button } from './AnimatedComponents';

const ListItem = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

const StyledListItem = styled(ListItem)`
    background-color: ${props => props.theme.listItemColor};
    padding: 1rem;
    margin: 1rem 1rem 0;
    border-radius: 1rem;
    display: flex;
`;

const Title = styled.p`
    flex: 1;
    margin: 0;
`;

const ErrorMessage = styled.div`
    margin: 0.5rem 1rem;
    font-weight: 500;
    padding: 0 1rem;
    color: ${props => props.theme.errorMessageColor};
`;

const DeleteButton = styled(Button)`
    border: none;
    border-radius: 1rem;
    width: 1.4rem;
    font-size: 0.8rem;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.theme.deleteButtonColor};
    color: white;
    height: 1.3rem;
`;

const NoteItem = ({ note, deleteNote }) => {
    const { title } = note;
    return (
        <>
            <StyledListItem>
                <Title>{title}</Title>
                <DeleteButton type="button" onClick={deleteNote}>
                    x
                </DeleteButton>
            </StyledListItem>
            {note.errors && <ErrorMessage>{note.errors[0]}</ErrorMessage>}
        </>
    );
};

NoteItem.defaultProps = {
    note: {}
};

NoteItem.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string.isRequired
    }),
    deleteNote: PropTypes.func.isRequired
};

export default NoteItem;
