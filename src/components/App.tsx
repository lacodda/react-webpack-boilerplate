import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '@/ui';
import Home from './Home';
import About from './About';
import Info from './Info';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => (
  <Container>
    <Navbar>
      <Link to="/">home</Link>
      <Link to="/info">info</Link>
      <Link to="/about">about</Link>
    </Navbar>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
  </Container>
);

export default App;
