import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Home from '../Home/home';
import About from '../About/about';
import Info from '../Info/info';
import './style.scss';

const App: React.FC = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
  </div>
);

export default App;
