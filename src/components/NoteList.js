import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
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

const notes = [{ title: 'Note 1', id: 1 }, { title: 'Note 2', id: 2 }];

class NoteList extends React.PureComponent {
    state = { show: false };

    componentDidMount() {
        setTimeout(this.showList, 300);
    }

    showList = () => this.setState(prevState => ({ show: !prevState.show }));

    render() {
        const { show } = this.state;
        return (
            <StyledListContainer pose={show ? 'open' : 'closed'}>
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </StyledListContainer>
        );
    }
}

export default NoteList;
