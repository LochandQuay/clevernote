import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  render () {
    return (
      <div className="home-main=content">
        <img
          src="http://res.cloudinary.com/clevernote/image/upload/q_100/v1484173061/splash.jpg"
          className="splash-image" />
      </div>
    );
  }
}

export default Home;
