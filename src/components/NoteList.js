import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import { getAllNotes } from '../selectors/notes';

import NoteItem from './NoteItem';

const ListContainer = posed.ul({
    open: {
        x: '0%',
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { x: '-100%', delay: 300 }
});

const StyledListContainer = styled(ListContainer)`
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 20rem;
`;

class NoteList extends React.PureComponent {
    state = { show: false };

    componentDidMount() {
        setTimeout(this.showList, 300);
    }

    showList = () => this.setState(prevState => ({ show: !prevState.show }));

    render() {
        const { show } = this.state;
        const { notes } = this.props;
        return (
            <StyledListContainer pose={show ? 'open' : 'closed'}>
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </StyledListContainer>
        );
    }
}

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
