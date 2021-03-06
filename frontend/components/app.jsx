import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
// import HomeContainer from './home/home_container';
// import SessionFormContainer from './session_form/session_form_container';
// import SessionModalContainer from './header/session_modal_container';

const App = () => (
  <div>
    <header className="main-page-header">
      <Link to="/" className="home-link">
        <h1>clevernote.</h1>
        <img
          className="main-page-logo"
          src="http://res.cloudinary.com/clevernote/image/upload/e_make_transparent:10/v1489710654/fox_mrfgjm.png"
          alt="clevernote logo"
        />
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
      <div className="footer-links">
        <a href="https://www.github.com/LochandQuay">
          <i className="fa fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/hopewanroy/">
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </footer>
  </div>
);

export default App;
// <HomeContainer />

// #TODO: Add Modal welcome and sign up to main page
