import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import posed from 'react-pose';

import NoteDialog from './NoteDialog';
import NoteList from './NoteList';

const defaultTheme = {
    backgroundColor: '#00b894',
    listItemColor: '#dfe6e9',
    modalContainerColor: '#b2bec3',
    buttonColor: '#00cec9',
    confirmButtonColor: '#0984e3',
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

const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const Button = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
});

const AddNote = styled(Button)`
    position: fixed;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme.buttonColor};
    bottom: 0;
    right: 0;
    margin: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: 2rem;
    user-select: none;
    cursor: pointer;
`;

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <GlobalStyle />
            <Title>Simple Notes</Title>
            <Container>
                <NoteList />
            </Container>
            <NoteDialog />
            <AddNote onClick={() => console.log('clicked')}>+</AddNote>
        </>
    </ThemeProvider>
);

export default App;
