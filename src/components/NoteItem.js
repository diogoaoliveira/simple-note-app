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
    margin: 1rem;
    border-radius: 1rem;
    display: flex;
`;

const Title = styled.p`
    flex: 1;
    margin: 0;
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
`;

const NoteItem = ({ note, deleteNote }) => {
    const { title } = note;
    return (
        <StyledListItem>
            <Title>{title}</Title>
            <DeleteButton type="button" onClick={deleteNote}>
                x
            </DeleteButton>
        </StyledListItem>
    );
};

NoteItem.defaultProps = {
    note: {}
};

NoteItem.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};

export default NoteItem;
