import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const defaultTheme = {
    backgroundColor: '#00b894',
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

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <GlobalStyle />
            <Title>Simple Notes</Title>
        </>
    </ThemeProvider>
);

export default App;
