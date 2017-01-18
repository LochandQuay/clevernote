// NB: should not need to edit this any further for a while, if ever

import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
// import SessionModalContainer from './header/session_modal_container';

const App = ({ children }) => {
  return (
  <div>
    <header className="main-page-header">
      <Link to="/" className="home-link">
        <h1>clevernote</h1>
        <img
          className="main-page-logo"
          src="https://res.cloudinary.com/clevernote/image/upload/v1484120473/clevernote-2_rao7v9.png"
          alt="clevernote logo" />
      </Link>
      <HeaderContainer />
    </header>
    <section className="main-content">
      <SplashContainer />
    </section>
    <footer className="footer">
      <p>
        clevernote: organize your life.
      </p>
    </footer>
    {children}
  </div>
);};

export default App;
// <HomeContainer />
