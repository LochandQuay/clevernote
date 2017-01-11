import React from 'react';
import { Link, withRouter } from 'react-router';
import Dashboard from './dashboard';
import Splash from './splash';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <Dashboard />
      );
    }
    else {
      return (
        <Splash />
      );
    }
  }
}

export default Home;
