import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
    background-color: ${props => props.theme.listItemColor};
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
`;

const NoteItem = ({ note }) => {
    const { title } = note;
    return <ListItem>{title}</ListItem>;
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
