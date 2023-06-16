import React, { useState } from 'react';
import logo from '@/images/logo.png';
import './style.scss';

const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="home__container">
      <div className="home__title">
        <img src={logo} width="100" />
        <h1>React Boilerplate</h1>
      </div>
      <div className="home__counter">
        <button className="btn" onClick={() => { setCounter(counter + 1); }}>+</button>
        <button className="btn" onClick={() => { setCounter(counter > 0 ? counter - 1 : 0); }}>−</button>
        <div className="home__count">{counter}</div>
      </div>
    </div>
  );
};

export default Home;
