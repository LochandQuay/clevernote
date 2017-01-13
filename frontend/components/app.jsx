// NB: should not need to edit this any further for a while, if ever

import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';

const App = ({ children }) => {
  return (
  <div>
    <header className="main-page-header">
      <Link to="/" className="home-link">
        <h1>clevernote</h1>
        <img
          className="main-page-logo"
          src="https://res.cloudinary.com/clevernote/image/upload/q_auto:good/v1484173061/splash.jpg"
          alt="clevernote logo" />
      </Link>
      <GreetingContainer />
    </header>
    <HomeContainer />

    {children}
  </div>
);};

export default App;
