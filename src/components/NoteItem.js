import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import styled from 'styled-components';

const ListItem = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

const StyledListItem = styled(ListItem)`
    background-color: ${props => props.theme.listItemColor};
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
`;

const NoteItem = ({ note }) => {
    const { title } = note;
    return <StyledListItem>{title}</StyledListItem>;
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
