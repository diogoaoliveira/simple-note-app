import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { toggleDialog } from '../actions/dialog';
import {
    checkNotesMainPageAvailable,
    getAllNotesMainPage
} from '../selectors/notes';

import { Container, Button } from './AnimatedComponents';
import NoteDialog from './NoteDialog';
import NoteList from './NoteList';
import NoItemsMessage from './NoItemsMessage';

const defaultTheme = {
    backgroundColor: '#00b894',
    listItemColor: '#dfe6e9',
    buttonColor: '#00cec9',
    confirmButtonColor: '#0984e3',
    deleteButtonColor: '#e17055',
    blackColor: '#2d3436',
    maxWidth: '1000px'
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.blackColor};
    font-family: 'avenir';
    box-sizing: border-box;
    background-color: ${props => props.theme.backgroundColor}
  }
`;

const Title = styled.h1`
    font-family: 'avenir';
    color: ${props => props.theme.blackColor};
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: white;
`;

const StyledContainer = styled(Container)`
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const AddNote = styled(Button)`
    position: fixed;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme.buttonColor};
    bottom: 0;
    right: 0;
    margin: 2rem;
    color: white;
    font-size: 2rem;
    border-radius: 2rem;
    cursor: pointer;
    border: none;
    outline: none;
`;

class Layout extends React.Component {
    state = { show: false };

    componentDidMount() {
        setTimeout(this.showContainer, 300);
    }

    showContainer = () =>
        this.setState(prevState => ({ show: !prevState.show }));

    render() {
        const { toggleDialog, showDialog, notesRemaining, notes } = this.props;
        const { show } = this.state;
        return (
            <ThemeProvider theme={defaultTheme}>
                <>
                    <GlobalStyle />
                    <Title>Simple Notes</Title>
                    <StyledContainer pose={show ? 'open' : 'closed'}>
                        {notesRemaining ? (
                            <NoteList notes={notes} />
                        ) : (
                            <NoItemsMessage />
                        )}
                    </StyledContainer>
                    <NoteDialog />
                    <AddNote onClick={toggleDialog}>
                        {showDialog ? '-' : '+'}
                    </AddNote>
                </>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    showDialog: state.dialog.showDialog,
    notes: getAllNotesMainPage(state),
    notesRemaining: checkNotesMainPageAvailable(state)
});

const mapDispatchToProps = dispatch => ({
    toggleDialog: () => dispatch(toggleDialog())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
