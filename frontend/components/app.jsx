// NB: should not need to edit this any further for a while, if ever

import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>clevernote</h1>
      </Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
