import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: white;
    text-align: center;
`;
const NoItemsMessage = () => <Title>No more notes :(</Title>;

export default NoItemsMessage;
