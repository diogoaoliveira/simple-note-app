import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import NoteList from './NoteList';

const defaultTheme = {
    backgroundColor: '#00b894',
    listItemColor: '#dfe6e9',
    buttonColor: '#00cec9',
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

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <GlobalStyle />
            <Title>Simple Notes</Title>
            <Container>
                <NoteList />
            </Container>
        </>
    </ThemeProvider>
);

export default App;
