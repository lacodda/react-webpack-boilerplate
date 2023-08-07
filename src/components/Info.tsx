import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background: var(--gr-pink-violet);
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  h1 {
    font-size: var(--font-size-h1);
    width: max-content;
    text-transform: uppercase;
    background: var(--purple);
    background: var(--gr-violet-purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Info: React.FC = () => (
  <Container>
    <Title>
      <h1>Info</h1>
    </Title>
  </Container>
);

export default Info;
